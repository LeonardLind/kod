import { Product } from "../models/Product.mts";
import Products from "../models/productSchema.mts";


export const getProducts = async () => {
  return await Products.find();
};

export const getProductById = async (id: number) => {
  return await Products.findOne({ id: id });
};

export const createProduct = async (
  name: string,
  price: number,
  description: string,
  imageUrl: string,
) => {
  const newProduct = new Product(name, price, description, imageUrl);
  await Products.create(newProduct);
  return newProduct;
};

export const deleteProduct = async (id: number) => {
  return await Products.deleteOne({ id: id });
};