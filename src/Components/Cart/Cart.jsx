import React, { useContext, useEffect, useState } from 'react';
import styles from './Cart.module.css';
import { CartContext } from '../../Context/CartContext';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

export default function Cart(props) {
  const [cartDetails, setCartDetails] = useState({})

  let {getCart,deleteProductFromCart,updateProductQuantity,setNumOfCartItems} = useContext(CartContext)


  async function removeItem(id){
  let {data} = await deleteProductFromCart(id)
  console.log(data);
  setNumOfCartItems(data.numOfCartItems)
  setCartDetails(data)
  }

  async function UpdateCount(id,count){
    let {data} = await updateProductQuantity(id,count)
    console.log(data);
    setCartDetails(data)
    data?.data?.products.map((ele)=> {
      if(ele.count == 0){
        removeItem(ele.product._id)
      }
    })
    }

  async function getCartDetails(){
   let {data} = await getCart()
   console.log(data);
   setNumOfCartItems(data.numOfCartItems)
   setCartDetails(data)
  }

  useEffect(() => {
    getCartDetails()
  }, [])

  return (
    <>
    {cartDetails.data? <div className="container my-5">
        <div className="w-100 mx-auto bg-main-light p-5">
          <h2 className='mb-4'>Cart shop</h2>
          <div className="d-flex justify-content-between align-items-center">
            <h3 className='h5'>Total price : <span className='text-main'>{cartDetails.data.totalCartPrice} EGP</span></h3>
            <h3 className='h5'>Total cart item : <span className='text-main'>{cartDetails.numOfCartItems}</span></h3>
          </div> 
          {cartDetails.data.products.map((ele) => <div key={ele.product._id} className="row py-2 border-bottom">
            <div className="col-md-1">
              <img src={ele.product.imageCover} className='w-100' alt="" />
            </div>
            <div className="col-md-11">
              <div className="d-flex justify-content-between align-items-center">
                <div className="left-side">
                  <h4>{ele.product.title}</h4>
                  <p>{ele.price} EGP</p>
                  <button onClick={()=> removeItem(ele.product._id)} className='btn text-danger p-0'> <i className='fa fa-trash-can'></i> Remove </button>
                </div>
                <div className="right-side">
                  <button className='btn main-btn' onClick={()=> UpdateCount(ele.product._id, ele.count-1)}>-</button>
                  <span className='mx-2'>{ele.count}</span>
                  <button className='btn main-btn' onClick={()=> UpdateCount(ele.product._id, ele.count+1)}>+</button>
                </div>
              </div>
            </div>
          </div>
)}
          <Link className='btn bg-main w-100 my-5 text-white' to={'/checkout'}>Checkout</Link>

        </div>
      </div>: <Loader/>
}


      {/* {props.children} */}
    </>

  )
}
