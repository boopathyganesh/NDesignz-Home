import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getPublicId(cloudinaryUrl: string): string {
  const parts = cloudinaryUrl.split("/upload/"); // Split at "/upload/"
  if (parts.length < 2) return ""; // Ensure valid URL

  const publicIdWithVersion = parts[1].split(".")[0]; // Remove file extension
  const publicId = publicIdWithVersion.replace(/v\d+\//, ""); // Remove version

  return publicId;
}