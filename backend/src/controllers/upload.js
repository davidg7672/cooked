import handler from "express-async-handler";
import { BAD_REQUEST } from "../constants/httpStatus";
import { configCloudinary } from "../config/cloudinary.config.j";

export const upload = handler(async (req, res) => {
    const file = req.file;
    if (!file) {
        res.status(BAD_REQUEST).send();
    } else {
        const imageUrl = await uploadImageToCloudinary(req.file?.buffer);
        res.send({ imageUrl });
    }
});

const uploadImageToCloudinary = (imageBuffer) => {
    const cloudinary = configCloudinary();

    return new Promise((resolve, reject) => {
        if (!imageBuffer) reject(null);

        cloudinary.uploader
            .upload_stream((error, result) => {
                if (error || !result) reject(error);
                else resolve(result.url);
            })
            .end(imageBuffer);
    });
};
