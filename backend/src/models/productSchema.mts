import { model, Schema } from "mongoose";

export const productSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

const Products = model("product", productSchema);
export default Products;
