import { BAD_REQUEST } from "../constants/orderStatus.js";
import { OrderModel } from "../models/order.model.js";
import { OrderStatus } from "../constants/orderStatus.js";
import { UserModel } from "../models/user.model.js";
import { sendEmailReceipt } from "../helpers/mail.helper.js";
import handler from "express-async-handler";

export const create = handler(async (req, res) => {
    const order = req.body;
    if (order.items.length <= 0) res.status(BAD_REQUEST).send("Cart is Empty");

    await OrderModel.deleteOne({
        user: req.user.id,
        status: OrderStatus.NEW,
    });

    const newOrder = new OrderModel({ ...order, user: req.user.id });
    await newOrder.save();
    res.send(newOrder);
});

export const pay = handler(async (req, res) => {
    const { paymentId } = req.body;

    const order = await getNewOrderForCurrentUser(req);
    if (!order) {
        res.status(BAD_REQUEST).send("Order not found");
        return;
    }

    order.paymentId = paymentId;
    order.status = OrderStatus.PAID;
    await order.save();

    sendEmailReceipt(order);
    res.send(order._id);
});

export const trackOrder = handler(async (req, res) => {
    const { orderId } = req.params;
    const user = await UserModel.find.findById(req.user.id);

    const filter = {
        _id: orderId,
    };

    if (!user.isAdmin) {
        filter.use = user._id;
    }

    const order = await OrderModel.findOne(filter);
    if (!order) return res.send(UNAUTHORIZED);
    return res.send(order);
});

export const newOrderForCurrentUser = handler(async (req, res) => {
    const order = await getNewOrderForCurrentUser(req);
    if (order) res.send(order);
    else res.status(BAD_REQUEST).send();
});

export const allStatus = handler((req, res) => {
    const allStatus = Object.values(OrderStatus);
    res.send(allStatus);
});

export const status = handler(async (req, res) => {
    const status = req.params.status;
    const user = await UserModel.findById(req.user.id);
    const filter = {};

    if (!user.isAdmin) filter.user = user._id;
    if (status) filter.status = status;

    const orders = await OrderModel.find(filter).sort("-createdAt");
    res.send(orders);
});

const getNewOrderForCurrentUser = async (req) =>
    await OrderModel.findOne({
        user: req.user.id,
        status: OrderStatus.NEW,
    }).populate("user");
