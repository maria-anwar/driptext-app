import { useState, useEffect } from "react";
import logo from "../../assets/homeimages/driptext.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { parseJSON } from "date-fns";
import { useNavigate } from "react-router-dom";import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import {updateRoleTitle} from '../../redux/userSlice'
import localStorage from "redux-persist/es/storage";

const ThankYouPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const dispatch = useDispatch();

  // const [hostPageId, setHostPageId] = useState("")

  const getHostPageResponse = async (hostId) => {
    try {
      const body = {
        host_id: hostId,
      };

      const { data } = await axios.post(
        "https://driptext-api.malhoc.com/api/chargebee/hostpage_response",
        body
      );

      const payload = JSON.parse(localStorage.getItem("orderPayload"));
      const orderPayload = { ...payload, response: data.data.content };
      try {
        console.log("initial payload: ", payload)
        console.log("final payload: ", orderPayload)
        const response = await axios.post(
          "https://driptext-api.malhoc.com/api/users/create",
          orderPayload
        );
        console.log(response.data)

        localStorage.removeItem("orderPayload");


        dispatch(updateRoleTitle('Client'));

        // dispatch(
        //   updateUserFields({ path: "data.user.role.title", value: 'Client' })

        // console.log(user)

        // if (response.status === 200) {
        //   console.log("user create request success");
        //   try {
        //     const { data: emailResponse } = await axios.post(
        //       "http://localhost:8000/api/auth/orderSuccessEamil",
        //       {
        //         email: orderPayload.email,
        //       }
        //     );
        //     console.log("email sent");
        //   } catch (error) {
        //     console.log("email api error: ", error);
        //   }
        // }
      } catch (error) {
        const errorMessage = error.response?.data?.message || error.message || "create api error";
        toast.error(errorMessage);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || "hostpage response error";
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const hostId = queryParams.get("id");
    if (hostId && localStorage.getItem("orderPayload")) {
      getHostPageResponse(hostId);
    }
  }, [location.search]);

  const handleGotoClick = () => {
    if (isAuthenticated) {
      navigate("/client-dashboard")
    } else {
      navigate("/")
    }
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }

  },[])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-5 pb-12 px-4 sm:px-6 lg:px-6">
      {/* Top section with logo */}
      <Link to="/" className="w-full max-w-xl text-center mb-8">
        <img src={logo} alt="Logo" className="mx-auto h-8 4xl:h-10 w-44 " />
      </Link>

      {/* Main text content */}
      <ToastContainer />

      <div className="w-full max-w-4xl text-center 2xl:px-24 4xl:mt-14 mb-5">
        <h1 className="text-3xl font-bold text-gray-700">
          Thank you so much for your information
        </h1>
        <p className="mt-4 text-gray-600 mb-6">
          You have successfully completed the form to order your sample text
          worth €105.00.
        </p>
        <p className="mt-2 text-cyan-500 mb-6">
          Because we know how good our texts are, you can get an overview of our
          packages today.
        </p>
        <button
          onClick={() => navigate("/")}
          className="w-full md:w-[50%] bg-[#07B6D4] rounded-full mx-auto text-center text-white py-2 mb-8"
        >
          Go to Login
        </button>
        <p className="text-xl font-bold text-gray-800 ">
          Heres what happens next:
        </p>
      </div>

      <div className="w-full max-w-2xl bg-gray-100 py-8 px-6 rounded-lg shadow-md">
        <div className="flex 2xl:items-start">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-cyan-800 to-cyan-500 text-white">
              1
            </div>
          </div>

          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Data verification & access to the DripText WebApp
            </h3>
            <p className="mt-2 text-gray-900 pb-4">
              Thank you for sending us your data. Our in-house quality assurance
              team will now check your details for feasibility and completeness
              within 12 hours.
            </p>
            <p className="mt-2 text-gray-600 pb-4">
              If relevant information is missing, we will contact you.
              Otherwise, your order will be implemented immediately.
            </p>
            <p className="mt-2 text-gray-600">
              You have also just received an email from our system (check your
              spam folder if necessary) with the link for your customer
              dashboard in the DripText WebApp. Click on the link and set a
              password for your personal access. You will later find your
              text(s) including status information in the WebApp.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-2xl bg-gray-100 mt-8 py-8 px-6 rounded-lg shadow-md">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-cyan-800 to-cyan-500 text-white">
              2
            </div>
          </div>

          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-800">
              implementation
            </h3>
            <p className="mt-2 text-gray-900 pb-4">
              Our quality assurance has successfully checked your information.
              Now your order is being implemented. To do this, our project
              managers connect the various departments involved in content
              production: SEO managers, content creators and editors.
            </p>
            <p className="mt-2 text-gray-600 pb-4">
              We create a briefing based on your requirements, research the most
              relevant (semantic) keywords, the target structure and the optimal
              length of the content and start with the implementation.
            </p>
            <p className="mt-2 text-gray-600 pb-4">
              This is followed by editing and proofreading as well as the
              approval of our meta-editing.
            </p>
            <p className="mt-2 text-gray-600 pb-4">
              The creation of your content usually takes no longer than 2 to 3
              days.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-2xl bg-gray-100 mt-8 py-8 px-6 rounded-lg shadow-md">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-cyan-800 to-cyan-500 text-white">
              3
            </div>
          </div>

          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Handover & Collaboration
            </h3>
            <p className="mt-2 text-gray-900 pb-4">
              After the meta-editing is complete, you will automatically receive
              a notification from our system that your content is complete and
              ready for you to review in the DripText WebApp.
            </p>
            <p className="mt-2 text-gray-600 pb-4">
              If there are any individual requests for improvement, we will take
              these into account promptly.
            </p>
            <p className="mt-2 text-gray-600">
              We should then discuss whether and, if so, how often we can work
              for you in the future.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl mt-24 flex justify-between items-center py-4 border-gray-300 ">
        <div className="flex items-center">
          <img src={logo} alt="Footer Logo" className="h-6 w-auto mr-2" />
          <span className="text-gray-700 font-semibold">DRIPTEXT</span>
        </div>

        <div className="flex space-x-4">
          <a href="/conditions" className="text-gray-600 ">
            Conditions
          </a>
          <a href="/imprint" className="text-gray-600 ">
            Imprint
          </a>
          <a href="/data-protection" className="text-gray-600 ">
            Data protection
          </a>
          <a href="/cookie-settings" className="text-gray-600 ">
            Cookie settings
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
