import {
    getUserHandler,
    getUserHandlerById,
    LoginUserHandler,
    LoginGoogleUserHandler,
    PostUserHandler,
    ModifyUserHandler,
    DeleteUserHandler
} from "../Handlers/userHandler";

import {
    getFavoriteHandler,
    PostFavoriteHandler,
    DeleteFavoriteHandler
} from "../Handlers/favoriteHandler";

import {
    getCartHandler,
    PostCartHandler,
    ModifyCartHandler,
    DeleteCartHandler
} from "../Handlers/cartShoppingHandler";

import { Router } from "express";

const userRouter = Router();

// 📌 User management
userRouter.get("/", getUserHandler);
userRouter.get("/:userId/profile", getUserHandlerById);
userRouter.post("/login", LoginUserHandler);
userRouter.post("/google-auth", LoginGoogleUserHandler);
userRouter.post("/", PostUserHandler);
userRouter.put("/:userId", ModifyUserHandler);
userRouter.delete("/:userId", DeleteUserHandler);

// 📌 Favorites (based on user)
userRouter.get("/:userId/favorites", getFavoriteHandler);
userRouter.post("/:userId/favorites", PostFavoriteHandler);
userRouter.delete("/:userId/favorites/:productId", DeleteFavoriteHandler);

// 📌 Shopping Cart (User Based)
userRouter.get("/:userId/cart", getCartHandler);
userRouter.post("/:userId/cart", PostCartHandler);
userRouter.put("/:userId/cart/:productId", ModifyCartHandler);
userRouter.delete("/:userId/cart/:productId", DeleteCartHandler);

export default userRouter;
