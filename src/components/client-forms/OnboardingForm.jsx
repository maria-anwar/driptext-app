import { Formik, Form } from "formik";
import * as Yup from "yup";
import { GroupTextArea } from "./GroupTextArea";
import { GroupDropdownField } from "./GroupDropdownField";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { GroupField } from "./GroupField";
import { useTranslation } from "react-i18next";
import { toast,ToastContainer } from "react-toastify";



const OnboardingForm = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);
  const location = useLocation();
  const { projectName, projectId, userId, role, plan,keywords } = location.state || {};
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMesssage] = useState("");
  const userRole = user?.user?.data?.user?.role?.title.toLowerCase() || role;

  const currentLanguage = i18n.language;

  const initialValues = {
    speech: currentLanguage === "en" ? "She" : "Sie",
    project: projectName,
    perspective:
      currentLanguage === "en" ? "the company/the shop" : "die Firma/der Shop",
    companyInfo: "",
    companyAttributes: "",
    services: "",
    content: "",
    customers: "",
    contentPurpose: "",
    brand: "",
    keywordType: currentLanguage === "en" ? "Guide text" : "Ratgebertext",
    keyword: keywords || null,
  };

  const validationSchema = Yup.object().shape({
    speech: Yup.string().required(
      t("onboardingPage.onboardingForm.validationMessages.speech")
    ),
    perspective: Yup.string().required(
      t("onboardingPage.onboardingForm.validationMessages.perspective")
    ),
    companyInfo: Yup.string().required(
      t("onboardingPage.onboardingForm.validationMessages.companyInfo")
    ),
    companyAttributes: Yup.string().required(
      t("onboardingPage.onboardingForm.validationMessages.companyAttributes")
    ),
    services: Yup.string().required(
      t("onboardingPage.onboardingForm.validationMessages.services")
    ),
    content: Yup.string().required(
      t("onboardingPage.onboardingForm.validationMessages.content")
    ),
    customers: Yup.string().required(
      t("onboardingPage.onboardingForm.validationMessages.customers")
    ),
    contentPurpose: Yup.string().required(
      t("onboardingPage.onboardingForm.validationMessages.contentPurpose")
    ),
    brand: Yup.string().required(
      t("onboardingPage.onboardingForm.validationMessages.brand")
    ),
  });

  const onSubmit = async (values) => {

    // const storedDataString = localStorage.getItem("key");
    // const storedData = storedDataString ? JSON.parse(storedDataString) : null;
  
    // if (!storedData || !storedData.token || Date.now() > storedData.expiration) {
    //   toast.error("Session expired. Please login again.");
    //   localStorage.removeItem("key");
    //   navigate("/");
    //   return null;
    // }
  
    // if (allowedRoles && !allowedRoles.includes(storedData.role.toLowerCase())) {
    //   toast.error("You are not authorized to access this page.");
    //   localStorage.removeItem("key");
    //   navigate("/");
    //   return null;
    // }

    if (currentLanguage === "de") {
      if (values.speech === "Sie") {
        values.speech = "She";
      } else if (values.speech === "Du (groß geschrieben)") {
        values.speech = "You (capitalized)";
      } else if (values.speech === "du (klein geschrieben)") {
        values.speech = "you (lowercase)";
      } else if (values.speech === "ihr/euch") {
        values.speech = "you (plural / informal)";
      } else if (values.speech === "Divers") {
        values.speech = "Divers";
      }  else if (values.speech === "Keine direkte Ansprache") {
        values.speech = "No direct address";
      }

    }
    if (currentLanguage === "de") {
      if (values.perspective === "die Firma/der Shop") {
        values.perspective = "the company/the shop";
      } else if (values.perspective === "die Redaktion") {
        values.perspective = "the editorial team";
      } else if (values.perspective === "Ich") {
        values.perspective = "I";
      } else if (values.perspective === "Neutral") {
        values.perspective = "Neutral";
      } else if (
        values.perspective === "einheitlich, aber grundsätzlich egal"
      ) {
        values.perspective = "uniform, but generally irrelevant";
      } else if (values.perspective === "wir/unser Shop/unser Unternehmen") {
        values.perspective = "we/our shop/our company";
      } else if (values.perspective === "Divers") {
        values.perspective = "Divers";
      }
    }

    if(values.keywords !== null && currentLanguage === "de") {
      if (values.keywordType === "Ratgebertext") {
        values.keywordType = "Guide text";
      }
      else if (values.keywordType === "Shop (Kategorie)") {
        values.keywordType = "Shop (Category)";
      }
      else if (values.keywordType === "Shop (Produkt)") {
        values.keywordType = "Shop (Product)";
      }
      else if (values.keywordType === "Definition/Wiki") {
        values.keywordType = "Definition/Wiki";
      }
      else if (values.keywordType === "Shop (Startseite)") {
        values.keywordType = "Shop (Homepage)";
      }
      else if (values.keywordType === "CMS-Seite") {
        values.keywordType = "CMS Page";
      }
    }

    setLoading(true);
    const onBoardingData = {
      speech: values.speech,
      prespective: values.perspective,
      projectName: values.project,
      keyword: values.keyword,
      keywordType: values.keywordType,
      userId: userId || user.user.data.user._id, // Assign appropriate value
      projectId: projectId || localStorage.getItem("projectId"),
      companyBackgorund: values.companyInfo,
      companyAttributes: values.companyAttributes,
      comapnyServices: values.services,
      customerContent: values.content,
      customerIntrest: values.customers,
      contentPurpose: values.contentPurpose,
      contentInfo: values.brand,
    };

    try {
      setError(false);
      const response = await axios.post(
        `${import.meta.env.VITE_DB_URL}/users/create/onboarding`,
        onBoardingData
      );
      setLoading(false);
      if (plan === null) {
        window.location.href = "https://driptext.de/danke-probetext/";
      } else {
        window.location.href = "https://driptext.de/danke-onboarding/";
      }
    } catch (error) {
      if (error.response) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          t("onboardingPage.onboardingForm.errorMessages.generalError");
        setError(true);
        setErrorMesssage(errorMessage);
      } else {
        const errorMessage =
          error.response?.data?.message || error.message || "Fehler";
        setError(true);
        setErrorMesssage(errorMessage);
      }
      setLoading(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props) => (
          <Form>
            <div className="w-full bg-gradient-to-r from-custom-gray to-[#F7F7F7] flex flex-col gap-6 px-3 xs:px-8 xs:py-10 md:px-9 md:py-14 lg:px-10 mt-6 mb-8 rounded-xl">
              <div className="flex flex-col gap-y-4">
                <h2 className="text-custom-black text-base font-semibold -mb-2">
                  {t("onboardingPage.onboardingForm.sections.0.title")}
                </h2>
                <ToastContainer/>
                <GroupDropdownField
                  label={t(
                    "onboardingPage.onboardingForm.sections.0.fields.0.label"
                  )}
                  type={"text"}
                  id={"speech"}
                  name={"speech"}
                  placeholder={""}
                  option1={currentLanguage === "en" ? "She" : "Sie"}
                  option2={
                    currentLanguage === "en"
                      ? "You (capitalized)"
                      : "Du (groß geschrieben)"
                  }
                  option3={
                    currentLanguage === "en"
                      ? "you (lowercase)"
                      : "du (klein geschrieben)"
                  }
                  option4={
                    currentLanguage === "en"
                      ? "you (plural / informal)"
                      : "ihr/euch"
                  }
                  option5={
                    currentLanguage === "en"
                      ? "No direct address"
                      : "Keine direkte Ansprache"
                  }
                  option6={currentLanguage === "en" ? "Divers" : "Divers"}
                  value={props.values.speech}
                  errors={props.errors.speech}
                  onChange={props.handleChange}
                />
                <GroupDropdownField
                  label={t(
                    "onboardingPage.onboardingForm.sections.0.fields.1.label"
                  )}
                  placeholder={
                    currentLanguage === "en" ? "Write here" : "Hier schreiben"
                  }
                  type={"text"}
                  id={"perspective"}
                  name={"perspective"}
                  value={props.values.perspective}
                  errors={props.errors.perspective}
                  onChange={props.handleChange}
                  option1={
                    currentLanguage === "en"
                      ? "the company/the shop"
                      : "die Firma/der Shop"
                  }
                  option2={
                    currentLanguage === "en"
                      ? "the editorial team"
                      : "die Redaktion"
                  }
                  option3={currentLanguage === "en" ? "I" : "Ich"}
                  option4={currentLanguage === "en" ? "Neutral" : "Neutral"}
                  option5={
                    currentLanguage === "en"
                      ? "uniform, but generally irrelevant"
                      : "einheitlich, aber grundsätzlich egal"
                  }
                  option6={currentLanguage === "en" ? "Divers" : "Divers"}
                  option7={
                    currentLanguage === "en"
                      ? "we/our shop/our company"
                      : "wir/unser Shop/unser Unternehmen"
                  }
                />

                <div className="w-full flex flex-col gap-y-1">
                  <label className="text-custom-black text-sm lg:text-sm font-semibold 2xl:font-semibold">
                    {t(
                      "onboardingPage.onboardingForm.sections.0.fields.2.label"
                    )}
                    <span className="text-red-600 text:lg 2xl:text-[17px] mt-6 pl-1">
                      *
                    </span>
                  </label>
                  <input
                    className="w-full bg-white text-custom-black text-xs xs:text-sm px-2 xs:px-3.5 font-normal py-3 focus:outline-none focus:ring-none rounded-xl"
                    type={"text"}
                    id={"project"}
                    name={"project"}
                    placeholder={t(
                      "onboardingPage.onboardingForm.sections.0.fields.2.placeholder"
                    )}
                    value={projectName}
                    disabled={projectName ? true : false}
                  />
                </div>
                {plan === null ? (
                  <>
                    <GroupField
                      label={t(
                        "onboardingPage.onboardingForm.sections.0.fields.3.label"
                      )}
                      placeholder={t(
                        "onboardingPage.onboardingForm.sections.0.fields.3.placeholder"
                      )}
                      id={"keyword"}
                      name={"keyword"}
                      value={props.values.keyword}
                      errors={props.errors.keyword}
                      onChange={(e) => {
                        props.handleChange(e);
                        setError(false);
                        setErrorMesssage("");
                      }}
                      disabled={true}
                    />

                    <GroupDropdownField
                      label={t(
                        "onboardingPage.onboardingForm.sections.0.fields.4.label"
                      )}
                      type={"text"}
                      id={"keywordType"}
                      name={"keywordType"}
                      placeholder={""}
                      option1={
                        currentLanguage === "en" ? "Guide text" : "Ratgebertext"
                      }
                      option2={
                        currentLanguage === "en"
                          ? "Shop (Category)"
                          : "Shop (Kategorie)"
                      }
                      option3={
                        currentLanguage === "en"
                          ? "Shop (Product)"
                          : "Shop (Produkt)"
                      }
                      option4={
                        currentLanguage === "en"
                          ? "Definition/Wiki"
                          : "Definition/Wiki"
                      }
                      option5={
                        currentLanguage === "en"
                          ? "Shop (Homepage)"
                          : "Shop (Startseite)"
                      }
                      option6={
                        currentLanguage === "en" ? "CMS Page" : "CMS-Seite"
                      }
                      value={props.values.keywordType}
                      errors={props.errors.keywordType}
                      onChange={props.handleChange}
                    />
                  </>
                ) : null}
              </div>

              <div className="flex flex-col gap-y-4 -mt-3">
                <h2 className="text-custom-black text-base font-semibold lg:mt-3.5 -mb-2">
                  {t("onboardingPage.onboardingForm.sections.1.title")}
                </h2>
                <GroupTextArea
                  label={t(
                    "onboardingPage.onboardingForm.sections.1.fields.0.label"
                  )}
                  type={"text"}
                  placeholder={t(
                    "onboardingPage.onboardingForm.sections.1.fields.0.placeholder"
                  )}
                  id={"companyInfo"}
                  name={"companyInfo"}
                  value={props.values.companyInfo}
                  errors={props.errors.companyInfo}
                  onChange={(e) => {
                    props.handleChange(e);
                    setError(false);
                    setErrorMesssage("");
                  }}
                />

                <GroupTextArea
                  label={t(
                    "onboardingPage.onboardingForm.sections.1.fields.1.label"
                  )}
                  type={"text"}
                  placeholder={t(
                    "onboardingPage.onboardingForm.sections.1.fields.1.placeholder"
                  )}
                  id={"companyAttributes"}
                  name={"companyAttributes"}
                  value={props.values.companyAttributes}
                  errors={props.errors.companyAttributes}
                  onChange={(e) => {
                    props.handleChange(e);
                    setError(false);
                    setErrorMesssage("");
                  }}
                />
                <GroupTextArea
                  label={t(
                    "onboardingPage.onboardingForm.sections.1.fields.2.label"
                  )}
                  type={"text"}
                  placeholder={t(
                    "onboardingPage.onboardingForm.sections.1.fields.2.placeholder"
                  )}
                  id={"services"}
                  name={"services"}
                  value={props.values.services}
                  errors={props.errors.services}
                  onChange={(e) => {
                    props.handleChange(e);
                    setError(false);
                    setErrorMesssage("");
                  }}
                />
              </div>

              <div className="flex flex-col gap-y-4  -mt-3">
                <h2 className="text-custom-black text-base font-semibold lg:mt-3.5 -mb-2">
                  {t("onboardingPage.onboardingForm.sections.2.title")}
                </h2>
                <GroupTextArea
                  label={t(
                    "onboardingPage.onboardingForm.sections.2.fields.0.label"
                  )}
                  type={"text"}
                  placeholder={t(
                    "onboardingPage.onboardingForm.sections.2.fields.0.placeholder"
                  )}
                  id={"content"}
                  name={"content"}
                  value={props.values.content}
                  errors={props.errors.content}
                  onChange={(e) => {
                    props.handleChange(e);
                    setError(false);
                    setErrorMesssage("");
                  }}
                />

                <GroupTextArea
                  label={t(
                    "onboardingPage.onboardingForm.sections.2.fields.1.label"
                  )}
                  type={"text"}
                  placeholder={t(
                    "onboardingPage.onboardingForm.sections.2.fields.1.placeholder"
                  )}
                  id={"customers"}
                  name={"customers"}
                  value={props.values.customers}
                  errors={props.errors.customers}
                  onChange={(e) => {
                    props.handleChange(e);
                    setError(false);
                    setErrorMesssage("");
                  }}
                />
              </div>

              <div className="flex flex-col gap-y-4  -mt-3">
                <h2 className="text-custom-black text-base font-semibold lg:mt-3.5 -mb-2">
                  {t("onboardingPage.onboardingForm.sections.3.title")}
                </h2>
                <GroupTextArea
                  label={t(
                    "onboardingPage.onboardingForm.sections.3.fields.0.label"
                  )}
                  type={"text"}
                  placeholder={t(
                    "onboardingPage.onboardingForm.sections.3.fields.0.placeholder"
                  )}
                  id={"contentPurpose"}
                  name={"contentPurpose"}
                  value={props.values.contentPurpose}
                  errors={props.errors.contentPurpose}
                  onChange={(e) => {
                    props.handleChange(e);
                    setError(false);
                    setErrorMesssage("");
                  }}
                />

                <GroupTextArea
                  label={t(
                    "onboardingPage.onboardingForm.sections.3.fields.1.label"
                  )}
                  type={"text"}
                  placeholder={t(
                    "onboardingPage.onboardingForm.sections.3.fields.1.placeholder"
                  )}
                  id={"brand"}
                  name={"brand"}
                  value={props.values.brand}
                  errors={props.errors.brand}
                  onChange={(e) => {
                    props.handleChange(e);
                    setError(false);
                    setErrorMesssage("");
                  }}
                />

                <button
                  className={`${
                    loading ? "cursor-not-allowed" : "cursor-pointer"
                  } border-none text-white font-medium text-base w-full bg-custom-black hover:bg-custom-black/90 flex justify-center py-2 xs:py-2.5 mt-1 rounded-xl`}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-white border-solid rounded-full border-t-transparent animate-spin" />
                    </div>
                  ) : (
                    t("onboardingPage.onboardingForm.buttons.submit")
                  )}
                </button>

                {error && (
                  <div id="email" className="mt-2 text-sm text-red-500">
                    {errorMessage}
                  </div>
                )}
              </div>
              <p className="text-custom-black text-sm 3xl:text-base font-medium text-center">
                {t("onboardingPage.onboardingForm.formReminder")}
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default OnboardingForm;
