import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  insertProduct,
  getAllProducts,
  getDetailProduct,
  updateProductItem,
  deleteProductItem,
} from "../services/product.service";

const getProduct = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getDetailProduct(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_PRODUCT");
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const response = await getAllProducts();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_PRODUCTS");
  }
};

const updateProduct = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateProductItem(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_PRODUCT");
  }
};

const postProduct = async ({ body }: Request, res: Response) => {
  try {
    const responseProduct = await insertProduct(body);
    res.send(responseProduct);
  } catch (e) {
    handleHttp(res, "ERROR_POST_PRODUCT", e);
  }
};

const deleteProduct = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteProductItem(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_PRODUCT");
  }
};

export { getProduct, getProducts, updateProduct, postProduct, deleteProduct };
