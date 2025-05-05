import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as Blob | null;
        const folder = formData.get("folder") as string | undefined; // Folder name

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        if (!process.env.NEXT_PUBLIC_CLOUDINARY_NAME) {
            return NextResponse.json({ error: "ENV Var error: Cloudinary name" }, { status: 404 });
        }

        formData.append("upload_preset", "livstyle_preset"); // Set this in Cloudinary
        if (folder) formData.append("folder", folder); // Organize into folder

        // Upload to Cloudinary
        const cloudinaryRes = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload`,
            {
                method: "POST",
                body: formData,
            }
        );

        const data = await cloudinaryRes.json();
        if (!cloudinaryRes.ok) {
            return NextResponse.json({ error: data.error.message }, { status: 500 });
        }

        return NextResponse.json({ imageUrl: data.secure_url });
    } catch (error) {
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}
