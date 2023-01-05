import React from 'react';
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='row line-taste py-5'>
                    <div className='col-sm-6 col-lg-3 mb-4  mb-lg-0'>
                        <div className='footer-info'>
                            <img src='./assest/images/logo-footer.png' />
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                <br />
                                لورم ایپسوم متن ساختگی با تولید سادگی
                                نامفهوم.
                            </p>
                            <div className='adress-info'>
                                <span className='question d-block w-50 mb-2'>سوالی دارید؟ 7روز هفته/24ساعته</span>
                                <a href='#' className='number-phone'>02155667788</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-lg-3 mb-4  mb-lg-0'>
                        <h3 className='footer-title'>لینک های مفید</h3>
                        <ul className='footer-list'>
                            <li><a href="#">درباره ما</a></li>
                            <li><a href="#">خدمات</a></li>
                            <li><a href="#">نحوه خرید</a></li>
                            <li><a href="#">سوالات متداول</a></li>
                            <li><a href="#">تماس با ما</a></li>
                        </ul>
                    </div>
                    <div className='col-sm-6 col-lg-3 mb-4  mb-lg-0'>
                        <h3 className='footer-title'>خدمات مشتری</h3>
                        <ul className='footer-list'>
                            <li><a href="#">شیوه پرداخت</a></li>
                            <li><a href="#">گارانتی بازگشت وجه</a></li>
                            <li><a href="#">شیوه ارسال محصولات</a></li>
                            <li><a href="#">قوانین و مقررات</a></li>
                            <li><a href="#">خط مشی</a></li>
                        </ul>
                    </div>
                    <div className='col-sm-6 col-lg-3 mb-4  mb-lg-0'>
                        <h3 className='footer-title'>حساب کاربری</h3>
                        <ul className='footer-list'>
                            <li><a href="#">ورود</a></li>
                            <li><a href="#">سبد خرید</a></li>
                            <li><a href="#">لیست علاقه مندی ها</a></li>
                            <li><a href="#">پیگیری سفارشات</a></li>
                            <li><a href="#">راهنما</a></li>
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <div className='footer-media'>
                        <p className='mb-2  mb-md-0'>کپی رایت © 2019 تمامی حقوق محفوظ است.</p>
                        <div className='d-flex '>
                            <span className='mx-0 mx-md-3 '>شبکه های اجتماعی</span>
                            <div className='item-media-footer'>
                                <a href="#"><FaFacebook color='#8F79ED' /></a>
                                <a href="#"><FaInstagram color='#DD6D9A' /></a>
                                <a href="#"><FaWhatsapp color='#29e439' /></a>
                                <a href="#"><FaYoutube color='#E66262' /></a>
                                <a href="#"><FaTwitter color='#79C8ED' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;