import React, { useContext, useEffect, useState } from "react";
import { ApiStateContext } from "./ApiStateProvider";

const List = ({ data, setData, getProduct }) => {

  const [loading, setLoading] = useContext(ApiStateContext);
  const [quantity, setQuantity] = useState();

  const handleAddToCart=()=>{
    const productToStore = {
      id: data.id,
      name: data.name,
      price: data.price,
      img1:data.imgURL1,
      img2:data.imgURL2,
      description:data.description,
      category:data.category,
      newProduct:data.newProduct,
      bestSeller:data.bestSeller,
      quantity:data.quantity,
      quantityInCart:data.quantityInCart
    };
    // Retrieve existing cart data from local storage
    const existingCartData = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the new product to the cart data
    const updatedCartData = [...existingCartData, productToStore];

    // Save the updated cart data back to local storage
    localStorage.setItem("cart", JSON.stringify(updatedCartData));

    // You can also display a message or perform other actions after adding to cart
    console.log("Product added to cart:", productToStore);
    
  }

  

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
                    <a data-fancybox="" href="">
                      <img className="image-product-detail" src={data.imgURL1} alt="G3-BAKERY" />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide swiper-slide-active swiper-slide-duplicate-next swiper-slide-duplicate-prev" data-swiper-slide-index="0" >
                  <div className="swiper-slide-container">
                    <a data-fancybox="" href="">
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
                {/* new && bestseller */}
              </div>
              <div className="tilte_spdetail w-100">
                <h1>{data.name}</h1>
              </div>
              
              <div className="giadetail w-100">
                <span>{data.price} đ</span>
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
                      if (!isNaN(qty) && qty > 1) result.value--;
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
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                    <button onClick={() => {
                      var result = document.getElementById('qty');
                      var qty = result.value;
                      if (!isNaN(qty)) result.value++;
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
                        <img className="image-product-detail" src={data.imgURL2} alt="G3-BAKERY" />
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
                          <img className="image-product-detail" src={data.imgURL2} alt="G3-BAKERY" />
                        </a>
                      </div>
                    </div></div>
                  <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>


              </div>
            </div>


            <div className="w-100 colbottomright">
              <div className="motadetailsp w-100">
                {data.description}</div>
              <div id="thongbao"> </div>
              <div className="w-100" >
                <a id="ditoigiohang" href="gio-hang">Đi tới giỏ hàng <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
              </div>
            </div>


          </div>
          </div>
          

        </div>
      </section>
    </>
  );
};

export default List;
