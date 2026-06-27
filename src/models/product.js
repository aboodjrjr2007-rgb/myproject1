import mongoose from "mongoose";
import { Schema } from "mongoose";
const productSchema = new Schema({
  // Defaults, minimum, maximum
  name: String,
  description: String,
  brand: String,
  catagory: String,
  price: Number,
  quantity: Number,
  available: Boolean,
  status: {
    type: String,
    enum: ["active", "inactive", "draft"],
    default: "active",
    required: true,
  },
});

const Product = mongoose.model("product", productSchema);
export default Product;
