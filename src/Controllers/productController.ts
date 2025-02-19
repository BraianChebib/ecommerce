const getProductController = (name: string) => {
    return console.log("getProductController");
}
const getProductByIdController = (productId: string) => {
    return console.log("getProductByIdController");
}
const postProductController = (name: string, description: string, price: string, stock: string, image: string, sizes: string, category: string, gender: string, discount: string, rating: string) => {
    return console.log("postProductController");
}
const modifyProductController = (productId: string, name: string, description: string, price: string, stock: string, image: string, sizes: string, category: string, gender: string, discount: string, rating: string) => {
    return console.log("modifyProductController");
}
const deleteProductController = (productId: string) => {
    return console.log("deleteProductController");
}

export {
    getProductController,
    getProductByIdController,
    postProductController,
    modifyProductController,
    deleteProductController,
}