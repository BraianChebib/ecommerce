const getCartController = () => {
    return console.log("getCartController");
}
const postCartController = (productId: string, amount: string) => {
    return console.log("postCartController");
}
const modifyCartController = (cartId: string, amount: string) => {
    return console.log("modifyCartController");
}
const deleteCartController = (cartId: string) => {
    return console.log("deleteCartController");
}

export {
    getCartController,
    postCartController,
    modifyCartController,
    deleteCartController
}