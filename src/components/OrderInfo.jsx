import { collection, getDoc } from 'firebase/firestore';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import fireDB from '../fireAuth';
import Footer from './Footer';
const OrderInfo = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        try {
            const users = await getDoc(collection(fireDB, "items"));
            const productsArray = []
            users.forEach((doc) => {
                const obj = {
                    id: doc.id,
                    ...doc.data()
                }

                productsArray.push(obj);
            });

            setProducts(productsArray);
        } catch (error) {
            console.log(error);
        }
    }
    const updateLocalStorage = (data) => {
        localStorage.setItem('Cart', JSON.stringify(data));
    }

    const reduxItems = useSelector((state) => state.handleCart);
    let state = [];
    if(reduxItems && reduxItems.length > 0){
        state = [...reduxItems];
        updateLocalStorage(state);
    } else {
        const localItems = localStorage.getItem("Cart");
        state = [...JSON.parse(localItems)];
        updateLocalStorage(state);
    }
    var total = 0;
    const cartItems = (cartItem) => {
        const price = cartItem.price * cartItem.qty;
        total = total + price + 40;

        return (
            <>
                <div className="row">
                    <div className="col-md-9 mx-auto">
                        <p className='main-hero-para fw-bolder' style={{ color: "green" }}>
                            Order placed successful {moment().format('MMMM Do YYYY, h:mm:ss a')}.
                        </p>
                        <h1 className='lead fw-bolder'>Order Details</h1>
                        <div className="row">
                            <div className="col-md-3">
                                <p className='lead fw-bold product'>
                                    PRODUCT
                                </p>
                                <p className='product-info'>
                                    {cartItem.title} X {cartItem.qty}
                                </p>
                                <p className='product-info'>
                                    Shipping
                                </p>
                                <p className='product-info'>
                                    Payment mode
                                </p>
                                <p className='product-info fw-bold'>
                                    Total
                                </p>
                            </div>
                            <div className="col-md-6">
                                <p className='lead fw-bold total'>
                                    Total
                                </p>
                                <p className='total-info'>
                                    {cartItem.id}
                                </p>
                                <p className='total-info'>
                                    40 Rs
                                </p>
                                <p className='total-info'>
                                    Cash Mode
                                </p>
                                <p className='total-info fw-bold'>
                                    {total}
                                </p>
                            </div>
                            <hr />
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
                        <h3>Your Order is Empty</h3>
                    </div>
                </div>
            </div>

        )
    }

    const button = () => {
        return (
            <div className="container">
                <div className="row">
                    <NavLink to="/" className="btn btn-outline-dark mb-5 w-25 mx-auto">Continue Shopping</NavLink>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="px-4 my-3 bg-light rounded-3" >
                <div className="container py-2">
                    <h2>My Order Details</h2>
                </div>
            </div>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}

            <Footer />
        </>
    )
}

export default OrderInfo;