import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = getAuth();
  const login = async() => {

    try {
      setLoading(true)
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("currentUser", JSON.stringify(result))
      setLoading(false)
      toast.success("Login successfull");
      window.location.href="/";
    } catch (error) {
      console.log(error);
      toast.error("Login failed");
      setLoading(false)
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
  return (
    <>
      {loading && <Loading/>}
      <div className="login-parent">
        <div className="row justify-content-center mx-2">
          <div className="col-md-4 z1 mt-5">
            <div className="login-form">
              <h2>login</h2>
              <hr />
              <input
                type="text"
                className="form-control my-3"
                placeholder="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <input
                type="password"
                className="form-control my-3"
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
              <button className="btn btn-outline-dark my-2 " id="login" onClick={login}>Login</button>
              <hr />
              <NavLink to="/register">Click here to Register</NavLink>
            </div>
          </div>
          <div className="col-md-5 z1">
            <lottie-player
              src="https://assets4.lottiefiles.com/packages/lf20_lcj8m4po.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div className="login-bottom"></div>
      </div>
    </>
  );
};

export default LoginPage;
