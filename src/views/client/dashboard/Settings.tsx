import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../components/client/breeadcrumbs/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { updateUserFields, updateRoleTitle } from "../../../redux/userSlice";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import useTitle from "../../../hooks/useTitle";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const { t } = useTranslation();
  useTitle(t("settings.pagetitle"));
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(
    user.user.data.user.firstName || ""
  );
  const [lastName, setLastName] = useState(user.user.data.user.lastName || "");
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(user.user.data.user.emailSubscription);

  const handleUpdate = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (firstName === "" || lastName === "") {
      toast.error(t("settings.allFieldsRequired"));
      setLoading(false);
      return;
    }
    let token = user.user.token;
    axios.defaults.headers.common["access-token"] = token;

    let payload = {
      firstName: firstName,
      lastName: lastName,
    };

    await axios
      .post(`${import.meta.env.VITE_DB_URL}/users/update`, payload)
      .then((response) => {
        dispatch(
          updateUserFields({ path: "data.user.firstName", value: firstName })
        );
        dispatch(
          updateUserFields({ path: "data.user.lastName", value: lastName })
        );
      })
      .catch((err) => {
        console.error("Error fetching project details:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setFirstName(user.user.data.user.firstName);
    setLastName(user.user.data.user.lastName);
  };

  const handleEmailSubscription = async () => {
    const newToggle = !toggle;
    setToggle(newToggle);

    let token = user.user.token;
    axios.defaults.headers.common["access-token"] = token;
    let payload = {
      userId: user?.user?.data?.user?._id,
      emailSubscription: newToggle,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_DB_URL}/users/emailSubscription`,
        payload
      );
      dispatch(
        updateUserFields({
          path: "data.user.emailSubscription",
          value: newToggle,
        })
      );
      if (newToggle) {
        toast.success(t("settings.emailSubscription.enabled"));
      } else {
        toast.success(t("settings.emailSubscription.disabled"));
      }
    } catch (err) {
      console.error("Error in email subscription:", err);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-270 3xl:px-6">
        <Breadcrumb pageName={t("settings.title")} />
        <ToastContainer />
        <div className="grid grid-cols-5  gap-8">
          <div className="col-span-5 3xl:col-span-8  xl:col-span-8">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  {t("settings.personalInformation.title")}
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="firstName"
                      >
                        {t("settings.personalInformation.firstName.label")}
                      </label>
                      <div className="relative">
                        <span className="absolute left-4.5 top-4">
                          <svg
                            className="fill-current"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.8">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.72039 12.887C4.50179 12.1056 5.5616 11.6666 6.66667 11.6666H13.3333C14.4384 11.6666 15.4982 12.1056 16.2796 12.887C17.061 13.6684 17.5 14.7282 17.5 15.8333V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V15.8333C15.8333 15.1703 15.5699 14.5344 15.1011 14.0655C14.6323 13.5967 13.9964 13.3333 13.3333 13.3333H6.66667C6.00363 13.3333 5.36774 13.5967 4.8989 14.0655C4.43006 14.5344 4.16667 15.1703 4.16667 15.8333V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2.5 17.9602 2.5 17.5V15.8333C2.5 14.7282 2.93899 13.6684 3.72039 12.887Z"
                                fill=""
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.99967 3.33329C8.61896 3.33329 7.49967 4.45258 7.49967 5.83329C7.49967 7.214 8.61896 8.33329 9.99967 8.33329C11.3804 8.33329 12.4997 7.214 12.4997 5.83329C12.4997 4.45258 11.3804 3.33329 9.99967 3.33329ZM5.83301 5.83329C5.83301 3.53211 7.69849 1.66663 9.99967 1.66663C12.3009 1.66663 14.1663 3.53211 14.1663 5.83329C14.1663 8.13448 12.3009 9.99996 9.99967 9.99996C7.69849 9.99996 5.83301 8.13448 5.83301 5.83329Z"
                                fill=""
                              />
                            </g>
                          </svg>
                        </span>
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder={t(
                            "settings.personalInformation.firstName.placeholder"
                          )}
                          onChange={(e) => setFirstName(e.target.value)}
                          value={firstName}
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="lastName"
                      >
                        {t("settings.personalInformation.lastName.label")}
                      </label>
                      <div className="relative">
                        <span className="absolute left-4.5 top-4">
                          <svg
                            className="fill-current"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.8">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.72039 12.887C4.50179 12.1056 5.5616 11.6666 6.66667 11.6666H13.3333C14.4384 11.6666 15.4982 12.1056 16.2796 12.887C17.061 13.6684 17.5 14.7282 17.5 15.8333V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V15.8333C15.8333 15.1703 15.5699 14.5344 15.1011 14.0655C14.6323 13.5967 13.9964 13.3333 13.3333 13.3333H6.66667C6.00363 13.3333 5.36774 13.5967 4.8989 14.0655C4.43006 14.5344 4.16667 15.1703 4.16667 15.8333V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2.5 17.9602 2.5 17.5V15.8333C2.5 14.7282 2.93899 13.6684 3.72039 12.887Z"
                                fill=""
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.99967 3.33329C8.61896 3.33329 7.49967 4.45258 7.49967 5.83329C7.49967 7.214 8.61896 8.33329 9.99967 8.33329C11.3804 8.33329 12.4997 7.214 12.4997 5.83329C12.4997 4.45258 11.3804 3.33329 9.99967 3.33329ZM5.83301 5.83329C5.83301 3.53211 7.69849 1.66663 9.99967 1.66663C12.3009 1.66663 14.1663 3.53211 14.1663 5.83329C14.1663 8.13448 12.3009 9.99996 9.99967 9.99996C7.69849 9.99996 5.83301 8.13448 5.83301 5.83329Z"
                                fill=""
                              />
                            </g>
                          </svg>
                        </span>
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          name="lastName"
                          id="lastName"
                          placeholder={t(
                            "settings.personalInformation.lastName.placeholder"
                          )}
                          onChange={(e) => setLastName(e.target.value)}
                          value={lastName}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="emailAddress"
                    >
                      {t("settings.personalInformation.email.label")}
                    </label>
                    <div className="relative">
                      <span className="absolute left-4.5 top-4">
                        <svg
                          className="fill-current"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.33301 4.16667C2.87658 4.16667 2.49967 4.54357 2.49967 5V15C2.49967 15.4564 2.87658 15.8333 3.33301 15.8333H16.6663C17.1228 15.8333 17.4997 15.4564 17.4997 15V5C17.4997 4.54357 17.1228 4.16667 16.6663 4.16667H3.33301ZM0.833008 5C0.833008 3.6231 1.9561 2.5 3.33301 2.5H16.6663C18.0432 2.5 19.1663 3.6231 19.1663 5V15C19.1663 16.3769 18.0432 17.5 16.6663 17.5H3.33301C1.9561 17.5 0.833008 16.3769 0.833008 15V5Z"
                              fill=""
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.983719 4.52215C1.24765 4.1451 1.76726 4.05341 2.1443 4.31734L9.99975 9.81615L17.8552 4.31734C18.2322 4.05341 18.7518 4.1451 19.0158 4.52215C19.2797 4.89919 19.188 5.4188 18.811 5.68272L10.4776 11.5161C10.1907 11.7169 9.80879 11.7169 9.52186 11.5161L1.18853 5.68272C0.811486 5.4188 0.719791 4.89919 0.983719 4.52215Z"
                              fill=""
                            />
                          </g>
                        </svg>
                      </span>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="email"
                        name="emailAddress"
                        id="emailAddress"
                        placeholder={t(
                          "settings.personalInformation.email.placeholder"
                        )}
                        defaultValue={user.user.data.user.email || ""}
                        disabled={true}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-4.5">
                    <button
                  className="flex justify-center bg-transparent rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white hover:border-primary transition-all duration-300"
                  type="submit"
                      onClick={handleCancel}
                    >
                      {t("settings.personalInformation.cancelButton")}
                    </button>
                    <button
                      onClick={handleUpdate}
                      className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                      disabled={loading}
                    >
                      {loading
                        ? t(
                            "settings.personalInformation.saveButton.loadingText"
                          )
                        : t("settings.personalInformation.saveButton.text")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark mt-8">
          <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
            <div className=" my-2 flex items-center justify-between gap-4">
              <h2 className="sm:text-[16px] lg:text-[18px] 4xl:text-[20px] 5xl:text-[22px] font-medium text-black dark:text-white ">
                {t("settings.emailSubscription.title")}
              </h2>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={toggle}
                  onChange={handleEmailSubscription}
                />
                <div
                  className={`flex ${
                    toggle
                      ? "justify-start pl-1.5 peer-checked:bg-blue-600"
                      : "justify-end pr-1.5 dark:bg-graydark bg-slate-200"
                  } items-center w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}
                >
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={`text-current ${
                      toggle ? "text-white" : "dark:text-white text-black"
                    }`}
                    width="12"
                    height="12"
                  />
                </div>
              </label>
            </div>
            <p className="text-dark-gray dark:text-slate-400">
              {" "}
              {t("settings.emailSubscription.description")}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-6.5">
          <h2 className="text-title-md2 font-semibold text-black dark:text-white ">
            {t("settings.security.title")}
          </h2>
          <Link
            to="/auth/lost/request"
            className="inline-flex items-center justify-center gap-2.5 bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            {/* <span>{SidebarIcons[3].auth}</span> */}
            {t("settings.security.resetPassword")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Settings;
