import Image from "../../../assets/homeimages/Design.png";
import { Link } from "react-router-dom";

const CallToActionSection = () => {
  return (
    <section className=" bg-gradient-to-r from-sky-900 to-cyan-500 text-white pt-16 xs:rounded-lg md:rounded-xl 4xl:rounded-2xl">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
        <div className=" mx-10">
          <h2 className="text-4xl font-bold mb-4">Lets get started today!</h2>
          <p className="text-xl mb-6">
            Do you want to become the category king of your niche and finally
            find the right customers for your products?
            <span className="font-bold text-white">
              Then start with a free sample text!
            </span>
          </p>
          <Link
            to="/register/form"
            className="bg-white  text-gray-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            Order free sample text
          </Link>
        </div>
        <div className="">
          <img src={Image} alt="Person" />
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
