import React from "react";
import RegistrationForm from "../../components/client-forms/RegistrationForm";
import useTitle from "../../hooks/useTitle";
import { useTranslation } from "react-i18next";

const RegisterPage = () => {
  const { t } = useTranslation();
  useTitle(t("clientRegister.pageTitle"));
  return (
    <div className="px-4 xs:px-5 sm:px-7 md:px-12 lg:px-9 xl:px-40 2xl:px-44 3xl:px-56 4xl:px-96 py-10 3xl:py-20">
      <div className="w-full flex d-flex flex-col gap-10">
        <div className="flex flex-col gap-4 px-4 xs:px-6 md:px-9">
          <h1 className="text-custom-black text-2xl md:text-3xl font-bold text-center md:px-8">
            {t("clientRegister.title")}
          </h1>
          <p className="text-center text-custom-black text-lg px-2">
            {t("clientRegister.description")}
          </p>
          <h3 className="text-custom-black text-lg md:text-xl font-bold text-center md:px-8">
            {t("clientRegister.subheading")}
          </h3>
        </div>
      </div>
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;
