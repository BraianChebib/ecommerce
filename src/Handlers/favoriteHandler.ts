// 📌 Favorites (based on user)

import {
    getFavoriteController,
    postFavoriteController,
    deleteFavoriteController
} from "../Controllers/favoriteController";

import { Request, Response } from "express";

type Controller = (req: Request, res: Response) => Promise<void>;

const getFavoriteHandler: Controller = async (req, res) => {
    try {
        const getFavorite = await getFavoriteController();
        res.status(200).json(getFavorite);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
}

const PostFavoriteHandler: Controller = async (req, res) => {
    try {
        const { productId } = req.body;
        const postFavorite = await postFavoriteController(productId);
        res.status(200).json(postFavorite);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
}

const DeleteFavoriteHandler: Controller = async (req, res) => {
    try {
        const { favoriteId } = req.body;
        const deleteFavorite = await deleteFavoriteController(favoriteId);
        res.status(200).json(deleteFavorite)
    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
}

export {
    getFavoriteHandler,
    PostFavoriteHandler,
    DeleteFavoriteHandler,
}
