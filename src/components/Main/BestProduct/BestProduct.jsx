import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { productListAction } from '../../../Redux/Actions/productsActions';
import ListBestProduct from './ListBestProduct';

import './BestProduct.css';

const BestProduct = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productListAction())
    }, [dispatch]);

    const { products, loading } = useSelector((state) => state.productsList);

    return (
        <div className='best-products'>
            <h3 className='text-center mb-3'>محصولات برتر</h3>
            <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all-tab-pane" type="button" role="tab" aria-controls="all-tab-pane" aria-selected="true">همه</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="step1-tab" data-bs-toggle="tab" data-bs-target="#step1-tab-pane" type="button" role="tab" aria-controls="step1-tab-pane" aria-selected="false">صندل</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="step2-tab" data-bs-toggle="tab" data-bs-target="#step2-tab-pane" type="button" role="tab" aria-controls="step2-tab-pane" aria-selected="false">مردانه</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="more-tab" data-bs-toggle="tab" data-bs-target="#more-tab-pane" type="button" role="tab" aria-controls="more-tab-pane" aria-selected="false">زنانه</button>
                </li>
            </ul>
            {loading ? <p>لطفا صبر کنید....</p> : <ListBestProduct products={products} />}
        </div>
    )
}
export default BestProduct;