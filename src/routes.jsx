import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from './layouts/HomeLayout';
import Home from './views';
import Registration from './views/client/Registration';



const WebRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/client/register" element={<Registration/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default WebRoutes