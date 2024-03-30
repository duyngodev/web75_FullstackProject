import ProductModel from "../model/product.model.js";
import productInCartModel from "../model/productInCart.model.js";

export const getAllProduct = async (req, res, next) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const limit = req.query.limit;
    const skip = req.query.skip;
    const category = req.query.category;
    
    const totalCount = await ProductModel.countDocuments({ category });
    
    const products = await ProductModel.find({ category }).limit(limit).skip(skip);
    
    res.status(200).send({ products, totalCount });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Internal Server Error');
  }
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

  const limit = 6;
  const skip = 0;
  const category = product.category;
  
  const examples = await ProductModel.find({ category }).limit(limit).skip(skip);
  if (!product) {
    return res.status(404).send("Product not found");
  }
  res.status(200).send({product, examples});
};

export const buyProduct = async (req, res) => {
  try {
    console.log(req.body);
    const productId = req.body.productId;
    const quantityInCart = req.body.quantityInCart;
    const userId = req.body.userId; // Lấy userId từ req
    console.log(userId);
    // Kiểm tra xem có sản phẩm nào của userId đó trong giỏ hàng không
    let productInCart = await productInCartModel.findOne({ productId, userId });

    if (productInCart) {
      // Nếu có, kiểm tra xem số lượng sản phẩm đã có trong giỏ hàng
      // Nếu có, tăng số lượng lên
      productInCart.quantityInCart += parseInt(quantityInCart);
    } else {
      // Nếu không, tạo sản phẩm mới trong giỏ hàng
      productInCart = await productInCartModel.create({
        productId,
        quantityInCart,
        userId: userId, // Lưu userId vào sản phẩm trong giỏ hàng mới
      });
    }
    // Lưu thay đổi vào cơ sở dữ liệu
    await productInCart.save();
    // Trả về kết quả thành công
    res.status(201).json({ message: "Product added to cart successfully" });
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error("Error adding product to cart:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
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
  try {
    const totalCount = await ProductModel.countDocuments(filter);
    const products = await ProductModel.find(filter);
    res.status(200).send({products, totalCount});
  } catch (error) {
    res.status(500).send("Error filtering products: " + error.message);
  }
}

