import { v2 as cloudinary } from "cloudinary";

export const configCloudinary = () => {
    cloudinary.config({
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    return cloudinary;
};
