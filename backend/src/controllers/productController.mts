// import { Product } from "./../models/Product.mjs";

import { Product } from "../models/Product.mts";
import Products from "../models/productSchema.mts";

// const _products: Product[] = [
//   new Product("Golfboll", 60, "Pro V1", "Some image url here"),
//   new Product("Fotboll", 400, "VM 94", "Some image url here"),
//   new Product("Basketboll", 3000, "Real leather", "Some image url here"),
//   new Product("Innebandyboll", 20, "Den med hål i", "Some image url here"),
// ];

export const getProducts = async () => {
  //   return _products;

  return await Products.find();
};

export const getProductById = async (id: number) => {
  return await Products.find({ id: id });
};

export const createProduct = async (
  name: string,
  price: number,
  description: string,
  image: string,
) => {
  const newProduct = new Product(name, price, description, image);
  //   _products.push(newProduct);
  await Products.create(newProduct);
  return newProduct;
};
