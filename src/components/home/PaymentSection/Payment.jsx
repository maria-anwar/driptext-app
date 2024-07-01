import { useState } from 'react';
import PricingCard from '../Cards/PricingCard';


const plansForTexts = {
  4: [
    {
      name: '3 months duration',
      price: '420€ ',
      month: 'per month',
      wordPrice: 'Word price: 0.07 EUR/net',
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
      bestValue: true,
    },
  ],
  8: [
    {
      name: '3 months duration',
      price: '840€ ',
      month: 'per month',
      wordPrice: 'Word price: 0.14 EUR/net',
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
      bestValue: true,
    },
  ],
  12: [
    {
      name: '3 months duration',
      price: '1260€ ',
      month: 'per month',
      wordPrice: 'Word price: 0.20 EUR/net',
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
      bestValue: true,
    },
  ],
};

const PricingSection = () => {
  const [selectedTexts, setSelectedTexts] = useState(8);
  // const [selectedTexts, setSelectedTexts] = useState(8);

  return (
    <div className="bg-gray-100 rounded-xl py-12 mb-10">
      <div className="text-center mb-8">
        <h2 className="text-sm text-cyan-500">DripText Prices</h2>
        <h1 className="text-3xl font-bold my-4">Choose between our flexible package prices</h1>
        <p className="text-lg">We offer various package prices to suit your specific monthly content needs.</p>
        <div className="flex flex-col sm:flex-row justify-center mt-6 ">
          {[4, 8, 12].map((plan) => (
            <button
              key={plan}
              onClick={() => setSelectedTexts(plan)}
              className={`py-4 px-4 text-lg rounded-lg ${selectedTexts === plan ? 'bg-gray-700 text-white' : 'bg-gray-300 text-gray-700'} mx-2 mb-2 sm:mb-0`}
            >
              {`${plan} texts per month`}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {plansForTexts[selectedTexts].map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
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
