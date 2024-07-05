import { useState } from 'react';
import {Link } from 'react-router-dom';
import { FaEye, FaEyeSlash} from 'react-icons/fa';
import googlelogo from "../../../assets/homeimages/googlelogo.png"
import facebooklogo from "../../../assets/homeimages/facebooklogo.png"
import { useFormik} from "formik";



const initialValues = {
  Email:"",
  Password:"",

}

const LoginComponent = () => {



const {values, errors, handleBlur, handleChange , handleSubmit } = useFormik({
  initialValues: initialValues,
//  validationSchema: LoginSchema,
  onSubmit : (values) =>{
   console.log(
    values
   );

  },
});


  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };



  return (
    <form className="w-full max-w-sm mb-8"
    onSubmit={handleSubmit}
    >
      <h2 className="text-lg font-semibold mb-4 text-white">Login</h2>
      <p className="text-white mb-4">Please log in with your login details</p>
      <div>
        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          name='email'
          id="email"
          type="email"
          placeholder="max@mustermann.com"
          values={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full py-2 px-4 rounded-lg border-2 shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
        />
      </div>
      <div className="relative mt-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          name='password'
          id="password"
          values={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
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
          Login
        </button>
        <Link to="/forgot" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
          Forgot Password?
        </Link>
      </div>
      <div className="flex items-center justify-center mt-4">
        <p className='text-white'>or sign up with:</p>
      </div>
      <div className="flex items-center justify-center mt-4 gap-4">
      <button className="transition duration-200 ease-in-out transform hover:scale-110">
              <img src={googlelogo} alt="Google logo" className="w-6 h-6" />
            </button>
            <button className="transition duration-200 ease-in-out transform hover:scale-110">
              <img src={facebooklogo} alt="Facebook Logo" className="w-6 h-6" />
            </button>
        
      
      </div>
    </form>
   
  );
};

export default LoginComponent;



// import { useState } from 'react';
// import {Link } from 'react-router-dom';
// import { FaEye, FaEyeSlash} from 'react-icons/fa';
// import googlelogo from "../../../assets/homeimages/googlelogo.png"
// import facebooklogo from "../../../assets/homeimages/facebooklogo.png"
// import { useFormik} from "formik";



// const initialValues = {
//   Email:"",
//   Password:"",

// }

// const LoginComponent = () => {



// const {values, errors, handleBlur, handleChange , handleSubmit } = useFormik({
//   initialValues: initialValues,
// //  validationSchema: LoginSchema,
//   onSubmit : (values) =>{
//    console.log(
//     values
//    );

//   },
// });


//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevState) => !prevState);
//   };



//   return (
//     <form className="w-full max-w-sm mb-8"
//     onSubmit={handleSubmit}
//     >
//       <h2 className="text-lg font-semibold mb-4 text-gray-700">Login</h2>
//       <p className="text-gray-700 mb-4">Please log in with your login details</p>
//       <div>
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//           Email
//         </label>
//         <input
//           name='email'
//           id="email"
//           type="email"
//           placeholder="max@mustermann.com"
//           values={values.email}
//           onChange={handleChange}
//           onBlur={handleBlur}
//           className="w-full py-2 px-4 rounded-lg border-2 shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
//         />
//       </div>
//       <div className="relative mt-4">
//         <label className="block text-gray-700text-sm font-bold mb-2" htmlFor="password">
//           Password
//         </label>
//         <input
//           name='password'
//           id="password"
//           values={values.password}
//           onChange={handleChange}
//           onBlur={handleBlur}
//           type={showPassword ? 'text' : 'password'}
//           className="w-full py-2 px-4 rounded-lg border-2 shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
//         />
//         <div
//           className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer mt-7"
//           onClick={togglePasswordVisibility}
//         >
//           {showPassword ? (
//             <FaEyeSlash className="text-gray-500" />
//           ) : (
//             <FaEye className="text-gray-500" />
//           )}
//         </div>
//       </div>
//       <div className="flex items-center justify-between mt-4">
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-gray-700 font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
//         >
//           Login
//         </button>
//         <Link to="/forgot" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
//           Forgot Password?
//         </Link>
//       </div>
//       <div className="flex items-center justify-center mt-4">
//         <p className='text-gray-700'>or sign up with:</p>
//       </div>
//       <div className="flex items-center justify-center mt-4 gap-4">
//       <button className="transition duration-200 ease-in-out transform hover:scale-110">
//               <img src={googlelogo} alt="Google logo" className="w-6 h-6" />
//             </button>
//             <button className="transition duration-200 ease-in-out transform hover:scale-110">
//               <img src={facebooklogo} alt="Facebook Logo" className="w-6 h-6" />
//             </button>
        
      
//       </div>
//     </form>
   
//   );
// };

// export default LoginComponent;





