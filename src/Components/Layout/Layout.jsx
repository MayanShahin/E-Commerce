import React from 'react';
import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Toaster } from 'react-hot-toast';
import Home from '../Home/Home';



export default function Layout() {
  return (
    <>
    <Navbar />

    <Outlet />
    {/* <Home/> */}
    <Toaster />

    <Footer />
    </>
  )
}
