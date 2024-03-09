import { ProductModel } from "../model/product.model.js";
import { CartModel } from "../model/cart.model.js";

export const getAllProducts = async (req, res) => {
  const products = await ProductModel.find();
  res.status(200).send(products);
}

export const createProduct = async (req, res) => {
  const {
    name,
    price,
    imgURL1,
    imgURL2,
    description,
    category,
    newProduct,
    bestSeller,
    quantity
} = req.body;
const newproduct = new ProductModel({
  name,
  price,
  imgURL1,
  imgURL2,
  description,
  category,
  newProduct,
  bestSeller,
  quantity
})
const saveProduct = await newproduct.save();
res.status(201).send(saveProduct);
}

export const getProductById = async (req, res) => {
  const productId = req.params.productId;
  const product = await ProductModel.findById(productId);
  if (!product) {
    return res.status(404).send("Product not found");
  }
  res.status(200).send(product);
};


export const buyProduct = async (req, res) => {
  //TODO
};

export const filterProduct = async (req, res) => {
  const { category, newProduct, bestSeller } = req.query;
  let filter = {};

  if (category) {
    filter.category = category;
  }
  if (newProduct !== undefined) {
    filter.newProduct = newProduct === "true";
  }
  if (bestSeller !== undefined) {
    filter.bestSeller = bestSeller === 'true'; 
  }
  console.log(category, newProduct, bestSeller, filter);
  try {
    const products = await ProductModel.find(filter);
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send("Error filtering products: " + error.message);
  }
}

