import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

import './BrandGroup.css';

const BrandGroup = () => {
    return (
        <div className='brand-group mt-3 mb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 p-relative'>
                        <a href='#' className='big-group'>
                            <img src='./assest/images/Banner/banner-1.jpg' className='img-fluid' />
                            <div className='banner-info'>
                                <div className='info-text'>
                                    <a href='#'>پیشنهاد های جدید</a>
                                    <h4>این هفته پیشنهاد های ویژه</h4>
                                    <a href='#'>مشاهده <FaArrowLeft fontSize={13} /></a>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='col-md-6'>
                        <div className='d-flex flex-column justify-content-between h-100'>
                            <a href='#' className='little-group mb-3 mb-md-0 mt-3 mt-md-0  p-relative'>
                                <img src='./assest/images/Banner/banner-2.jpg' className='img-fluid' />
                                <div className='banner-info'>
                                    <div className='info-text'>
                                        <a href='#'>مدت زمان محدود</a>
                                        <h4><span>لباس های ورزشی فروش تا 70%
                                            تخفیف</span></h4>
                                        <a href='#'>خرید <FaArrowLeft fontSize={13} /></a>
                                    </div>
                                </div>
                            </a>
                            <a href='#' className='little-group  p-relative'>
                                <img src='./assest/images/Banner/banner-3.jpg' className='img-fluid' />
                                <div className='banner-info'>
                                    <div className='info-text'>
                                        <a href='#'>این هفته ما را دوست خواید داشت ...</a>
                                        <h4><span>زنانه لباس روزهای تعطیل</span></h4>
                                        <a href='#'>مشاهده <FaArrowLeft fontSize={13} /></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandGroup;