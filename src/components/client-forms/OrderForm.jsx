import React, { useEffect, useState } from "react";
import { GroupField } from "./GroupField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { GroupTextArea } from "./GroupTextArea";
import { GroupDropdownField } from "./GroupDropdownField";
import { CountryDropdownField } from "./CountryDropdownField";
import axios from "axios";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const countriesList = [
  { id: "1", value: "AF", name: "Afghanistan" },
  { id: "2", value: "AL", name: "Albania" },
  { id: "3", value: "DZ", name: "Algeria" },
  { id: "4", value: "AD", name: "Andorra" },
  { id: "5", value: "AO", name: "Angola" },
  { id: "6", value: "AG", name: "Antigua and Barbuda" },
  { id: "7", value: "AR", name: "Argentina" },
  { id: "8", value: "AM", name: "Armenia" },
  { id: "9", value: "AU", name: "Australia" },
  { id: "10", value: "AT", name: "Austria" },
  { id: "11", value: "AZ", name: "Azerbaijan" },
  { id: "12", value: "BS", name: "Bahamas" },
  { id: "13", value: "BH", name: "Bahrain" },
  { id: "14", value: "BD", name: "Bangladesh" },
  { id: "15", value: "BB", name: "Barbados" },
  { id: "16", value: "BE", name: "Belgium" },
  { id: "17", value: "BZ", name: "Belize" },
  { id: "18", value: "BJ", name: "Benin" },
  { id: "19", value: "BT", name: "Bhutan" },
  { id: "20", value: "BO", name: "Bolivia" },
  { id: "21", value: "BA", name: "Bosnia and Herzegovina" },
  { id: "22", value: "BW", name: "Botswana" },
  { id: "23", value: "BR", name: "Brazil" },
  { id: "24", value: "BN", name: "Brunei" },
  { id: "25", value: "BG", name: "Bulgaria" },
  { id: "26", value: "BF", name: "Burkina Faso" },
  { id: "27", value: "BI", name: "Burundi" },
  { id: "28", value: "CV", name: "Cabo Verde" },
  { id: "29", value: "KH", name: "Cambodia" },
  { id: "30", value: "CM", name: "Cameroon" },
  { id: "31", value: "CA", name: "Canada" },
  { id: "32", value: "KY", name: "Cayman Islands" },
  { id: "33", value: "CF", name: "Central African Republic" },
  { id: "34", value: "TD", name: "Chad" },
  { id: "35", value: "CL", name: "Chile" },
  { id: "36", value: "CN", name: "China" },
  { id: "37", value: "CO", name: "Colombia" },
  { id: "38", value: "KM", name: "Comoros" },
  { id: "39", value: "CD", name: "Congo, Democratic Republic of the" },
  { id: "40", value: "CG", name: "Congo, Republic of the" },
  { id: "41", value: "CR", name: "Costa Rica" },
  { id: "42", value: "HR", name: "Croatia" },
  { id: "43", value: "CU", name: "Cuba" },
  { id: "44", value: "CY", name: "Cyprus" },
  { id: "45", value: "CZ", name: "Czech Republic" },
  { id: "46", value: "DK", name: "Denmark" },
  { id: "47", value: "DJ", name: "Djibouti" },
  { id: "48", value: "DM", name: "Dominica" },
  { id: "49", value: "DO", name: "Dominican Republic" },
  { id: "50", value: "EC", name: "Ecuador" },
  { id: "51", value: "EG", name: "Egypt" },
  { id: "52", value: "SV", name: "El Salvador" },
  { id: "53", value: "GQ", name: "Equatorial Guinea" },
  { id: "54", value: "ER", name: "Eritrea" },
  { id: "55", value: "EE", name: "Estonia" },
  { id: "56", value: "SZ", name: "Eswatini" },
  { id: "57", value: "ET", name: "Ethiopia" },
  { id: "58", value: "FJ", name: "Fiji" },
  { id: "59", value: "FI", name: "Finland" },
  { id: "60", value: "FR", name: "France" },
  { id: "61", value: "GA", name: "Gabon" },
  { id: "62", value: "GM", name: "Gambia" },
  { id: "63", value: "GE", name: "Georgia" },
  { id: "64", value: "DE", name: "Germany" },
  { id: "65", value: "GH", name: "Ghana" },
  { id: "66", value: "GR", name: "Greece" },
  { id: "67", value: "GT", name: "Guatemala" },
  { id: "68", value: "GN", name: "Guinea" },
  { id: "69", value: "GW", name: "Guinea-Bissau" },
  { id: "70", value: "GY", name: "Guyana" },
  { id: "71", value: "HT", name: "Haiti" },
  { id: "72", value: "HN", name: "Honduras" },
  { id: "73", value: "HU", name: "Hungary" },
  { id: "74", value: "IS", name: "Iceland" },
  { id: "75", value: "IN", name: "India" },
  { id: "76", value: "ID", name: "Indonesia" },
  { id: "77", value: "IR", name: "Iran" },
  { id: "78", value: "IQ", name: "Iraq" },
  { id: "79", value: "IE", name: "Ireland" },
  { id: "80", value: "IL", name: "Israel" },
  { id: "81", value: "IT", name: "Italy" },
  { id: "82", value: "JM", name: "Jamaica" },
  { id: "83", value: "JP", name: "Japan" },
  { id: "84", value: "JO", name: "Jordan" },
  { id: "85", value: "KZ", name: "Kazakhstan" },
  { id: "86", value: "KE", name: "Kenya" },
  { id: "87", value: "KI", name: "Kiribati" },
  { id: "88", value: "KP", name: "North Korea" },
  { id: "89", value: "KR", name: "South Korea" },
  { id: "90", value: "KW", name: "Kuwait" },
  { id: "91", value: "KG", name: "Kyrgyzstan" },
  { id: "92", value: "LA", name: "Laos" },
  { id: "93", value: "LV", name: "Latvia" },
  { id: "94", value: "LB", name: "Lebanon" },
  { id: "95", value: "LS", name: "Lesotho" },
  { id: "96", value: "LR", name: "Liberia" },
  { id: "97", value: "LY", name: "Libya" },
  { id: "98", value: "LI", name: "Liechtenstein" },
  { id: "99", value: "LT", name: "Lithuania" },
  { id: "100", value: "LU", name: "Luxembourg" },
  { id: "101", value: "MG", name: "Madagascar" },
  { id: "102", value: "MW", name: "Malawi" },
  { id: "103", value: "MY", name: "Malaysia" },
  { id: "104", value: "MV", name: "Maldives" },
  { id: "105", value: "ML", name: "Mali" },
  { id: "106", value: "MT", name: "Malta" },
  { id: "107", value: "MH", name: "Marshall Islands" },
  { id: "108", value: "MR", name: "Mauritania" },
  { id: "109", value: "MU", name: "Mauritius" },
  { id: "110", value: "MX", name: "Mexico" },
  { id: "111", value: "FM", name: "Micronesia" },
  { id: "112", value: "MD", name: "Moldova" },
  { id: "113", value: "MC", name: "Monaco" },
  { id: "114", value: "MN", name: "Mongolia" },
  { id: "115", value: "ME", name: "Montenegro" },
  { id: "116", value: "MA", name: "Morocco" },
  { id: "117", value: "MZ", name: "Mozambique" },
  { id: "118", value: "MM", name: "Myanmar" },
  { id: "119", value: "NA", name: "Namibia" },
  { id: "120", value: "NR", name: "Nauru" },
  { id: "121", value: "NP", name: "Nepal" },
  { id: "122", value: "NL", name: "Netherlands" },
  { id: "123", value: "NZ", name: "New Zealand" },
  { id: "124", value: "NI", name: "Nicaragua" },
  { id: "125", value: "NE", name: "Niger" },
  { id: "126", value: "NG", name: "Nigeria" },
  { id: "127", value: "MK", name: "North Macedonia" },
  { id: "128", value: "NO", name: "Norway" },
  { id: "129", value: "OM", name: "Oman" },
  { id: "130", value: "PK", name: "Pakistan" },
  { id: "131", value: "PW", name: "Palau" },
  { id: "132", value: "PS", name: "Palestine" },
  { id: "133", value: "PA", name: "Panama" },
  { id: "134", value: "PG", name: "Papua New Guinea" },
  { id: "135", value: "PY", name: "Paraguay" },
  { id: "136", value: "PE", name: "Peru" },
  { id: "137", value: "PH", name: "Philippines" },
  { id: "138", value: "PL", name: "Poland" },
  { id: "139", value: "PT", name: "Portugal" },
  { id: "140", value: "QA", name: "Qatar" },
  { id: "141", value: "RE", name: "Réunion" },
  { id: "142", value: "RO", name: "Romania" },
  { id: "143", value: "RU", name: "Russia" },
  { id: "144", value: "RW", name: "Rwanda" },
  { id: "145", value: "KN", name: "Saint Kitts and Nevis" },
  { id: "146", value: "LC", name: "Saint Lucia" },
  { id: "147", value: "VC", name: "Saint Vincent and the Grenadines" },
  { id: "148", value: "WS", name: "Samoa" },
  { id: "149", value: "SM", name: "San Marino" },
  { id: "150", value: "ST", name: "Sao Tome and Principe" },
  { id: "151", value: "SA", name: "Saudi Arabia" },
  { id: "152", value: "SN", name: "Senegal" },
  { id: "153", value: "RS", name: "Serbia" },
  { id: "154", value: "SC", name: "Seychelles" },
  { id: "155", value: "SL", name: "Sierra Leone" },
  { id: "156", value: "SG", name: "Singapore" },
  { id: "157", value: "SK", name: "Slovakia" },
  { id: "158", value: "SI", name: "Slovenia" },
  { id: "159", value: "SB", name: "Solomon Islands" },
  { id: "160", value: "SO", name: "Somalia" },
  { id: "161", value: "ZA", name: "South Africa" },
  { id: "162", value: "ES", name: "Spain" },
  { id: "163", value: "LK", name: "Sri Lanka" },
  { id: "164", value: "SD", name: "Sudan" },
  { id: "165", value: "SR", name: "Suriname" },
  { id: "166", value: "SE", name: "Sweden" },
  { id: "167", value: "CH", name: "Switzerland" },
  { id: "168", value: "SY", name: "Syria" },
  { id: "169", value: "TJ", name: "Tajikistan" },
  { id: "170", value: "TZ", name: "Tanzania" },
  { id: "171", value: "TH", name: "Thailand" },
  { id: "172", value: "TG", name: "Togo" },
  { id: "173", value: "TO", name: "Tonga" },
  { id: "174", value: "TT", name: "Trinidad and Tobago" },
  { id: "175", value: "TN", name: "Tunisia" },
  { id: "176", value: "TR", name: "Turkey" },
  { id: "177", value: "TM", name: "Turkmenistan" },
  { id: "178", value: "TV", name: "Tuvalu" },
  { id: "179", value: "UG", name: "Uganda" },
  { id: "180", value: "UA", name: "Ukraine" },
  { id: "181", value: "AE", name: "United Arab Emirates" },
  { id: "182", value: "GB", name: "United Kingdom" },
  { id: "183", value: "US", name: "United States" },
  { id: "184", value: "UY", name: "Uruguay" },
  { id: "185", value: "UZ", name: "Uzbekistan" },
  { id: "186", value: "VU", name: "Vanuatu" },
  { id: "187", value: "VE", name: "Venezuela" },
  { id: "188", value: "VN", name: "Vietnam" },
  { id: "189", value: "WF", name: "Wallis and Futuna" },
  { id: "190", value: "YE", name: "Yemen" },
  { id: "191", value: "ZM", name: "Zambia" },
  { id: "192", value: "ZW", name: "Zimbabwe" },
];

const OrderForm = () => {
  const {t} = useTranslation();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);
  const [isSuccess, setIsSuccess] = useState(false);
  const [initialValues, setInitialValues] = useState(null);
  const [userId, setUserID] = useState(user?.user?.data?.user?._id || "");
  const [userToken, setUserToken] = useState(user?.user?.token || "");
  const [monthlyPrice, setMonthlyPrice] = useState(0);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const textsParam = queryParams.get("texts");
    const durationParam = queryParams.get("duration");

    if (textsParam && durationParam) {
      const durations = [
        "3 months - word price 0.07 EUR/net",
        "6 months - word price 0.06 EUR/net",
        "12 months - word price 0.05 EUR/net",
      ];

      let initialDurationValue = "";
      initialDurationValue = durations.find((item) =>
        item.includes(durationParam)
      );
      consolidateValues(textsParam, initialDurationValue);

      setInitialValues({
        duration: initialDurationValue || "",
        texts: textsParam || "",
        domain: "",
        company: "",
        fname: user?.user?.data?.user?.firstName || "",
        lname: user?.user?.data?.user?.lastName || "",
        telNo: "",
        email: user?.user?.data?.user?.email || "",
        country: "DE",
        vatId: "",
        vatType: "",
        textPrice: "",
      });
    }
  }, [location.search, user]);

  const consolidateValues = (texts, duration) => {
    const durationPrices = {
      "3 months - word price 0.07 EUR/net": 0.07,
      "6 months - word price 0.06 EUR/net": 0.06,
      "12 months - word price 0.05 EUR/net": 0.05,
    };
    const numberOfTexts = parseInt(texts.split(" ")[0]);
    const months = parseInt(duration.split(" ")[0]);
    const textPrice = durationPrices[duration] || 0;
    const value = (numberOfTexts * textPrice * 1500) / months;
    setMonthlyPrice(value);
  };

  const validationSchema = Yup.object().shape({
    // duration: Yup.string().required("Bitte wählen Sie die Dauer"),
    // texts: Yup.string().required("Bitte wählen Sie die Anzahl der SEO-Texte"),
    domain: Yup.string().required(t('orderPage.orderForm.validationErrors.domain')),
    company: Yup.string().required(t('orderPage.orderForm.validationErrors.company')),
    fname: Yup.string().required(t('orderPage.orderForm.validationErrors.fname')),
    lname: Yup.string().required(t('orderPage.orderForm.validationErrors.lname')),
    telNo: Yup.number().required(t('orderPage.orderForm.validationErrors.telNo')),
    email: Yup.string()
      .email()
      .required(t('orderPage.orderForm.validationErrors.email')),
    // country: Yup.string().required("Bitte wählen Sie Ihr Land"),
  });

  const onSubmit = async (values) => {
    setLoading(true);

    try {
      if (userToken) {
        let token = userToken;
        axios.defaults.headers.common["access-token"] = token;
        let payload = {
          userId: userId,
          projectName: values.domain,
        };
        const response = await axios.post(
          `${import.meta.env.VITE_DB_URL}/projects/checkInsert`,
          payload
        );

        if (response.status === 200) {
          await paymentMethods(values);
        } else {
          const errorMessage =
            response?.data?.message || "Something went wrong";
          toast.error(errorMessage);
          setLoading(false);
          return;
        }
      } else {
        const response = await axios.post(
          `${import.meta.env.VITE_DB_URL}/freelancer/emailCheck`,
          { email: values.email }
        );
        if (response.status === 200) {
          await paymentMethods(values);
        } else {
          toast.error(response.data.message);
          setLoading(false);
          return;
        }
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const paymentMethods = async (values) => {
    try {
      let item_price_id = "";
      let planId = "";
      let subPlanId = "";

      const { data: planList } = await axios.post(
        `${import.meta.env.VITE_DB_URL}/plans/list`
      );

      if (planList.data.length > 0) {
        planList.data.forEach((item) => {
          if (parseInt(values.texts.substring(0, 2)) === item.value) {
            item.subplan.forEach((subPlan) => {
              if (
                subPlan.duration === parseInt(values.duration.substring(0, 2))
              ) {
                item_price_id = subPlan.chargebeeId;
                planId = item._id;
                subPlanId = subPlan._id;
              }
            });
          }
        });
      } else {
        toast.error("No Plans Found");
      }

      const { data: rolesList } = await axios.post(
        `${import.meta.env.VITE_DB_URL}/roles/list`
      );

      const clientRole = rolesList.data.find(
        (item) => item.title.toLowerCase() === "client"
      );

      const payload = {
        firstName: values.fname,
        lastName: values.lname,
        email: values.email,
        roleId: clientRole?._id || "",
        projectName: values.domain,
        companyName: values.company,
        country: values.country,
        vatId: "",
        vatType: "",
        keywords: "",
        planId: planId,
        subPlanId: subPlanId,
        telNo: values.telNo.toString(),
        textPrice: values.textPrice.toString(),
      };

      localStorage.setItem("orderPayload", JSON.stringify(payload));

      if (item_price_id) {
        const body = {
          chargebeeId: item_price_id,
          firstName: values.fname,
          lastName: values.lname,
          email: values.email,
        };

        const { data } = await axios.post(
          `${import.meta.env.VITE_DB_URL}/chargebee/create_payment_intent`,
          body
        );
        window.location.href = data.url;
        toast.success("request success: ");
      }
    } catch (error) {
      setLoading(false);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong";
      toast.error(errorMessage);
    }
  };

  if (!initialValues) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props) => (
          <Form>
            <div className="w-full bg-gradient-to-r from-custom-gray to-[#F7F7F7] py-4 flex flex-col gap-6 px-4 xs:px-8 xs:py-10  md:px-9 md:py-14 lg:px-10  mb-8 rounded-xl">
              <h2 className="text-custom-black text-base font-semibold -mb-5">
                {t("orderPage.orderForm.formTitle")}
              </h2>
              <div className="flex flex-col gap-y-3  -mb-2">
                <ToastContainer />
                <GroupDropdownField
                  label= {t("orderPage.orderForm.textsDropdownLabel")}
                  placeholder={""}
                  type={"text"}
                  id={"texts"}
                  name={"texts"}
                  value={props.values.texts}
                  errors={props.errors.texts}
                  onChange={(event) => {
                    props.handleChange(event);
                    const updatedTexts = event.target.value;
                    const currentDuration = props.values.duration;
                    consolidateValues(updatedTexts, currentDuration);
                  }}
                  option1="4 texts per month with at least 1,500 words per text"
                  option2="8 texts per month with at least 1,500 words per text"
                  option3="12 texts per month with at least 1,500 words per text"
                />
                <GroupDropdownField
                  label={t("orderPage.orderForm.durationDropdownLabel")}
                  type={"text"}
                  id={"duration"}
                  name={"duration"}
                  placeholder={""}
                  value={props.values.duration}
                  errors={props.errors.duration}
                  onChange={(event) => {
                    props.handleChange(event);
                    const updatedDuration = event.target.value;
                    const currentTexts = props.values.texts;
                    consolidateValues(currentTexts, updatedDuration);
                  }}
                  option1="3 months - word price 0.07 EUR/net"
                  option2="6 months - word price 0.06 EUR/net"
                  option3="12 months - word price 0.05 EUR/net"
                />

                <GroupField
                  label={t("orderPage.orderForm.monthlyPriceLabel")}
                  type={"text"}
                  id={"monthlyPrice"}
                  name={"monthlyPrice"}
                  placeholder={"0"}
                  value={`€ ${monthlyPrice.toFixed(1)}`}
                  disabled={true}
                />

                <GroupField
                  label={t("orderPage.orderForm.domainLabel")}
                  type={"text"}
                  id={"domain"}
                  name={"domain"}
                  placeholder={t("orderPage.orderForm.domainPlaceholder")}
                  value={props.values.domain}
                  errors={props.errors.domain}
                  onChange={props.handleChange}
                />
              </div>
              <h2 className="text-custom-black text-base font-semibold -mb-3 ">
                {t("orderPage.orderForm.formTitle1")}
              </h2>
              <div className="flex flex-col gap-y-3 ">
                <GroupField
                  label={t("orderPage.orderForm.companyLabel")}
                  placeholder={t("orderPage.orderForm.companyPlaceholder")}
                  type={"text"}
                  id={"company"}
                  name={"company"}
                  value={props.values.company}
                  errors={props.errors.company}
                  onChange={props.handleChange}
                />
                <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-3">
                  <GroupField
                    label={t("orderPage.orderForm.fnameLabel")}
                    placeholder={t("orderPage.orderForm.fnamePlaceholder")}
                    id={"fname"}
                    name={"fname"}
                    value={props.values.fname}
                    errors={props.errors.fname}
                    onChange={props.handleChange}
                    disabled={user?.user?.data?.user?.firstName ? true : false}
                  />
                  <GroupField
                    label={t("orderPage.orderForm.lnameLabel")}
                    placeholder={t("orderPage.orderForm.lnamePlaceholder")}
                    id={"lname"}
                    name={"lname"}
                    value={props.values.lname}
                    errors={props.errors.lname}
                    onChange={props.handleChange}
                    disabled={user?.user?.data?.user?.lastName ? true : false}
                  />
                </div>
                <GroupField
                  label={t("orderPage.orderForm.telNoLabel")}
                  placeholder={t("orderPage.orderForm.telNoPlaceholder")}
                  type={"number"}
                  id={"telNo"}
                  name={"telNo"}
                  value={props.values.telNo}
                  errors={props.errors.telNo}
                  onChange={props.handleChange}
                />
                <GroupField
                  label={t("orderPage.orderForm.emailLabel")}
                  placeholder={t("orderPage.orderForm.emailPlaceholder")}
                  type={"email"}
                  id={"email"}
                  name={"email"}
                  value={props.values.email}
                  errors={props.errors.email}
                  onChange={props.handleChange}
                  disabled={user?.user?.data?.user?.email ? true : false}
                />
                <CountryDropdownField
                  label={t("orderPage.orderForm.countryLabel")}
                  type={"text"}
                  id={"country"}
                  name={"country"}
                  placeholder={t("orderPage.orderForm.countryPlaceholder")}
                  value={props.values.country}
                  errors={props.errors.country}
                  onChange={props.handleChange}
                  countriesList={countriesList}
                />

                <button
                  className={`${
                    loading ? "cursor-not-allowed" : "cursor-pointer"
                  } border-none text-white font-medium text-base w-full bg-custom-black hover:bg-custom-black/90 flex justify-center py-2 xs:py-2.5 mt-1 rounded-xl`}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? t("orderPage.orderForm.submitButtonText.loading") : t("orderPage.orderForm.submitButtonText.default")}
                </button>
              </div>
              {isSuccess && (
                <p className="text-green-600 3xl:text-lg">
                  {t("orderPage.orderForm.successMessage")}
                </p>
              )}
              <p className="text-custom-black text-sm font-normal">
              {t("orderPage.orderForm.termsText.0")}{" "}
                <Link className="text-[#63B4D0]">
                {t("orderPage.orderForm.termsText.1")}
                </Link>{" "}
                {t("orderPage.orderForm.termsText.2")}
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default OrderForm;
