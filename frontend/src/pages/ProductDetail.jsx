import SingleProduct from "../components/nhandev/SingleProduct.jsx";
import React, { useContext, useEffect, useState } from "react";
import { ApiStateContext } from '../components/nhandev/ApiStateProvider';
import { useParams, useRoutes } from "react-router-dom";
import '../components/nhandev/ProductDetail.scss'
import '../components/nhandev/Swiper.scss'
import ListSingleProduct from "../components/nhandev/ListSingleProduct.jsx";

const url = "http://localhost:3001/product"

const ProductDetail = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useContext(ApiStateContext)
  const [Examples, setExamples] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);


  let id = useParams().id
  // setSelectedProductId(useParams);
  if (selectedProductId) {
    id = selectedProductId;
  }

  //
  // const getProductSingle = async () => {
  //   setLoading(true)
  //   const result = await fetch(
  //     `${url}/${id}`,
  //     {
  //       method: "GET",
  //     }
  //   );
    
  //   const jsonRes = await result.json();
  //   setData(jsonRes.product);
  //   setLoading(false);
  // };

  const getProducts = async () => {
    setLoading(true)
    const result = await fetch(
      `${url}/${id}`,
      {
        method: "GET",
      }
    );
    const jsonRes = await result.json();
    setData(jsonRes.product);
    let exampleList = jsonRes.examples;
    exampleList = exampleList.filter((item) => item._id != id) //filter out duplicates
    setExamples(exampleList);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  // useEffect(() => {
  //   getExamples();
  // }, [data, listData]);

  return (
    <>
      <div id="wrapper3">
        <main>
          <section style={{ background: "#ebebeb" }}>
            <div className="container">
              <div className="title_cattintuc w-100">
                <h2><img src="https://www.sugartown.vn/img/muiten.png" alt="G3-BAKERY" />
                  <a href="/products">Tất cả sản phẩm</a>
                </h2>
              </div>
            </div>
          </section>
          <SingleProduct setData={setData} data={data} />
          <ListSingleProduct data={Examples} setSelectedProductId={setSelectedProductId} />
        </main>
      </div>
    </>
  )
}

export default ProductDetail
