import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { clrCart, delCart } from '../redux/action/index';
import { addCart } from '../redux/action/index';
import Footer from './Footer';

const Cart = () => {
    const reduxItems = useSelector((state) => state.handleCart);

    let state = [];
    if(reduxItems && reduxItems.length > 0){
        state = [...reduxItems];
    } else {
        const localItems = localStorage.getItem("Cart");
        state = [...JSON.parse(localItems)];
    }
    

    const dispatch = useDispatch();
    
    const handleClose = (item) => {
        dispatch(delCart(item));
    }
    const handleClear = (item) => {
        dispatch(clrCart(item));
    }
    const handleButton = (cartItem) => {
        dispatch(addCart(cartItem))
    }
    
    const cartItems = (cartItem) => {
        return (
            <>
                <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                    <div className="container py-4">
                        <button onClick={() => handleClear(cartItem)} className='btn-close float-end' aria-label='Close'></button>
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                            </div>
                            <div className="col-md-4">
                                <h3>{cartItem.title}</h3>
                                <p className='lead fw-bolder main-hero-para'>
                                    {cartItem.qty} X &#x20b9;{cartItem.price} = &#x20b9; {cartItem.qty * cartItem.price}
                                </p>
                                <button className='btn btn-outline-dark me-4' onClick={() => handleClose(cartItem)}>
                                    <i className='fa fa-minus'></i>
                                </button>
                                <button className='btn btn-outline-dark' onClick={() => handleButton(cartItem)}>
                                    <i className='fa fa-plus'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }


    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5 emptycart">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>

        )
    }

    const button = () => {
        return(
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-dark mb-5 w-25 mx-auto">Proceed To Checkout</NavLink>
                </div>
            </div>
        )
    }
    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}

            <Footer />
        </>
    )
}

export default Cart;