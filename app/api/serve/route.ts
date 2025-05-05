import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const folder = searchParams.get("folder");

    if (!folder) {
        return NextResponse.json({ error: "Folder name is required" }, { status: 400 });
    }

    const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_NAME;
    const API_KEY = process.env.NEXT_PUBLIC_CLOUDINARY_KEY;
    const API_SECRET = process.env.NEXT_PUBLIC_CLOUDINARY_SECRET;

    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image/upload?prefix=${folder}`;

    const auth = "Basic " + Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64");

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: { Authorization: auth },
        });

        const data = await response.json();
        return NextResponse.json({ images: data.resources.map((img: any) => img.secure_url) });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch images" }, { status: 500 });
    }
}
