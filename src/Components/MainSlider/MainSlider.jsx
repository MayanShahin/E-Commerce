import React from 'react';
import styles from './MainSlider.module.css';
import Slider from 'react-slick';
import img1 from '../../Assets/images/slider-image-1.jpeg'
import img2 from '../../Assets/images/slider-image-2.jpeg'
import img3 from '../../Assets/images/slider-image-3.jpeg'


export default function MainSlider() {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
    <div className="container my-5">
      <div className="row gx-0" >
        <div className="col-md-8">
        <Slider {...settings}>
         <img src={img3} alt="" className='w-100'/>
         <img src={img1} alt="" className='w-100'/>
         <img src={img2} alt="" className='w-100' height={479.438}/>
        </Slider>
        </div>

        <div className="col-md-4">
          <img src={img1} className='w-100' alt="" />
          <img src={img2} className='w-100' height={239.719} alt="" />
        </div>
      </div>
    </div>

    </>
  )
}
