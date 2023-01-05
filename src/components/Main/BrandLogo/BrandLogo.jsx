import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { brandListActions } from '../../../Redux/Actions/brandActions';

import './BrandLogo.css'

const BrandLogo = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(brandListActions());
    }, [dispatch]);
    const { brand } = useSelector((state) => state.brandList)
    return (
        <div className='brand-main-logo text-center'>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 7,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper"
            >
                {brand.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <Link to='#'>
                                <img src={item.src} className='img-fluid' />
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </div>
    )
}

export default BrandLogo;