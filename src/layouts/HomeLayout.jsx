import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from '../views/Footer';
import Header from '../components/Header';

const HomeLayout = () => {
  return (
    <>
    <div>
      <Header/>
      <div>
        <Outlet />
      </div>
      <Footer/>
    </div>
  </>
  )
}

export default HomeLayout