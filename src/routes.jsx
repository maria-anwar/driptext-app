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

const WebRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route path="/register" element={<RegistrationLayout />}>
            <Route  path="/register/form" element={<RegisterFormLayout />}>
              <Route index element={<TextInfoForm />} />
              <Route path="/register/form/contact-details" element={<ContactDetailForm />} />
            </Route>
          </Route>

          {/* <Route element={<RegistrationLayout />}>
            <Route path="/text-info" element={<TextInfoForm />} />
            <Route path="/contact-details" element={<ContactDetailForm />} />
          </Route> */}
          <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default WebRoutes;
