import {
    getProductHandler,
    getProductHandlerById,
    PostProductHandler,
    ModifyProductHandler,
    DeleteProductHandler
} from "../Handlers/productHandler";
import { Router } from "express";

const productRouter = Router();

// 📌 Product management
productRouter.get("/", getProductHandler);
productRouter.get("/:productId", getProductHandlerById);
productRouter.post("/", PostProductHandler);
productRouter.put("/:productId", ModifyProductHandler);
productRouter.delete("/:productId", DeleteProductHandler);

export default productRouter;
