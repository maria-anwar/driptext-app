import { React, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/homeimages/driptext.png";
import OnboardingForm from "../../components/client-forms/OnboardingForm";
import useTitle from "../../hooks/useTitle";

const OnboardingPage = () => {
  useTitle("Onboarding für Kunden");
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
                Vielen Dank für deine Buchung!
              </h1>
              <h3 className="text-center text-dark-blue text-xl font-bold">
                So geht’s jetzt weiter:
              </h3>
              <p className="text-center text-dark-blue text-lg px-2">
                Fülle das folgende Onboarding Formular aus, damit wir dein
                Unternehmen und deine Content-Ziele besser kennenlernen.
              </p>
            </div>
            <OnboardingForm projectName={projectName} userId={userId} role={role} />
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
                Willkommen auf unserer Plattform!
              </h1>
              <h3 className="text-center text-dark-blue text-xl font-bold">
                Um auf Ihr Konto zuzugreifen und mehr zu entdecken:
              </h3>
              <p className="text-center text-dark-blue text-lg px-2">
                Bitte melden Sie sich in Ihrem Konto an oder registrieren Sie
                sich, wenn Sie noch keines haben. Dadurch erhalten Sie Zugriff
                auf Ihr persönliches Dashboard und können Ihre Buchungen
                verwalten.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center flex-col my-8">
            <button
              onClick={() => navigate("/probetext")}
              className="w-full md:w-[50%] bg-[#07B6D4] rounded-full mx-auto text-center text-white py-2 mb-3"
            >
              Registrieren
            </button>
            <button
              onClick={() => navigate("/")}
              className="w-full md:w-[50%] bg-[#07B6D4] rounded-full mx-auto text-center text-white py-2 mb-2"
            >
              Anmelden
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OnboardingPage;
