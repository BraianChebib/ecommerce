import mongoose from "mongoose";

const cartShoppingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    amount: { type: Number, default: 1, min: 1 }
}, { timestamps: true });

export default mongoose.model("CartShopping", cartShoppingSchema);
