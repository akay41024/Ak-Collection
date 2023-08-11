import React, { useState } from "react";
import { toast } from "react-toastify";

const Feedback = () => {
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
      } else {
        toast("Please fill the data");
      }
    } else {
      toast("Please fill the data");
    }
  };
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row py-4">
            <div className="col-12 text-center">
              <h1 className="main-heading">Feedback</h1>
              <hr />
            </div>
            <div className="col-12 col-lg-10 mx-auto py-5">
              <div className="row d-flex justify-content-center">
                <div className="contact-leftside col-12 col-lg-5 py-4">
                  <lottie-player
                    src="https://assets9.lottiefiles.com/private_files/lf30_ltuqrtmn.json"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                  ></lottie-player>
                  {/* <lottie-player
                    src="https://assets2.lottiefiles.com/packages/lf20_hebegwpc.json"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                  ></lottie-player> */}
                </div>
                <div className="feedback-rightside col-12 col-lg-7 py-4">
                  <form method="POST">
                    <div className="row py-2 my-2">
                      <h1 className="main-heading text-center">Feedback</h1>
                      <div className="col-12 contact-input-field">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="Name"
                          value={userData.firstName}
                          onChange={postUserData}
                          required
                        />
                      </div>
                    </div>
                    <div className="row py-2 my-2">
                      <div className="col-12 contact-input-field">
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
                      <div className="col-12 ">
                        <textarea
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
                    <button
                      type="submit"
                      className="btn btn-dark w-100 my-4"
                      onClick={submitData}
                      style={{ borderRadius: "15px" }}
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

export default Feedback;
