import React, { useEffect, useState } from "react";
import Slider from "../SLIDER/Slider";
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import "./home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../FOOTER/Footer";
import Navbar from "../NAVBAR/Navbar";

const Home = () => {
  const [itemlist, Setitemlist] = useState([]);
  // how create loading ...
  const [loading, setLoading] = useState(true);
  const fatch = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      Setitemlist(res.data);
      // loading....
      setLoading(false);
    });
  };

  useEffect(() => {
    fatch();
  }, []);

  if (loading) {
    return (
      <div className="text-dark">
        <div className="d-flex justify-content-center align-items-center vh-100">
          <img src="public/images/Leoding.gif" />
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className=" mt-5 pt-5"></div>
      <Slider />
      <div className="container-fluid">
        <div className="row mt-5">
          <div className=" dflex col-12 col-md-6 col-lg-3">
            <img
              src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-1.png"
              alt=""
              className="img-fluid imgs"
            />
            <div className="ms-lg-3 ms-2">
              <h5>Free Shipping</h5>
              <p>Free shipping on all order</p>
            </div>
          </div>
          <div className=" dflex col-12 col-md-6 col-lg-3">
            <img
              src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-4.png"
              alt=""
              className="img-fluid imgs"
            />
            <div className="ms-lg-3 ms-2 mt-lg-0 mt-3">
              <h5>Free Shipping</h5>
              <p>Free shipping on all order</p>
            </div>
          </div>
          <div className=" dflex col-12 col-md-6 col-lg-3">
            <img
              src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-2.png"
              alt=""
              className="img-fluid imgs"
            />
            <div className="ms-lg-3 ms-2 mt-lg-0 mt-3">
              <h5>Free Shipping</h5>
              <p>Free shipping on all order</p>
            </div>
          </div>
          <div className=" dflex col-12 col-md-6 col-lg-3">
            <img
              src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-3.png"
              alt=""
              className="img-fluid imgs"
            />
            <div className="ms-lg-3 ms-2 mt-lg-0 mt-3">
              <h5>Free Shipping</h5>
              <p>Free shipping on all order</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-lg-5 mt-3 py-lg-3" id="daily">
          <h1 className="daily fs-2">DAILY DEALS!</h1>
          <div className="d-flex justify-content-center align-items-center">
            <div className="mx-3 mt-lg-4 mt-2 fw-bold">New Arrivals</div>
            <div className="mx-3 mt-lg-4 mt-2 ">Best Sellers</div>
            <div className="mx-3 mt-lg-4 mt-2 "> Sale Items</div>
          </div>
        </div>

        <div className="row mt-5">
          {itemlist.map((items, ele) => (
            <div className="col-lg-3 col-6 my-2 rounded-4" key={ele}>
              <div className="card p-lg-3 p-2 text-center position-relative">
                <img
                  src={items.image}
                  className="card-img-top w-75 m-auto my-2"
                  alt="images"
                />
                <p className=" position-absolute  top-0 end-0 pos">-50%</p>
                <div className="d-flex justify-content-evenly align-items-center heareye">
                  <div className="heareye px-2">
                    <h3 className="text-white border-0">
                      <CiHeart />
                    </h3>
                  </div>
                  <div className="heareye flex-grow-1 h-100">
                    <Link className="btn text-white border-0">Shop Now</Link>
                  </div>
                  <div className="heareye px-2">
                    <h3 className="text-white">
                      <FaRegEye />
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
