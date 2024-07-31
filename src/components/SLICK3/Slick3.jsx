import React from 'react';
import "./Slick3.css"
import Slider from "react-slick";
import client1 from "..//..//..//public/images/client-1.png"
import client2 from "..//..//..//public/images/client-2.png"
import client3 from "..//..//..//public/images/client-3.png"
import client4 from "..//..//..//public/images/client-4.png"
const Slick3 = () => {
  const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };

   const Logclk = [
      {
        img:client1,
      },
      {
        img:client2,
      },
      {
        img:client3,
      },
      {
        img:client4,
      },
   ]
  
  return (
    <div>
      <Slider {...settings} className=' py-lg-4 py-4 sld'>
        {
          Logclk.map((log,ele)=>(
            <div key={ele} className='mt-lg-3 mt-1'>
              <img src={log.img} alt="img" className='slkimg'/>
            </div>
          ))
        }
      </Slider>
    </div>
  );
}

export default Slick3;
