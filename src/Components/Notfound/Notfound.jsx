import React from 'react';
import styles from './Notfound.module.css';
import error from '../../Assets/images/error.svg'

export default function Notfound() {
  return (
    <>
    <div className="container my-5 d-flex justify-content-center">
    <img src={error} className='w-75' alt="" />
    </div>
    </>
  )
}
