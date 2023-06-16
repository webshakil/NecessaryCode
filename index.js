//create product next js
    //create product
import Product from "../models/product.js";

export const create = async (req, res) => {
  try {
   
    const { name, description, price, seller, stock, category } =
      req.body;
      console.log(req.body)
    // create product
    const product = new Product({ ...req.body});
    await product.save();
    res.json(product);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err.message);
  }
};


//Connection env
//MONGO_URI=mongodb+srv://topu:pass@mernstack-pagination.dmkoc.mongodb.net/mern-next-auth-express-nextjs?retryWrites=true&w=majority
PORT=8000


//dbConnect

import mongoose from 'mongoose'

  export const dbConnect = async () => {
   mongoose
   .connect(process.env.MONGO_URI)
   .then(() => console.log("DB Connected"))
   .catch((err) => console.log("DB ERROR => ", err));
  }


//express js index.js file

import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
// import authRoutes from "./routes/auth.js";
// import categoryRoutes from "./routes/category.js";
import productRoutes from "./routes/product.js";
import cors from "cors";
import { dbConnect } from "./config/dbConnect.js";

dotenv.config();

const app = express();

// db
dbConnect()

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// router middleware
// app.use("/api", authRoutes);
// app.use("/api", categoryRoutes);
 app.use("/api", productRoutes);

const port = process.env.PORT || 8000;


app.listen(port, () => {
  console.log(`Node server is running on port ${port}`);
});









