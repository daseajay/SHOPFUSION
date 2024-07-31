import React, { useEffect } from "react";
import "./footer.css";
import countevid from "..//..//..//public/images/countevideo.mp4";
const Footer = () => {
  return (
    <div>
      <div className="container-fluid">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <div className="col mb-3 col-4 col-md-4 col-sm-4 col-lg-2">
            <h5 className="fw-normal fs-4">ABOUT US</h5>
            <ul className="nav flex-column ms-3">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3 col-4 col-md-4 col-sm-4 col-lg-2">
            <h5 className="fw-normal fs-4">SUBSCRIBE</h5>
            <ul className="nav flex-column ms-3">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3 col-4 col-md-4 col-sm-4 col-lg-2">
            <h5 className="fw-normal fs-4">USEFUL LINKS</h5>
            <ul className="nav flex-column ms-3">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3 col-4 col-md-4 col-sm-4 col-lg-2">
            <h5 className="fw-normal fs-4">FOLLOW US</h5>
            <ul className="nav flex-column ms-3 ">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3 col-4 col-md-4 col-sm-4 col-lg-2">
            <video
              src={countevid}
              controls
              preload=""
              loop
              className="fotvideo"
            ></video>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
