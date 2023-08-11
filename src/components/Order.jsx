import axios from 'axios';
import moment from 'moment';
import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { useParams } from "react-router-dom";
import Footer from './Footer';
const Order = () => {
    // const { id } = useParams();
    // const [ordeInfo, setOrderInfo] = useState({});


    // useEffect(() => {
    //     if (id) {
    //         getOrderDetails(id);
    //     }
    // }, [])

    // const getOrderDetails = (id) => {
    //     const url = 'https://fakestoreapi.com/products/' + id;
    //     axios.get(url).then(resp => {
    //         setOrderInfo(resp);
    //     });
    // }
    const state = useSelector((state) => state.handleCart);

    // console.log("======================="+OrderList)
    var total = 0;
    const cartItems = (cartItem) => {
        const price = cartItem.price * cartItem.qty;
        total = total + price + 40;

        return (
            <>

                <div className="col-md-12 mx-auto">
                    <p className='main-hero-para'>
                        Order ID <strong>{cartItem.id}</strong> was placed on {moment().format('MMMM Do YYYY')} and is currently.
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
                        <hr className='mx-4' style={{width:"70%"}}/>
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
                    <NavLink to="/order" className="btn btn-outline-dark mb-5 w-25 mx-auto">Order Confirm</NavLink>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="px-4 my-3 bg-light rounded-3 mx-auto">
                <div className="container py-2">
                    <h2>My Account</h2>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 my-3 mx-auto">
                    <img className='profile' src="/assets/profile.png" alt="profile" />
                    <p className=' lead fw-bolder user-name'>
                        Asif khan
                    </p>
                    <a href="#" className='order-button'>Dashboard</a>
                    <hr />
                    <a href="#" className='order-button'>Orders</a>
                    <hr />
                    <a href="#" className='order-button'>Download</a>
                    <hr />
                    <a href="#" className='order-button'>Address</a>
                </div>
                <div className="col-md-8">
            {state.length !== 0 && state.map(cartItems)}
                </div>
            </div>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && button()}

            <Footer />
        </>
    )
}

export default Order;