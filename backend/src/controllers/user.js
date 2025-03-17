import jwt from "jsonwebtoken";
import handler from "express-async-handler";
import { UserModel } from "../models/user.model";
import NOT_FOUND from "../constants/httpStatus";

const PASSWORD_HASH_ROUNDS = 10;

export const login = handler(async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.send(generateToken(user));
    } else {
        res.send(NOT_FOUND).send("username or password not found");
    }
});

export const register = handler(async (req, res) => {
    const { name, email, password, address } = req.body;
    const user = await UserModel.findOne({ email });

    if (user) {
        res.status(NOT_FOUND).send("User Exists! Login!");
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
});

export const updateProfile = handler(async (req, res) => {
    const { name, address } = req.body;
    const user = await UserModel.findByIdAndUpdate(
        req.user.id,
        { name, address },
        { new: true }
    );
    res.send(generateToken(user));
});

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
