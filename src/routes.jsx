import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import RegistrationLayout from "./layouts/RegistrationLayout";
import Home from "./views";
import Registration from "./views/client/Registration";
import Onboarding from "./views/client/Onboarding";
import TextInfoForm from "./components/forms/TextInfoForm";
import ContactDetailForm from "./components/forms/ContactDetailForm";
import RegisterForms from "./components/forms/RegisterForms";
import RegisterFormLayout from "./layouts/RegisterFormLayout";
import AimContent from "./components/forms/onboarding-forms/AimContent";
import OnboardingLayout from "./layouts/OnboardingLayout";
import OnboardingForm from "./components/forms/OnboardingForm";
import OnboardingFormLayout from "./layouts/OnboardingFormLayout";
import GeneralInfo from "./components/forms/onboarding-forms/GeneralInfo";
import CompanyInfo from "./components/forms/onboarding-forms/CompanyInfo";
import TargetCustomers from "./components/forms/onboarding-forms/TargetCustomers";
import RegistrationForm from "./components/client-forms/RegistrationForm";
import RegisterPage from "./views/client/RegisterPage";
import ThankYouPage from "./components/landing-page/ThankyouSection";
import Booking from "./components/Pages/Booking/Booking"
import OnboardingPage from "./views/client/OnboardingPage";
import Auth from "./components/authentication/Auth";
import Auth3 from "./components/authentication/Auth3";
import Auth2 from "./components/authentication/Auth2";
import SignIn from "./views/auth/SignIn";

const WebRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="/probetext" element={<RegisterPage />} />            
          </Route>
          <Route path="/onboarding-probetext" element={<OnboardingPage />} />            
          <Route path="/thankyou-page" element={<ThankYouPage />}/>
          <Route path="/booking" element={<Booking />}/>
          <Route path="/login" element={<SignIn />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/auth3" element={<Auth3 />} />
          <Route path="/auth2" element={<Auth2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default WebRoutes;
