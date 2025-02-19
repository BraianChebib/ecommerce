import {
    getReviewHandler,
    getReviewHandlerById,
    PostReviewHandler,
    ModifyReviewHandler,
    DeleteReviewHandler
} from "../Handlers/reviewHandler";

import { Router } from "express";

const commentRouter = Router();

// 📌 Comment Management
commentRouter.get("/", getReviewHandler);
commentRouter.get("/:commentId", getReviewHandlerById);
commentRouter.post("/", PostReviewHandler);
commentRouter.put("/:commentId", ModifyReviewHandler);
commentRouter.delete("/:commentId", DeleteReviewHandler);

export default commentRouter;
