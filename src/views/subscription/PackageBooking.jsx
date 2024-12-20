import logo from "../../assets/homeimages/driptext.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import PricingCard from "../../components/cards/PricingCard";
import useTitle from "../../hooks/useTitle";
import { useTranslation } from "react-i18next";

const PackageBooking = () => {
  const { t } = useTranslation();
  useTitle(t("packageBooking.pageTitle"));
  const [selectedTexts, setSelectedTexts] = useState(8);
  const plansForTexts = {
    4: [
      {
        name: t("packageBooking.plansForTexts.4.0.name"),
        price: t("packageBooking.plansForTexts.4.0.price"),
        month: t("packageBooking.plansForTexts.4.0.month"),
        wordPrice: t("packageBooking.plansForTexts.4.0.wordPrice"),
        features: t("packageBooking.plansForTexts.4.0.features"),
      },
      {
        name: t("packageBooking.plansForTexts.4.1.name"),
        price: t("packageBooking.plansForTexts.4.1.price"),
        month: t("packageBooking.plansForTexts.4.1.month"),
        wordPrice: t("packageBooking.plansForTexts.4.1.wordPrice"),
        features: t("packageBooking.plansForTexts.4.1.features"),
      },
      {
        name: t("packageBooking.plansForTexts.4.2.name"),
        price: t("packageBooking.plansForTexts.4.2.price"),
        month: t("packageBooking.plansForTexts.4.2.month"),
        wordPrice: t("packageBooking.plansForTexts.4.2.wordPrice"),
        features: t("packageBooking.plansForTexts.4.2.features"),
        bestValue: true,
      },
    ],
    8: [
      {
        name: t("packageBooking.plansForTexts.8.0.name"),
        price: t("packageBooking.plansForTexts.8.0.price"),
        month: t("packageBooking.plansForTexts.8.0.month"),
        wordPrice: t("packageBooking.plansForTexts.8.0.wordPrice"),
        features: t("packageBooking.plansForTexts.8.0.features"),
      },
      {
        name: t("packageBooking.plansForTexts.8.1.name"),
        price: t("packageBooking.plansForTexts.8.1.price"),
        month: t("packageBooking.plansForTexts.8.1.month"),
        wordPrice: t("packageBooking.plansForTexts.8.1.wordPrice"),
        features: t("packageBooking.plansForTexts.8.1.features"),
      },
      {
        name: t("packageBooking.plansForTexts.8.2.name"),
        price: t("packageBooking.plansForTexts.8.2.price"),
        month: t("packageBooking.plansForTexts.8.2.month"),
        wordPrice: t("packageBooking.plansForTexts.8.2.wordPrice"),
        features: t("packageBooking.plansForTexts.8.2.features"),
        bestValue: true,
      },
    ],
    12: [
      {
        name: t("packageBooking.plansForTexts.12.0.name"),
        price: t("packageBooking.plansForTexts.12.0.price"),
        month: t("packageBooking.plansForTexts.12.0.month"),
        wordPrice: t("packageBooking.plansForTexts.12.0.wordPrice"),
        features: t("packageBooking.plansForTexts.12.0.features"),
      },
      {
        name: t("packageBooking.plansForTexts.12.1.name"),
        price: t("packageBooking.plansForTexts.12.1.price"),
        month: t("packageBooking.plansForTexts.12.1.month"),
        wordPrice: t("packageBooking.plansForTexts.12.1.wordPrice"),
        features: t("packageBooking.plansForTexts.12.1.features"),
      },
      {
        name: t("packageBooking.plansForTexts.12.2.name"),
        price: t("packageBooking.plansForTexts.12.2.price"),
        month: t("packageBooking.plansForTexts.12.2.month"),
        wordPrice: t("packageBooking.plansForTexts.12.2.wordPrice"),
        features: t("packageBooking.plansForTexts.12.2.features"),
        bestValue: true,
      },
    ],
  };
  return (
    <div>
      <a
        href="https://driptext.de/"
        target="_self"
        className=" flex items-center justify-center  mt-10 mb-24"
      >
        <img
          src={logo}
          alt="Logo"
          className="h-[23.5px] w-[120px]  md:w-[180px] md:h-[35.5px] "
        />
      </a>

      <div className="w-full flex-col justify-center px-1 xxs:px-2 xs:px-3 sm:px-5 md:px-6 lg:px-7 xl:px-9 2xl:px-14 3xl:px-20 4xl:px-52">
        <div className="text-center mb-8  ">
          <h1 className="text-3xl font-bold my-4 text-slate-700">
            {t("packageBooking.header.title")}
          </h1>
          <p className="text-lg text-slate-700">
            {t("packageBooking.header.description")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center mt-10 ">
            {[4, 8, 12].map((plan) => (
              <button
                key={plan}
                onClick={() => setSelectedTexts(plan)}
                className={`py-3 px-8 md:mx-4 lg:mx:4 xl:mx-4 text-lg rounded-lg font-medium ${
                  selectedTexts === plan
                    ? "bg-slate-700 text-slate-100"
                    : " bg-slate-200 text-gray-700 text-slate-700"
                } mx-2 mb-2 sm:mb-0`}
              >
                {`${plan} ${t("packageBooking.buttonLabels.0")}`}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 ">
          {plansForTexts[selectedTexts].map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>

        <div className="xxs:px-6 2xl:px-40 mt-8">
          <p className="text-sm text-center text-slate-700 lg:px-12">
            {t("packageBooking.footer.disclaimer.text")}
            <span className="text-sky-600">
              {" "}
              {t("packageBooking.footer.disclaimer.termsLinkText")}{" "}
            </span>
            {t("packageBooking.footer.disclaimer.additionalText")}
          </p>
        </div>
        <div className="w-full mt-24 flex flex-col md:flex-row justify-between items-center py-8  border-gray-300 ">
          <a
            href="https://driptext.de/"
            target="_self"
            className="flex items-center mb-4 md:mb-0"
          >
            <img
              src={logo}
              alt="Footer Logo"
              className="h-[17.5px] w-[90px]  mr-2"
            />
          </a>

          <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-center md:text-left">
            <a
              target="_blank"
              href="https://driptext.de/agb/"
              className="text-gray-600 hover:text-gray-800"
            >
              {t("packageBooking.footer.footerLinks.0.label")}
            </a>
            <a
              target="_blank"
              href="https://driptext.de/impressum/"
              className="text-gray-600 hover:text-gray-800"
            >
              {t("packageBooking.footer.footerLinks.1.label")}
            </a>
            <a
              target="_blank"
              href="https://driptext.de/datenschutz/"
              className="text-gray-600 hover:text-gray-800"
            >
              {t("packageBooking.footer.footerLinks.2.label")}
            </a>
            <a
              target="_blank"
              href="https://driptext.de/datenschutz/"
              className="text-gray-600 hover:text-gray-800"
            >
              {t("packageBooking.footer.footerLinks.3.label")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageBooking;
