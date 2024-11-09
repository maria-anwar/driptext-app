import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/homeimages/driptext.png";
// import OnboardingForm from "../../../components/client-forms/OnboardingForm";
import OrderForm from "../../../components/client-forms/OrderForm";
import RegisterForm from "../../../components/freelancer/forms/RegisterForm";


const Register = () => {
  return (
    <div className="px-4 sm:px-6 md-px-10 lg:px-14 xl:px-20 2xl:px-56 3xl:px-80 4xl:px-96 py-10">
      <Link
        to="/"
        className="w-full flex items-center justify-center py-2 pb-5 sm:pb-7 md:pb-8 xl:pb-10 2xl:pb-18 3xl:pb-18 4xl:pb-20"
      >
        <img
          src={Logo}
          alt="driptext"
          className=" w-20 xs:w-24 md:w-28 xl:w-32 3xl:w-36 4xl:w-40"
        />
      </Link>
      <div className="w-full flex d-flex flex-col gap-10">
        <div className="flex flex-col gap-4 4xl:gap-5 px-4 xs:px-6 md:px-9 3xl:px-11 4xl:px-12">
          <h1 className="text-custom-black text-2xl md:text-3xl font-bold text-center md:px-8">
          Onboarding Formular für freie Texter/innen und Lektor/innen
          </h1>
          <p className="text-center text-custom-black text-lg px-2">
          Fülle das folgende Formular aus, damit wir dich als Texter/in oder Lektor/in bei DripText registrieren können.
          </p>
        </div>
        <RegisterForm/>
        {/* <OrderForm /> */}
      </div>
    </div>
  );
};

export default Register;
