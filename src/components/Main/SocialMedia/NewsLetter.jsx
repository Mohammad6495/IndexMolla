import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa';

import { AddNewsLetterActions } from '../../../Redux/Actions/newsLetterAction';

const NewsLetter = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const inputRef = React.useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = {
            email: email
        }
        setIsSending(false);

        if (email == '')
            setIsValid(true);
        else
            dispatch(AddNewsLetterActions(item));

        setEmail('')
    }

    const { message, loading, statusSending } = useSelector((state) => state.addNewsLetter)

    if (statusSending) {
        setTimeout(() => {
            setIsSending(true)
        }, 3000);
    }
    return (
        <div className='col-lg-6'>
            <div className='news-letter d-flex flex-column align-items-center p-relative'>
                <h4>اطلاع از آخرین تخفیف ها</h4>
                <p>دریافت <span className='text-danger'>تخفیف 20هزار تومانی</span> برای اولین خرید</p>
                <form className='form-group mt-2' onSubmit={(e) => handleSubmit(e)}>
                    <input ref={inputRef} type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='news-letter-input' placeholder='آدرس ایمیل خود را وارد کنید' />
                    <button className='news-letter-btn'><FaArrowLeft /></button>
                </form>
                {isSending ? null : <p className='text-danger mt-2 sending-message'>{isValid ? <>ایمیل خود راوارد کنید</> : message}</p>}
            </div>
        </div>
    )
}


export default NewsLetter;