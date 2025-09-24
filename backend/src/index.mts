import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import { productRouter } from "./routes/productRouter.mts";

const app = express();
app.use(json());
app.use(cors());

app.use("/products", productRouter);

app.listen(3000, async () => {
  try {
        await mongoose.connect(
          "mongodb+srv://LeoL:Abc123@kod-test.uirvtq1.mongodb.net/?retryWrites=true&w=majority&appName=kod-test"
        );
        console.log("API started");
  } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
  }
});
