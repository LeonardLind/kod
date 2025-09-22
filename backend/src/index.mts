import express, { json } from "express";
import cors from "cors";
import { productRouter } from "./routes/productRouter.mts";

const app = express();
app.use(json());
app.use(cors());

app.use("/products", productRouter);

app.listen(3000, () => {
  console.log("API started");
});
