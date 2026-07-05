import mongoose from "mongoose";
import { Schema } from "mongoose";
const productSchema = new Schema({
  // Defaults, minimum, maximum
  name: String,
  description: String,
  brand: String,
  catagory: String,
  price: {
    type: Number,
    min: 1
  },
  quantity: {
    type: Number,
    min: 1
  },
  available: {
    type: Boolean,
    default: true
  },
  status: {
    type: String,
    enum: ["active", "inactive", "draft"],
    default: "active",
    required: true,
  },
  messages : {
    type : Number,
    default :5,
    min : 0,
    max : 10
  }

},{
  timestamps : true
})

const Product = mongoose.model("product", productSchema);
export default Product;
