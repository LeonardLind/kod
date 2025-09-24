import express from "express";
import {
  createProduct,
  getProductById,
  getProducts,
  deleteProduct,
} from "../controllers/productController.mts";

export const productRouter = express.Router();

productRouter.get("/", async (_, res) => {
  const products = await getProducts();
  res.status(200).json(products);
});

productRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).send("Missing id in request");
    } else {
      const product = await getProductById(+id);
      if (product) {
      return res.status(200).json(product); 
    }
       return res.status(404).send("Could not find the product with id: " + id);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

productRouter.post("/", async (req, res) => {
  try {
    const { name, price, description, imageUrl } = req.body;

    if (!name) {
      res.status(400).send("Missing name in body");
    } else {
      const product = createProduct(name, price, description, imageUrl);
      res.status(201).json(product);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});


productRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send("Missing id in request");
    }

    const result = await deleteProduct(Number(id));

    if (result.deletedCount === 0) {
      return res.status(404).send("No product found with id: " + id);
    }

    return res.status(200).send("Product deleted successfully");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal server error");
  }
});