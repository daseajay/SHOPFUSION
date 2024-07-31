import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { PiUserSwitchThin } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiShoppingBagLight } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [cartcount, setCartcount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const existingProduct = localStorage.getItem("product");
    const productlist = existingProduct ? JSON.parse(existingProduct) : [];
    const totalitems = productlist.reduce(
      (acc, curr) => acc + curr.quantity,
      0
    );
    setCartcount(totalitems);
  }, []);
  
  const logOut = () => {
    localStorage.removeItem("Fmdata");
    navigate("/");
  };
  return (
    <div>
      <nav className="navbar bg-white fixed-top py-lg-4">
        <div className="container-fluid lg-mx-5">
          <a className="navbar-brand " href="#">
            <img
              src="https://flone.jamstacktemplates.dev/assets/img/logo/logo.png"
              alt=""
              height={40}
            />
          </a>
          {/* logo ending */}

          {/* navlinks start */}
          <div className="offcanvas-body d-none d-lg-block">
            <ul className=" navul navbar-nav d-flex flex-row justify-content-center align-items-center">
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active mx-3"
                  aria-current="page"
                  href="/about"
                >
                  Aboute
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active mx-3"
                  aria-current="page"
                  href="/shop"
                >
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active mx-3"
                  aria-current="page"
                  href="/cart"
                >
                  Cart
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active mx-3"
                  aria-current="page"
                  href="/contact"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Navlinks ending */}

          <div className=" d-none d-lg-block ">
            <div className=" d-flex flex-row justify-content-center align-items-center me-5">
              <div
                className="icondivs "
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <PiUserSwitchThin
                  className="text-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
              <div className="icondivs">
                <IoMdHeartEmpty className="text-danger" />
                <span className="coutspan">0</span>
              </div>
              <div className="icondivs">
                <Link to="/cart" className="text-dark">
                  <PiShoppingBagLight className="ico" />
                </Link>
                <span className="coutspan">{cartcount}</span>
              </div>
              <div className="icondivs ms-3">
                <Link to="/" className="text-dark">
                  <FiLogOut className="ico" onClick={logOut} />
                </Link>
              </div>
            </div>
          </div>

          {/* small device  */}
          <button
            className="navbar-toggler d-lg-none d-md-block d-block"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end w-75"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <img
                src="https://flone.jamstacktemplates.dev/assets/img/logo/logo.png"
                alt=""
                height={33}
              />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="smnav navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/about"
                  >
                    Aboute
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/shop"
                  >
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/cart"
                  >
                    Cart
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="contact"
                  >
                    Contact Us
                  </a>
                </li>
                <ul className="d-flex flex-row justify-content-center align-items-center list-unstyled">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="contact"
                    >
                      <div className="icondivs">
                        <PiUserSwitchThin className="text-primary" />
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="contact"
                    >
                      <div className="icondivs">
                        <IoMdHeartEmpty className="text-danger" />
                        <span className="coutspan">0</span>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="contact"
                    >
                      <div className="icondivs">
                        <Link to="/cart" className="text-dark">
                          <PiShoppingBagLight className="ico" />
                        </Link>
                        <span className="coutspan">{cartcount}</span>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="contact"
                    >
                      <div className="icondivs">
                        <Link to="/cart" className="text-dark">
                          <FiLogOut className="ico" onClick={logOut} />
                        </Link>
                      </div>
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
          {/* small ending */}
          {/* <div className=" d-none d-lg-block ">
            <div className=" d-flex flex-row justify-content-center align-items-center me-5">
              <div className="icondivs">
                <PiUserSwitchThin className="text-primary" />
              </div>
              <div className="icondivs">
                <IoMdHeartEmpty className="text-danger" />
                <span className="coutspan">0</span>
              </div>
              <div className="icondivs">
                <Link to="/cart" className="text-dark">
                  <PiShoppingBagLight className="ico" />
                </Link>
                <span className="coutspan">{cartcount}</span>
              </div>
            </div>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
