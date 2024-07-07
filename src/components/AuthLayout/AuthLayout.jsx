import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../../assets/homeimages/driptext-logo.png";
import germanFlag from "../../assets/homeimages/germanylogo.png";
import englishFlag from "../../assets/homeimages/usalogo.png";
import backgroundImage from "../../assets/homeimages/Loginlogo.png";
import googlelogo from "../../assets/homeimages/googlelogo.png";

const AuthLayout = ({ children }) => {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown((prevState) => !prevState);
  };

  return (
    <div className="grid grid-cols-1 2xl:grid-cols-12 h-screen ">
      {/* Left Column */}
      {/* <div className="col-span-1 2xl:col-span-6 flex flex-col  justify-between 4xl:justify-normal items-center  py-10 xxs:px-10 2xl:px-10 4xl:px-20 bg-dark-blue border-r-2 border-gray-200">
        <div className="w-full flex flex-col justify-center items-center gap-6 ">
          <div className="w-full flex items-center mb-8">
            <img src={logo} alt="Logo" className="mr-3 w-14 h-14 rounded-md" />
            <div>
              <h1 className="text-xl font-bold text-white">DRIPTEXT</h1>
              <p className="text-cyan-600 text-sm">We love SEO & Content</p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4 px-20">
            <div className="w-full flex flex-col items-center justify-center">
              <h1 className="text-white text-lg 4xl:text-2xl">Login to Explore</h1>
            </div>

            <div className="w-full flex flex-col">
              <label
                className="block text-white text-sm 4xl:text-lg font-normal"
                htmlFor="email"
              >
                Email
              </label>
              <input
                name="email"
                id="email"
                type="email"
                placeholder="max@mustermann.com"
                className="w-full py-2 px-4 rounded-md border-2 shadow-sm focus:outline-none focus:border-none focus:appearance-none focus:ring-none"
              />
            </div>
            <div className="w-full flex flex-col">
              <label
                className="block text-white text-sm 4xl:text-lg font-normal"
                htmlFor="email"
              >
                Password
              </label>
              <input
                name="email"
                id="email"
                type="email"
                placeholder="max@mustermann.com"
                className="w-full py-2 px-4 rounded-md border-2 shadow-sm focus:outline-none focus:border-none focus:appearance-none focus:ring-none"
              />
            </div>
            <div className="w-full flex justify-between items-center mt-1.5">
              <p className="text-blue-500 text-sm">Forgot Password ?</p>
            </div>
            <div className="w-full flex justify-between items-center">
              <button className="w-full text-white text-lg font-semibold border-none border  bg-sky-800 py-2 rounded-md">
                  Login
              </button>
            </div>
            <div className="w-full flex justify-center items-center gap-1.5 py-2 mt-3 rounded-md border border-gray cursor-pointer">
                <img src={googlelogo} alt="Google logo" className="w-6 h-6"/>
                <div className="text-white">Sign in with Google</div>
            </div>
            <div>
            {children}
            </div>
          </div>
        </div>
      </div> */}
      <div className="border col-span-1 2xl:col-span-6 flex flex-col justify-between items-center  py-10 xxs:px-10 2xl:px-10 bg-dark-blue border-r-2 border-gray-200">
        <div className='flex px-18 justify-center items-center border'>
             
        </div>
        <div className="flex items-center mb-8">
          <img src={logo} alt="Logo" className="mr-4 w-14 h-14 rounded-md" />
          <div>
            <h1 className="text-xl font-bold text-cyan-500">DRIPTEXT</h1>
            <p className="text-cyan-600 text-sm">We love SEO & Content</p>
          </div>
        
          </div>
        {children}
       
        <div className="relative z-20">
          <img
            src={germanFlag}
            alt="Language"
            className="w-8 h-8 cursor-pointer hover:opacity-80 transition duration-200 ease-in-out"
            onClick={toggleLanguageDropdown}
          />
          {showLanguageDropdown && (
            <div className="absolute bottom-12 left-0 mt-2 py-2 w-40 bg-white border rounded shadow-xl">
              <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200">
                <img src={englishFlag} alt="English" className="w-5 h-5 mr-2" />
                <span>English</span>
              </div>
              <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200">
                <img src={germanFlag} alt="German" className="w-5 h-5 mr-2" />
                <span>German</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Column */}
      <div className="hidden 2xl:flex 2xl:col-span-6 flex-col h-screen py-6 ">
        <div className="flex-grow flex items-center justify-center">
          <img
            src={backgroundImage}
            alt="Background"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-4 text-sm text-gray-700 flex justify-end border-gray-200">
          <Link to="/imprint" className="mr-2 hover:underline">
            Imprint
          </Link>
          <Link to="/privacy-policy" className="mr-2 hover:underline">
            Privacy Policy
          </Link>
          <Link to="/developer" className="hover:underline">
            Developed by TECOYO
          </Link>
        </div>
      </div>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
