import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, toggleAddedToCart, saveProductToDatabase  } from "./actions";

const SingleProduct = ({ data }) => {
  const dispatch = useDispatch();
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const productToStore = {
      id: data.id,
      name: data.name,
      price: data.price,
      img1: data.imgURL1,
      img2: data.imgURL2,
      description: data.description,
      category: data.category,
      newProduct: data.newProduct,
      bestSeller: data.bestSeller,
      quantity: data.quantity,
      quantityInCart: quantity,
    };
    console.log(productToStore);
    dispatch(addToCart(productToStore));
    dispatch(toggleAddedToCart());
    dispatch(saveProductToDatabase(productToStore));
    setQuantity(1);
    setIsAddedToCart(true);
  };
  
  useEffect(()=>{
    setQuantity(1);
    setIsAddedToCart(false);
  },[data]);

//   const [loading, setLoading] = useContext(ApiStateContext);

//   const [quantity, setQuantity] = useState(1);

//   const [isAddedToCart, setIsAddedToCart] = useState(false);

  

  
//   const handleAddToCart = () => {
//     const productToStore = {
//       id: data.id,

//   const SingleProduct = ({ data, setData, getProduct }) => {
//       quantity: data.quantity,
//       quantityInCart: quantity,
//     };

//     // Retrieve existing cart data from local storage

//     const existingCartData = JSON.parse(localStorage.getItem("cart")) || [];

//     // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa

//     const existingProductIndex = existingCartData.findIndex(item => item.id === data.id);

//     // Add the new product to the cart data

//     if (existingProductIndex !== -1) {

//       // Nếu sản phẩm đã tồn tại, cộng thêm quantityInCart

//       existingCartData[existingProductIndex].quantityInCart += quantity;

//     } else {

//       // Nếu sản phẩm chưa tồn tại, thêm sản phẩm vào giỏ hàng

//       existingCartData.push(productToStore);

//     }



//     localStorage.setItem("cart", JSON.stringify(existingCartData));



//     // Hiển thị thông báo và cập nhật trạng thái isAddedToCart

//     console.log("Product added to cart:", productToStore);

//     setIsAddedToCart(true);

//   }



//   useEffect(()=>{

//     setQuantity(1);

//     setIsAddedToCart(false);

//   },[data])
  return (
    <>
      <section className="section_product1">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-12 col-xs-12 product_left">
              <div className="swiper-container gallery-top swiper-container-horizontal">
                <div className="swiper-wrapper">
                  <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-prev"
                    data-swiper-slide-index="0" >
                    <div className="swiper-slide-container">
                      <a data-fancybox="">
                        <img className="image-product-detail" src={data.imgURL1} alt="G3-BAKERY" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide swiper-slide-active swiper-slide-duplicate-next swiper-slide-duplicate-prev" data-swiper-slide-index="0" >
                    <div className="swiper-slide-container">
                      <a data-fancybox="">
                        <img className="image-product-detail" src={data.imgURL1} alt="G3-BAKERY" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-next" data-swiper-slide-index="0" >
                    <div className="swiper-slide-container">
                      <a data-fancybox="" href="">
                        <img className="image-product-detail" src={data.imgURL1} alt="G3-BAKERY" />
                      </a>
                    </div>
                  </div></div>

                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>

            </div>
            <div className="col-md-5 col-sm-12 col-xs-12 product_right">
              <div className="w-100 coltopright">
                <div className="lbldetail w-100">
                  {data.newProduct && (
                    <img src="https://www.sugartown.vn/img/lblnew.png" alt="G3-Bakery" />
                  )}
                  {data.bestSeller && (
                    <img src="https://www.sugartown.vn/img/lblsale.png" alt="G3-Bakery" />
                  )}
                </div>
                <div className="tilte_spdetail w-100">
                  <h1>{data.name}</h1>
                </div>

                <div className="giadetail w-100">
                  <span>{Number(data.price).toLocaleString()} đ</span>
                  <span></span>
                </div>
                <div className="form-product ">
                  <div className="box-variant clearfix  hidden ">
                    <input type="hidden" name="id" id="product_id" value="387" />
                  </div>
                  <div className="form-group ">
                    <div className="custom custom-btn-number form-control">
                      <button onClick={() => {
                        var result = document.getElementById('qty');
                        var qty = result.value;
                        if (!isNaN(qty) && qty > 1){
                          result.value--;
                          setQuantity(result.value--);
                        } 
                        return false;
                      }}
                        className="btn-minus btn-cts" type="button"><b>–</b></button>
                      <input
                        type="text"
                        className="qty input-text"
                        id="qty"
                        name="quantity"
                        size="4"
                        value={quantity}
                        onChange={(e)=>{
                          setQuantity(e.target.value)
                        }}
                      />
                      <button onClick={() => {
                        var result = document.getElementById('qty');
                        var qty = result.value;
                        if (!isNaN(qty)){
                          result.value++;
                          setQuantity(result.value++);
                        } 
                        return false;
                      }}
                        className="btn-plus btn-cts" type="button"><b>+</b></button>
                    </div>
                    <div className="btn-mua">
                      <a className="btn btn-lg btn-gray btn-cart  btn_buy add_to_cart1" onClick={handleAddToCart}>
                        <span className="txt-main">Đặt hàng</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-100 khungslidercon">
                <div className="w-100 khungslidercon1">
                  <div className="swiper-container gallery-thumbs swiper-container-horizontal">
                    <div className="swiper-wrapper" ><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-prev" data-swiper-slide-index="0" >
                      <div className="swiper-slide-container">
                        <a>
                          <img className="image-product-detail" src={data.imgURL1} alt="G3-BAKERY" />
                        </a>
                      </div>
                    </div>
                      <div className="swiper-slide swiper-slide-active swiper-slide-duplicate-next swiper-slide-duplicate-prev" data-swiper-slide-index="0" >
                        <div className="swiper-slide-container">
                          <a>
                            <img className="image-product-detail" src={data.imgURL2} alt="G3-BAKERY" />
                          </a>
                        </div>
                      </div>
                      <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-next" data-swiper-slide-index="0" >
                        <div className="swiper-slide-container">
                          <a>
                            <img className="image-product-detail" src={data.imgURL1} alt="G3-BAKERY" />
                          </a>
                        </div>
                      </div></div>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                </div>
              </div>
              <div className="w-100 colbottomright">
                <div className="motadetailsp w-100">
                  {data.description}</div>
                <div id="thongbao" className="d-flex align-items-center">
                  {isAddedToCart && (
                    <>
                    <i className="fa fa-check-circle mr-2"></i>
                    <p className="mb-0">  "{data.name}" đã được thêm vào giỏ hàng</p>
                    </>
                  )}
                </div>
                <div className="w-100" >
                  <a
                    id="ditoigiohang"
                    href="/cart"
                    style={{ display: isAddedToCart ? 'block' : 'none' }}
                  >Đi tới giỏ hàng <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;

