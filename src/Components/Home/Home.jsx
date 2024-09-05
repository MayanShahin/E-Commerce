import React from 'react';
import styles from './Home.module.css';
import Cart from '../Cart/Cart';
import Categories from '../Categories/Categories';
import MainSlider from '../MainSlider/MainSlider';
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider';
import { Helmet } from 'react-helmet';
import Loader from '../Loader/Loader';
import FeatureProducts from '../FeatureProducts/FeatureProducts';

export default function Home() {
  return (
    <>
     <Helmet>
        <title>Home page</title>
      </Helmet>

    {/* <Loader/> */}

    <MainSlider/>
    <CategoriesSlider/>
    <FeatureProducts/>
    </>
  )
}
