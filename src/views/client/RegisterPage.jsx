import React from "react";
import RegistrationForm from "../../components/client-forms/RegistrationForm";

const RegisterPage = () => {
  return (
    <div className="px-4 xs:px-5 sm:px-6 md-px-10 lg:px-14 xl:px-20 2xl:px-56 py-10 border border-red-800">
      <div className="w-full flex d-flex flex-col gap-10 border ">
        <div className="flex flex-col gap-4 px-4 xs:px-6 md:px-9">
          <h1 className="text-custom-black text-2xl md:text-3xl font-bold text-center md:px-8">
            Order your free sample text worth 105,00 € now
          </h1>
          <p className="text-center text-custom-black text-lg px-2">
            Please send us all the information about your sample text. We will
            get to work right away to create an excellent sample text for you!
          </p>
          <h3 className="text-custom-black text-lg md:text-xl font-bold text-center md:px-8">
            Please answer the following questions for the briefing:
          </h3>
        </div>
      </div>
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;
