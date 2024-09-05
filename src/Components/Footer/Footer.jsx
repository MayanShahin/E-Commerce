import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className='d-none'>
        <div className='bg-main-light fixed-bottom p-4'>
          <h5 className='bold'>Get the FreshCart app</h5>
          <p>We will send you a link, it on your phone to download the app</p>

          <div className="container-fluid px-4">
            <div className="row">
              <div className="col-md-10 mb-2">
                <input class="form-control" type="email" placeholder='Email..' />
              </div>
              <div className="col-md-2 mb-2">
                <button className='btn bg-main text-white'>Share App Link</button>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-6">
                <div className="d-flex">
                  <h6 className='me-2 bold'>Payment Paterns</h6>
                  <div>
                    <i class="fa-brands fa-amazon-pay fa-l ms-2"></i>
                    <i class="fa-brands fa-cc-mastercard fa-l ms-2"></i>
                    <i class="fa-brands fa-cc-visa fa-l ms-2"></i>
                    <i class="fa-brands fa-paypal fa-l ms-2"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="d-flex align-items-center ">
                <h6 className='bold me-3'>Get deliveries with FreshCart</h6>
                <div className='download w-25 col-3 me-2 bg-dark cursor-pointer rounded-2 text-center text-white py-2'>
                <i class="fa-brands fa-apple fa-xl pe-2 "></i>App Store</div>
                <div className='download w-25 col-3 bg-dark cursor-pointer rounded-2 text-center text-white py-2'>
                <i class="fa-brands fa-google-play fa-xl pe-2 "></i>Google Play</div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </footer>
    </>
  )
}

