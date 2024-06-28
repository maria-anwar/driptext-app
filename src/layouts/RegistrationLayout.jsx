import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "/public/driptext-logo.png";
import RegistrationForm from "../components/forms/mobile/RegistrationForm";

const Registration = () => {
  return (
    <>
      <div className="px-4 sm:px-6 md-px-10 lg:px-14 xl:px-18 2xl:px-20 3xl:px-28 4xl:px-56 py-10">
        <div className="w-full flex items-center justify-center py-4 4xl:py-6 xs:pb-8 4xl:pb-12">
          <Link to="/">
            <img
              src={logo}
              alt="driptext"
              className="w-24 xs:w-28 lg:w-32 xl:w-36"
            />
          </Link>
        </div>
        <div className="w-full flex d-flex flex-col gap-10">
          <div className="flex flex-col gap-4 px-4 xs:px-6 md:px-9">
            <h1 className="text-dark-blue text-2xl md:text-3xl 3xl:text-4xl font-bold text-center md:px-8">
              Order your free sample text worth 105,00 € now
            </h1>
            <p className="text-center text-dark-blue text-lg px-2">
              Please send us all the information about your sample text. We will
              get to work right away to create an excellent sample text for you!
            </p>
          </div>
          <RegistrationForm />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Registration;
