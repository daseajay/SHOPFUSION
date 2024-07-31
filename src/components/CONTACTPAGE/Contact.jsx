import React, { useState } from "react";
import { MdPhone } from "react-icons/md";
import { FaEarthAsia } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./Contaxt.css";
import Navbar from "../NAVBAR/Navbar";
const Contact = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    sub: "",
    detail: "",
  });
  const [formerror, setFormerror] = useState({});

  const haldalinput = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handalsum = (e) => {
    e.preventDefault();
    if (fomvalidtion()) {
      console.log(formdata);
    }
  };

  const fomvalidtion = () => {
    let isvalu = true;
    let errors = {};
    if (formdata.name === "") {
      errors.name = "name is requierd";
      isvalu = false;
    }
    if (formdata.email === "") {
      errors.email = "email is requierd";
      isvalu = false;
    }
    if (formdata.sub === "") {
      errors.sub = "subject is requierd";
      isvalu = false;
    }
    if (formdata.detail === "") {
      errors.detail = " details is requierd";
      isvalu = false;
    }
    setFormerror(errors);
    return isvalu;
  };

  const storedata = () => {
    localStorage.setItem("userlist", JSON.stringify(formdata));
  };

  return (
    <div>
      <Navbar />
      <div className="pt-5 mt-5"></div>
      <div className=" bg-light text-center conheddv">
        <h1>Home/Contact</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12 ifdv">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d30443.221309984183!2d78.3941632!3d17.4882816!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1721911493119!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="ifmap"
            ></iframe>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 bg-light mt-2 p-5">
            <div className="d-flex align-items-center">
              <div>
                <MdPhone className="iconcont" />
              </div>
              <div className="ms-2">
                <p>+012 345 678 102</p>
                <p>+012 345 678 102</p>
              </div>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div>
                <FaEarthAsia className=" iconcont" />
              </div>
              <div className="ms-2">
                <p>daseajayinfo@gmail.com</p>
                <p>ghrish1903@gmail.com</p>
              </div>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div>
                <CiLocationOn className="iconcont" />
              </div>
              <div className="ms-2">
                <p>Address goes here,</p>
                <p>street, Crossroad 123.</p>
              </div>
            </div>
            <h2 className="text-center mt-3">Follow Us</h2>
            <div className="text-center">
              <GrFacebookOption className="fs-3 mx-4" />
              <FaInstagram className="fs-3 me-4" />
              <FaLinkedinIn className="fs-3 me-4" />
              <FaTwitter className="fs-3 me-4" />
            </div>
          </div>
          <div className="col-lg-7 bg-light mt-2 p-5">
            <form
              className="row g-3 align-items-center"
              onSubmit={(e) => handalsum(e)}
            >
              <h3>Get In Touch</h3>
              <div className="col-auto w-50">
                <input
                  type="text"
                  className="form-control py-lg-3 py-2"
                  placeholder="Name*"
                  name="name"
                  value={formdata.name}
                  onChange={(e) => haldalinput(e)}
                />
                {formerror.name && (
                  <span className="text-danger">{formerror.name}</span>
                )}
              </div>
              <div className="col-auto w-50">
                <input
                  type="email"
                  className="form-control py-lg-3 py-2"
                  placeholder="Email*"
                  name="email"
                  value={formdata.email}
                  onChange={(e) => haldalinput(e)}
                />
                {formerror.email && (
                  <span className="text-danger">{formerror.email}</span>
                )}
              </div>
              <div className="">
                <input
                  type="text"
                  className="form-control py-lg-3 py-2"
                  placeholder="subject*"
                  name="sub"
                  value={formdata.sub}
                  onChange={(e) => haldalinput(e)}
                />
                {formerror.sub && (
                  <span className="text-danger">{formerror.sub}</span>
                )}
              </div>
              <div>
                <textarea
                  className="form-control"
                  placeholder="Your message*"
                  name="detail"
                  value={formdata.detail}
                  onChange={(e) => haldalinput(e)}
                />
                {formerror.detail && (
                  <span className="text-danger">{formerror.detail}</span>
                )}
              </div>
              <input
                className="btn btn-warning p-2 fw-bolder"
                type="submit"
                value="register"
                onClick={() => storedata()}
              ></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// {formerror.email&&<span className="errmsg">{formerror.email}</span>}
