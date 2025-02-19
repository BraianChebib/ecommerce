import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    image: { type: String, required: true },
    sizes: { type: [String], required: true }, //(ej: ["S", "M", "L"])
    category: { type: String, required: true, trim: true },
    gender: { type: String, enum: ["Male", "Female", "Unisex"], required: true },
    discount: { type: Number, default: 0 },
    rating: { type: Number, default: 0, min: 0, max: 5 }
}, { timestamps: true });

export default mongoose.model("Product", productSchema);
