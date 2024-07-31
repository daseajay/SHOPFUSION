import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/HOMEPAGE/Home";
import About from "./components/ABOUTPAGE/About";
import Shop from "./components/SHOPPAGE/Shop";
import Form from "./components/REGISTATION/Form";
import Contact from "./components/CONTACTPAGE/Contact";
import Cart from "./components/CARTPAGE/Cart";
import Error from "./components/ERRORMESSAGE/Error";
import "./App.css";
import Item from "./components/PRODUCTS/Item";
const App = () => {
  const [cartcount, setCartcount] = useState(0);
  console.log("couuuuuu", cartcount);
  
  useEffect(() => {
    const existingProduct = localStorage.getItem("product");
    const productlist = existingProduct ? JSON.parse(existingProduct) : [];
    const totalitems = productlist.reduce(
      (acc, curr) => acc + curr.quantity,
      0
    );
    setCartcount(totalitems);
  }, []);

  const updataedCart = (newdata) => {
    setCartcount(newdata);
  };

  const getdata = JSON.parse(localStorage.getItem("Fmdata"));
  console.log(getdata);

  return (
    <div>
      <BrowserRouter>
        {/* <Navbar cartcount={cartcount} /> */}
        <Routes>
          {getdata?.email == null || getdata?.email == undefined ? (
            <Route path="/" element={<Form />} />
          ) : (
            <>
              <Route path="/" element={<Form />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route
                path="/item/:id"
                element={<Item updataedCart={updataedCart} />}
              />
              <Route path="/cart" element={<Cart updataedCart={() => {}} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Error />} />
            </>
          )}
        </Routes>
        {/* <Routes>
          <Route element={<ProductRouter />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/item/:id"
            element={<Item updataedCart={updataedCart} />}
          />
          <Route path="/login" element={<Form />} />
          <Route path="/cart" element={<Cart updataedCart={() => {}} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
