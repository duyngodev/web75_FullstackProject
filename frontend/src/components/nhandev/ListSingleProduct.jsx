import React, { useContext, useEffect, useState } from "react";
import { ApiStateContext } from "./ApiStateProvider";

const ListSingleProduct = ({ data, setData, setSelectedProductId  }) => {

   const [loading, setLoading] = useContext(ApiStateContext);
   const limitedData = data.slice(0, 5);
   return (
      <>
         <section className="section_product2">
            <div className="container">
               <div className="row">
                  <div className="col-xs-12">
                     <div className="tile_splq w-100">
                        <h2>Có thể bạn thích</h2>
                     </div>
                     <div className="product_other w-100">
                              {limitedData.map((product, index) => (
                                 <div className="item_sp" key={index}>
                           <div className={`img_spnew ${product.newProduct? '' : 'hidden'}`}>
                              <img src="https://www.sugartown.vn/img/lblnew.png" alt="G3-BAKERY" />
                           </div>
                           <div className={`img_spsale ${product.bestSeller ? '' : 'hidden'}`}>
                              <img src="https://www.sugartown.vn/img/lblsale.png" alt="G3-BAKERY" />
                           </div>
                           <figure>
                              <div className="product--image__inner">
                                 <div className="pro_img imgsp1 imgsp11">
                                    <a onClick={() => {
                                       setSelectedProductId(product.id);
                                       }}>
                                       <img className="image-product-detail" src={product.imgURL1} alt="G3-BAKERY" />
                                    </a>
                                 </div>
                              </div>
                              <div className="datmua">
                                 <a className="add_to_cart" data-id={product.id} onClick={() => {
                                       setSelectedProductId(product.id);
                                       }}>Xem chi tiết</a>
                              </div>
                           </figure>
                           <figcaption>
                              <h3><a onClick={() => {
                                       setSelectedProductId(product.id);
                                       }} >{product.name}</a></h3>
                              <span>{Number(product.price).toLocaleString()} đ</span>
                           </figcaption>
                           </div>
                              ))}
                     </div>
                     <div className="khungproductorthermobi">
                        <div className="khungspothermb">
                           <div>
                              {limitedData.map((product, index) => (
                                 <div className="item_sp" key={index}>
                                    <div className="img_spnew">
                                       <img src="https://www.sugartown.vn/img/lblnew.png" alt="G3-BAKERY" />
                                    </div>
                                    {product.isOnSale && (
                                       <div className="img_spsale">
                                          <img src="https://www.sugartown.vn/img/lblsale.png" alt="G3-BAKERY" />
                                       </div>
                                    )}
                                    <figure>
                                       <div className="product--image__inner">
                                          <div className={`pro_img imgsp1 imgsp11`}>
                                             <a onClick={() => {
                                       setSelectedProductId(product.id);
                                       }}><img className="image-product-detail" src={product.imgURL1} alt="G3-BAKERY" /></a>
                                          </div>
                                       </div>
                                       <div className="datmua">
                                          <a className="add_to_cart" data-id={product.id} onClick={() => {
                                       setSelectedProductId(product.id);
                                       }}>Xem chi tiet</a>
                                       </div>
                                    </figure>
                                    <figcaption>
                                       <h3><a onClick={() => {
                                       setSelectedProductId(product.id);
                                       }}>{product.name}</a></h3>
                                       <span>{Number(product.price).toLocaleString()} đ</span>
                                    </figcaption>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};
export default ListSingleProduct;
