import React, { useContext } from 'react';
import styles from './Brands.module.css';
import { counterContext } from '../../Context/Counter';
import { Helmet } from 'react-helmet';

export default function Brands() {

  let {Counter,increase} = useContext(counterContext)
  return (
    <>
      <Helmet>
        <title>Brands page</title>
      </Helmet>

    <h3>
      Brands {Counter} 
    </h3>
    <button onClick={increase} className='btn btn-danger'>click</button>
    </>
  )
}
