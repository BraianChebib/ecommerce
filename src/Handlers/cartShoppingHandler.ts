// 📌 Shopping Cart (User Based)

import {
    getCartController,
    postCartController,
    modifyCartController,
    deleteCartController
} from "../Controllers/cartShoppingController";

import { Request, Response } from "express";

type Controller = (req: Request, res: Response) => Promise<void>;

const getCartHandler: Controller = async (req, res) => {
    try {
        const getCart = await getCartController();
        res.status(200).json(getCart);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
}

const PostCartHandler: Controller = async (req, res) => {
    try {
        const { productId, amount } = req.body;
        const postCart = await postCartController(productId, amount);
        res.status(200).json(postCart);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
}

const ModifyCartHandler: Controller = async (req, res) => {
    try {
        const { cartId } = req.params;
        const { amount } = req.body;
        const modifyCart = await modifyCartController(cartId, amount);
        res.status(200).json(modifyCart);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
}

const DeleteCartHandler: Controller = async (req, res) => {
    try {
        const { cartId } = req.body;
        const deleteCart = await deleteCartController(cartId);
        res.status(200).json(deleteCart)
    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
}

export {
    getCartHandler,
    PostCartHandler,
    ModifyCartHandler,
    DeleteCartHandler
}

