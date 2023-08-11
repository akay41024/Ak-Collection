import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = getAuth();
  const register = async() => {

    try {
      setLoading(true)
      const result = await createUserWithEmailAndPassword(auth, email, password, cpassword);
      console.log(result);
      setLoading(false)
      toast.success("Registration.success");
      setEmail("");
      setPassword("");
      setCpassword("")
    } catch (error) {
      console.log(error);
      toast.error("Registration failed");
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
      <div className="register-parent">
        {loading && <Loading/>}
        <div className="register-top py-5 mt-5">
        </div>
        <div className="row justify-content-center mt-5 py-5">
          <div className="col-md-5 z1 mx-5">
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_skfh9odt.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div className="col-md-4 z1 mx-5">
            <div className="register-form">
              <h2>Register</h2>
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
              <input
                type="password"
                className="form-control my-3"
                placeholder="confirm password"
                value={cpassword}
                onChange={(e) => {
                  setCpassword(e.target.value);
                }}
                required
              />
              <button className="btn btn-outline-dark my-2" onClick={register}>Register</button>
              <hr />
              <NavLink to="/login">Click here to login</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
