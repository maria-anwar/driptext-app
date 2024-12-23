import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import GroupTextArea from "../../client/Forms/GroupTextArea";
import GroupDropdownField from "../../client/Forms/GroupDropdownField";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

interface EditProjectProps {
  closeModel: () => void;
  handleRefresh: () => void;
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
  projectID: string;
}

const OnBoardingInfo: React.FC<EditProjectProps> = ({
  projectId,
  domain,
  speech,
  perspective,
  onBoarding,
  closeModel,
  handleRefresh,
  projectID,
}) => {
  const { t, i18n } = useTranslation();
  const user = useSelector<any>((state) => state.user);
  const [userToken, setUserToken] = useState(user?.user?.token);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const currentLanguage = i18n.language;

  if (currentLanguage === "de") {
    if (speech === "She") {
      speech = "Sie";
    } else if (speech === "You (capitalized)") {
      speech = "Du (groß geschrieben)";
    } else if (speech === "you (lowercase)") {
      speech = "du (klein geschrieben)";
    } else if (speech === "you (plural / informal)") {
      speech = "ihr/euch";
    } else if (speech === "Divers") {
      speech = "Divers";
    } else if (speech === "No direct address") {
      speech = "Keine direkte Ansprache";
    }
  }

  if (currentLanguage === "de") {
    if (perspective === "the company/the shop") {
      perspective = "die Firma/der Shop";
    } else if (perspective === "the editorial team") {
      perspective = "die Redaktion";
    } else if (perspective === "I") {
      perspective = "Ich";
    } else if (perspective === "Neutral") {
      perspective = "Neutral";
    } else if (perspective === "uniform, but generally irrelevant") {
      perspective = "einheitlich, aber grundsätzlich egal";
    } else if (perspective === "we/our shop/our company") {
      perspective = "wir/unser Shop/unser Unternehmen";
    } else if (perspective === "Divers") {
      perspective = "Divers"; // No change needed since it's the same in both languages
    }
  }

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
        closeModel();
        handleRefresh();
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
                  {t("project.onboarding.editProject")} {projectID} ({domain}){" "}
                  {t("project.onboarding.edit")}
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
                  value={values.perspective}
                  errors={touched.perspective ? errors.perspective : ""}
                  onChange={handleChange}
                  type={""}
                  placeholder={""}
                />
              </div>

              <Accordion
                allowToggle
                className={`appearance-none border-none py-4 rounded `}
              >
                <AccordionItem
                  className={`border-none bg-slate-100 dark:bg-meta-4 rounded`}
                >
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton className="flex justify-between items-center bg-slate-200 dark:bg-meta-4 rounded ">
                          <p className="font-semibold text-black dark:text-white ">
                            {t("task.taskModel.onBoardingInfo.onBoarding")}
                          </p>
                          {isExpanded ? (
                            <MinusIcon fontSize="12px" />
                          ) : (
                            <AddIcon fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel className="" pb={4}>
                        <div className="bg-white dark:bg-boxdark rounded py-2 px-4 ">
                          <h2 className="text-black dark:text-white text-base font-semibold lg:mt-3">
                            {t("project.onboarding.companyInformation")}
                          </h2>
                          <div className="flex flex-col gap-3 py-3">
                            <GroupTextArea
                              label={t("project.onboarding.companyInfoLabel")}
                              id="companyInfo"
                              name="companyInfo"
                              value={values.companyInfo}
                              errors={
                                touched.companyInfo ? errors.companyInfo : ""
                              }
                              onChange={handleChange}
                            />
                            <GroupTextArea
                              label={t(
                                "project.onboarding.companyAttributesLabel"
                              )}
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
                              {t(
                                "project.onboarding.targetCustomerInformation"
                              )}
                            </h2>
                            <GroupTextArea
                              label={t(
                                "project.onboarding.contentWrittenForLabel"
                              )}
                              id="content"
                              name="content"
                              value={values.content}
                              errors={touched.content ? errors.content : ""}
                              onChange={handleChange}
                            />
                            <GroupTextArea
                              label={t(
                                "project.onboarding.customerInterestsLabel"
                              )}
                              id="customers"
                              name="customers"
                              value={values.customers}
                              errors={touched.customers ? errors.customers : ""}
                              onChange={handleChange}
                            />
                          </div>

                          <div className="flex flex-col gap-3 py-3">
                            <h2 className="text-black dark:text-white text-base font-semibold lg:mt-3.5">
                              {t("project.onboarding.aimOfContent")}
                            </h2>
                            <GroupTextArea
                              label={t(
                                "project.onboarding.contentPurposeLabel"
                              )}
                              id="contentPurpose"
                              name="contentPurpose"
                              value={values.contentPurpose}
                              errors={
                                touched.contentPurpose
                                  ? errors.contentPurpose
                                  : ""
                              }
                              onChange={handleChange}
                            />
                            <GroupTextArea
                              label={t(
                                "project.onboarding.brandAndContentInfoLabel"
                              )}
                              id="brand"
                              name="brand"
                              value={values.brand}
                              errors={touched.brand ? errors.brand : ""}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
              <div className="flex justify-end items-end flex-row gap-4.5 mt-4">
                {" "}
                <button
                  className={`flex justify-center bg-transparent rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white hover:border-primary transition-all duration-300 `}
                  type="button"
                  onClick={closeModel}
                >
                  {t("project.onboarding.cancelButton")}
                </button>
                <button
                  className={` flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90 ${
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
