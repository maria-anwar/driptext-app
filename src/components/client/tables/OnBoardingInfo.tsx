import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import GroupTextArea from "../../client/Forms/GroupTextArea";
import { GroupField } from "../../client/Forms/GroupField";
import GroupDropdownField from "../../client/Forms/GroupDropdownField";
import { useTranslation } from "react-i18next";

interface EditProjectProps {
  closeModel: () => void;
  handleRefresh?: () => void;
  projectId: string;
  domain: string;
  speech: string;
  perspective: string;
  onBoarding: {
    companyBackgorund?: string;
    companyAttributes?: string;
    comapnyServices?: string;
    customerContent?: string;
    customerIntrest?: string;
    contentPurpose?: string;
    contentInfo?: string;
  };
}

const OnBoardingInfo: React.FC<EditProjectProps> = ({
  projectId,
  domain,
  speech,
  perspective,
  onBoarding,
  closeModel,
  handleRefresh,
}) => {
  const { t } = useTranslation();
  const user = useSelector<any>((state) => state.user);
  const [userToken, setUserToken] = useState(user?.user?.token);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Initial values for form fields
  const initialFormData = {
    speech: speech,
    perspective: perspective,
    projectId,
    projectName: domain,
    companyInfo: onBoarding?.companyBackgorund || "",
    companyAttributes: onBoarding?.companyAttributes || "",
    services: onBoarding?.comapnyServices || "",
    content: onBoarding?.customerContent || "",
    customers: onBoarding?.customerIntrest || "",
    contentPurpose: onBoarding?.contentPurpose || "",
    brand: onBoarding?.contentInfo || "",
  };

  // Validation schema for form fields
  const validationSchema = Yup.object().shape({
    speech: Yup.string().required(
      t("project.onboarding.formErrors.speechRequired")
    ),
    perspective: Yup.string().required(
      t("project.onboarding.formErrors.perspectiveRequired")
    ),
    projectName: Yup.string().required(
      t("project.onboarding.formErrors.projectNameRequired")
    ),
    companyInfo: Yup.string().required(
      t("project.onboarding.formErrors.companyInfoRequired")
    ),
    companyAttributes: Yup.string().required(
      t("project.onboarding.formErrors.companyAttributesRequired")
    ),
    services: Yup.string().required(
      t("project.onboarding.formErrors.servicesRequired")
    ),
    content: Yup.string().required(
      t("project.onboarding.formErrors.contentRequired")
    ),
    customers: Yup.string().required(
      t("project.onboarding.formErrors.customersRequired")
    ),
    contentPurpose: Yup.string().required(
      t("project.onboarding.formErrors.contentPurposeRequired")
    ),
    brand: Yup.string().required(
      t("project.onboarding.formErrors.brandRequired")
    ),
  });

  const onSubmit = (values: typeof initialFormData) => {
    setLoading(true);
    const payload = {
      projectId,
      speech: values.speech,
      prespective: values.perspective,
      companyBackgorund: values.companyInfo,
      companyAttributes: values.companyAttributes,
      comapnyServices: values.services,
      customerContent: values.content,
      customerIntrest: values.customers,
      contentPurpose: values.contentPurpose,
      contentInfo: values.brand,
    };
    console.log(payload);

    axios.defaults.headers.common["access-token"] = userToken;

    axios
      .post(`${import.meta.env.VITE_DB_URL}/projects/updateOnBoarding`, payload)
      .then(() => {
        setLoading(false);
        closeModel(); // Close the modal after successful submission
        handleRefresh(); // Refresh the project details
      })
      .catch((err) => {
        const error =
          err?.response?.data?.message || t("project.onboarding.errorMessage");
        setErrorMessage(error);
        setLoading(false);
      });
  };

  return (
    <Formik
      initialValues={initialFormData}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors, touched, handleChange }) => (
        <Form>
          <div className="fixed inset-0 flex items-center justify-center z-999999 bg-neutral-200 dark:bg-slate dark:bg-opacity-15 bg-opacity-60 px-4">
            <div className="bg-white dark:bg-black p-6 rounded shadow-lg lg:w-10/12 xl:w-10/12 2xl:w-6/12 max-h-[90vh] overflow-y-auto scrollbar-hide">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-bold dark:text-white">
                  {t("project.onboarding.editProject")}
                </h2>
                <FontAwesomeIcon
                  className="cursor-pointer text-lg text-red-500"
                  onClick={closeModel}
                  icon={faTimes}
                />
              </div>
              <div>
                <h2 className="text-black dark:text-white text-base font-semibold">
                  {t("project.onboarding.generalInformation")}
                </h2>
                <GroupDropdownField
                  label={t("project.onboarding.speech")}
                  id="speech"
                  name="speech"
                  option1="She"
                  option2="You (capitalized)"
                  option3="you (lowercase)"
                  option4="you"
                  option5="no direct address"
                  value={values.speech}
                  errors={touched.speech ? errors.speech : ""}
                  onChange={handleChange}
                  type={""}
                  placeholder={""}
                />
                <GroupDropdownField
                  label={t("project.onboarding.writingPerspective")}
                  id="perspective"
                  name="perspective"
                  option1="we/our shop/our company"
                  option2="the company/shop"
                  option3="the editorial office"
                  option4="I"
                  option5="neutral"
                  option6="uniform/but fundamentally irrelevant"
                  value={values.perspective}
                  errors={touched.perspective ? errors.perspective : ""}
                  onChange={handleChange}
                  type={""}
                  placeholder={""}
                />

                {/* Company Information Section */}
                <h2 className="text-black dark:text-white text-base font-semibold lg:mt-3">
                  {t("project.onboarding.onBoarding")}
                </h2>
                <div className="bg-slate-300/90 dark:bg-boxdark rounded py-2 px-4 mt-3">
                  <h2 className="text-black dark:text-white text-base font-semibold lg:mt-3">
                    {t("project.onboarding.companyInformation")}
                  </h2>
                  <div className="flex flex-col gap-3 py-3">
                    <GroupTextArea
                      label={t("project.onboarding.companyInfoLabel")}
                      id="companyInfo"
                      name="companyInfo"
                      value={values.companyInfo}
                      errors={touched.companyInfo ? errors.companyInfo : ""}
                      onChange={handleChange}
                    />
                    <GroupTextArea
                      label={t("project.onboarding.companyAttributesLabel")}
                      id="companyAttributes"
                      name="companyAttributes"
                      value={values.companyAttributes}
                      errors={
                        touched.companyAttributes
                          ? errors.companyAttributes
                          : ""
                      }
                      onChange={handleChange}
                    />
                    <GroupTextArea
                      label={t("project.onboarding.servicesLabel")}
                      id="services"
                      name="services"
                      value={values.services}
                      errors={touched.services ? errors.services : ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-3 py-3">
                    <h2 className="text-black dark:text-white text-base font-semibold lg:mt-3.5">
                      {t("project.onboarding.targetCustomerInformation")}
                    </h2>
                    <GroupTextArea
                      label={t("project.onboarding.contentWrittenForLabel")}
                      id="content"
                      name="content"
                      value={values.content}
                      errors={touched.content ? errors.content : ""}
                      onChange={handleChange}
                    />
                    <GroupTextArea
                      label={t("project.onboarding.customerInterestsLabel")}
                      id="customers"
                      name="customers"
                      value={values.customers}
                      errors={touched.customers ? errors.customers : ""}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Content Purpose Section */}
                  <div className="flex flex-col gap-3 py-3">
                    <h2 className="text-black dark:text-white text-base font-semibold lg:mt-3.5">
                      {t("project.onboarding.aimOfContent")}
                    </h2>
                    <GroupTextArea
                      label={t("project.onboarding.contentPurposeLabel")}
                      id="contentPurpose"
                      name="contentPurpose"
                      value={values.contentPurpose}
                      errors={
                        touched.contentPurpose ? errors.contentPurpose : ""
                      }
                      onChange={handleChange}
                    />
                    <GroupTextArea
                      label={t("project.onboarding.brandAndContentInfoLabel")}
                      id="brand"
                      name="brand"
                      value={values.brand}
                      errors={touched.brand ? errors.brand : ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-end flex-row gap-x-4 mt-4">
                {" "}
                <button
                  className={` my-3 flex justify-center rounded bg-transparent ring-1 ring-primary py-1.5 px-6 font-medium text-black dark:text-white `}
                  type="button"
                  onClick={closeModel}
                >
                  {t("project.onboarding.cancelButton")}
                </button>
                <button
                  className={` my-3 flex justify-center rounded bg-primary py-1.5 px-6 font-medium text-gray ${
                    loading ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                  type="submit"
                  disabled={loading}
                >
                  {loading
                    ? t("project.onboarding.savingButton")
                    : t("project.onboarding.saveButton")}
                </button>
              </div>

              {errorMessage && (
                <div className="text-red-500 mt-3 text-center">
                  {errorMessage}
                </div>
              )}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default OnBoardingInfo;
