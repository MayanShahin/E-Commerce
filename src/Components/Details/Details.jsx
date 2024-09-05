import React, { useContext, useEffect, useState } from 'react';
import styles from './Details.module.css';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import Loader from '../Loader/Loader';
import Slider from 'react-slick';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';

export default function Details() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };


  const [details,setDetails] = useState({})
  const [isLoading,setIsLoading] = useState(true)

  let {addToCart,setNumOfCartItems} = useContext(CartContext)

  let params = useParams()
  console.log(params);
  
  async function getProductDetails(id){
   let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
   console.log(data);
   setDetails(data.data)
   setIsLoading(false)

  }

  async function addCart(id){
    let res = await addToCart(id)
    console.log(res, "helloxx");
    
    if(res.data.status == "success"){
      toast.success('product added successfully.');
      setNumOfCartItems(res.data.numOfCartItems)
    }else{
      toast.error('This is an error!');
    }
    
  }


  useEffect(()=> {
    getProductDetails(params.id)
  }, [])

  // let {data, isLoading, isError} = useQuery("details", ()=> getProductDetails(params.id))
  // let info = data.data.data;
  
  return (
    <>
    <div className="container">
      {isLoading? <Loader/> : <div className="row align-items-center">
        <div className="col-md-4">
        <Slider {...settings}>
          {details.images.map((ele,index)=> <img key={index} src={ele} className='w-100' alt="" />
          )}
        </Slider>
        <Helmet>
                <title>{details.title}</title>
        </Helmet>
        </div>
        <div className="col-md-8">
          <h3>{details.title}</h3>
          <p>{details.description}</p>
          <p>{details.category.name}</p> 
          <div className="d-flex justify-content-between">
            <h5>{details.price}</h5>
            <h5><i className='fa fa-star rating-color'></i>4.5</h5>
          </div>
          <button onClick={()=> addCart(details.id)} className='btn bg-main text-white w-100'>Add to cart</button>
          </div>
      </div> 
} 
    </div>
    </>
  )
}
