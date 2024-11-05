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


const ProfilePage = () => {
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
      console.log(projectDataArray);
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
      userData?.billingInfo?.vatRegulation || "Small business owner (0%)",
    companyName: userData?.companyName || "",
    vatIdNo: userData?.vatIdNo || "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Please enter first name"),
    lastName: Yup.string().required("Please enter last name"),
    email: Yup.string().email().required("Please enter your email"),
    phone: Yup.string().required("Please enter phone number"),
    street: Yup.string().required("Please enter your street"),
    postcode: Yup.string().required("Please enter your postal code"),
    city: Yup.string().required("Please enter your city"),
    country: Yup.string().required("Please enter your country"),
    iban: Yup.string().required("Please enter your IBAN"),
    companyName: Yup.string().required("Please enter your company name"),
    vatIdNo: Yup.string().required("VAT ID is required"),
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
        updateUserFields({ path: "data.user.firstName", value: values.firstName })
      );
      dispatch(
        updateUserFields({ path: "data.user.lastName", value: values.lastName })
      );
      toast.success("Profile updated successfully!");
      setUpdateLoading(false);
    } catch (err) {
      console.error("Error updating profile:", err);
      toast.error("Failed to update profile. Please try again.");
      setUpdateLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-270 3xl:px-6">
      <Breadcrumb pageName="Profile Setting" pageData="" />
      {loading ? (
        <div className="rounded-sm border border-stroke pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1  w-full bg-slate-200 h-[460px] md:h-[600px] animate-pulse"></div>
      ) : (
        <div className="grid grid-cols-5  gap-8">
          <ToastContainer />
          <div className="col-span-5 3xl:col-span-8  xl:col-span-3">
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
                        Personal Data
                      </h2>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <GroupField
                          label={"First Name"}
                          placeholder={"Your first name"}
                          id={"firstName"}
                          name={"firstName"}
                          value={props.values.firstName}
                          errors={props.errors.firstName}
                          onChange={props.handleChange}
                        />
                        <GroupField
                          label={"Last Name"}
                          placeholder={"Your last name"}
                          id={"lastName"}
                          name={"lastName"}
                          value={props.values.lastName}
                          errors={props.errors.lastName}
                          onChange={props.handleChange}
                        />
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2">
                        <GroupField
                          label={"E-mail"}
                          placeholder={"Your email address"}
                          type={"email"}
                          id={"email"}
                          name={"email"}
                          value={props.values.email}
                          errors={props.errors.email}
                          onChange={props.handleChange}
                        />
                        <GroupField
                          label={"Phone"}
                          placeholder={"Your phone number"}
                          id={"phone"}
                          name={"phone"}
                          value={props.values.phone}
                          errors={props.errors.phone}
                          onChange={props.handleChange}
                        />
                      </div>
                      <GroupField
                        label={"Street"}
                        placeholder={"Your street"}
                        type={"text"}
                        id={"street"}
                        name={"street"}
                        value={props.values.street}
                        errors={props.errors.street}
                        onChange={props.handleChange}
                        className="mt-4"
                      />
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2">
                        <GroupField
                          label={"Postcode"}
                          placeholder={"Your postal code"}
                          id={"postcode"}
                          name={"postcode"}
                          value={props.values.postcode}
                          errors={props.errors.postcode}
                          onChange={props.handleChange}
                        />
                        <GroupField
                          label={"City"}
                          placeholder={"Your city"}
                          id={"city"}
                          name={"city"}
                          value={props.values.city}
                          errors={props.errors.city}
                          onChange={props.handleChange}
                        />
                      </div>
                      <GroupField
                        label={"Country"}
                        placeholder={"Your country"}
                        type={"text"}
                        id={"country"}
                        name={"country"}
                        value={props.values.country}
                        errors={props.errors.country}
                        onChange={props.handleChange}
                        className="mt-4"
                      />

                      <h2 className="text-lg font-semibold text-gray-800 pt-8 text-black dark:text-white">
                        Billing Information
                      </h2>
                      <GroupField
                        label={"IBAN"}
                        placeholder={"Example: DE68500105178297336485"}
                        type={"text"}
                        id={"iban"}
                        name={"iban"}
                        value={props.values.iban}
                        errors={props.errors.iban}
                        onChange={props.handleChange}
                      />
                      <GroupDropdownField
                        label={"VAT Regulation"}
                        id={"vatRegulation"}
                        name={"vatRegulation"}
                        option1={"Small business owner (0%)"}
                        option2={"CY Ltd (19%)"}
                        option3={"EU countries (0%)"}
                        option4={"Reverse charge (0%)"}
                        value={props.values.vatRegulation}
                        onChange={props.handleChange}
                        className="mt-4"
                      />

                      <h2 className="text-lg font-semibold text-gray-800 pt-8 text-black dark:text-white">
                        Company Details
                      </h2>
                      <GroupField
                        label={"Company Name"}
                        placeholder={"Name of your company"}
                        type={"text"}
                        id={"companyName"}
                        name={"companyName"}
                        value={props.values.companyName}
                        errors={props.errors.companyName}
                        onChange={props.handleChange}
                      />
                      <GroupField
                        label={"VAT ID No."}
                        placeholder={"Example: DE238443776"}
                        id={"vatIdNo"}
                        name={"vatIdNo"}
                        value={props.values.vatIdNo}
                        errors={props.errors.vatIdNo}
                        onChange={props.handleChange}
                        className="mt-4"
                      />

                      <div className="mt-8 mb-4">
                        <button
                          className={`w-full py-2 rounded-lg text-white font-medium bg-blue-500 ${
                            updateLoading
                              ? "cursor-not-allowed"
                              : "cursor-pointer"
                          }`}
                          type="submit"
                          disabled={updateLoading}
                        >
                          {updateLoading ? "Submitting..." : "Update Profile"}
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
          Security
        </h2>
        <Link
          to="/auth/lost/request"
          className="inline-flex items-center justify-center gap-2.5 bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          Reset Password
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;

