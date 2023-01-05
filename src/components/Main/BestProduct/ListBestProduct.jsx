import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaCartPlus } from 'react-icons/fa';
import { Navigation } from 'swiper';

import "swiper/css";
import "swiper/css/navigation";

const ListBestProduct = ({ products }) => {
    return (
        <div className='container'>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="all-tab-pane" role="tabpanel" aria-labelledby="all-tab" tabIndex="0">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={10}
                        breakpoints={{
                            767: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {
                            products.map((item) => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        <div className='new-item-product'>
                                            <div className='item-body'>
                                                <span className='favorites'><AiOutlineHeart fontSize={17} /></span>
                                                <span className='favorites-text'>افزودن به لیست علاقه مندی</span>
                                                <img src={item.img} />
                                                <a href='#' className='add-to-cart'>
                                                    <span className='add-icon'><FaCartPlus /></span>
                                                    <span className='cart-text'>افزودن به سبد خرید</span>
                                                </a>
                                            </div>
                                            <div className='item-footer d-flex flex-column'>
                                                <a href='#' className='type-name'>1401/2/23</a>
                                                <a href='#' className='item-name'>{item.name}</a>
                                                <span className='item-price'>{item.price} تومان</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <div className="tab-pane fade" id="step1-tab-pane" role="tabpanel" aria-labelledby="step1-tab" tabIndex="0">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={10}
                        breakpoints={{
                            767: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {
                            products.filter(a => a.pId == 3).map((item) => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        <div className='new-item-product'>
                                            <div className='item-body'>
                                                <span className='favorites'><AiOutlineHeart fontSize={17} /></span>
                                                <span className='favorites-text'>افزودن به لیست علاقه مندی</span>
                                                <img src={item.img} />
                                                <a href='#' className='add-to-cart'>
                                                    <span className='add-icon'><FaCartPlus /></span>
                                                    <span className='cart-text'>افزودن به سبد خرید</span>
                                                </a>
                                            </div>
                                            <div className='item-footer d-flex flex-column'>
                                                <a href='#' className='type-name'>1401/2/23</a>
                                                <a href='#' className='item-name'>{item.name}</a>
                                                <span className='item-price'>{item.price} تومان</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <div className="tab-pane fade" id="step2-tab-pane" role="tabpanel" aria-labelledby="step2-tab" tabIndex="0">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={10}
                        breakpoints={{
                            767: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        modules={[Navigation]}
                        navigation={true}
                        className="mySwiper"
                    >
                        {
                            products.filter(a => a.pId == 2).map((item) => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        <div className='new-item-product'>
                                            <div className='item-body'>
                                                <span className='favorites'><AiOutlineHeart fontSize={17} /></span>
                                                <span className='favorites-text'>افزودن به لیست علاقه مندی</span>
                                                <img src={item.img} />
                                                <a href='#' className='add-to-cart'>
                                                    <span className='add-icon'><FaCartPlus /></span>
                                                    <span className='cart-text'>افزودن به سبد خرید</span>
                                                </a>
                                            </div>
                                            <div className='item-footer d-flex flex-column'>
                                                <a href='#' className='type-name'>1401/2/23</a>
                                                <a href='#' className='item-name'>{item.name}</a>
                                                <span className='item-price'>{item.price} تومان</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <div className="tab-pane fade" id="more-tab-pane" role="tabpanel" aria-labelledby="more-tab" tabIndex="0">.
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={10}
                        breakpoints={{
                            767: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {
                            products.filter(a => a.pId == 4).map((item) => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        <div className='new-item-product'>
                                            <div className='item-body'>
                                                <span className='favorites'><AiOutlineHeart fontSize={17} /></span>
                                                <span className='favorites-text'>افزودن به لیست علاقه مندی</span>
                                                <img src={item.img} />
                                                <a href='#' className='add-to-cart'>
                                                    <span className='add-icon'><FaCartPlus /></span>
                                                    <span className='cart-text'>افزودن به سبد خرید</span>
                                                </a>
                                            </div>
                                            <div className='item-footer d-flex flex-column'>
                                                <a href='#' className='type-name'>1401/2/23</a>
                                                <a href='#' className='item-name'>{item.name}</a>
                                                <span className='item-price'>{item.price} تومان</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default ListBestProduct;