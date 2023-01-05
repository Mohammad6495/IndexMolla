import React from 'react';
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import NewsLetter from './NewsLetter';

import './SocialMedia.css';

const SocialMedia = () => {
    return (
        <div className='social-media text-center'>
            <div className='container'>
                <div className='row p-0'>
                    <div className='col-lg-6 mb-4 mb-md-0'>
                        <div className='social-info d-flex flex-column align-items-center'>
                            <h2>شبکه های اجتماعی فروشگاه</h2>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>
                            <div className='media-link'>
                                <a href="#" className="media-link-item bg-instagram"><FaInstagram /></a>
                                <a href="#" className="media-link-item bg-youtube"><FaYoutube /></a>
                                <a href="#" className="media-link-item bg-twitter"><FaTwitter /></a>
                                <a href="#" className="media-link-item bg-facebook"><FaFacebook /></a>
                                <a href="#" className="media-link-item bg-whatsapp"><FaWhatsapp /></a>
                            </div>
                        </div>
                    </div>
                    <NewsLetter />
                </div>
            </div>
        </div>
    )
}

export default SocialMedia;