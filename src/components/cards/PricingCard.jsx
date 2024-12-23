import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const PricingCard = ({ plan }) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleSelectPlan = () => {
    const duration = plan.name.split(" months")[0] + " months";
    navigate(
      `/bestellformular?texts=${plan.features} texts per month with at least 1,500 words per text&duration=${duration}`
    );
  };

  return (
    <div className="relative mx-3 rounded-lg my-4 justify-self-center shadow-2xl shadow-slate-400 bg-blend-multiply overflow-hidden">
      {plan.bestValue && (
        <div className="absolute -left-7.5 top-4.5 -rotate-45 bg-black text-white text-xs px-8 py-1 font-semibold">
          {t("packageBooking.pricingCard.popularLabel")}
        </div>
      )}
      <div className="bg-cardHeading text-white text-center py-6 rounded-t-lg w-full">
        <h2 className="font-bold text-2xl">{plan.name}</h2>
        {plan.wordPrice && <p className="text-sm">{plan.wordPrice}</p>}
      </div>
      <div className="p-6 flex justify-center items-center flex-col">
        <div className="text-center py-4">
          <p className="font-extrabold text-5xl text-cardHeading">
            {plan.price}
          </p>
          <p className="text-lg -mt-12">{plan.month}</p>
        </div>
        <ul className="text-center pb-0">
          <li className="text-gray-700 pt-0">
            {" "}
            <span className="text-slate-900 font-semibold">
              {plan.features}{" "}
              {t("packageBooking.pricingCard.features.seoText.0")}
            </span>{" "}
            {t("packageBooking.pricingCard.features.seoText.1")}
          </li>
          <li className="text-gray-700 pt-4">
            {" "}
            <span className="text-slate-900 font-semibold">
              {t("packageBooking.pricingCard.features.proofreading.0")}
            </span>{" "}
            {t("packageBooking.pricingCard.features.proofreading.1")}
          </li>
          <li className="text-gray-700 pt-4">
            {t("packageBooking.pricingCard.features.keywordAnalysis.0")}{" "}
            <span className="text-slate-900 font-semibold">
              {t("packageBooking.pricingCard.features.keywordAnalysis.1")}
            </span>
          </li>
          <li className="text-gray-700 pt-4">
            {t("packageBooking.pricingCard.features.editorialPlan.0")}{" "}
            <span className="text-slate-900 font-semibold">
              {" "}
              {t("packageBooking.pricingCard.features.editorialPlan.1")}
            </span>
          </li>
          <li className="text-gray-700 pt-4">
            {t("packageBooking.pricingCard.features.customerBackend.0")}{" "}
            <span className="text-slate-900 font-semibold">
              {t("packageBooking.pricingCard.features.customerBackend.1")}
            </span>
          </li>
          <li className="text-gray-700 pt-4">
            {t("packageBooking.pricingCard.features.reliability.0")}{" "}
            <span className="text-slate-900 font-semibold">
              {" "}
              {t("packageBooking.pricingCard.features.reliability.1")}
            </span>
          </li>
          <li className="text-gray-700 pt-4">
            {t("packageBooking.pricingCard.features.satisfactionGuarantee.0")}{" "}
            <span className="text-slate-900 font-semibold">
              {t("packageBooking.pricingCard.features.satisfactionGuarantee.1")}
            </span>
          </li>
        </ul>
        <button
          onClick={handleSelectPlan}
          className="w-2/3 mt-4 bg-gradient-to-r from-buttonStart to-buttonEnd text-white py-4 px-4 rounded-lg font-medium "
        >
          {t("packageBooking.pricingCard.buttons.orderNow")}
        </button>
      </div>
    </div>
  );
};

PricingCard.propTypes = {
  plan: PropTypes.shape({
    name: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    wordPrice: PropTypes.string,
    description: PropTypes.string,
    features: PropTypes.number,
    bestValue: PropTypes.bool,
  }).isRequired,
};

export default PricingCard;
