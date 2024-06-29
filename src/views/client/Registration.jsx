import React from "react";
// import FormDetail from "../../components/forms/FormDetail";
// import { GroupField } from "../../components/forms/mobile/GroupField";
// import RegistrationForm from "../../components/forms/mobile/RegistrationForm";
// import RegisterForms from "../../components/forms/RegisterForms";
import { Outlet } from "react-router-dom";

const Registration = () => {
  return (
    <>
      <div className="border border-red-500 px-4 sm:px-6 md-px-10 lg:px-14 xl:px-20 2xl:px-56 py-10">
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
          {/* <RegistrationForm/> */}
          <RegisterForms />
          
        </div>
      </div>
    </>
  );
};

export default Registration;
