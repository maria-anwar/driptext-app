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
import ThankYouPage from "./components/landing-page/ThankyouSection";

const WebRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route index element={<Home />} />

            {/* <Route path="/" element={<Home />} /> */}
            
          </Route>
          <Route path="/success" element={<ThankYouPage />}/>
          <Route path="/register" element={<RegistrationLayout />}>
            <Route path="/register/form" element={<RegisterFormLayout />}>
              <Route index element={<TextInfoForm />} />
              <Route
                path="/register/form/contact-details"
                element={<ContactDetailForm />}
              />
            </Route>
          </Route>
          <Route path="/onboarding" element={<OnboardingLayout />}>
            <Route path="/onboarding/form" element={<OnboardingFormLayout />}>
              <Route index element={<GeneralInfo />} />
              <Route
                path="/onboarding/form/company-info"
                element={<CompanyInfo />}
              />
              <Route
                path="/onboarding/form/customers-info"
                element={<TargetCustomers />}
              />
              <Route
                path="/onboarding/form/content-info"
                element={<AimContent />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default WebRoutes;
