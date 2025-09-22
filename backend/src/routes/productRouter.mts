import express from "express";
import {
  createProduct,
  getProductById,
  getProducts,
} from "../controllers/productController.mts";

export const productRouter = express.Router();

productRouter.get("/", async (_, res) => {
  const products = getProducts();
  res.status(200).json(products);
});

productRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).send("Missing id in request");
    } else {
      const product = getProductById(+id);
      if (product) res.status(200).json(product);
      res.status(404).send("Could not find the product with id: " + id);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

productRouter.post("/", async (req, res) => {
  try {
    const { name, price, description, image } = req.body;

    if (!name) {
      res.status(400).send("Missing name in body");
    } else {
      const product = createProduct(name, price, description, image);
      res.status(201).json(product);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});
