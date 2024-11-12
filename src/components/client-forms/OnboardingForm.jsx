import { Formik, Form } from "formik";
import * as Yup from "yup";
import { GroupTextArea } from "./GroupTextArea";
import { GroupDropdownField } from "./GroupDropdownField";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { GroupField } from "./GroupField";

const OnboardingForm = () => {
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);
  const location = useLocation();
  const { projectName, projectId, userId, role, plan } = location.state || {};
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMesssage] = useState("");
  const userRole = user?.user?.data?.user?.role?.title.toLowerCase() || role;

  const initialValues = {
    speech: "Sie",
    project: projectName,
    perspective: "wir/unser Shop/unser Unternehmen",
    companyInfo: "",
    companyAttributes: "",
    services: "",
    content: "",
    customers: "",
    contentPurpose: "",
    brand: "",
    keywordType: "Schlüsselworttyp",
    keyword: null,
  };

  const validationSchema = Yup.object().shape({
    speech: Yup.string().required("Bitte wählen Sie die Ansprache"),
    perspective: Yup.string().required("Bitte geben Sie die Perspektive an"),
    companyInfo: Yup.string().required(
      "Bitte geben Sie Informationen zum Unternehmen ein"
    ),
    companyAttributes: Yup.string().required(
      "Bitte geben Sie die Merkmale des Unternehmens an"
    ),
    services: Yup.string().required(
      "Bitte geben Sie die Dienstleistungen des Unternehmens an"
    ),
    content: Yup.string().required(
      "Die oben genannten Informationen sind erforderlich"
    ),
    customers: Yup.string().required(
      "Die oben genannten Informationen sind erforderlich"
    ),
    contentPurpose: Yup.string().required(
      "Die oben genannten Informationen sind erforderlich"
    ),
    brand: Yup.string().required(
      "Die oben genannten Informationen sind erforderlich"
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
      console.log("Daten erfolgreich übermittelt:", response.data);
      // window.location.href = "https://driptext.de/danke-probetext/";

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
          "Der Server hat mit einem Fehler geantwortet";
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
              <div className="flex flex-col gap-6">
                <h2 className="text-custom-black text-base font-semibold">
                  1. Allgemeine Informationen
                </h2>
                <GroupDropdownField
                  label={"Ansprache"}
                  type={"text"}
                  id={"speech"}
                  name={"speech"}
                  placeholder={""}
                  option1={"Sie"}
                  option2={"Du (mit großem D)"}
                  option3={"du (mit kleinem d)"}
                  option4={"du"}
                  option5={"keine direkte Ansprache"}
                  value={props.values.speech}
                  errors={props.errors.speech}
                  onChange={props.handleChange}
                />
                <GroupDropdownField
                  label={"Schreibperspektive"}
                  placeholder={"Hier schreiben"}
                  type={"text"}
                  id={"perspective"}
                  name={"perspective"}
                  value={props.values.perspective}
                  errors={props.errors.perspective}
                  onChange={props.handleChange}
                  option1={"wir/unser Shop/unser Unternehmen"}
                  option2={"das Unternehmen/der Shop"}
                  option3={"die Redaktion"}
                  option4={"Ich"}
                  option5={"neutral"}
                  option6={"einheitlich/aber grundsätzlich irrelevant"}
                />
                <div className="w-full flex flex-col gap-1">
                  <label className="text-custom-black text-sm lg:text-sm font-semibold 2xl:font-semibold">
                    Projekt
                    <span className="text-red-600 text:lg 2xl:text-[17px] mt-6 pl-1">
                      *
                    </span>
                  </label>
                  <input
                    className="w-full bg-white text-custom-black text-xs xs:text-sm px-2 xs:px-3.5 font-normal py-3 focus:outline-none focus:ring-none rounded-xl"
                    type={"text"}
                    id={"project"}
                    name={"project"}
                    placeholder={"Beispiel.com"}
                    value={projectName}
                    disabled={projectName ? true : false}
                  />
                </div>
                {plan === null ? (
                  <>
                    <GroupField
                      label={"Gewünschtes Stichwort"}
                      placeholder={"Beispiel-Stichwort"}
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
                      label={"Schlüsselworttyp"}
                      type={"text"}
                      id={"keywordType"}
                      name={"keywordType"}
                      placeholder={""}
                      option1="Leitfaden"
                      option2="Shop (Kategorie)"
                      option3="Shop (Produkt)"
                      option4="Definition/Wiki"
                      option5="Shop (Startseite)"
                      option6="CMS-Seite"
                      value={props.values.keywordType}
                      errors={props.errors.keywordType}
                      onChange={props.handleChange}
                    />
                  </>
                ) : null}
              </div>

              <div className="flex flex-col gap-5">
                <h2 className="text-custom-black text-base font-semibold lg:mt-3.5">
                  2. Informationen zum Unternehmen:
                </h2>
                <GroupTextArea
                  label={"Hintergrundinformationen zum Unternehmen"}
                  type={"text"}
                  placeholder={
                    "Bitte beschreiben Sie hier, idealerweise in nur einem Satz, was Ihr Unternehmen tut, was es anbietet und wie es dem Kunden hilft."
                  }
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
                  label={
                    "Welche Attribute beschreiben euch als Unternehmen/eure Produkte/eure Leistung am besten?"
                  }
                  type={"text"}
                  placeholder={
                    "Bitte nennen Sie so viele Merkmale, wie Sie möchten, die Leser über Ihr Unternehmen und Ihre Produkte wahrnehmen sollen."
                  }
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
                  label={"Was sind eure Leistungen?"}
                  type={"text"}
                  placeholder={
                    "Bitte listen Sie alle online angebotenen Dienstleistungen auf."
                  }
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

              <div className="flex flex-col gap-5">
                <h2 className="text-custom-black text-base font-semibold lg:mt-3.5">
                  3. Informationen zu den Zielkunden:
                </h2>
                <GroupTextArea
                  label={"Für wen sind die Inhalte geschrieben?"}
                  type={"text"}
                  placeholder={
                    "Bitte beschreiben Sie die Zielgruppe so genau wie möglich."
                  }
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
                  label={
                    "Kunden, die wir ansprechen möchten, haben ein Interesse daran..."
                  }
                  type={"text"}
                  placeholder={
                    "Bitte listen Sie hier in Bullet-Points auf, welche Probleme Sie für die Kunden lösen."
                  }
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

              <div className="flex flex-col gap-5">
                <h2 className="text-custom-black text-base font-semibold lg:mt-3.5">
                  4. Ziel des Inhalts
                </h2>
                <GroupTextArea
                  label={"Was ist das Ziel der Inhalte?"}
                  type={"text"}
                  placeholder={
                    "Bitte beschreiben Sie hier kurz, wie die organischen Kunden/Leser idealerweise reagieren sollten, wenn sie auf Ihrer Seite landen."
                  }
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
                  label={"Informationen über deine Marke und deine Inhaltet"}
                  type={"text"}
                  placeholder={
                    "Bitte geben Sie uns Bullet-Points, wie potenzielle Leser den Inhalt beschreiben sollten, den sie konsumieren."
                  }
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
                    "Jetzt absenden"
                  )}
                </button>

                {error && (
                  <div id="email" className="mt-2 text-sm text-red-500">
                    {errorMessage}
                  </div>
                )}
              </div>
              <p className="text-custom-black text-sm 3xl:text-base font-medium text-center">
                Bitte überprüfe deine Daten vor dem Absenden auf Richtigkeit.
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default OnboardingForm;
