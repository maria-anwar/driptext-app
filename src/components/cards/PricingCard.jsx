import PropTypes from 'prop-types';

const PricingCard = ({ plan }) => (
  <div className="relative mx-3 rounded-lg max-w-sm my-4 justify-self-center shadow-2xl shadow-slate-400 bg-blend-multiply">
    {/* {plan.bestValue && (
      <div className="absolute top-0 right-0 bg-black text-white text-xs px-2 py-1 transform translate-x-1/2 -translate-y-1/2 rounded">
        POPULAR
      </div>
    )} */}
    <div className="bg-sky-700 text-white text-center py-6 rounded-t-lg w-full">
      <h2 className="font-bold text-2xl">{plan.name}</h2>
      {plan.wordPrice && <p className="text-sm">{plan.wordPrice}</p>}
    </div>
    <div className="p-6">
      <div className="text-center py-4">
        <p className="font-extrabold text-5xl text-cyan-500">{plan.price}</p>
        <p className="text-lg">{plan.month}</p>
      </div>
      <ul className="text-center pb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="text-gray-700 pt-4">
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full mt-4 bg-gradient-to-r from-sky-700 to-cyan-500 text-white py-4 px-4 rounded-lg ">
        Order free sample text
      </button>
    </div>
  </div>
);

PricingCard.propTypes = {
  plan: PropTypes.shape({
    name: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    wordPrice: PropTypes.string,
    description: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    bestValue: PropTypes.bool,
  }).isRequired,
};

export default PricingCard;