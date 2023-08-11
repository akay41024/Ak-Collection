import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";


const Navbar = () => {
  // const state = useSelector((state) => state.handleCart);

  const reduxItems = useSelector((state) => state.handleCart);

    

    let state = [];
    if(reduxItems && reduxItems.length > 0){
        state = [...reduxItems];
    }
     else {
        const localItems = localStorage.getItem("Cart");
        state = [...JSON.parse(localItems)];
    }


  const [show, setShow] = useState(false);
  const userObj =  JSON.parse(localStorage.getItem("currentUser"));
  
  const [user, setUser] =  useState(userObj ? userObj.user : '');

  const auth = getAuth();
  const history = useHistory();

  const logout = () => {
    signOut(auth);
    history.push("/login");
    localStorage.removeItem("currentUser");
    setUser('');
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm z1">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            AK COLLECTION
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            onClick={() => setShow(!show)}
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/order">
                  Order
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              {user && user.email != null ? (
                <>
                  <button className="btn btn-dark">{user.email.substring(0, user.email.length - 10)}</button>
                  <button className="btn btn-outline-dark ms-2" onClick={logout}>
                    <i className="fa fa-sign-in me-2"></i>logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink to="/login" className="btn btn-outline-dark">
                    <i className="fa fa-sign-in me-2"></i>Login
                  </NavLink>
                  <NavLink to="/register" className="btn btn-dark ms-2">
                    <i className="fa fa-user-plus me-2"></i>Register
                  </NavLink>
                </>
              )}

              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-2"></i>Cart ({state.length}
                )
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
