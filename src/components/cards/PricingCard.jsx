import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPlan } from "../../redux/planSlice";

const PricingCard = ({ plan }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleButtonClick = async () => {
    dispatch(setPlan(plan));
    navigate("/bestellformular")
  }
  return (
    <div className="relative mx-3 rounded-lg my-4 justify-self-center shadow-2xl shadow-slate-400 bg-blend-multiply overflow-hidden">
      {plan.bestValue && (
        <div className="absolute -left-7.5 top-4.5 -rotate-45 bg-black text-white text-xs px-8 py-1 font-semibold">
          POPULAR
        </div>
      )}
      <div className="bg-cardHeading text-white text-center py-6 rounded-t-lg w-full">
        <h2 className="font-bold text-2xl">{plan.name}</h2>
        {plan.wordPrice && <p className="text-sm">{plan.wordPrice}</p>}
      </div>
      <div className="p-6">
        <div className="text-center py-4">
          <p className="font-extrabold text-5xl text-cardHeading">{plan.price}</p>
          <p className="text-lg">{plan.month}</p>
        </div>
        <ul className="text-center pb-8">
          <li className="text-gray-700 pt-4">
            {" "}
            <span className="text-slate-900 font-semibold">
              {plan.features} SEO-optimized texts
            </span>{" "}
            per month with at least 1,500 words per text
          </li>
          <li className="text-gray-700 pt-4">
            {" "}
            <span className="text-slate-900 font-semibold">
              Proofreading
            </span>{" "}
            using the 6-eyes principle
          </li>
          <li className="text-gray-700 pt-4">
            Detailed{" "}
            <span className="text-slate-900 font-semibold">keyword analysis</span>
          </li>
          <li className="text-gray-700 pt-4">
            Creation of an{" "}
            <span className="text-slate-900 font-semibold">editorial plan</span>
          </li>
          <li className="text-gray-700 pt-4">
            Own{" "}
            <span className="text-slate-900 font-semibold">customer backend</span>
          </li>
          <li className="text-gray-700 pt-4">
            100% <span className="text-slate-900 font-semibold">reliability</span>
          </li>
          <li className="text-gray-700 pt-4">
            Incl.{" "}
            <span className="text-slate-900 font-semibold">
              satisfaction guarantee
            </span>
          </li>
        </ul>
        <button 
          onClick={handleButtonClick}
        className="w-full mt-4 bg-gradient-to-r from-buttonStart to-buttonEnd text-white py-4 px-4 rounded-lg font-medium ">
          Order free sample text
        </button>
      </div>
    </div>
  )
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
