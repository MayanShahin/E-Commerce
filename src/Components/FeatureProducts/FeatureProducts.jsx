import React, { useContext, useEffect, useState } from 'react';
import styles from './FeatureProducts.module.css';
import axios from 'axios';
import Loader from '../Loader/Loader';
import { useQuery } from 'react-query';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';


export default function FeatureProducts() {

  let {addToCart,setNumOfCartItems} = useContext(CartContext)


  function getProducts(){
   return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }

  let {data, isLoading, isFetching, refetch} = useQuery("featuredProducts", getProducts, {
    // cacheTime: 3000,
    // refetchOnMount: false
    // staleTime: 2000
  })

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
// console.log(data?.data.data);
// console.log("isLoading=>", isLoading);
// console.log("isFetching=>", isFetching);


//   const [allProducts, setAllProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   async function getAllProducts(){
//   let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
//  console.log(data);
//  setAllProducts(data.data);
//  setIsLoading(false)
// }

// useEffect(()=> {
//   getAllProducts()
// }, [])

  return (
    <>
    <div className="container py-5">
     {isLoading? <Loader/> :  <div className="row">
      {/* <button onClick={refetch} className='btn bg-main w-100 text-white'>Refetch</button> */}
        {data?.data?.data.map((ele)=> 
        <div key={ele.id} className="col-md-2"> 
        <div className="product overflow-hidden px-2 py-3">
        <Link to={'../details/' + ele.id}>
        <img src={ele.imageCover} className='w-100' alt={ele.title} />
            <p className='text-main'>{ele.category.name}</p>
            <h3 className='h6'>{ele.title.split(" ").slice(0,3).join(" ")}</h3>
            <div className="d-flex justify-content-between">
              <p>{ele.price}</p>
              <p>
                <i className='fa fa-star rating-color'></i>
                {ele.ratingsAverage}
              </p>
            </div>
        </Link>
            <button onClick={()=> addCart(ele.id)} className='btn bg-main text-white w-100'>Add to cart</button>
          </div>
        </div>
         )}
      </div>
   } 
    </div>
    </>
  )
}
