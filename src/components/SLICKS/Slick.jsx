import React from "react";
import Slider from "react-slick";
import "./Slick.css"
import pic1 from "..//..//..//public/images/slick1.webp"
import pic2 from "..//..//..//public/images/slick2.webp"
import pic3 from "..//..//..//public/images/slick3.webp"
import pic4 from "..//..//..//public/images/slick4.webp"
import pic5 from "..//..//..//public/images/slick5.webp"
import pic6 from "..//..//..//public/images/slick6.webp"
import pic7 from "..//..//..//public/images/slick7.webp"
import pic8 from "..//..//../public/images/slick8.webp"
import pic9 from "..//..//..//public/images/slick9.webp"
import pic10 from "..//..//..//public/images/slick10.webp"

const Slick = () => {

  const slickimg = [
    {
      images: pic1,
    },
    {
      images: pic2,
    },
    {
      images: pic3,
    },
    {
      images: pic4,
    },
    {
      images: pic5,
    },
    {
      images: pic6,
    },
    {
      images: pic7,
    },
    {
      images:pic8,
    },
    {
      images: pic9,
    },
    {
      images: pic10,
    },
  ];

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <h3 className="slickhead">MEDAL WORTHY BRANDS TO BAG</h3>
        <div className="col-12 col-lg-12">
          <Slider {...settings}>
            {
              slickimg.map((img,ele)=>(
                <div key={ele}>
                  <img src={img.images} alt="imgs" className="slickdiv"/>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Slick;
