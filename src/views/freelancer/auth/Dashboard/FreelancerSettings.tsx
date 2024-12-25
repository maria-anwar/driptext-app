import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import axios from "axios";
import GroupField from "../../../../components/freelancer/forms/GroupField";
import GroupDropdownField from "../../../../components/freelancer/forms/GroupDropdownField";
import Breadcrumb from "../../../../components/freelancer/breeadcrumbs/Breadcrumb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserData } from "../../../../components/freelancer/Type/types";
import { useDispatch, useSelector } from "react-redux";
import { updateUserFields } from "../../../../redux/userSlice";
import useTitle from "../../../../hooks/useTitle";
import { useTranslation } from "react-i18next";

const ProfilePage = () => {
  const { t } = useTranslation();
  useTitle(t("profilePage.pageTitle"));
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [userData, setUserData] = useState<UserData>({});

  useEffect(() => {
    if (user) {
      getEarning();
    }
  }, [user]);

  const getEarning = async () => {
    try {
      const userId = user?.user?.data?.user?._id;
      const userToken = user?.user?.token;
      axios.defaults.headers.common["access-token"] = userToken;
      const payload = { freelancerId: userId };
      const response = await axios.post(
        `${import.meta.env.VITE_DB_URL}/freelancer/getFreelancer`,
        payload
      );

      const projectDataArray = response.data.freelancer;
      setUserData(projectDataArray);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching project details:", err);
      setLoading(false);
    }
  };

  const initialValues = {
    firstName: userData?.firstName || "",
    lastName: userData?.lastName || "",
    email: userData?.email || "",
    phone: userData?.phone || "",
    street: userData?.street || "",
    postcode: userData?.postCode || "",
    city: userData?.city || "",
    country: userData?.country || "",
    iban: userData?.billingInfo?.iban || "",
    vatRegulation:
      userData?.billingInfo?.vatRegulation || "CY Company (19% MwSt.)",
    companyName: userData?.companyName || "",
    vatIdNo: userData?.vatIdNo || "null",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(
      t("profilePage.validationErrors.firstName")
    ),
    lastName: Yup.string().required(t("profilePage.validationErrors.lastName")),
    email: Yup.string()
      .email()
      .required(t("profilePage.validationErrors.email")),
    phone: Yup.string().required(t("profilePage.validationErrors.phone")),
    street: Yup.string().required(t("profilePage.validationErrors.street")),
    postcode: Yup.string().required(t("profilePage.validationErrors.postcode")),
    city: Yup.string().required(t("profilePage.validationErrors.city")),
    country: Yup.string().required(t("profilePage.validationErrors.country")),
    iban: Yup.string().required(t("profilePage.validationErrors.iban")),
    companyName: Yup.string().required(
      t("profilePage.validationErrors.companyName")
    ),
    vatIdNo: Yup.string().when(["vatRegulation"], ([vatRegulation], schema) => {
      if (
        vatRegulation === "CY Ltd (19%)" ||
        vatRegulation === "Reverse charge (0%)"
      ) {
        return schema.required(t("profilePage.validationErrors.vatIdNo"));
      }
      return schema.notRequired();
    }),
  });

  const onSubmit = async (values: any) => {
    setUpdateLoading(true);
    try {
      const userToken = user?.user?.token;
      axios.defaults.headers.common["access-token"] = userToken;
      const payload = {
        freelancerId: user?.user?.data?.user?._id,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        street: values.street,
        postCode: values.postcode,
        city: values.city,
        country: values.country,
        iban: values.iban,
        vatRegulation: values.vatRegulation,
        companyName: values.companyName,
        vatId: values.vatIdNo,
      };
      await axios.post(
        `${import.meta.env.VITE_DB_URL}/freelancer/updateFreelancer`,
        payload
      );
      dispatch(
        updateUserFields({
          path: "data.user.firstName",
          value: values.firstName,
        })
      );
      dispatch(
        updateUserFields({ path: "data.user.lastName", value: values.lastName })
      );
      toast.success(t("profilePage.updateProfileSuccess"));
      setUpdateLoading(false);
    } catch (err) {
      console.error("Error updating profile:", err);
      toast.error(t("profilePage.updateProfileError"));
      setUpdateLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-270 3xl:px-6">
      <Breadcrumb pageName={t("profilePage.breadcrumb.pageName")} pageData="" />
      {loading ? (
        <div className="rounded-sm border border-stroke pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1  w-full bg-slate-200 h-[460px] md:h-[600px] animate-pulse"></div>
      ) : (
        <div className="grid grid-cols-5  gap-8">
          <ToastContainer />
          <div className="col-span-5 3xl:col-span-8  xl:col-span-8">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  {(props) => (
                    <Form>
                      <h2 className="text-lg font-semibold text-gray-800 pt-6 text-black dark:text-white">
                        {t("profilePage.form.personalData.title")}
                      </h2>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                        <GroupField
                          label={t(
                            "profilePage.form.personalData.fields.firstName"
                          )}
                          placeholder={t("profilePage.placeholders.firstName")}
                          id={"firstName"}
                          name={"firstName"}
                          value={props.values.firstName}
                          errors={props.errors.firstName}
                          onChange={props.handleChange}
                        />
                        <GroupField
                          label={t(
                            "profilePage.form.personalData.fields.lastName"
                          )}
                          placeholder={t("profilePage.placeholders.lastName")}
                          id={"lastName"}
                          name={"lastName"}
                          value={props.values.lastName}
                          errors={props.errors.lastName}
                          onChange={props.handleChange}
                        />
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 ">
                        <GroupField
                          label={t(
                            "profilePage.form.personalData.fields.email"
                          )}
                          placeholder={t("profilePage.placeholders.email")}
                          type={"email"}
                          id={"email"}
                          name={"email"}
                          value={props.values.email}
                          errors={props.errors.email}
                          onChange={props.handleChange}
                          disabled={true}
                        />
                        <GroupField
                          label={t(
                            "profilePage.form.personalData.fields.phone"
                          )}
                          placeholder={t("profilePage.placeholders.phone")}
                          id={"phone"}
                          name={"phone"}
                          value={props.values.phone}
                          errors={props.errors.phone}
                          onChange={props.handleChange}
                        />
                      </div>
                      <GroupField
                        label={t("profilePage.form.personalData.fields.street")}
                        placeholder={t("profilePage.placeholders.street")}
                        type={"text"}
                        id={"street"}
                        name={"street"}
                        value={props.values.street}
                        errors={props.errors.street}
                        onChange={props.handleChange}
                        className="mt-4"
                      />
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 ">
                        <GroupField
                          label={t(
                            "profilePage.form.personalData.fields.postcode"
                          )}
                          placeholder={t("profilePage.placeholders.postcode")}
                          id={"postcode"}
                          name={"postcode"}
                          value={props.values.postcode}
                          errors={props.errors.postcode}
                          onChange={props.handleChange}
                        />
                        <GroupField
                          label={t("profilePage.form.personalData.fields.city")}
                          placeholder={t("profilePage.placeholders.city")}
                          id={"city"}
                          name={"city"}
                          value={props.values.city}
                          errors={props.errors.city}
                          onChange={props.handleChange}
                        />
                      </div>
                      <GroupField
                        label={t(
                          "profilePage.form.personalData.fields.country"
                        )}
                        placeholder={t("profilePage.placeholders.country")}
                        type={"text"}
                        id={"country"}
                        name={"country"}
                        value={props.values.country}
                        errors={props.errors.country}
                        onChange={props.handleChange}
                        className="mt-4"
                      />

                      <h2 className="text-lg font-semibold text-gray-800 pt-6 text-black dark:text-white">
                        {t("profilePage.form.billingInformation.title")}
                      </h2>
                      <GroupField
                        label={t(
                          "profilePage.form.billingInformation.fields.iban"
                        )}
                        placeholder={t("profilePage.placeholders.iban")}
                        type={"text"}
                        id={"iban"}
                        name={"iban"}
                        value={props.values.iban}
                        errors={props.errors.iban}
                        onChange={props.handleChange}
                      />

                      <h2 className="text-lg font-semibold text-gray-800 pt-6 text-black dark:text-white">
                        {t("profilePage.form.companyDetails.title")}
                      </h2>
                      <GroupField
                        label={t(
                          "profilePage.form.companyDetails.fields.companyName"
                        )}
                        placeholder={t("profilePage.placeholders.companyName")}
                        type={"text"}
                        id={"companyName"}
                        name={"companyName"}
                        value={props.values.companyName}
                        errors={props.errors.companyName}
                        onChange={props.handleChange}
                      />
                      <GroupDropdownField
                        label={t(
                          "profilePage.form.billingInformation.fields.vatRegulation"
                        )}
                        id={"vatRegulation"}
                        name={"vatRegulation"}
                        option1={"CY Company (19% MwSt.)"}
                        option2={"EU Reverse-Charge (0% MwSt.)"}
                        option3={"Kleinunternehmer (0% MwSt.)"}
                        option4={"Non-EU Company (0% MwSt.)"}
                        value={props.values.vatRegulation}
                        onChange={props.handleChange}
                        className="mt-4"
                      />
                      {props.values.vatRegulation ===
                        "CY Company (19% MwSt.)" ||
                      props.values.vatRegulation ===
                        "EU Reverse-Charge (0% MwSt.)" ? (
                        <GroupField
                          label={t(
                            "profilePage.form.companyDetails.fields.vatIdNo"
                          )}
                          placeholder={t("profilePage.placeholders.vatIdNo")}
                          id={"vatIdNo"}
                          name={"vatIdNo"}
                          value={props.values.vatIdNo}
                          errors={props.errors.vatIdNo}
                          onChange={props.handleChange}
                          className="mt-4"
                        />
                      ) : null}

                      <div className="mt-8 mb-4">
                        <button
                          className={`w-full py-3 rounded text-white font-medium bg-blue-500 hover:bg-blue-600 ${
                            updateLoading
                              ? "cursor-not-allowed"
                              : "cursor-pointer"
                          }`}
                          type="submit"
                          disabled={updateLoading}
                        >
                          {updateLoading
                            ? t("profilePage.form.buttons.submit.submitting")
                            : t("profilePage.form.buttons.submit.default")}
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-4 mt-6.5">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white ">
          {t("profilePage.securitySection.title")}
        </h2>
        <Link
          to="/auth/lost/request"
          className="inline-flex items-center justify-center gap-2.5 bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          {t("profilePage.securitySection.resetPasswordLink.text")}
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
