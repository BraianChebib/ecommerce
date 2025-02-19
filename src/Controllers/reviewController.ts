const getCommentController = () => {
    return console.log("getCommentController");
}
const getProductByIdController = (reviewId: string) => {
    return console.log("getProductByIdController");
}
const postCommentController = (userId: string, comment: string) => {
    return console.log("postCommentController");
}
const modifyCommentController = (reviewId: string, comment: string) => {
    return console.log("modifyCommentController");
}
const deleteCommentController = (reviewId: string) => {
    return console.log("deleteCommentController");
}

export {
    getCommentController,
    getProductByIdController,
    postCommentController,
    modifyCommentController,
    deleteCommentController,
}