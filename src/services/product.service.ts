import { Product } from "../interfaces/product.inteface";
import ProductModel from "../models/product.model";

const insertProduct = async (product: Product) => {
  const responseInsert = await ProductModel.create(product);
  return responseInsert;
};

const getAllProducts = async () => {
  const responseProducts = await ProductModel.find({});
  return responseProducts;
};

const getDetailProduct = async (id: string) => {
  const responseProduct = await ProductModel.findOne({ _id: id });
  return responseProduct;
};

const updateProductItem = async (id: string, data: Product) => {
  const responseProduct = await ProductModel.findOneAndUpdate(
    { _id: id },
    data,
    { new: true }
  );
  return responseProduct;
};

const deleteProductItem = async (id: string) => {
  const responseProduct = await ProductModel.deleteOne({ _id: id });
  return responseProduct;
};
export {
  insertProduct,
  getAllProducts,
  getDetailProduct,
  updateProductItem,
  deleteProductItem,
};
