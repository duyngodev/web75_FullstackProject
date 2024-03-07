import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../components/nhandev/CategoryListPage.scss'

const CategoryListPage = () => {
    const history = useNavigate();
    const filterImg =
        [{
            img: 'https://www.sugartown.vn/upload/sanpham/asset-1-16998632120.png',
            category: '20-11',
            name: '20-11'
        },
        {
            img: 'https://www.sugartown.vn/upload/sanpham/asset-10-16965766006.png',
            category: 'BÁNH KEM',
            name: 'BÁNH KEM SỮA'
        },
        {
            img: 'https://www.sugartown.vn/upload/sanpham/danh-muc-sp-banh-mi--16521886201.png',
            category: 'BÁNH CẤP ĐÔNG',
            name: 'BÁNH CẤP ĐÔNG'
        },
        {
            img: 'https://www.sugartown.vn/upload/sanpham/asset-12-16965774958.png',
            category: 'BÁNH COOKIES',
            name: 'BÁNH COOKIES'
        },
        {
            img: 'https://www.sugartown.vn/upload/sanpham/danh-muc-sp-banh-mi--16521886201.png',
            category: 'BÁNH MÌ-BÁNH NGỌT',
            name: 'BÁNH MÌ - BÁNH NGỌT'
        },
        {
            img: 'https://www.sugartown.vn/upload/sanpham/danh-muc-banh-lanh--16521886408.png',
            category: 'BÁNH LẠNH',
            name: 'BÁNH LẠNH'
        }
        ]
    const handleCategoryClick = (category) => {
        // Redirect to ProductList with the selected category
        history(`/products/${category}`);
    };
    return (
        <>
            <div id="wrapper2">
                <main>
                    <section className="section_banner">
                        <img className="bl1" src="https://www.sugartown.vn/upload/sanpham/-16489067484.jpg" alt="G3-BAKERY" />
                        <img className="bl2" src="https://www.sugartown.vn/upload/sanpham/banner-trang-chu01-16494772398.png" alt="G3-BAKERY" />
                    </section>
                    <section className="section_danhmuctc_cap1">
                        <div className="container container_cap1">
                            <div className="title_danhmuccap w-100">
                                <span>Danh mục</span>
                            </div>
                            <div className="danhsachcap2 w-100">

                                {filterImg.map(item => {
                                    return (
                                        <div className="item_cap2" key={item.category}>
                                            <a onClick={() => handleCategoryClick(item.category)}>
                                                <figure className='figure'><img src={item.img} alt="G3-BAKERY" /></figure>
                                                <div className="middle">
                                                    <span className="text">{item.name} </span>
                                                </div>
                                            </a>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}
export default CategoryListPage
