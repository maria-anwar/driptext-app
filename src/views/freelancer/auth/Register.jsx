import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/homeimages/driptext.png";
// import OnboardingForm from "../../../components/client-forms/OnboardingForm";
import OrderForm from "../../../components/client-forms/OrderForm";
import RegisterForm from "../../../components/freelancer/forms/RegisterForm";
import useTitle from "../../../hooks/useTitle";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t } = useTranslation();
  useTitle(t("registerFreelancerPage.pageTitle"));
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
            {t("registerFreelancerPage.heading")}
          </h1>
          <p className="text-center text-custom-black text-lg px-2">
            {t("registerFreelancerPage.description")}{" "}
          </p>
        </div>
        <RegisterForm />
        {/* <OrderForm /> */}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex  gap-y-6 justify-between items-center py-4 border-gray-300 ">
          <div className="flex items-center">
            <img src={Logo} alt="Footer Logo" className="h-6 w-auto mr-2" />
            <span className="text-gray-700 font-semibold"></span>
          </div>

          <div className="flex  flex-col md:flex-row gap-y-2 gap-x-4">
            <a
              target="_blank"
              href="https://driptext.de/agb/"
              className="text-gray-600 "
            >
              {t("thankYouPage.footer.footerLinks.0.text")}
            </a>
            <a
              target="_blank"
              href="https://driptext.de/impressum/"
              className="text-gray-600 "
            >
              {t("thankYouPage.footer.footerLinks.1.text")}
            </a>
            <a
              target="_blank"
              href="https://driptext.de/datenschutz/"
              className="text-gray-600 "
            >
              {t("thankYouPage.footer.footerLinks.2.text")}
            </a>
            <a
              target="_blank"
              href="https://driptext.de/datenschutz/"
              className="text-gray-600 "
            >
              {t("thankYouPage.footer.footerLinks.3.text")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
