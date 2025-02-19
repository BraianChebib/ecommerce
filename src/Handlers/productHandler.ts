import {
    getProductController,
    getProductByIdController,
    postProductController,
    modifyProductController,
    deleteProductController
} from "../Controllers/productController";
import { Request, Response } from "express";

type Controller = (req: Request, res: Response) => Promise<void>;

const getProductHandler: Controller = async (req, res) => {
    try {
        const { name } = req.query;
        const getUser = await getProductController(name as string);
        res.status(200).json(getUser);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
}

const getProductHandlerById: Controller = async (req, res) => {
    try {
        const { productId } = req.params;
        const getProductId = await getProductByIdController(productId);
        res.status(200).json(getProductId);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
}

const PostProductHandler: Controller = async (req, res) => {
    try {
        const { name, description, price, stock, image, sizes, category, gender, discount, rating } = req.body;
        const postProduct = await postProductController(name, description, price, stock, image, sizes, category, gender, discount, rating);
        res.status(200).json(postProduct);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
}

const ModifyProductHandler: Controller = async (req, res) => {
    try {
        const { productId } = req.params;
        const { name, description, price, stock, image, sizes, category, gender, discount, rating } = req.body;
        const modifyProduct = await modifyProductController(productId, name, description, price, stock, image, sizes, category, gender, discount, rating);
        res.status(200).json(modifyProduct);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
}

const DeleteProductHandler: Controller = async (req, res) => {
    try {
        const { productId } = req.body;
        const deleteProduct = await deleteProductController(productId);
        res.status(200).json(deleteProduct)
    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
}

export {
    getProductHandler,
    getProductHandlerById,
    PostProductHandler,
    ModifyProductHandler,
    DeleteProductHandler
}

