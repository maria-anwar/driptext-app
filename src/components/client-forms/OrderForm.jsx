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



const countriesList = [
  {
    id: "1",
    value: "DE",
    name: "Germany",
  },
  {
    id: "2",
    value: "AF",
    name: "Afghanistan",
  },
  {
    id: "3",
    value: "EG",
    name: "Egypt",
  },
  {
    id: "4",
    value: "AL",
    name: "Albania",
  },
  {
    id: "5",
    value: "DZ",
    name: "Algeria",
  },
  {
    id: "6",
    value: "AD",
    name: "Andorra",
  },
  {
    id: "7",
    value: "AO",
    name: "Angola",
  },
  {
    id: "8",
    value: "AG",
    name: "Antigua and Barbuda",
  },
  {
    id: "9",
    value: "GQ",
    name: "Equatorial Guinea",
  },
  {
    id: "10",
    value: "AR",
    name: "Argentina",
  },
  {
    id: "11",
    value: "AM",
    name: "Armenia",
  },
  {
    id: "12",
    value: "AZ",
    name: "Azerbaijan",
  },
  {
    id: "13",
    value: "ET",
    name: "Ethiopia",
  },
  {
    id: "14",
    value: "AU",
    name: "Australia",
  },
  {
    id: "15",
    value: "BS",
    name: "Bahamas",
  },
  {
    id: "16",
    value: "BH",
    name: "Bahrain",
  },
  {
    id: "17",
    value: "BD",
    name: "Bangladesh",
  },
  {
    id: "18",
    value: "BB",
    name: "Barbados",
  },
  {
    id: "19",
    value: "BE",
    name: "Belgium",
  },
  {
    id: "20",
    value: "BZ",
    name: "Belize",
  },
  {
    id: "21",
    value: "BJ",
    name: "Benin",
  },
  {
    id: "22",
    value: "BT",
    name: "Bhutan",
  },
  {
    id: "23",
    value: "BO",
    name: "Bolivia",
  },
  {
    id: "24",
    value: "BA",
    name: "Bosnia and Herzegovina",
  },
  {
    id: "25",
    value: "BW",
    name: "Botswana",
  },
  {
    id: "26",
    value: "BR",
    name: "Brazil",
  },
  {
    id: "27",
    value: "BN",
    name: "Brunei",
  },
  {
    id: "28",
    value: "BG",
    name: "Bulgaria",
  },
  {
    id: "29",
    value: "BF",
    name: "Burkina-Faso",
  },
  {
    id: "30",
    value: "BI",
    name: "Burundi",
  },
];

const OrderForm = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);
  const [isSuccess, setIsSuccess] = useState(false);
  const [texts, setTexts] = useState("");
  const [duration, setDuration] = useState("");
  const [initialValues, setInitialValues] = useState(null);
  console.log("texts: ", texts);
  console.log("duration: ", duration);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const textsParam = queryParams.get("texts");
    const durationParam = queryParams.get("duration");

    setTexts(textsParam || ""); // Set default value if param is missing
    setDuration(durationParam || ""); // Set default value if param is missing
  }, [location.search]);

  useEffect(() => {
    if (texts !== "" && duration !== "") {
      const fourTextDurations = [
        "3 months - word price 0.07 EUR/net",
        "6 months - word price 0.06 EUR/net",
        "12 months - word price 0.05 EUR/net",
      ];
      const EightTextDurations = [
        "3 months - word price 0.14 EUR/net",
        "6 months - word price 0.12 EUR/net",
        "12 months - word price 0.10 EUR/net",
      ];
      const twelveTextDuration = [
        "3 months - word price 0.20 EUR/net",
        "6 months - word price 0.18 EUR/net",
        "12 months - word price 0.15 EUR/net",
      ];
      let initialDurationValue = "";
      if (texts.substring(0, 2) === "4 ") {
        const temp = fourTextDurations.find((item) => item.includes(duration));
        initialDurationValue = temp;
      }
      if (texts.substring(0, 2) === "8 ") {
        const temp = EightTextDurations.find((item) => item.includes(duration));
        initialDurationValue = temp;
      }
      if (texts.substring(0, 2) === "12") {
        const temp = twelveTextDuration.find((item) => item.includes(duration));
        initialDurationValue = temp;
      }
      // Set initial values only when texts and duration have been fetched or computed
      setInitialValues({
        duration: initialDurationValue,
        texts: texts,
        domain: "",
        company: "",
        fname: user?.user?.data?.user?.firstName || "",
        lname: user?.user?.data?.user?.lastName || "",
        telNo: "",
        email: user?.user?.data?.user?.email || "",
        country: "DE",
        vatId: "",
        vatType: "",
        textPrice: '',
      });
    }
  }, [texts, duration, user?.user?.data?.user]);

  console.log("initital values: ", initialValues);
  const validationSchema = Yup.object().shape({
    // duration: Yup.string().required("please select duration"),
    // texts: Yup.string().required("select no of seo texts"),
    domain: Yup.string().required("please enter your domain"),
    company: Yup.string().required("please enter your company name"),
    fname: Yup.string().required("please enter first name"),
    lname: Yup.string().required("please enter last name"),
    telNo: Yup.number().required("please enter telephone No"),
    email: Yup.string().email().required("please enter your email"),
    // country: Yup.string().required("please select your country"),
    vatId: Yup.string().required("VAT ID is required"),
  });

  const onSubmit = async (values) => {
    setLoading(true);

  
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
        vatId: values.vatId,
        vatType: values.vatType,
        keywords: "",
        planId: planId,
        subPlanId: subPlanId,
        // textPrice: values.textPrice,
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

    // try {
    //   const response = await axios.post(
    //     "https://driptext-api.vercel.app/api/users/create",
    //     payload
    //   );

    //   if (response.status === 200) {
    //     axios.post(
    //       "https://driptext-api.vercel.app/api/auth/orderSuccessEamil",
    //       {
    //         email: values.email,
    //       }
    //     );
    //     window.location.href = "https://driptext.de/danke-probetext/";
    //   } else {
    //     console.error("Failed to submit data");
    //   }
    // } catch (error) {
    //   console.error("Error submitting data:", error);
    // }
  };


  if (!initialValues) {
    return <div>Loading...</div>; // Show loading or placeholder while initialValues are being set
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
            <div className="w-full bg-gradient-to-r from-custom-gray to-[#F7F7F7] flex flex-col gap-6 px-3 xs:px-8 xs:py-10  md:px-9 md:py-14 lg:px-10  mb-8 rounded-xl">
              <div className="flex flex-col gap-6">
                <h2 className="text-custom-black text-base font-semibold">
                  1. Choose your DripText package:
                </h2>
                <ToastContainer />
                <GroupDropdownField
                  label={" Desired number of SEO-optimized texts per month? "}
                  placeholder={""}
                  type={"text"}
                  id={"texts"}
                  name={"texts"}
                  value={props.values.texts}
                  errors={props.errors.texts}
                  onChange={props.handleChange}
                  option1="4 texts per month with at least 1,500 words per text"
                  option2="8 texts per month with at least 1,500 words per text"
                  option3="12 texts per month with at least 1,500 words per text"
                />
                {props.values.texts.substring(0, 2) === "4 " && (
                  <GroupDropdownField
                    label={"Desired duration?"}
                    type={"text"}
                    id={"duration"}
                    name={"duration"}
                    placeholder={""}
                    option1="3 months - word price 0.07 EUR/net"
                    option2="6 months - word price 0.06 EUR/net"
                    option3="12 months - word price 0.05 EUR/net"
                    value={props.values.duration}
                    errors={props.errors.duration}
                    onChange={props.handleChange}
                  />
                )}
                {props.values.texts.substring(0, 2) === "8 " && (
                  <GroupDropdownField
                    label={"Desired duration?"}
                    type={"text"}
                    id={"duration"}
                    name={"duration"}
                    placeholder={""}
                    option1="3 months - word price 0.14 EUR/net"
                    option2="6 months - word price 0.12 EUR/net"
                    option3="12 months - word price 0.10 EUR/net"
                    value={props.values.duration}
                    errors={props.errors.duration}
                    onChange={props.handleChange}
                  />
                )}
                {props.values.texts.substring(0, 2) === "12" && (
                  <GroupDropdownField
                    label={"Desired duration?"}
                    type={"text"}
                    id={"duration"}
                    name={"duration"}
                    placeholder={""}
                    option1="3 months - word price 0.20 EUR/net"
                    option2="6 months - word price 0.18 EUR/net"
                    option3="12 months - word price 0.15 EUR/net"
                    value={props.values.duration}
                    errors={props.errors.duration}
                    onChange={props.handleChange}
                  />
                )}

                <GroupField
                  label={"Text Price"}
                  type={"number"}
                  id={"textPrice"}
                  name={"textPrice"}
                  placeholder={"example.com"}
                  value={0.764}
                  errors={props.errors.textPrice}
                  onChange={props.handleChange}
                  disabled={true}
                />

                <GroupField
                  label={"Domain"}
                  type={"text"}
                  id={"domain"}
                  name={"domain"}
                  placeholder={"example.com"}
                  value={props.values.domain}
                  errors={props.errors.domain}
                  onChange={props.handleChange}
                />
              </div>

              <div className="flex flex-col gap-5">
                <h2 className="text-custom-black text-base font-semibold lg:mt-3.5">
                  2. Contact details of the invoice recipient (m/f/d):
                </h2>
                <GroupField
                  label={"Company"}
                  placeholder={"Your company name"}
                  type={"text"}
                  id={"company"}
                  name={"company"}
                  value={props.values.company}
                  errors={props.errors.company}
                  onChange={props.handleChange}
                />
                <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:gap-3 gap-5">
                  <GroupField
                    label={"First Name"}
                    placeholder={"Your first name"}
                    id={"fname"}
                    name={"fname"}
                    value={props.values.fname}
                    errors={props.errors.fname}
                    onChange={props.handleChange}
                  />
                  <GroupField
                    label={"Last Name"}
                    placeholder={"Your last name"}
                    id={"lname"}
                    name={"lname"}
                    value={props.values.lname}
                    errors={props.errors.lname}
                    onChange={props.handleChange}
                  />
                </div>
                <GroupField
                  label={"Telephone number"}
                  placeholder={"Your phone number"}
                  type={"number"}
                  id={"telNo"}
                  name={"telNo"}
                  value={props.values.telNo}
                  errors={props.errors.telNo}
                  onChange={props.handleChange}
                />
                <GroupField
                  label={"e-mail"}
                  placeholder={"Your email address"}
                  type={"email"}
                  id={"email"}
                  name={"email"}
                  value={props.values.email}
                  errors={props.errors.email}
                  onChange={props.handleChange}
                />
                <CountryDropdownField
                  label={"Country"}
                  type={"text"}
                  id={"country"}
                  name={"country"}
                  placeholder={"example.com"}
                  value={props.values.country}
                  errors={props.errors.country}
                  onChange={props.handleChange}
                  countriesList={countriesList}
                />
                <GroupField
                  label={"VAT ID No."}
                  placeholder={"Your VAT Id"}
                  type={"text"}
                  id={"vatId"}
                  name={"vatId"}
                  value={props.values.vatId}
                  errors={props.errors.vatId}
                  onChange={props.handleChange}
                />
                <GroupDropdownField
                  label={"VAT type"}
                  type={"text"}
                  id={"vatRegulation"}
                  name={"vatRegulation"}
                  placeholder={""}
                  option1={"CY Company (19%)"}
                  option2={"EU Reverse-Charge (0%)"}
                  option3={"Small business owner (0%)"}
                  option4={"Non-EU Company (0%)"}
                  value={'Small business owner (0%)'}
                  onChange={props.handleChange}
                  disabled={true}
                />
                <div className="w-full bg-custom-black flex justify-center py-2 xs:py-2.5 mt-1 rounded-xl">
                  <button
                    className={`${
                      loading ? "cursor-not-allowed" : "cursor-pointer"
                    } border-none text-white font-medium text-base`}
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Submitting Order" : "Submit Order"}
                  </button>
                </div>
              </div>
              {isSuccess && (
                <p className="text-green-600 3xl:text-lg">
                  Order booking information is successfully saved
                </p>
              )}
              <p className="text-custom-black text-sm font-normal">
                By submitting the order, I agree to the{" "}
                <Link className="text-[#63B4D0]">
                  general terms and conditions
                </Link>{" "}
                terms and conditions of DripText Ltd. and understand that our
                offers are aimed exclusively at commercial customers. All prices
                are exclusive of VAT. Sales only to entrepreneurs, tradespeople,
                associations, authorities or self-employed persons (§ 14 BGB).
                No sales to consumers within the meaning of § 13 BGB.
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default OrderForm;
