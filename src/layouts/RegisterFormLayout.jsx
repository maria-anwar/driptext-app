import React from 'react'
import { Outlet, useNavigate, Link, useLocation } from "react-router-dom";
import { IoPersonOutline, IoBookSharp, IoBookOutline } from "react-icons/io5";

const RegisterFormLayout = () => {
  const location = useLocation();
  return (
    <div className="hidden w-full xl:flex border rounded-lg shadow-lg">
    <div className="w-[32%] 3xl:w-[30%] bg-dark-blue rounded-l-lg px-5 4xl:px-8 py-14 ">
      <div className="w-full flex flex-col gap-8 ">
        <div className="w-full flex items-center">
          <div className="w-[17%] ">
            <div className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center">
              <IoBookOutline size={18} color="blue-900" />
            </div>
          </div>
          <div className= {`max-w-max text-white xl:text-base 4xl:text-md font-light ${location.pathname === "/register/form" ? 'border-b-2 border-b-custom-yellow' : ''} `}>Text Information</div>
        </div>
        <div className="w-full flex items-center">
          <div className="w-[17%] ">
            <div className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center">
              <IoPersonOutline size={18} color="blue-900" />
            </div>
          </div>
          <div className={`max-w-max text-white xl:text-base 4xl:text-md font-light ${location.pathname === "/register/form/contact-details" ? 'border-b-2 border-b-custom-yellow' : ''} `}>Contact Details</div>
        </div>
      </div>
    </div>
    
    <Outlet/>   
  </div>
  )
}

export default RegisterFormLayout