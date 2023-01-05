import React, { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

import './ScrollUp.css';

const ScrollUp = () => {
    const [isScroll, setIsScroll] = useState(false);
    const loadScrollUp = () => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }
    useEffect(() => {
        loadScrollUp()
    }, [])

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <div onClick={handleClick} className='scroll-up'
            style={isScroll ? { bottom: '50px' } : { bottom: '-60px' }}
        ><AiOutlineArrowUp />
        </div>
    )
}

export default ScrollUp;