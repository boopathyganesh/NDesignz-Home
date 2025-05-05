import { createHash } from "crypto";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const publicId = searchParams.get("public_id");

        if (!publicId) {
            return NextResponse.json({ error: "Public ID is required" }, { status: 400 });
        }

        const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_NAME;
        const API_KEY = process.env.NEXT_PUBLIC_CLOUDINARY_KEY;
        const API_SECRET = process.env.NEXT_PUBLIC_CLOUDINARY_SECRET;

        if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
            return NextResponse.json({ error: "Cloudinary credentials missing" }, { status: 500 });
        }

        const timestamp = Math.floor(Date.now() / 1000);
        const signature = createHash("sha1")
            .update(`public_id=${publicId}&timestamp=${timestamp}${API_SECRET}`)
            .digest("hex");

        const formData = new FormData();
        formData.append("public_id", publicId);
        formData.append("api_key", API_KEY);
        formData.append("timestamp", timestamp.toString());
        formData.append("signature", signature);

        const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/destroy`;

        const res = await fetch(url, { method: "POST", body: formData });
        const data = await res.json();
        console.log("Cloudinary response:", data);

        if (data.result === "ok") {
            return NextResponse.json({ success: true, message: "Image deleted successfully" });
        } else {
            return NextResponse.json({ error: data }, { status: 500 });
        }
    } catch (error) {
        console.error("Cloudinary Delete Error:", error);
        return NextResponse.json({ error: "Error deleting image" }, { status: 500 });
    }
}
