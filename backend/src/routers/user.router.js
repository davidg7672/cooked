import express from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.model.js";
import handler from "express-async-handler";
import bcrypt from "bcryptjs";
import auth from "../middleware/auth.mid.js";

const router = express.Router();
const NOT_FOUND = 404;
const PASSWORD_HASH_ROUNDS = 10;

// routes
router.post(
    "/login",
    handler(async (req, res) => {
        const { email, password } = req.body;

        // find user
        const user = await UserModel.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            res.send(generateToken(user));
        } else {
            // didn't find user
            res.status(NOT_FOUND).send("Username or password not found");
        }
    })
);

router.post(
    "/register",
    handler(async (req, res) => {
        const { name, email, password, address } = req.body;
        const user = await UserModel.findOne({ email });

        if (user) {
            res.status(NOT_FOUND).send("User Exits! Login!");
        } else {
            const hPassword = await bcrypt.hash(password, PASSWORD_HASH_ROUNDS);
            const newUser = {
                name,
                email: email.toLowerCase(),
                password: hPassword,
                address,
            };

            const result = await UserModel.create(newUser);
            res.send(generateToken(result));
        }
    })
);

router.put(
    "/updateProfile",
    auth,
    handler(async (req, res) => {
        const { name, address } = req.body;
        const user = await UserModel.findByIdAndUpdate(
            req.user.id,
            { name, address },
            { new: true }
        );
        res.send(generateToken(user));
    })
);

// token for generation
const generateToken = (user) => {
    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d",
        }
    );

    return {
        id: user.id,
        name: user.name,
        email: user.email,
        address: user.address,
        isAdmin: user.isAdmin,
        token,
    };
};

export default router;
