import './App.css'
import Footer from './components/shared/Footer.jsx'
import Header from './components/shared/Header.jsx'
import Home from './Pages/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import NotFound404 from './Pages/NotFound404.jsx'
import ProductList from './Pages/ProductList.jsx'
import ProductDetail from './Pages/ProductDetail.jsx'
import { useEffect, useState } from 'react'
import Cart from './Pages/Cart.jsx'
import Service from './Pages/Service.jsx'
import CategoryListPage from './Pages/CategoryListPage.jsx'
import Aboutus from './Pages/Aboutus.jsx'

function App() {

    const [data, setData] = useState([])
    const getLocalStorage = () => {
        const data = JSON.parse(localStorage.getItem("cart"))
        setData(data)
    }
    useEffect(() => {
        getLocalStorage()
    }, [])

    return (
        <>
            <Header data={data} />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/products/:category" element={<ProductList />} />
                <Route path='/products/:category/:id' element={<ProductDetail />} />
                <Route path="/cart" element={<Cart data={data} setData={setData} />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path='/service' element={<Service />} />
                <Route path='/service/CategoryListPage' element={<CategoryListPage />} />
                {/* Thêm các path còn lại vào đây */}
                <Route path="*" element={<NotFound404 />} />

            </Routes>
            <Footer />
        </>

    )
}

export default App

