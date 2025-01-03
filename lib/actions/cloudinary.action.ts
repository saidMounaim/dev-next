"use server";

import cloudinary from "../cloudinary";

export async function uploadFileToCloudinary(file: File) {
  try {
    if (!file) {
      throw new Error("No file provided");
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const dataUrl = `data:${file.type};base64,${buffer.toString("base64")}`;

    const result = await cloudinary.uploader.upload(dataUrl, {
      resource_type: "auto",
    });

    return { success: true, data: result };
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    return { success: false, error: "Upload failed" };
  }
}
