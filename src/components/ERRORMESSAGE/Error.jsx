import React from 'react';
import errorvi from "..//..//.//../public/images/Errormsg.gif"
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div className='vh-90'>
      <div className='mt-5 pt-5'></div>
      <div className='d-flex justify-content-center align-items-center'>
         <div>
             <img src={errorvi} alt="error"/>
             <h3 className='text-center'>We can't find the page you're looking for</h3>
             <div className='text-center mt-4'>
             <Link to="/" className='btn btn-danger'>Go Back Home</Link>
             </div>
         </div>
      </div>
    </div>
  );
}

export default Error;
