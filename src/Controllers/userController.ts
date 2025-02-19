import { error } from "console";
import User from "../models/User";

const getUserController = async (name: string): Promise<any> => {
    if (name) {
        const user = await User.find({ name: name });
        return user;
    }
    const users = await User.find();

    if (!users) throw new Error("No existen Usuarios");

    return users;
}
const getUserByIdController = async (userId: string): Promise<any> => {
    const userById = await User.findById(userId);
    if (!userById) throw new Error("no se encontro usuario con este ID");
    return userById;
}
const loginUserController = (userName: string, password: string) => {
    return console.log("loginUserController");
}
const loginGoogleUserController = (token: string) => {
    return console.log("loginGoogleUserController");
}
const postUserController = async (name: string, lastname: string, email: string, phone: string, image: string, userName: string, password: string): Promise<{ message: string }> => {
    if (!name) throw new Error("no se ingreso el nombre");
    if (!lastname) throw new Error("no se ingreso el lastname");
    if (!email) throw new Error("no se ingreso el email");
    if (!phone) throw new Error("no se ingreso el phone");
    if (!image) throw new Error("no se ingreso el image");
    if (!userName) throw new Error("no se ingreso el userName");
    if (!password) throw new Error("no se ingreso el password");

    const userExist = await User.findOne({ email: email });
    if (!userExist) {
        await User.insertOne({
            name,
            lastname,
            email,
            phone,
            image,
            userName,
            password,
        });
        return { message: "usuario creado correctamente" }
    }

    throw new Error("ya existe un usuario con este email");

}
const modifyUserController = (userId: string, name: string, lastname: string, email: string, phone: number, image: string, userName: string, password: string) => {
    return console.log("modifyUserController");
}
const deleteUserController = async (userId: string): Promise<any> => {
    const deleteUser = await User.findByIdAndDelete(userId);
    if (!deleteUser) throw new Error("no se encontro el usuario a eliminar");
    return { message: "usuario eliminado correctamente" }
}

export {
    getUserController,
    getUserByIdController,
    loginUserController,
    loginGoogleUserController,
    postUserController,
    modifyUserController,
    deleteUserController,
}