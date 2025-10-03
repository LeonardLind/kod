// Import mongoose tools to define schema and models
import { model, Schema } from "mongoose";

// Define the product schema (blueprint for how products are stored in MongoDB)
export const productSchema = new Schema({
  id: { type: Number, required: true },          // Custom numeric ID
  name: { type: String, required: true },        // Product name
  price: { type: Number, required: true },       // Product price
  description: { type: String, required: true }, // Product description
  imageUrl: { type: String, required: true },    // Product image URL
});

// Create a mongoose model from the schema
// This is what we use to interact with the "products" collection in MongoDB
const Products = model("product", productSchema);

// Export model so it can be used in controllers
export default Products;
