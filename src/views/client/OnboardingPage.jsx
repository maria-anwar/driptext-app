import { React, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/homeimages/driptext.png";
import OnboardingForm from "../../components/client-forms/OnboardingForm";
import useTitle from "../../hooks/useTitle";
import { useTranslation } from "react-i18next";

const OnboardingPage = () => {
  const {t} = useTranslation();
  useTitle(t("onboardingPage.title"));
  const location = useLocation();
  const { projectName, userId,role } = location.state || {};
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
          <a
            href='https://driptext.de/' target="_self"
            className="w-full flex items-center justify-center py-2 pb-5 sm:pb-7 md:pb-8"
          >
            <img
              src={Logo}
              alt="driptext"
              className=" w-20 xs:w-24 md:w-28 xl:w-32 3xl:w-36 4xl:w-40"
            />
          </a>
          <div className="w-full flex d-flex flex-col gap-10">
            <div className="flex flex-col gap-4 px-4 xs:px-6 md:px-9">
              <h1 className="text-dark-blue text-2xl md:text-3xl font-bold text-center md:px-8">
                {t("onboardingPage.thankYouMessage.heading")}
              </h1>
              <h3 className="text-center text-dark-blue text-xl font-bold">
              {t("onboardingPage.thankYouMessage.subheading")}
              </h3>
              <p className="text-center text-dark-blue text-lg px-2">
              {t("onboardingPage.thankYouMessage.description")}
              </p>
            </div>
            <OnboardingForm projectName={projectName} userId={userId}  />
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
              {t("onboardingPage.welcomeMessage.heading")}
              </h1>
              <h3 className="text-center text-dark-blue text-xl font-bold">
              {t("onboardingPage.welcomeMessage.subheading")}
              </h3>
              <p className="text-center text-dark-blue text-lg px-2">
              {t("onboardingPage.welcomeMessage.description")}
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center flex-col my-8">
            <button
              onClick={() => navigate("/probetext")}
              className="w-2/3 md:w-[30%] bg-[#07B6D4] rounded-full mx-auto text-center text-white py-2 mb-3 hover:bg-[#07B6D4]/80"
            >
               {t("onboardingPage.buttons.register")}
            </button>
            <button
              onClick={() => navigate("/")}
              className="w-2/3 md:w-[30%] bg-[#07B6D4] rounded-full mx-auto text-center text-white py-2 mb-2 hover:bg-[#07B6D4]/80"
            >
              {t("onboardingPage.buttons.login")}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OnboardingPage;
