import React, {useState} from "react";
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
import OnboardingPage from "./views/client/OnboardingPage";
import Auth from "./components/authentication/Auth";
import Auth3 from "./components/authentication/Auth3";
import Auth2 from "./components/authentication/Auth2";
import SignIn from "./views/auth/SignIn";
import OrderForm from "./views/subscription/OrderBooking";
import Sidebar from "./components/client/Sidebar";
import Header from "./components/client/Headder";
import DefaultLayout from "./layouts/client/DashboardLayout";
import Projects from "./views/client/dashboard/Projects";
import Settings from "./views/client/dashboard/Settings";
import Support from "./views/client/dashboard/Support";
import Profile from "./views/client/dashboard/Profile";
import ForgotPassword from "./views/auth/ForgotPassword";
import PassRequest from "./views/auth/PassRequest";
import TaskTable from "./components/client/tables/TaskTable";
import TableWithCheckbox from "./views/checkTable";
import Table2 from "./components/client/tables/Table2";

const WebRoutes = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout />}>
            {/* <Route index element={<SignIn />} /> */}
            <Route path="/probetext" element={<RegisterPage />} />            
          </Route>
          <Route path="/onboarding-probetext" element={<OnboardingPage />} />            
          <Route path="/thankyou-page" element={<ThankYouPage />}/>
          <Route path="/bestellformular" element={<OrderForm />}/>
          <Route path="/" element={<SignIn />} />
          {/* <Route path="/auth" element={<SignIn />} /> */}
          <Route path="/auth/forgetkey" element={<ForgotPassword />} />
          <Route path="/auth/lost/request" element={<PassRequest />} />
          <Route path="/auth3" element={<Auth3 />} />
          <Route path="/auth2" element={<Auth2 />} />
          <Route path="/client-header" element={<Header />} />
          {/* <Route path="/client-dashboard" element={<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} /> */}
          <Route path="/client-dashboard" element={ <DefaultLayout/>} >
            <Route index element={<Projects />} />
            <Route path="task-table" element={<TaskTable />} />
            <Route path="contact" element={<Support />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="check" element={<TableWithCheckbox />} />
            <Route path="table2" element={<Table2 />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default WebRoutes;
