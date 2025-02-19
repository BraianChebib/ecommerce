import userRouter from "./userRoute";
import productRouter from "./productRoute";
import commentRouter from "./reviewRoute";
import { Router } from "express";

const mainRouter = Router();

mainRouter.use("/userRouter", userRouter);
mainRouter.use("/productRouter", productRouter);
mainRouter.use("/commentRouter", commentRouter);

export default mainRouter;