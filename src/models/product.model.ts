import { Schema, Types, model, Model } from "mongoose";
import { Product } from "../interfaces/product.inteface";

const ProductSchema = new Schema<Product>(
  {
    title: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    unitPrice: { type: Number, required: true },
    countInStock: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProductModel = model("products", ProductSchema);
export default ProductModel;
