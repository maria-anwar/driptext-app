import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from '../views/Footer';

const HomeLayout = () => {
  return (
    <>
    <div>
      <div>
        <Outlet />
      </div>
      <Footer/>
    </div>
  </>
  )
}

export default HomeLayout