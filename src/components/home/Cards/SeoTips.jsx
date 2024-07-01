import PropTypes from 'prop-types';
import img1 from "../../../assets/homeimages/DripText-Features-1.png"
import img2 from "../../../assets/homeimages/DripText-Features-2.png"
import img3 from "../../../assets/homeimages/DripText-Features-3.png"
import img4 from "../../../assets/homeimages/DripText-Feature-4.png"

const cards = [
  {
    id: 1,
    image: img1, 
    title: '1. Analysis of your target group\'s search queries',
    description: 'Within a detailed competition and keyword research, we analyze all relevant, product-related search queries that will ensure additional relevance and increased sales.',
  },
  {
    id: 2,
    image: img2, 
    title: '2. Creation of a KPI-based topic ranking',
    description: ' the organic competition and transactional attractiveness the keyword for you as an online shop we determine the SEO rank and sort all search queries found in descending order.',
  },
  {
    id: 3,
    image: img3, 
    title: '3. Transfer to your editorial plan',
    description: 'Depending on the package you choose, you will receive 4, 8 or 12 monthly advice articles from us. You can find these in your editorial plan within our WebApp. This gives you a transparent overview of what we are currently working on.',
  },
  {
    id: 4,
    image: img4, 
    title: '4. Continuous content production including SEO optimization & proofreading',
    description: 'Our team of copywriters, editors and SEO professionals creates the advice texts that your target group and the search engine will love. You can easily find your ready-to-use texts at any time in the DripText WebApp.',
  },
];

const Card = ({ image, title, description }) => (
  <div className='w-full mt-10'>
  <div className=" rounded-lg shadow-md bg-gray-100  flex flex-col w-full h-full">
    <img src={image} alt={title} className="w-full object-cover mb-4 rounded-t-lg" />
    <h3 className="px-6 text-xl font-semibold mb-2 text-black">{title}</h3>
    <p className=" px-6 mb-5 text-black">{description}</p>
  </div>
  </div>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const FullWidthCard = ({ image, title, description }) => (
  <div className="p-4 border rounded-lg shadow-md bg-gray-100  flex 2xl:flex-row xxs:flex-col">
    <img src={image} alt={title} className="2xl:w-1/2  h-full object-cover rounded-l-lg" />
    <div className="py-4 xxs:px-1 px-4 flex flex-col justify-center 2xl:w-1/2">
      <h3 className="text-lg font-semibold mb-2 text-black">{title}</h3>
      <p className="text-black text-lg">{description}</p>
    </div>
  </div>
);

FullWidthCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const CardSection = () => (
  <div className="py-8">
    <div className="mt-10 text-center 2xl:px-40">
      <h1 className='text-cyan-500 mb-4'>
      That’s why our customers ❤️ us
      </h1>
          <h2 className="text-3xl font-bold text-[#101E33] ">
          With our SEO guides to more traffic, trust and sales
          </h2>
          <p className="text-lg mt-4 text-gray-900 ">
          The exact steps to give your online store an SEO performance upgrade with sales uplift:
          </p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.slice(0, 3).map(card => (
          <Card key={card.id} {...card} />
        ))}
      </div>
      <div className="mt-10">
        <FullWidthCard {...cards[3]} />
      </div>
    
  </div>
);

const App = () => (
  <div>
    <CardSection />
  </div>
);

export default App;
