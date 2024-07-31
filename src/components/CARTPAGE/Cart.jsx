import React, { useEffect, useState } from "react";
import "./Cart.css";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Navbar from "../NAVBAR/Navbar";
import Footer from "../FOOTER/Footer";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const x = JSON.parse(localStorage.getItem("product"));
    setProduct(x || []);
  }, []);

  // Total quantity count
  const totalQuantity = product.reduce((acc, item) => acc + item.quantity, 0);

  // Total amount
  const totalAmount = product.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Handle delete from cart and localStorage
  const handleDelete = (id) => {
    const updatedProduct = product.filter((d) => d.id !== id);
    setProduct(updatedProduct);
    localStorage.setItem("product", JSON.stringify(updatedProduct));
  };

  // tostyfy....

  const notify = () => {
    toast.success("Order Confirming ");
  };

  return (
    <div>
      <ToastContainer
        position="top-right "
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
      <Navbar />
      <div className="mt-5 pt-5"></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-8 col-md-8">
            <table className="table border mt-4">
              <thead>
                <tr className="text-center">
                  <th scope="col">Items</th>
                  <th scope="col">Title</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {product.map((item, index) => (
                  <tr key={index} className="text-center">
                    <td>
                      <img src={item.image} alt="" height={60} width={60} />
                    </td>
                    <td className="my-5">{item.title.slice(0, 15)}</td>
                    <td className="my-5">{item.price}</td>
                    <td className="my-5">{item.quantity}</td>
                    <td className="my-5 fs-2 text-danger">
                      <AiOutlineDelete onClick={() => handleDelete(item.id)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link to="/shop" className="btn btn-primary">
              Go To Shop
            </Link>
          </div>
          <div className="col-lg-4 mt-4">
            <table className="table table-hover border">
              <thead>
                <tr className="text-center">
                  <th scope="col" className="text-primary">
                    Please Proceed
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total Quantity: {totalQuantity}</td>
                </tr>
                <tr>
                  <td>Total Amount: {totalAmount}</td>
                </tr>
              </tbody>
            </table>
            <button className="btn btn-danger w-100" onClick={notify}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
