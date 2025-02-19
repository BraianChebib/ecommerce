// 📌 User Management
import { Request, Response } from "express";
import {
    getUserController,
    getUserByIdController,
    loginUserController,
    loginGoogleUserController,
    postUserController,
    modifyUserController,
    deleteUserController
} from "../Controllers/userController";

// We define the base type for the controllers
type Controller = (req: Request, res: Response) => Promise<void>;

const getUserHandler: Controller = async (req, res) => {
    try {
        const { name } = req.query;
        const getUser = await getUserController(name as string);
        res.status(200).json(getUser);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

const getUserHandlerById: Controller = async (req, res) => {
    try {
        const { userId } = req.params;
        const getUserId = await getUserByIdController(userId);
        res.status(200).json(getUserId);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

const LoginUserHandler: Controller = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const loginUser = await loginUserController(userName, password);
        res.status(200).json(loginUser);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

const LoginGoogleUserHandler: Controller = async (req, res) => {
    try {
        const { token } = req.body;
        const loginGoogleUser = await loginGoogleUserController(token);
        res.status(200).json(loginGoogleUser);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

const PostUserHandler: Controller = async (req, res) => {
    try {
        const { name, lastname, email, phone, image, userName, password } = req.body;
        const postUser = await postUserController(name, lastname, email, phone, image, userName, password);
        res.status(200).json(postUser);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

const ModifyUserHandler: Controller = async (req, res) => {
    try {
        const { userId } = req.params;
        const { name, lastname, email, phone, image, userName, password } = req.body;
        const modifyUser = await modifyUserController(userId, name, lastname, email, phone, image, userName, password);
        res.status(200).json(modifyUser);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

const DeleteUserHandler: Controller = async (req, res) => {
    try {
        const { userId } = req.body;
        const deleteUser = await deleteUserController(userId);
        res.status(200).json(deleteUser);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export {
    getUserHandler,
    getUserHandlerById,
    LoginUserHandler,
    LoginGoogleUserHandler,
    PostUserHandler,
    ModifyUserHandler,
    DeleteUserHandler
};
