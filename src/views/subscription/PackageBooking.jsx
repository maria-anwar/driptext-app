import logo from "../../assets/homeimages/driptext.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import PricingCard from "../../components/cards/PricingCard";
import useTitle from "../../hooks/useTitle";

const plansForTexts = {
  4: [
    {
      name: "3 months duration",
      price: "420€ ",
      month: "per month",
      wordPrice: "Word price: 0.07 EUR/net",
      features: 4
    },
    {
      name: "6 months term",
      price: "360€ ",
      month: "per month",
      wordPrice: "Word price: 0.06 EUR/net",
      features: 4
    },
    {
      name: "12 months term",
      price: "300€",
      month: "per month",
      wordPrice: "Word price: 0.05 EUR/net",
      features: 4,
      bestValue: true,
    },
  ],
  8: [
    {
      name: "3 months duration",
      price: "840€ ",
      month: "per month",
      wordPrice: "Word price: 0.14 EUR/net",
      features: 8
    },
    {
      name: "6 months term",
      price: "720€ ",
      month: "per month",
      wordPrice: "Word price: 0.12 EUR/net",
      features: 8
    },
    {
      name: "12 months term",
      price: "600€ ",
      month: "per month",
      wordPrice: "Word price: 0.10 EUR/net",
      features: 8,
      bestValue: true,
    },
  ],
  12: [
    {
      name: "3 months duration",
      price: "1260€ ",
      month: "per month",
      wordPrice: "Word price: 0.20 EUR/net",
      features: 12
    },
    {
      name: "6 months term",
      price: "1080€ ",
      month: "per month",
      wordPrice: "Word price: 0.18 EUR/net",
      features:12
    },
    {
      name: "12 months term",
      price: "900€ ",
      month: "per month",
      wordPrice: "Word price: 0.15 EUR/net",
      features: 12,
      bestValue: true,
    },
  ],
};

const PackageBooking = () => {
  useTitle("Package Booking");
  const [selectedTexts, setSelectedTexts] = useState(8);

  return (
    <div>
      <Link to="/" className=" items-center ">
        <img
          src={logo}
          alt="Logo"
          className="mx-auto h-8 4xl:h-10 w-44 mt-6 mb-24"
        />
      </Link>

      <div className="w-full flex-col justify-center px-1 xxs:px-2 xs:px-3 sm:px-5 md:px-6 lg:px-7 xl:px-9 2xl:px-14 3xl:px-20 4xl:px-52">
        <div className="text-center mb-8  ">
          <h1 className="text-3xl font-bold my-4 text-slate-700">
            Book the DripText package of your choice now
          </h1>
          <p className="text-lg text-slate-700">
            If you have any questions or problems when booking, please contact
            us by email .
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
                {`${plan} texts per month`}
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
            By submitting the order, I agree to the<span className="text-sky-600"> general terms and conditions </span> 
            of DripText Ltd. and understand that our offers are aimed
            exclusively at commercial customers. All prices are exclusive of
            VAT. Sales only to entrepreneurs, tradespeople, associations,
            authorities or self-employed persons (§ 14 BGB). No sales to
            consumers within the meaning of § 13 BGB.
          </p>
        </div>
        <div className="w-full mt-24 flex flex-col md:flex-row justify-between items-center py-8  border-gray-300 ">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logo} alt="Footer Logo" className="h-6 w-auto mr-2" />
            <span className="text-gray-700 font-semibold">DRIPTEXT</span>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-center md:text-left">
            <a href="/conditions" className="text-gray-600 hover:text-gray-800">
              Conditions
            </a>
            <a href="/imprint" className="text-gray-600 hover:text-gray-800">
              Imprint
            </a>
            <a
              href="/data-protection"
              className="text-gray-600 hover:text-gray-800"
            >
              Data protection
            </a>
            <a
              href="/cookie-settings"
              className="text-gray-600 hover:text-gray-800"
            >
              Cookie settings
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageBooking;