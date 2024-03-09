import SingleProduct from "../components/nhandev/SingleProduct.jsx";
import React, { useContext, useEffect, useState } from "react";
import { ApiStateContext } from '../components/nhandev/ApiStateProvider';
import { useParams, useRoutes } from "react-router-dom";
import '../components/nhandev/ProductDetail.scss'
import '../components/nhandev/Swiper.scss'
import ListSingleProduct from "../components/nhandev/ListSingleProduct.jsx";
const ProductDetail = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useContext(ApiStateContext)
  const [listData, setListData] = useState([]);
  const [Examples, setExamples] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);


  let id = useParams().id
  // setSelectedProductId(useParams);
  if (selectedProductId) {
    id = selectedProductId;
  }
  const getExamples = () => {
    const examples = listData.filter(item => item.category === data.category && item.id !== data.id);
    setExamples(examples);
  };
  //
  const getProductSingle = async () => {
    setLoading(true)
    const result = await fetch(
      `https://6562048cdcd355c083247a65.mockapi.io/Products/ProductList/${id}`,
      {
        method: "GET",
      }
    );
    const jsonRes = await result.json();
    setData(jsonRes);
    setLoading(false);
  };
  const getProducts = async () => {
    setLoading(true)
    const result = await fetch(
      `https://6562048cdcd355c083247a65.mockapi.io/Products/ProductList`,
      {
        method: "GET",
      }
    );
    const jsonRes = await result.json();
    setListData(jsonRes);
    setLoading(false);
  };

  useEffect(() => {
    getProductSingle();
    getProducts();
  }, []);
  useEffect(() => {
    if (selectedProductId) {
      getProductSingle();
    }
  }, [selectedProductId])
  useEffect(() => {
    getExamples();

  }, [data, listData]);
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
          <ListSingleProduct setData={setExamples} data={Examples} setSelectedProductId={setSelectedProductId} />
        </main>
      </div>




    </>
  )
}

export default ProductDetail
