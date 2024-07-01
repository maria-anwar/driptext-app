import React from "react";
import Logo from "../assets/homeimages/driptext.png";
import { Outlet, Link } from "react-router-dom";
import RegistrationForm from "../components/forms/mobile/RegistrationForm";


const Registration = () => {
  return (
    <>
      <div className="px-4 sm:px-6 md-px-10 lg:px-14 xl:px-20 2xl:px-56 py-10">
        <Link to='/' className="w-full flex items-center justify-center py-2 pb-5 sm:pb-7 md:pb-8">
           <img src={Logo} alt='driptext' className=" w-20 xs:w-24 md:w-28 xl:w-32 3xl:w-36 4xl:w-40" /> 
        </Link>
        <div className="w-full flex d-flex flex-col gap-10">
          <div className="flex flex-col gap-4 px-4 xs:px-6 md:px-9">
            <h1 className="text-dark-blue text-2xl md:text-3xl font-bold text-center md:px-8">
              Order your free sample text worth 105,00 € now
            </h1>
            <p className="text-center text-dark-blue text-lg px-2">
              Please send us all the information about your sample text. We will
              get to work right away to create an excellent sample text for you!
            </p>
          </div>
          <RegistrationForm/>
          {/* <RegisterForms /> */}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Registration;
