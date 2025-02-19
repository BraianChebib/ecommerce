import {
    getCommentController,
    getProductByIdController,
    postCommentController,
    modifyCommentController,
    deleteCommentController,
} from "../Controllers/reviewController";
import { Request, Response } from "express";

type Controller = (req: Request, res: Response) => Promise<void>;

const getReviewHandler: Controller = async (req, res) => {
    try {
        const getComment = await getCommentController();
        res.status(200).json(getComment);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
}

const getReviewHandlerById: Controller = async (req, res) => {
    try {
        const { reviewId } = req.params;
        const getCommentId = await getProductByIdController(reviewId);
        res.status(200).json(getCommentId);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
}

const PostReviewHandler: Controller = async (req, res) => {
    try {
        const { userId, comment } = req.body;
        const postComment = await postCommentController(userId, comment);
        res.status(200).json(postComment);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
}

const ModifyReviewHandler: Controller = async (req, res) => {
    try {
        const { reviewId, comment } = req.params;
        const modifyComment = await modifyCommentController(reviewId, comment);
        res.status(200).json(modifyComment);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
}

const DeleteReviewHandler: Controller = async (req, res) => {
    try {
        const { reviewId } = req.body;
        const deleteComment = await deleteCommentController(reviewId);
        res.status(200).json(deleteComment)
    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
}

export {
    getReviewHandler,
    getReviewHandlerById,
    PostReviewHandler,
    ModifyReviewHandler,
    DeleteReviewHandler
}