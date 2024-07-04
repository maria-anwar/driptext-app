


import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginComponent = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
      };

  return (
    <form className="w-full max-w-sm space-y-6 mb-8 relative z-10">
    <h2 className="text-lg font-semibold mb-4 text-gray-700">Register</h2>
    <p className="text-gray-600 mb-4">Please log in with your login details</p>
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input
        id="email"
        type="email"
        placeholder="max@mustermann.com"
        className="w-full py-2 px-4 rounded-lg border-2 shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
      />
    </div>
    <div className="relative">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input
        id="password"
        type={showPassword ? 'text' : 'password'}
        className="w-full py-2 px-4 rounded-lg border-2 shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
      />
      <div
        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer mt-7"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <FaEyeSlash className="text-gray-500" />
        ) : (
          <FaEye className="text-gray-500" />
        )}
      </div>
    </div>
    <div className="flex items-center justify-between mt-4">
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
      >
        Register
      </button>
      <Link to="/forgot" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
        Forgot Password?
      </Link>
    </div>
  </form>

  )
}

export default LoginComponent
