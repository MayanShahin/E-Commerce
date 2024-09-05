import React, { useContext, useState } from 'react';
import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/images/logo.webp';
import { counterContext } from '../../Context/Counter';
import { TokenContext } from '../../Context/Token';
import { CartContext } from '../../Context/CartContext';

export default function Navbar() {

 let {Counter} = useContext(counterContext);
 let {token,setToken} = useContext(TokenContext);
 let {numOfCartItems} = useContext(CartContext);
 let navigate = useNavigate()
//  console.log(Counter);
//  console.log(token,"Token:");


 function logOut(){
  localStorage.removeItem("userToken")
  setToken(null)
  navigate("/login")
 }

  return (
    <>  
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container">
    <Link className="navbar-brand" to={'home'}>
    <img src={logo} className='logo' alt="" /> 
    <span>FreshCart</span>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {token ?       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to={'home'}>
          Home
          </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" aria-current="page" to={'products'}>
          Products
          </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" aria-current="page" to={'brands'}>
          Brands
          </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" aria-current="page" to={'categories'}>
          Categories
          </Link>
        </li>
      </ul>  : null}

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">


      <li className="nav-item align-self-center">
     <i className='fa-brands fa-instagram mx-1'></i>
     <i className='fa-brands fa-facebook mx-1'></i>
     <i className='fa-brands fa-linkedin mx-1'></i>
     <i className='fa-brands fa-twitter mx-1'></i>
      </li>


      {token ?  <>
      <div className='d-flex'>
       <li className="nav-item">
          <button className="nav-link" onClick={logOut} aria-current="page">
            Logout
          </button> 
      </li> 
      <li className="nav-item">
          <Link className="nav-link" aria-current="page" to={'cart'}>
          <i className='fa fa-shopping-cart text-main '></i>
          <span>{numOfCartItems}</span>
          </Link>
      </li>
          </div> </>   :  
      <>
      <li className="nav-item">
          <Link className="nav-link" aria-current="page" to={'register'}>
            Register
          </Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link" aria-current="page" to={'login'}>
            Login
          </Link>
      </li>
        </> }
 
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
