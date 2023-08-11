import React from "react";
import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="main-heading">About Us</h1>
            <hr />
          </div>
          <div className="col-md-6 d-flex justify-content-center py-5 my-2">
            <lottie-player
              src="https://assets1.lottiefiles.com/packages/lf20_v1yudlrx.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
            {/* <img src="/assets/about.jpeg" alt="About Us" height="400px" width="400px" /> */}
          </div>
          <div className="col-md-6 py-5 my-3">
            <h1 className="main-heading text-dark fw-bolder mb-4">About Us</h1>
            <p className="main-hero-para mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae alias laborum tempora autem ea iste quis nesciunt
              provident? Quisquam, maiores praesentium. Placeat animi ea officia
              inventore vero labore commodi quo! Accusamus fuga deleniti facere
              soluta! Neque ratione qui fuga culpa nam inventore aspernatur quo
              laboriosam adipisci quam. Natus doloremque explicabo deserunt.
              Aliquid aperiam doloribus id consequuntur velit sit repellat
              ipsum! Voluptas, quis. Deleniti error commodi facilis eveniet odit
              tempora nostrum suscipit! Neque fugiat ut odio. Dolore recusandae
              architecto, nesciunt veniam dolores laborum, illo nobis porro
              enim, aspernatur at odio cumque! Pariatur soluta, obcaecati
              molestias ratione voluptates reiciendis libero sequi amet eum
              quos, temporibus sed repellendus ut laborum minus dolorum cum.
              Aliquam debitis recusandae explicabo assumenda nulla atque quae
              nesciunt itaque?
            </p>
            <NavLink to="/contact" className="btn btn-outline-dark">
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
