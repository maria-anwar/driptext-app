import PropTypes from 'prop-types';

const Card = ({ duration, price, wordPrice, features, buttonText, isPopular }) => {
  return (
    <div className="relative flex flex-col-3 justify-between bg-white border rounded-lg shadow-md p-6 ">
      {isPopular && <div className="absolute top-0 right-0 bg-black text-white text-xs px-2 py-1">POPULAR</div>}
      <div>
        <div className="bg-blue-500 text-white text-center py-2 rounded-t-lg">
          <h3 className="text-lg font-bold">{duration}</h3>
          <p className="text-sm">{wordPrice}</p>
        </div>
        <div className="text-center py-4">
          <p className="text-4xl font-bold">{price}€</p>
          <p className="text-lg">per month</p>
        </div>
        <div className="text-center py-4 border-t">
          {features.map((feature, index) => (
            <p key={index} className="text-sm">{feature}</p>
          ))}
        </div>
      </div>
      <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">{buttonText}</button>
    </div>
  );
};

Card.propTypes = {
  duration: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  wordPrice: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonText: PropTypes.string.isRequired,
  isPopular: PropTypes.bool,
};

Card.defaultProps = {
  isPopular: false,
};

export default Card;
