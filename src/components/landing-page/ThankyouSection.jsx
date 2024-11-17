import { useState, useEffect } from "react";
import logo from "../../assets/homeimages/driptext.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { parseJSON } from "date-fns";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { updateRoleTitle, updateUserFields } from "../../redux/userSlice";
import localStorage from "redux-persist/es/storage";
import useTitle from "../../hooks/useTitle";
import { useTranslation } from "react-i18next";

const ThankYouPage = () => {
  const { t } = useTranslation();
  useTitle(t("thankYouPage.pageTitle"));
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();

  // const [hostPageId, setHostPageId] = useState("")

  const getHostPageResponse = async (hostId) => {
    try {
      const body = {
        host_id: hostId,
      };

      const { data } = await axios.post(
        `${import.meta.env.VITE_DB_URL}/chargebee/hostpage_response`,
        body
      );
      console.log("host page response: ", data);

      const tempPayload = await localStorage.getItem("orderPayload");
      console.log("temp payload: ", tempPayload);
      const payload = JSON.parse(tempPayload);
      console.log("payload: ", payload);
      const orderPayload = { ...payload, response: data.data.content };
      try {
        console.log("initial payload: ", payload);
        console.log("final payload: ", orderPayload);
        `${import.meta.env.VITE_DB_URL}/users/create`;
        const response = await axios.post(
          `${import.meta.env.VITE_DB_URL}/users/create`,
          orderPayload
        );
        console.log(response.data);

        localStorage.removeItem("orderPayload");

        // dispatch(updateRoleTitle("Client"));
        dispatch(
          updateUserFields({ path: "data.user.role.title", value: "Client" })
        );
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
        console.log("create api error: ", error);
        const errorMessage =
          error.response?.data?.message || error.message || "create api error";
        toast.error(errorMessage);
      }
    } catch (error) {
      console.log("host page error: ", error);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "hostpage response error";
      toast.error(errorMessage);
    }
  };

  const hostResponse = async () => {
    const queryParams = new URLSearchParams(location.search);
    const hostId = queryParams.get("id");
    if (hostId && (await localStorage.getItem("orderPayload"))) {
      getHostPageResponse(hostId);
    }
  };

  useEffect(() => {
    hostResponse();
  }, [location.search]);

  const handleGotoClick = () => {
    if (isAuthenticated) {
      navigate("/client-dashboard");
    } else {
      navigate("/");
    }
  };

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     setIsAuthenticated(true)
  //   } else {
  //     setIsAuthenticated(false)
  //   }

  // },[])

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
          {t("thankYouPage.mainText.thankYouTitle")}
        </h1>
        <p className="mt-4 text-gray-600 mb-6">
          {t("thankYouPage.mainText.thankYouDescription")}
        </p>
        <p className="mt-2 text-cyan-500 mb-6">
          {t("thankYouPage.mainText.overviewText")}
        </p>
        <button
          onClick={() => navigate("/client-dashboard")}
          className="w-1/2 md:w-[30%] bg-gradient-to-r from-buttonStart to-buttonEnd  rounded font-medium mx-auto text-center text-white py-2 mb-8"
        >
          {t("thankYouPage.mainText.buttonText")}
        </button>
        <p className="text-xl font-bold text-gray-800 ">
          {t("thankYouPage.mainText.nextStepsTitle")}
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
              {t("thankYouPage.steps.0.stepTitle")}
            </h3>
            <p className="mt-2 text-gray-900 pb-4">
              {t("thankYouPage.steps.0.stepDescription")}
            </p>
            <p className="mt-2 text-gray-600 pb-4">
              {t("thankYouPage.steps.0.additionalDescription.0")}{" "}
              {t("thankYouPage.steps.0.additionalDescription.1")}
            </p>
            <p className="mt-2 text-gray-600">
              {t("thankYouPage.steps.0.additionalDescription.2")}
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
              {t("thankYouPage.steps.1.stepTitle")}
            </h3>
            <p className="mt-2 text-gray-900 pb-4">
              {t("thankYouPage.steps.1.stepDescription")}
            </p>
            <p className="mt-2 text-gray-600 pb-4">
              {t("thankYouPage.steps.1.additionalDescription.0")}
            </p>
            <p className="mt-2 text-gray-600 pb-4">
              {t("thankYouPage.steps.1.additionalDescription.1")}
            </p>
            <p className="mt-2 text-gray-600 pb-4">
              {t("thankYouPage.steps.1.additionalDescription.2")}
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
              {t("thankYouPage.steps.2.stepTitle")}
            </h3>
            <p className="mt-2 text-gray-900 pb-4">
              {t("thankYouPage.steps.2.stepDescription")}
            </p>
            <p className="mt-2 text-gray-600 pb-4">
              {t("thankYouPage.steps.2.additionalDescription.0")}
            </p>
            <p className="mt-2 text-gray-600">
              {t("thankYouPage.steps.2.additionalDescription.1")}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl mt-24 flex justify-between items-center py-4 border-gray-300 ">
        <div className="flex items-center">
          <img src={logo} alt="Footer Logo" className="h-6 w-auto mr-2" />
          <span className="text-gray-700 font-semibold"></span>
        </div>

        <div className="flex space-x-4">
          <a href="/conditions" className="text-gray-600 ">
            {t("thankYouPage.footer.footerLinks.0.text")}
          </a>
          <a href="/imprint" className="text-gray-600 ">
            {t("thankYouPage.footer.footerLinks.1.text")}
          </a>
          <a href="/data-protection" className="text-gray-600 ">
            {t("thankYouPage.footer.footerLinks.2.text")}
          </a>
          <a href="/cookie-settings" className="text-gray-600 ">
            {t("thankYouPage.footer.footerLinks.3.text")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
