// Import express to create a router
import express from "express";
// Import controller functions that contain the business logic
import {
  createProduct,
  getProductById,
  getProducts,
  deleteProduct,
} from "../controllers/productController.mts";

// Create a new express router instance
export const productRouter = express.Router();

// GET /products
// Returns a list of all products in the database
productRouter.get("/", async (_, res) => {
  // Call controller function to fetch all products
  const products = await getProducts();
  // Respond with 200 OK and send the list of products as JSON
  res.status(200).json(products);
});

// GET /products/:id
// Returns a single product by its id
productRouter.get("/:id", async (req, res) => {
  try {
    // Extract id from the request parameters
    const { id } = req.params;

    // If no id is provided, respond with bad request
    if (!id) {
      res.status(400).send("Missing id in request");
    } else {
      // Call controller to find product by id
      const product = await getProductById(+id);

      // If product is found, return it
      if (product) {
        return res.status(200).json(product);
      }

      // If not found, return 404
      return res.status(404).send("Could not find the product with id: " + id);
    }
  } catch (error) {
    // If something goes wrong, log it and return 500 server error
    console.error(error);
    res.status(500).send(error);
  }
});

// POST /products
// Creates a new product
productRouter.post("/", async (req, res) => {
  try {
    // Extract fields from the request body
    const { name, price, description, imageUrl } = req.body;

    // Validate that required fields exist
    if (!name) {
      res.status(400).send("Missing name in body");
    } else {
      // Call controller to create product in database
      const product = createProduct(name, price, description, imageUrl);

      // Respond with 201 Created and return the new product
      res.status(201).json(product);
    }
  } catch (error) {
    // Handle unexpected errors
    res.status(500).send(error);
  }
});

// DELETE /products/:id
// Deletes a product by its id
productRouter.delete("/:id", async (req, res) => {
  try {
    // Extract id from URL params
    const { id } = req.params;

    // If id is missing, return 400 Bad Request
    if (!id) {
      return res.status(400).send("Missing id in request");
    }

    // Call controller to delete the product
    const result = await deleteProduct(Number(id));

    // If nothing was deleted, return 404 Not Found
    if (result.deletedCount === 0) {
      return res.status(404).send("No product found with id: " + id);
    }

    // Otherwise, return success
    return res.status(200).send("Product deleted successfully");
  } catch (error) {
    // Handle errors gracefully
    console.error(error);
    return res.status(500).send("Internal server error");
  }
});
