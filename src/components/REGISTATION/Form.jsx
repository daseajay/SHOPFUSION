import React, { useState } from "react";
import "./Form.css";
import Slider from "react-slick";
import fm1 from "../../../public/images/fm1.jpg";
import fm2 from "../../../public/images/fm2.jpg";
import fm3 from "../../../public/images/fm3.jpg";
import fm4 from "../../../public/images/fm4.jpg";
import fm5 from "../../../public/images/fm5.jpg";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();
  // Form validation....
  const [formdata, setFormdata] = useState({ email: "", password: "" });
  const [formerror, setFormerror] = useState({});
  const handalForm = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  // how to store data in Localstorage....
  const storedata = () => {
    localStorage.setItem("Fmdata", JSON.stringify(formdata));
  };
  // how to store data in Localstorage End....

  const handlsumit = (e) => {
    e.preventDefault();
    if (validateform()) {
      console.log(formdata);
      navigate("/home");
    }
  };

  const validateform = () => {
    let isvalue = true;
    let errors = {};
    if (formdata.email === "") {
      errors.email = "Email is required";
      isvalue = false;
    }
    if (formdata.password === "") {
      errors.password = "Password is required";
      isvalue = false;
    }
    setFormerror(errors);
    return isvalue;
  };
  // Form validation - End....

  // slicks ....
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const imgs = [
    { img: fm1 },
    { img: fm2 },
    { img: fm3 },
    { img: fm4 },
    { img: fm5 },
  ];
  // slicks End ....
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-12 fmbg ">
          <div className="p-5 d-flex form-container flex-column justify-content-center align-items-center">
            <form
              className=" border shadow p-lg-5 p-4 rounded-3 bg-white"
              onSubmit={(e) => handlsumit(e)}
            >
              <div className="text-center fmheader">
                <h1>LOGIN FORM</h1>
              </div>
              <div className="mb-3 mt-3">
                <label className="form-label inpulb">Email address</label>
                <input
                  type="email"
                  className="form-control py-lg-2  inputst"
                  name="email"
                  value={formdata.email}
                  onChange={(e) => handalForm(e)}
                />
                {formerror.email && (
                  <span className="errmsg">{formerror.email}</span>
                )}
              </div>
              <div className="mb-3 mt-3">
                <label className="form-label py-lg-2 inpulb">Password</label>
                <input
                  type="password"
                  className="form-control py-2  inputst"
                  name="password"
                  value={formdata.password}
                  onChange={(e) => handalForm(e)}
                />
                {formerror.password && (
                  <span className="errmsg">{formerror.password}</span>
                )}
              </div>
              <div className="py-lg-0 py-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100"
                  onClick={() => storedata()}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <Slider {...settings}>
            {imgs.map((im, ele) => (
              <div key={ele}>
                <div>
                  <img src={im.img} alt="img" className="w-100 img-fluid" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Form;
