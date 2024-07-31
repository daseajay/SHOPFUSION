import React from 'react';
import "./Slider2.css"
import slider1 from "../../../public/images/slider1.webp"
import slider2 from "../../../public/images/slider2.webp"
import slider3 from "../../../public/images/slider3.webp"
import slider4 from "../../../public/images/slider4.webp"
import slider5 from "../../../public/images/slider5.webp"
import slider6 from "../../../public/images/slider6.webp"
const Slider2 = () => {
  return (
    <div>
       <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slider1} className="d-block w-100 slideimg" alt="img"/>
    </div>
    <div className="carousel-item">
      <img src={slider2} className="d-block w-100 slideimg" alt="img"/>
    </div>
    <div className="carousel-item">
      <img src={slider3} className="d-block w-100 slideimg" alt="img"/>
    </div>
    <div className="carousel-item">
      <img src={slider4} className="d-block w-100 slideimg" alt="img"/>
    </div>
    <div className="carousel-item">
      <img src={slider5} className="d-block w-100 slideimg" alt="img"/>
    </div>
    <div className="carousel-item">
      <img src={slider6} className="d-block w-100 slideimg" alt="img"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
        </div>
    </div>
  );
}

export default Slider2;
