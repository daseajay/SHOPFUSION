import React from "react";
import "./About.css";
import abouvide from "../../../public/images/aboutvideo.mp4";
import Slick3 from "../SLICK3/Slick3";
import Footer from "../FOOTER/Footer";
import Navbar from "../NAVBAR/Navbar";
const About = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-5 pt-5"></div>
      <div className="text-center mt-lg-5">
        <h1 className="abouthead">Our About</h1>
        <h4 className="abouth4">
          Taking a stylish and sustainable footwear <br /> with a focus on
          creating a positive impact <br /> on both the world and the people
        </h4>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 mt-lg-4 mt-3">
            <video
              src={abouvide}
              controls
              loop
              preload=""
              className="abouvid"
            ></video>
          </div>
        </div>
      </div>
      <Slick3 />
      <Footer />
    </div>
  );
};

export default About;
