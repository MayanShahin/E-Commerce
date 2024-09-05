import React, { useEffect, useState } from 'react';
import styles from './CategoriesSlider.module.css';
import axios from 'axios';
import Slider from 'react-slick';

export default function CategoriesSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay:true,
  };

  const [categories,setCategories] = useState([])

  async function getCategories(){
  let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
 console.log(data);
 setCategories(data.data)
}

useEffect(()=> {
    getCategories()
}, [])

  return (
    <>
      <div className="container my-5">
        <h3>Show Popular Categories</h3>
        <Slider {...settings} >
          {categories.map(cat => <div className="item">
          <img src={cat.image} height={200} className=' w-100' alt="" />
          <h6 className='pt-1 mb-0'>{cat.name}</h6>
        </div>
        )}
        </Slider>
      </div>
    </>
  )
}
