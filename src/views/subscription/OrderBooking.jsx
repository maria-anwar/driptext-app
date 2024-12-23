import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/homeimages/driptext.png";
import OrderForm from "../../components/client-forms/OrderForm";
import useTitle from "../../hooks/useTitle";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer";

const OrderBooking = () => {
  const { t } = useTranslation();
  useTitle(t("orderPage.pageTitle"));
  return (
    <>
    <div className="px-4 sm:px-6 md-px-10 lg:px-14 xl:px-20 2xl:px-56 3xl:px-80 4xl:px-96 pb-10">
      <a
        href="https://driptext.de/"
        target="_self"
        className="w-full flex items-center justify-center pt-5 pb-5 sm:pb-7 md:pb-22"
      >
        <img
          src={Logo}
          alt="Logo"
          className="h-[23.5px] w-[120px]  md:w-[180px] md:h-[35.5px]"
        />
      </a>
      <div className="w-full flex d-flex flex-col gap-10">
        <div className="flex flex-col gap-4 4xl:gap-5 px-4 xs:px-6 md:px-9 3xl:px-11 4xl:px-12">
          <h1 className="text-custom-black text-2xl md:text-3xl font-bold text-center md:px-8">
            {t("orderPage.header")}
          </h1>
          <p className="text-center text-custom-black text-lg px-2">
            {t("orderPage.introText")}
          </p>
          <p className="text-center text-dark-blue text-lg px-2">
            <span className="text-center text-custom-black font-bold">
              {t("orderPage.disclaimerHighlightText")}&nbsp;
            </span>
            {t("orderPage.disclaimerText")}
          </p>
        </div>
        <OrderForm />
      </div>
    </div>
    <Footer />
    </>
  );
};

export default OrderBooking;
