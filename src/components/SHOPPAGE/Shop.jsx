import React, { useEffect, useState } from "react";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import Slider2 from "../SLIDER2/Slider2";
import { Link } from "react-router-dom";
import Slick from "../SLICKS/Slick";
import axios from "axios";
import "./shop.css";
import Navbar from "../NAVBAR/Navbar";
import Footer from "../FOOTER/Footer";

const Shop = () => {

  const [products, setProducts] = useState([]);
  // how to set loader....
  const [loader, setLoader] = useState(true);

  //  filter usestate.....
  const [filterData, setFilterData] = useState([]);
  const [selected, setSelected] = useState("");

  console.log(filterData);

  useEffect(() => {
    if (selected === "" || selected === "All") {
      setFilterData(products);
    } else {
      const filterData = products.filter((item) => item.category == selected);
      setFilterData(filterData);
    }
  }, [selected, products]);

  const filteritems = (e) => {
    setSelected(e.target.value);
  };
  //  filter usestate End.....

  // shoting items.......
  const [sortOrder, setSortOrder] = useState("");
     
  useEffect(() => {
    if (sortOrder === "10-50") {
      setFilterData(prevData => [...prevData].sort((a, b) => a.price - b.price));
    } else if (sortOrder === "51-100") {
      setFilterData(prevData => [...prevData].sort((a, b) => a.price - b.price));
    }
  }, [sortOrder]);

  
     const Shoting = (e) =>{
      setSortOrder(e.target.value);
     }
  // shoting items.......


  // how to create red heart....
  const [isred, setIsred] = useState({});
  const handalheart = (id) => {
    setIsred((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  // how to create red heart end....
  const fatchdata = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
      // loading...
      setLoader(false);
    });
  };

  useEffect(() => {
    fatchdata();
  }, []);

  // leading.....
  if (loader) {
    return (
      <div className="text-dark">
        <div className="d-flex justify-content-center align-items-center vh-100">
          <img src="public/images/Leoding.gif" />
        </div>
      </div>
    );
  }


  return (
    <div>
      <Navbar />
      <div className=" mt-5 pt-5"></div>
      <Slider2 />
      <div className="container-fluid">
        <div className="row">
          <h2 className="shophead">Best Fashion Brand For You!</h2>
          <div className="col-6 mt-4">
            <select className="form-control w-75 m-auto fs-6" onChange={Shoting}>
              <option value="">Default.....</option>
              <option value="10-50">10 To 50</option>
              <option value="51-100"> 51 To 100</option>
            </select>
          </div>
          <div className="col-6 mt-4">
            <select
              className="form-control w-75 m-auto fs-6"
              onChange={filteritems}
            >
              <option value="">Search here.....</option>
              <option value="All">All</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">women's clothing</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
            </select>
          </div>
        </div>
        {/* fatch data */}
        <div className="row mt-5">
          {filterData.map((items, ele) => {
            return (
              <div
                className="col-lg-3 col-md-6 col-6 my-lg-2 my-1 bg-light"
                key={ele}
              >
                <div className="card p-lg-3 p-2 position-relative">
                  <img
                    src={items.image}
                    className="card-img-top homect"
                    alt="img"
                  />
                  {/* <IoHeartOutline className=" heatbtn {isred} position-absolute fw-bold top-0 end-0 fs-3 text-danger mt-1 mx-2 hover" onClick={(e)=>handalheart(e)}/> */}
                  {isred[items.id] ? (
                    <IoHeart
                      className="position-absolute fw-bold top-0 end-0 fs-3 text-danger mt-1 mx-2 hover"
                      onClick={() => handalheart(items.id)}
                    />
                  ) : (
                    <IoHeartOutline
                      className="position-absolute fw-bold top-0 end-0 fs-3 text-danger mt-1 mx-2 hover"
                      onClick={() => handalheart(items.id)}
                    />
                  )}

                  <div className="card-body d-flex justify-content-between ">
                    <h6 className="card-text">{items.title.slice(0, 12)}</h6>
                    <h6 className="card-text">just for &#8377;{items.price}</h6>
                  </div>
                  <Link to={`/item/${items.id}`} className="btn btn-danger">
                    BUY NOW
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Slick />
      <Footer />
    </div>
  );
};

export default Shop;
