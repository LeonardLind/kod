import { Product } from "./../models/Product.mjs";

const _products: Product[] = [
  new Product("Golfboll", 60, "Pro V1", "Some image url here"),
  new Product("Fotboll", 400, "VM 94", "Some image url here"),
  new Product("Basketboll", 3000, "Real leather", "Some image url here"),
  new Product("Innebandyboll", 20, "Den med hål i", "Some image url here"),
];

export const getProducts = () => {
  return _products;
};

export const getProductById = (id: number) => {
  return _products.find((p) => p.id === id);
};

export const createProduct = (
  name: string,
  price: number,
  description: string,
  image: string,
) => {
  const newProduct = new Product(name, price, description, image);
  _products.push(newProduct);
  return newProduct;
};
