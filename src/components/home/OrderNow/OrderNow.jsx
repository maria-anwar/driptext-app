import Image from '../../../assets/homeimages/Design.png'; 
import { Link } from "react-router-dom";

const CallToActionSection = () => {
  return (
    <section className="relative bg-[#101E33] text-white py-10 px-4 rounded-lg">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4">Lets get started today!</h2>
          <p className="text-xl mb-6">
            Do you want to become the category king of your niche and finally find the right customers for your products? 
            <span className="font-bold text-white">Then start with a free sample text!</span>
          </p>
          <Link to="/register/form" className="bg-custom-yellow text-gray-600 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
            Order free sample text
          </Link>
        </div>
        <div className="flex-1 lg:mt-0 lg:ml-20 relative flex justify-center items-center">
          <img src={Image} alt="Person" className="h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
