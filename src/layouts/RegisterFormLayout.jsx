import React from 'react'
import { Outlet} from "react-router-dom";
import { IoPersonOutline, IoBookSharp, IoBookOutline } from "react-icons/io5";
const RegisterFormLayout = () => {
  return (
    <div className="w-full flex border rounded-lg shadow-lg">
    <div className="w-[30%] bg-dark-blue rounded-l-lg px-8 py-14 ">
      <div className="w-full flex flex-col gap-8 ">
        <div className="w-full flex items-center">
          <div className="w-[17%] ">
            <div className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center">
              <IoBookOutline size={18} color="blue-900" />
            </div>
          </div>
          <div className={`max-w-max text-white text-md ${location.pathname === "/register/form" ? 'border-b-2 border-b-custom-yellow' : ''} `}>Text Information</div>
        </div>
        <div className="w-full flex items-center">
          <div className="w-[17%] ">
            <div className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center">
              <IoPersonOutline size={18} color="blue-900" />
            </div>
          </div>
          <div className={`max-w-max text-white text-md ${location.pathname === "/register/form/contact-details" ? 'border-b-2 border-b-custom-yellow' : ''} `}>Contact Details</div>
        </div>
      </div>
    </div>
    
    <Outlet/>   
  </div>
  )
}

export default RegisterFormLayout