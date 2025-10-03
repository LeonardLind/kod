// Import the Product class for creating new product objects
import { Product } from "../models/Product.mts";
// Import mongoose model for database interaction
import Products from "../models/productSchema.mts";

// Controller: Get all products
export const getProducts = async () => {
  // Use mongoose model to fetch all documents from the collection
  return await Products.find();
};

// Controller: Get a product by ID
export const getProductById = async (id: number) => {
  // Find a product in the database with matching id
  return await Products.findOne({ id: id });
};

// Controller: Create a new product
export const createProduct = async (
  name: string,
  price: number,
  description: string,
  imageUrl: string,
) => {
  // Construct a new Product instance
  const newProduct = new Product(name, price, description, imageUrl);

  // Save it to MongoDB using mongoose
  await Products.create(newProduct);

  // Return the product back (to send as response)
  return newProduct;
};

// Controller: Delete a product by ID
export const deleteProduct = async (id: number) => {
  // Use mongoose deleteOne to remove product by id
  return await Products.deleteOne({ id: id });
};
