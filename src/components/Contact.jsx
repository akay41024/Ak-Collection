import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // Connect with firebase
  const submitData = async (event) => {
    const { firstName, lastName, phone, email, address, message } = userData;

    if (firstName && lastName && phone && email && address && message) {
      event.preventDefault();
      const res = fetch(
        "https://emart-7e3df-default-rtdb.firebaseio.com/userDataRecord.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );
      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        toast.success("Data Stored");
      }
      else {
        toast("Please fill the data");
      }
    }
    else {
      toast("Please fill the data");
    }
  };
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row py-4">
            <div className="col-12 text-center">
              <h1 className="main-heading">Contact Us</h1>
              <hr />
            </div>
            <div className="col-12 col-lg-10 mx-auto py-5">
              <div className="row d-flex justify-content-center">
                <div className="contact-leftside col-12 col-lg-5 py-4">
                  <lottie-player
                    src="https://assets2.lottiefiles.com/packages/lf20_hebegwpc.json"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                  ></lottie-player>
                </div>
                <div className="contact-rightside col-12 col-lg-7 py-4">
                  <form method="POST">
                    <div className="row py-2 my-2">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          value={userData.firstName}
                          onChange={postUserData}
                          required
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          value={userData.lastName}
                          onChange={postUserData}
                          required
                        />
                      </div>
                    </div>
                    <div className="row py-2 my-2">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number"
                          value={userData.phone}
                          onChange={postUserData}
                          required
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          value={userData.email}
                          onChange={postUserData}
                          required
                        />
                      </div>
                    </div>
                    <div className="row py-2 my-2">
                      <div className="col-12 contact-input-field">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Add Address"
                          value={userData.address}
                          onChange={postUserData}
                          required
                        />
                      </div>
                    </div>
                    <div className="row py-2 my-2">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                          value={userData.message}
                          onChange={postUserData}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-check form-checkbox-style">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label main-hero-para d-flex w-100 py-1">
                        I agree that the above information is right and I like
                        you move further process.
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-outline-dark w-100"
                      onClick={submitData}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
