import React, { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';

import './CollectionVideo.css';

const CollectionVideo = () => {
    const [isPlay, setIsPlay] = useState(false);
    const srcVideo = "//www.youtube.com/embed/vBPgmASQ1A0?autoplay=1";

    const style = {
        backgroundImage: 'url("./assest/images/bg-2.jpg")'
    }

    const handleClick = () => {
        setIsPlay(!isPlay);
    }

    return (
        <div className='collection-video' style={style}>
            <div className='collection-info'>
                <h4>کالکشن جدید</h4>
                <h1>زمستان 2019 / بهار 2020</h1>
                <button className='video-play' onClick={handleClick}><FaPlay /></button>
            </div>
            <div className='video' onClick={handleClick} style={isPlay ? { opacity: '1', visibility: 'visible' } : { opacity: '0', visibility: 'hidden' }}>
                <button className='close-video-btn' onClick={handleClick}><GrClose style={{ color: '#ffffff' }} /></button>
                <div className='content-video d-flex align-items-center justify-content-center'>

                    {navigator.onLine ? <iframe className="mfp-iframe" src={isPlay ? srcVideo : ''} frameBorder="0" allowFullScreen=""></iframe> : <div className='d-flex flex-column text-center align-items-center'>

                        <div className="lds-facebook"><div></div><div></div><div></div></div>
                        <p className='text-light'>دسترسی به اینترنت امکان پذیر نمیباشد...</p>

                    </div>}

                </div>
            </div>
        </div>
    )
}

export default CollectionVideo;