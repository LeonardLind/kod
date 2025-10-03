// Importing the express framework, including its built-in json middleware
import express, { json } from "express";
// Importing cors to allow cross-origin requests (frontend <-> backend)
import cors from "cors";
// Import mongoose to connect and interact with MongoDB
import mongoose from "mongoose";
// Importing the product router which contains all /products routes
import { productRouter } from "./routes/productRouter.mts";

// Initialize the express application
const app = express();

// Enable automatic parsing of incoming JSON requests
app.use(json());

// Enable CORS (so frontend running on another port can access this backend)
app.use(cors());

// Mount the product router under the path /products
// This means any request starting with /products will be forwarded there
app.use("/products", productRouter);

// Start the server and connect to MongoDB at the same time
app.listen(3000, async () => {
  try {
    // Connect to MongoDB using mongoose
    await mongoose.connect(
      "mongodb+srv://LeoL:Abc123@kod-test.uirvtq1.mongodb.net/?retryWrites=true&w=majority&appName=kod-test"
    );

    // Log successful start
    console.log("API started");
  } catch (error) {
    // If connection fails, print an error message
    console.error("Failed to connect to MongoDB:", error);
  }
});
