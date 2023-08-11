import React, { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import fireDB from '../fireAuth';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

const Products = () => {

    // const [data, setData] = useState([]);
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState(products);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        try {
            const users = await getDocs(collection(fireDB, "items"));
            const productsArray = []
            users.forEach((doc) => {
                const obj = {
                    id: doc.id,
                    ...doc.data()
                }

                productsArray.push(obj);
            });

            setProducts(productsArray);
            setFilter(productsArray);
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    const Loading = () => {
        return (
            <>
                <div className="col-mb-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-mb-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-mb-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-mb-3">
                    <Skeleton height={350} />
                </div>
            </>
        )
    }

    const filterProduct = (cat) => {
        const updatedList = products.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark active me-2" onClick={() => setFilter(products)}>
                        All
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>
                        Men's Clothing
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>
                        Women's Clothing
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>
                        Jewelery
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>
                        Electronic
                    </button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4" key={product.id}>
                                <div className="card h-100 text-center p-4">
                                    <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                        <p className="card-text lead fw-bolder"> &#x20b9;{product.price}</p>
                                        <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
                }
            </>
        )
    }
    return (
        <>
            <div className="container my-4 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
                {/* <button className='btn btn-dark' onClick={addProductsData}>Add Data</button> */}
            </div>
        </>
    )
}

export default Products;
























