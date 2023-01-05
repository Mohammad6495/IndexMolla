import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

import './YourTaste.css';

const YourTaste = () => {
    return (
        <div className='your-taste mt-3'>
            <div className='container'>
                <div className='row pb-5'>
                    <div className='col-lg-6 d-flex align-items-center mb-4 mb-md-0'>
                        <div className='taste-info'>
                            <div className='taste-text d-flex align-items-center justify-content-center flex-column text-center'>
                                <span className='text-danger'>ویژه</span>
                                <h3 className='my-2'>مطابق سلیقه شما</h3>
                                <p>در خبرنامه ما عضو شوید و اولین نفری باشید که از تخفیف های و محصولات جدید با خبر می شوید</p>
                            </div>
                            <div className='taste-product d-flex justify-content-center'>
                                <div className='taste-product-item'>
                                    <img src='./assest/images/Product/product-13.jpg' />
                                    <div className='d-flex justify-content-center align-items-center flex-column mr-3'>
                                        <a href="#" className='nav-link my-2'>ژاکت پشمی</a>
                                        <span>24,000 تومان</span>
                                    </div>
                                </div>
                                <div className='taste-product-item mx-3'>
                                    <img src='./assest/images/Product/product-14.jpg' />
                                    <div className='d-flex justify-content-center align-items-center flex-column'>
                                        <a href="#" className='nav-link my-2'>ژاکت پشمی</a>
                                        <span>24,000 تومان</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 p-relative'>
                        <a href='#' className='big-group'>
                            <img src='./assest/images/Banner/banner-4.jpg' className='img-fluid' />
                            <div className='banner-info'>
                                <div className='info-text'>
                                    <a href='#'>سلیقه های شما</a>
                                    <h4 className='w-100'>
                                        اصول حرفه ای و
                                        <br />
                                        بر اساس مد روز</h4>
                                    <a href='#'>مشاهده <FaArrowLeft fontSize={13} /></a>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default YourTaste;