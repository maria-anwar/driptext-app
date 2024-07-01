import img1 from "../../assets/homeimages/DripText-Features-3.png";
import img2 from "../../assets/homeimages/DripText-Features-1.png";
import img3 from "../../assets/homeimages/DripText-Features-2.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative w-full flex flex-col gap-10 xs:gap-14 justify-center items-center bg-gradient-to-r from-dark-blue to-sky-800 rounded-xl 4xl:rounded-2xl mt-4 border px-3 py-6 xxs:px-8 xxs:py-10 xs:px-7 xs:py-20">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-center items-center px-5 xxs:px-4">
        <div className="w-full flex flex-col gap-1 justify-center items-center">
          <div className="text-white">★ ★ ★ ★ ★</div>
          <p className="text-white text-center text-xs xs:text-sm font-medium">
            My blog is finally bringing me sale
          </p>
        </div>
        <div className="hidden w-full lg:flex flex-col gap-1 justify-center items-center">
          <div className="text-white">★ ★ ★ ★ ★</div>
          <p className="text-white text-center text-xs xs:text-sm font-medium">
            High-quality texts at an affordable price
          </p>
        </div>
        <div className="w-full hidden 2xl:flex flex-col gap-1 justify-center items-center">
          <div className="text-white">★ ★ ★ ★ ★</div>
          <p className="text-white text-center text-xs xs:text-sm font-medium">
            My blog is finally bringing me sale
          </p>
        </div>
      </div>

      {/* Text Section */}

      <div className="w-full flex flex-col gap-5 xxs:gap-6 items-center justify-center text-center px-6">
        <div className="text-white bg-[#F3F3F32B] font-semibold text-xs rounded-3xl border px-6 py-2">
          The reliable text partner for online shops
        </div>
      </div>

      <div className="2xl:px-40">
        <h1 className=" text-4xl font-bold text-center text-white">
          We deliver the copy your customers need to buy from you.
        </h1>
        <p className="text-lg text-center mt-4 text-sky-300">
          Let us create tailor-made SEO advice texts for you every month to
          reach your target group in search of a solution to their problem and
          convert them into paying customers for your online shop.
        </p>
      </div>
      <div className="flex justify-center">
        <Link
          to="/register/form"
          className="py-4 px-8  text-sm md:text-xl bg-gradient-to-r from-sky-700 to-cyan-500  text-white font-bold rounded-lg transform transition duration-300 ease-in-out hover:scale-110 whitespace-nowrap"
        >
          Order Free Sample Text
        </Link>
      </div>

      <div className="relative w-full lg:mb-[-16rem] z-10 px-2">
        <div className="container  mx-auto grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-3 4xl:gap-4 text-center">
          <div className="w-full bg-[#F7F7F7] shadow-2xl h-auto md:h-auto flex flex-col justify-between rounded-2xl">
            <div className="px-2">
              <h3 className="font-bold text-xl mb-2 p-3 text-dark-blue">
                Low cost
              </h3>
              <p className="text-dark-blue">
                Ready-made text packages in subscription model starting from 75€
                per guide text
              </p>
            </div>
            <img src={img3} alt="" className="w-full rounded-b-lg" />
          </div>
          <div className="w-full bg-[#F7F7F7] shadow-2xl h-auto md:h-auto flex flex-col justify-between rounded-2xl">
            <div className="px-2">
              <h3 className="font-bold text-xl mb-2 p-3 text-dark-blue">
                Quality of content
              </h3>
              <p className="text-dark-blue">
                Product-related SEO guide texts with satisfaction guarantee
              </p>
            </div>
            <img src={img2} alt="" className="w-full rounded-b-lg" />
          </div>

          <div className="w-full bg-[#F7F7F7] text-white shadow-2xl h-auto md:h-auto flex flex-col justify-between rounded-2xl">
            <div className="px-2">
              <h3 className="font-bold text-xl mb-2 p-3 text-dark-blue">
                Easy to use
              </h3>
              <p className="text-dark-blue">
                Manage your DripTexts conveniently via our WebApp
              </p>
            </div>
            <img src={img1} alt="" className="w-full rounded-b-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
