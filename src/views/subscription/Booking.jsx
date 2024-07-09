import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/homeimages/driptext.png";
import OnboardingForm from "../../components/client-forms/OnboardingForm";

const Booking = () => {
  return (
    <div className="px-4 sm:px-6 md-px-10 lg:px-14 xl:px-20 2xl:px-56 4xl:px-80 py-10">
      <Link
        to="/"
        className="w-full flex items-center justify-center py-2 pb-5 sm:pb-7 md:pb-8"
      >
        <img
          src={Logo}
          alt="driptext"
          className=" w-20 xs:w-24 md:w-28 xl:w-32 3xl:w-36 4xl:w-40"
        />
      </Link>
      <div className="w-full flex d-flex flex-col gap-10">
        <div className="flex flex-col gap-4 px-4 xs:px-6 md:px-9">
          <h1 className="text-dark-blue text-2xl md:text-3xl font-bold text-center md:px-8">
            Thank you for your booking !
          </h1>
          <h3 className="text-center text-dark-blue text-xl font-bold">
            Here's what happens next:
          </h3>
          <p className="text-center text-dark-blue text-lg px-2">
            Fill out the onboarding form below so we can get to know your
            company and your content goals better.
          </p>
        </div>
        <OnboardingForm />
      </div>
    </div>
  );
};

export default Booking;
