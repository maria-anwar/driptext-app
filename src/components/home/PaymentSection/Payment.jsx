import { useState } from 'react';
import PricingCard from '../Cards/PricingCard';

const plansForTexts = {
  4: [
    {
      name: '3 months duration',
      price: '420€ ',
      month: 'per month',
      wordPrice: 'Word price: 0.07 EUR/net',
      features: [
        '4 SEO-optimized texts per month with at least 1,500 words per text',
        'Proofreading using the 6-eyes principle',
        'Detailed keyword analysis',
        'Creation of an editorial plan',
        'Own customer backend',
        '100% reliability',
        'Incl. satisfaction guarantee'
      ],
    },
    {
      name: '6 months term',
      price: '360€ ',
      month: 'per month',
      wordPrice: 'Word price: 0.06 EUR/net',
      features: [
        '4 SEO-optimized texts per month with at least 1,500 words per text',
        'Proofreading using the 6-eyes principle',
        'Detailed keyword analysis',
        'Creation of an editorial plan',
        'Own customer backend',
        '100% reliability',
        'Incl. satisfaction guarantee'
      ],
    },
    {
      name: '12 months term',
      price: '300€',
      month: 'per month',
      wordPrice: 'Word price: 0.05 EUR/net',
      features: [
        '4 SEO-optimized texts per month with at least 1,500 words per text',
        'Proofreading using the 6-eyes principle',
        'Detailed keyword analysis',
        'Creation of an editorial plan',
        'Own customer backend',
        '100% reliability',
        'Incl. satisfaction guarantee'
      ],
      bestValue: true,
    },
  ],
  8: [
    {
      name: '3 months duration',
      price: '840€ ',
      month: 'per month',
      wordPrice: 'Word price: 0.14 EUR/net',
      features: [
        '8 SEO-optimized texts per month with at least 1,500 words per text',
        'Proofreading using the 6-eyes principle',
        'Detailed keyword analysis',
        'Creation of an editorial plan',
        'Own customer backend',
        '100% reliability',
        'Incl. satisfaction guarantee'
      ],
    },
    {
      name: '6 months term',
      price: '720€ ',
      month: 'per month',
      wordPrice: 'Word price: 0.12 EUR/net',
      features: [
        '8 SEO-optimized texts per month with at least 1,500 words per text',
        'Proofreading using the 6-eyes principle',
        'Detailed keyword analysis',
        'Creation of an editorial plan',
        'Own customer backend',
        '100% reliability',
        'Incl. satisfaction guarantee'
      ],
    },
    {
      name: '12 months term',
      price: '600€ ',
      month: 'per month',
      wordPrice: 'Word price: 0.10 EUR/net',
      features: [
        '8 SEO-optimized texts per month with at least 1,500 words per text',
        'Proofreading using the 6-eyes principle',
        'Detailed keyword analysis',
        'Creation of an editorial plan',
        'Own customer backend',
        '100% reliability',
        'Incl. satisfaction guarantee'
      ],
      bestValue: true,
    },
  ],
  12: [
    {
      name: '3 months duration',
      price: '1260€ ',
      month: 'per month',
      wordPrice: 'Word price: 0.20 EUR/net',
      features: [
        '12 SEO-optimized texts per month with at least 1,500 words per text',
        'Proofreading using the 6-eyes principle',
        'Detailed keyword analysis',
        'Creation of an editorial plan',
        'Own customer backend',
        '100% reliability',
        'Incl. satisfaction guarantee'
      ],
    },
    {
      name: '6 months term',
      price: '1080€ ',
      month: 'per month',
      wordPrice: 'Word price: 0.18 EUR/net',
      features: [
        '12 SEO-optimized texts per month with at least 1,500 words per text',
        'Proofreading using the 6-eyes principle',
        'Detailed keyword analysis',
        'Creation of an editorial plan',
        'Own customer backend',
        '100% reliability',
        'Incl. satisfaction guarantee'
      ],
    },
    {
      name: '12 months term',
      price: '900€ ',
      month: 'per month',
      wordPrice: 'Word price: 0.15 EUR/net',
      features: [
        '12 SEO-optimized texts per month with at least 1,500 words per text',
        'Proofreading using the 6-eyes principle',
        'Detailed keyword analysis',
        'Creation of an editorial plan',
        'Own customer backend',
        '100% reliability',
        'Incl. satisfaction guarantee'
      ],
      bestValue: true,
    },
  ],
};

const PricingCard = ({ plan }) => (
  <div className={`flex flex-col p-6 border shadow-md ${plan.bestValue ? 'bg-white border-gray-300' : ''}`} >
    <h2 className="font-bold text-2xl mb-3 text-left">{plan.name}</h2>
    {plan.worldprice && <p className="text-gray-500 text-sm text-left mb-4">{`World Price: ${plan.worldprice}`}</p>}
    {plan.price && <p className="font-bold text-2xl mb-8 text-left">{plan.price}</p>}
    <div className="flex-grow">
      <p className="mb-2 text-left">{plan.description}</p>
      <ul className="mb-2">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center mb-1 text-left pb-4">
            <i className="fa-solid fa-check text-black mr-2"></i>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="mt-4">
      <button className="bg-custom-yellow text-dark-blue py-2 px-4 rounded-md w-full hover:bg-gray-600 transition-colors duration-300 ease-in-out">Select Plan</button>
    </div>
  </div>
);

PricingCard.propTypes = {
  plan: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string,
    worldprice: PropTypes.string,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    bestValue: PropTypes.bool,
  }).isRequired,
};

const PricingSection = () => {
  const [selectedTexts, setSelectedTexts] = useState(8);

  return (
    <div className='text-center mt-20'>
      <h2 className='font-bold text-4xl mb-3 text-[#101E33] mt-10'>
        Choose between our flexible package prices
      </h2>
      <p className='font-semibold text-xl'>
        We offer various package prices to suit your specific monthly content needs.
      </p>
      <div className="container mx-auto p-8 max-w-7xl mb-10">
        <div className="flex justify-center mb-8">
          <div className="flex rounded-md font-bold pb-16">
            <label htmlFor="contacts_select" className="contactsSelect__label p-6 w-96 bg-gray-300 text-dark-blue text-lg">
              How many texts per month?
            </label>
            <div className="relative">
              <select
                id="contacts_select"
                name="Number of Texts"
                autoComplete="off"
                className="appearance-none bg-custom-yellow text-dark-blue border-none p-6 w-60 focus:outline-none focus:ring-0 text-lg"
                value={selectedTexts}
                onChange={handleSelectChange}
              >
                <option value="4">4 texts per month</option>
                <option value="8">8 texts per month</option>
                <option value="12">12 texts per month</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.41 7.41L10 12l4.59-4.59L16 8l-6 6-6-6z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {plansForTexts[selectedTexts].map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
