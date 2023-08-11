import React from 'react'

const Home = () => {
    return (
        <>
            <div className="hero">
                <div className="card bg-dark text-white border-0">
                    <img src="/assets/shopping.jpg" className="card-img" alt="background" height="710px" />
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                            <h5 className="card-head display-3 fw-bolder mb-0">New Season Arrivals</h5>
                            <p className="card-para lead fs-2">Check Out All The Trends</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;