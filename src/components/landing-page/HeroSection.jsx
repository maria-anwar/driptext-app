import React from "react";
import img1 from "../../assets/homeimages/DripText-Features-3.png";
import img2 from "../../assets/homeimages/DripText-Features-1.png";
import img3 from "../../assets/homeimages/DripText-Features-2.png";

import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
  
      <div className="w-full flex flex-col gap-10 xs:gap-14 justify-center items-center bg-dark-blue rounded-xl 4xl:rounded-2xl  mt-4 border px-3 py-6 xxs:px-8 xxs:py-10 xs:px-7 xs:py-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-center items-center px-5 xxs:px-4">
          <div className="w-full flex flex-col gap-1 justify-center items-center">
            <div className="text-white">★ ★ ★ ★ ★</div>
            <p className="text-white text-center text-xs xs:text-sm font-medium">
              "My blog is finally bringing me sale."
            </p>
          </div>
          <div className="hidden w-full lg:flex flex-col gap-1 justify-center items-center">
            <div className="text-white">★ ★ ★ ★ ★</div>
            <p className="text-white text-center text-xs xs:text-sm font-medium">
              "High-quality texts at an affordable price."
            </p>
          </div>
          <div className="w-full hidden 2xl:flex flex-col gap-1 justify-center items-center">
            <div className="text-white">★ ★ ★ ★ ★</div>
            <p className="text-white text-center text-xs xs:text-sm font-medium">
              "My blog is finally bringing me sale."
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 xxs:gap-6 items-start justify-center">
          <div className="w-full text-white bg-[#F3F3F32B]  text-center font-semibold text-xs rounded-3xl border px-3 py-2">
            The reliable text partner for online shops
          </div>
          <div className="flex justify-center items-center px-2 xxs:px-4">
            <h1 className="text-white text-lg xxs:text-2xl font-bold text-center">
              We deliver the copy your customers need to buy from you
            </h1>
          </div>
          <div className="flex justify-center items-center text-[#ABE9FF] text-base">
            <h3 className="text-[#ABE9FF] xxs:text-base font-semibold text-center">
              Let us create tailor-made SEO advice texts{" "}
              <span className="font-normal">
                for you every month to reach your target group in search of a
                solution to their problem and convert them into
              </span>{" "}
              paying customers for your online shop .
            </h3>
          </div>
        </div>

        <div className="">
          <div className="w-full grid grid-cols-1  xl:grid-cols-3 gap-6 xl:gap-3 4xl:gap-4  text-center justify-between">
            <div className="w-full bg-[#fffff1] shadow-2xl h-auto md:h-auto flex flex-col justify-between rounded-lg">
              <div className="px-2">
                <h3 className="font-bold text-xl mb-2 p-3 text-dark-blue">
                  Low cost
                </h3>
                <p className="text-dark-blue">
                  Ready-made text packages in subscription model starting from
                  75€ per guide text
                </p>
              </div>
              <img src={img3} alt="" className="w-full rounded-b-lg" />
            </div>
            <div className="w-full bg-[#fffff1] shadow-2xl h-auto md:h-auto flex flex-col justify-between rounded-lg">
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

            <div className="w-full bg-[#fffff1] text-white  shadow-2xl h-auto md:h-auto flex flex-col justify-between rounded-lg">
              <div className="px-2">
                <h3 className="font-bold text-xl mb-2 p-3 text-dark-blue">
                Easy to use
                </h3>
                <p className="text-dark-blue">
                Manage your DripTexts conveniently via our WebApp
                </p>
              </div>
              <img src={img3} alt="" className="w-full rounded-b-lg" />
            </div>

           
          </div>
        </div>
      </div>
  
  );
};

export default HeroSection;
