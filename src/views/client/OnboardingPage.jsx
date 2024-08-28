import { React, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/homeimages/driptext.png";
import OnboardingForm from "../../components/client-forms/OnboardingForm";

const OnboardingPage = () => {
  const location = useLocation();
  const { projectName, userId } = location.state || {};
  const navigate = useNavigate();

  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!projectName && !userId) {
      setShow(false);
    }
  }, [projectName, userId]);
  return (
    <>
      {show ? (
        <div className="px-4 sm:px-6 md-px-10 lg:px-14 xl:px-20 2xl:px-56 4xl:px-80 py-10">
          <Link
            to="/"
            className="w-full flex items-center justify-center py-2 pb-5 sm:pb-7 md:pb-8"
          >
            <img
              src={Logo}
              alt="driptext"
              className=" w-20 xs:w-24 md:w-28 xl:w-32 3xl:w-36 4xl:w-40"
            />
          </Link>
          <div className="w-full flex d-flex flex-col gap-10">
            <div className="flex flex-col gap-4 px-4 xs:px-6 md:px-9">
              <h1 className="text-dark-blue text-2xl md:text-3xl font-bold text-center md:px-8">
                Thank you for your booking !
              </h1>
              <h3 className="text-center text-dark-blue text-xl font-bold">
                Here's what happens next:
              </h3>
              <p className="text-center text-dark-blue text-lg px-2">
                Fill out the onboarding form below so we can get to know your
                company and your content goals better.
              </p>
            </div>
            <OnboardingForm projectName={projectName} userId={userId} />
          </div>
        </div>
      ) : (
        <div className="text-2xl text-center px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-56 4xl:px-80 py-10">
          <Link
            to="/"
            className="w-full flex items-center justify-center py-2 pb-5 sm:pb-7 md:pb-8"
          >
            <img
              src={Logo}
              alt="driptext"
              className="w-20 xs:w-24 md:w-28 xl:w-32 3xl:w-36 4xl:w-40"
            />
          </Link>
          <div className="w-full flex flex-col gap-10">
            <div className="flex flex-col gap-4 px-4 xs:px-6 md:px-9">
              <h1 className="text-dark-blue text-2xl md:text-3xl font-bold text-center md:px-8">
                Welcome to Our Platform!
              </h1>
              <h3 className="text-center text-dark-blue text-xl font-bold">
                To access your account and explore further:
              </h3>
              <p className="text-center text-dark-blue text-lg px-2">
                Please log in to your account or register if you don't have one.
                This will allow you to access your personal dashboard and manage
                your bookings.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col my-8">
            <button
              onClick={() => navigate("/probetext")}
              className="w-full md:w-[50%] bg-[#07B6D4] rounded-full mx-auto text-center text-white py-2 mb-3"
            >
              Register
            </button>
            <button
              onClick={() => navigate("/")}
              className="w-full md:w-[50%] bg-[#07B6D4] rounded-full mx-auto text-center text-white py-2 mb-2"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OnboardingPage;
