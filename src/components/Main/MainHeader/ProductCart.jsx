import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineClose } from 'react-icons/ai';

const ProductCart = () => {
    return (
        <div className="product-cart">
            <div className="product-cart-list">
                <div className="product-cart-item d-flex justify-content-between">
                    <div className="cart-info d-flex flex-column">
                        <a className="nav-link" href="#">کتونی ورزشی مخصوص دویدن رنگ بژ</a>
                        <span>
                            x1 84,000 تومان
                        </span>
                    </div>
                    <div className="cart-img d-flex align-items-center">
                        <img src="./assest/images/Product/product-1.jpg" />
                        <span><AiOutlineClose /></span>
                    </div>
                </div>
                <div className="product-cart-item d-flex justify-content-between">
                    <div className="cart-info d-flex flex-column">
                        <a className="nav-link" href="#">کتونی ورزشی مخصوص دویدن رنگ بژ</a>
                        <span className="cart-price">
                            x1 84,000 تومان
                        </span>
                    </div>
                    <div className="cart-img d-flex align-items-center">
                        <img src="./assest/images/Product/product-2.jpg" />
                        <span><AiOutlineClose /></span>
                    </div>
                </div>
            </div>
            <div className="sum-cost d-flex justify-content-between">
                <span>مجموع</span>
                <span>160,000 تومان</span>
            </div>
            <div className="cart-button d-flex justify-content-between">
                <a className="product-cart-btn c-btn-red" href="#">مشاهده سبد خرید</a>
                <a className="product-cart-btn c-btn-next" href="#"><sapn>پرداخت</sapn><FaArrowLeft className="mx-1" /></a>
            </div>
        </div>
    )
}

export default ProductCart;