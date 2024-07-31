import React, { useEffect, useState } from 'react';
import "./item.css"
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../NAVBAR/Navbar';

const Item = ({updataedCart}) => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState({});
    
  const fetchData = () => {
    axios.get("https://fakestoreapi.com/products/" + id).then((res) => {
      res.data.quantity = 1; // we are extra add the quantity
      setProducts(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // increment count 
  const handleAdd = () => {
    const increment = {
      ...products,
      quantity: products.quantity + 1
    };
    setProducts(increment);
  };

  // decrement count
  const handleRemove = () => {
    if (products?.quantity > 1) {
      const decrement = {
        ...products,
        quantity: products.quantity - 1
      };
      setProducts(decrement);
    }
  };

  // how to show navbar counter....
  const handleCart = () => {
    const existingProduct = localStorage.getItem("product");
    const productList = existingProduct ? JSON.parse(existingProduct) : [];
    const existingProductIndex = productList.findIndex((p) => p.id === products.id);
    if (existingProductIndex > -1) {
      productList[existingProductIndex].quantity += products.quantity;
    } else {
      productList.push(products);
    }
    localStorage.setItem("product", JSON.stringify(productList));
    const totalItems = productList.reduce((acc, cur) => acc + cur.quantity, 0);
    updataedCart(totalItems);
    navigate('/cart');
    location.reload()
  };
  return (
    <>
    <Navbar />
    <div className='mt-2 p-2'>
         <div className='mt-5 pt-5'></div>
         <div className='container'>
           <div className="row">
            <div className="col-lg-6 col-12 text-center mt-2">
              <img src={products.image} alt="" className='itmeimg'/>
            </div>
            <div className="col-lg-6 col-12">
              <div className='mt-lg-5 mt-4'>
              <h2>{products.title}</h2> 
              <h4>{products.category}</h4> 
              <p>{products.description}</p>
              <span className='sppri'>&#x20B9; {products.price * products.quantity}</span>
              <span className='sprat'>{products?.rating?.rate} &#9733;</span>
                <button className='btn btn-danger mx-3' onClick={handleAdd}>+</button>
                <span>{products?.quantity}</span>
                <button className='btn btn-danger ms-3' onClick={handleRemove}>-</button>
              </div>
              <div className='mt-3'>
              <Link className='btn btn-outline-danger me-2' onClick={handleCart}>Add To Cart</Link>
              <Link to="/shop" className='btn btn-outline-primary'>Goto Shop</Link>
              </div>
            </div>
           </div>
         </div>
    </div>
    </>
    
  );
}

export default Item;
