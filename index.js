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




