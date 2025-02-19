import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    comment: { type: String, required: true, trim: true },
    rating: { type: Number, required: true, min: 1, max: 5 } // Rating added to review
}, { timestamps: true });

export default mongoose.model("Review", reviewSchema);
