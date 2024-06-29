import CarousalCards from '../Cards/carousalcards';

import img1 from '../../../assets/homeimages/DripText-Features-3.png';
import img2 from '../../../assets/homeimages/DripText-Features-1.png';
import img3 from '../../../assets/homeimages/DripText-Features-2.png';
const Hero = () => {
  return (
    <div className="relative mt-2 px-36">
    
      <div
        className="absolute inset-0 bg-gradient-to-r from-sky-800 to-gray-400 bg-center"
       
      ></div>
  
      <div className="relative z-10  py-16 lg:py-20 flex flex-col items-center">
        <CarousalCards />
  
        {/* Middle Section */}
        <div className="pt-10 flex justify-center">
          <h1 className="bg-white rounded-full px-6 py-3 inline-block">
            The reliable text partner for online shops
          </h1>
        </div>
  
        {/* Bottom Section */}
        <div className="mt-5 max-w-4xl">
          <h1 className="elementor-heading-title elementor-size-default text-3xl lg:text-5xl font-bold text-center text-white">
            We deliver the copy your customers need to buy from you.
          </h1>
          <p className="text-xl text-center mt-4 text-gray-900 px-4">
            Let us create tailor-made SEO advice texts for you every month to reach your target group in search of a solution to their problem and convert them into paying customers for your online shop.
          </p>
        </div>
  
        {/* Button Section */}
        <div className="mt-8 flex justify-center">
          <button className="py-4 px-16 bg-custom-yellow text-gray-600 text-xl font-bold rounded-lg hover:bg-yellow-600 transition duration-200">
            Order Free Sample Text
          </button>
        </div>
      </div>
  
      {/* Cards Section */}


    </div>
  );
};

export default Hero;



  {/* <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${img})`,
          opacity: 0.3,
        }}
      ></div> */}