import React from 'react';
import "./Slider.css"
const Slider = () => {
  return (
    <div>
      <div id="carouselExampleInterval" className="carousel slide slidebg" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active d-flex flex-row justify-content-between" data-bs-interval="10000">
      <div className=" d-flex flex-column justify-content-center align-items-center">
        <div className="sliderhead">
        <h3 className='smart'>Smart Products</h3>
        <h1 className='winter'>Winter Offer <br/> 2024 Collection</h1>
        <button className='slider-btn'>SHOW NOW</button>
        </div>
      </div>
      <img src="https://flone.jamstacktemplates.dev/assets/img/slider/single-slide-hm1-2.png" className="d-block w-50 mt-4" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
}

export default Slider;
