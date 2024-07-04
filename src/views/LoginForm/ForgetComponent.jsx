
import { Link } from 'react-router-dom';

const ForgetComponent = () => {
  return (
    <form className="w-full max-w-sm space-y-6 mb-8 relative z-10">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Forgot Password</h2>
      <p className="text-gray-600 mb-4">Please enter your email address so we can send you a link to reset your password.</p>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          e-mail
        </label>
        <input
          id="email"
          type="email"
          placeholder="max@mustermann.com"
          className="w-full py-2 px-4 rounded-lg border-2 shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
        />
      </div>
      <div className="flex items-center justify-between mt-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
        >
          Request link
        </button>
        <Link to="/login" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
          Back to Login
        </Link>
      </div>
    </form>
  );
};

export default ForgetComponent;
