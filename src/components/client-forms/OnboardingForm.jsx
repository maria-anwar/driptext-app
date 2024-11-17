import { Formik, Form } from "formik";
import * as Yup from "yup";
import { GroupTextArea } from "./GroupTextArea";
import { GroupDropdownField } from "./GroupDropdownField";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { GroupField } from "./GroupField";
import { useTranslation } from "react-i18next";

const OnboardingForm = () => {
  const {t} = useTranslation();
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);
  const location = useLocation();
  const { projectName, projectId, userId, role, plan } = location.state || {};
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMesssage] = useState("");
  const userRole = user?.user?.data?.user?.role?.title.toLowerCase() || role;

  const initialValues = {
    speech: "You (formal)",
    project: projectName,
    perspective: "we/our shop/our company",
    companyInfo: "",
    companyAttributes: "",
    services: "",
    content: "",
    customers: "",
    contentPurpose: "",
    brand: "",
    keywordType: "Guide",
    keyword: null,
  };

  const validationSchema = Yup.object().shape({
    speech: Yup.string().required(t("onboardingPage.onboardingForm.validationMessages.speech")),
    perspective: Yup.string().required(t("onboardingPage.onboardingForm.validationMessages.perspective")),
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
                <GroupDropdownField
                  label={t("onboardingPage.onboardingForm.sections.0.fields.0.label")}
                  type={"text"}
                  id={"speech"}
                  name={"speech"}
                  placeholder={""}
                  option1={"You (formal)"}
                  option2={"You (with a capital Y)"}
                  option3={"you (with a lowercase y)"}
                  option4={"you"}
                  option5={"no direct address"}
                  value={props.values.speech}
                  errors={props.errors.speech}
                  onChange={props.handleChange}
                />
                <GroupDropdownField
                  label={t("onboardingPage.onboardingForm.sections.0.fields.1.label")}
                  placeholder={"Hier schreiben"}
                  type={"text"}
                  id={"perspective"}
                  name={"perspective"}
                  value={props.values.perspective}
                  errors={props.errors.perspective}
                  onChange={props.handleChange}
                  option1={"we/our shop/our company"}
                  option2={"the company/the shop"}
                  option3={"the editorial team"}
                  option4={"I"}
                  option5={"neutral"}
                  option6={"uniform/but generally irrelevant"}
                />
                <div className="w-full flex flex-col gap-y-1">
                  <label className="text-custom-black text-sm lg:text-sm font-semibold 2xl:font-semibold">
                  {t("onboardingPage.onboardingForm.sections.0.fields.2.label")}
                    <span className="text-red-600 text:lg 2xl:text-[17px] mt-6 pl-1">
                      *
                    </span>
                  </label>
                  <input
                    className="w-full bg-white text-custom-black text-xs xs:text-sm px-2 xs:px-3.5 font-normal py-3 focus:outline-none focus:ring-none rounded-xl"
                    type={"text"}
                    id={"project"}
                    name={"project"}
                    placeholder= {t("onboardingPage.onboardingForm.sections.0.fields.2.placeholder")}
                    value={projectName}
                    disabled={projectName ? true : false}
                  />
                </div>
                {plan === null ? (
                  <>
                    <GroupField
                      label={t("onboardingPage.onboardingForm.sections.0.fields.3.label")}
                      placeholder={t("onboardingPage.onboardingForm.sections.0.fields.3.placeholder")}
                      id={"keyword"}
                      name={"keyword"}
                      value={props.values.keyword}
                      errors={props.errors.keyword}
                      onChange={(e) => {
                        props.handleChange(e);
                        setError(false);
                        setErrorMesssage("");
                      }}
                    />

                    <GroupDropdownField
                      label={t("onboardingPage.onboardingForm.sections.0.fields.4.label")}
                      type={"text"}
                      id={"keywordType"}
                      name={"keywordType"}
                      placeholder={""}
                      option1="Guide"
                      option2="Shop (Category)"
                      option3="Shop (Product)"
                      option4="Definition/Wiki"
                      option5="Shop (Homepage)"
                      option6="CMS Page"
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
                  label={t("onboardingPage.onboardingForm.sections.1.fields.0.label")}
                  type={"text"}
                  placeholder={t("onboardingPage.onboardingForm.sections.1.fields.0.placeholder")}
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
                  label={t("onboardingPage.onboardingForm.sections.1.fields.1.label")}
                  type={"text"}
                  placeholder={t("onboardingPage.onboardingForm.sections.1.fields.1.placeholder")}
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
                  label={t("onboardingPage.onboardingForm.sections.1.fields.2.label")}
                  type={"text"}
                  placeholder={t("onboardingPage.onboardingForm.sections.1.fields.2.placeholder")}
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
                  label={t("onboardingPage.onboardingForm.sections.2.fields.0.label")}
                  type={"text"}
                  placeholder={t("onboardingPage.onboardingForm.sections.2.fields.0.placeholder")}
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
                  label={t("onboardingPage.onboardingForm.sections.2.fields.1.label")}
                  type={"text"}
                  placeholder={t("onboardingPage.onboardingForm.sections.2.fields.1.placeholder")}
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
                  label={t("onboardingPage.onboardingForm.sections.3.fields.0.label")}
                  type={"text"}
                  placeholder={t("onboardingPage.onboardingForm.sections.3.fields.0.placeholder")}
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
                  label={t("onboardingPage.onboardingForm.sections.3.fields.1.label")}
                  type={"text"}
                  placeholder={t("onboardingPage.onboardingForm.sections.3.fields.1.placeholder")}
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
                  } border-none text-white font-medium text-base w-full bg-custom-black flex justify-center py-2 xs:py-2.5 mt-1 rounded-xl`}
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
