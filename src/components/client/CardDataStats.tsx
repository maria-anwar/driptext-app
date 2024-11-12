import React, { ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OnBoardingInfo from "./tables/OnBoardingInfo";

interface CardDataStatsProps {
  id: Object;
  texts: number;
  domain: string;
  productUniqueID: string;
  keywords: string;
  projectStatus: string;
  totalTexts: number;
  createdOn: string;
  servicePeriod: string;
  ordersPerMonth: number;
  usedordersPerMonth: number;
  projectDuration: number;
  onBoarding: boolean;
  plan: any;
  onBoardingInfo: any;
  speech: string;
  prespective: string;
  projectRefresh: () => void;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  id,
  texts,
  domain,
  keywords,
  projectStatus,
  productUniqueID,
  totalTexts,
  createdOn,
  servicePeriod,
  ordersPerMonth,
  usedordersPerMonth,
  projectDuration,
  onBoarding,
  plan,
  onBoardingInfo,
  prespective,
  speech,
  projectRefresh,
}) => {
  const navigate = useNavigate();
  const [onBoardingClick, setonBoardingClick] = useState(false);
  const [onBoardingModel, setonBoardingModel] = useState(false);

  const handleBoarding = () => {
    // if (user.user.data.user.role.title.toLowerCase() === "leads") {
    //   try {
    //     if (texts === 1) {
    //       navigate("/package-booking");
    //     } else {
    //       // navigate("/onboarding-probetext");
    //       navigate("/onboarding-probetext", {
    //         state: { projectName: domain, userId: user.user.data.user._id },
    //       });
    //     }
    //   } catch (error) {
    //     console.log("get project detail error: ", error);
    //   }
    // } else {
    //   // navigate("/onboarding-probetext");
    //   navigate("/onboarding-probetext", {
    //     state: { projectName: domain, userId: user.user.data.user._id },
    //   });
    // }
    localStorage.setItem("projectId", id.toString());
    navigate("/onboarding-probetext", {
      state: { projectName: domain, plan: plan },
    });
  };

  const handleProjectTask = () => {
    localStorage.setItem("projectName", domain);
    localStorage.setItem("projectId", id.toString());
    navigate("task-table", { state: { projectId: id } });
  };

  const handleNothing = () => {};

  const handleEditOnboarding = () => {
    setonBoardingClick(true);
    setonBoardingModel(true);
  };

  return (
    <div
      className={`relative rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark cursor-default"
      `}
    >
      <div className="flex justify-between items-center flex-row">
        <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-slate-200/80 dark:bg-meta-4">
          <svg
            className="fill-primary dark:fill-white"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.43425 7.5093H2.278C2.44675 7.5093 2.55925 7.3968 2.58737 7.31243L2.98112 6.32805H5.90612L6.27175 7.31243C6.328 7.48118 6.46862 7.5093 6.58112 7.5093H7.453C7.76237 7.48118 7.87487 7.25618 7.76237 7.03118L5.428 1.4343C5.37175 1.26555 5.3155 1.23743 5.14675 1.23743H3.88112C3.76862 1.23743 3.59987 1.29368 3.57175 1.4343L1.153 7.08743C1.0405 7.2843 1.20925 7.5093 1.43425 7.5093ZM4.47175 2.98118L5.3155 5.17493H3.59987L4.47175 2.98118Z"
              fill=""
            />
            <path
              d="M10.1249 2.5031H16.8749C17.2124 2.5031 17.5218 2.22185 17.5218 1.85623C17.5218 1.4906 17.2405 1.20935 16.8749 1.20935H10.1249C9.7874 1.20935 9.47803 1.4906 9.47803 1.85623C9.47803 2.22185 9.75928 2.5031 10.1249 2.5031Z"
              fill=""
            />
            <path
              d="M16.8749 6.21558H10.1249C9.7874 6.21558 9.47803 6.49683 9.47803 6.86245C9.47803 7.22808 9.75928 7.50933 10.1249 7.50933H16.8749C17.2124 7.50933 17.5218 7.22808 17.5218 6.86245C17.5218 6.49683 17.2124 6.21558 16.8749 6.21558Z"
              fill=""
            />
            <path
              d="M16.875 11.1656H1.77187C1.43438 11.1656 1.125 11.4469 1.125 11.8125C1.125 12.1781 1.40625 12.4594 1.77187 12.4594H16.875C17.2125 12.4594 17.5219 12.1781 17.5219 11.8125C17.5219 11.4469 17.2125 11.1656 16.875 11.1656Z"
              fill=""
            />
            <path
              d="M16.875 16.1156H1.77187C1.43438 16.1156 1.125 16.3969 1.125 16.7625C1.125 17.1281 1.40625 17.4094 1.77187 17.4094H16.875C17.2125 17.4094 17.5219 17.1281 17.5219 16.7625C17.5219 16.3969 17.2125 16.1156 16.875 16.1156Z"
              fill=""
            />
          </svg>
        </div>
        {onBoarding ? (
          <div
            onClick={handleEditOnboarding}
            className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-slate-200/80 dark:bg-meta-4 cursor-pointer"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary dark:text-white"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </div>
        ) : null}
      </div>
      {onBoardingModel ? (
        <OnBoardingInfo
          onBoarding={onBoardingInfo}
          projectId={id.toString()}
          domain={domain}
          speech={speech}
          perspective={prespective}
          closeModel={() => {
            setonBoardingModel(false);
            setonBoardingClick(false);
          }}
          handleRefresh={projectRefresh}
        />
      ) : null}
      <h4
        onClick={onBoarding ? handleProjectTask : handleNothing}
        className={`text-title-md font-bold text-black dark:text-white my-3   ${
          !onBoarding ? "cursor-default" : " cursor-pointer"
        }`}
      >
        {domain} || {productUniqueID}
      </h4>
      <div
        onClick={onBoarding ? handleProjectTask : handleNothing}
        className={`relative ${
          !onBoarding ? "blur-sm cursor-default" : " cursor-pointer"
        }`}
      >
        <div className="my-6">
          <hr className="text-custom-gray" />
        </div>
        <div className="mt-3 mb-3 flex items-end justify-between">
          <div className="text-sm font-medium text-dark-gray ">
            Text{" "}
            <div className="text-meta-5">
              {texts}/{totalTexts}
            </div>
          </div>
          <div className="text-sm font-medium text-dark-gray ">
            Created on:{" "}
            <div className="text-meta-3 flex justify-end">{createdOn}</div>
          </div>
        </div>
        <div className="mt-8 mb-3 flex items-end justify-between w-full">
          <div className="text-sm font-medium text-dark-gray ">
            Orders per month{" "}
            <p className="text-meta-5  ">
              {usedordersPerMonth}/{ordersPerMonth}
            </p>
          </div>
          <div className="text-sm font-medium text-dark-gray flex items-end justify-end flex-col ">
            Project Duration{" "}
            <div className="text-meta-5 text-right">
              {projectDuration === null
                ? `${new Date().toLocaleString("default", {
                    month: "long",
                  })}(no subscription)`
                : projectDuration + " Month"}
            </div>
          </div>
        </div>
      </div>

      {!onBoarding && (
        <div className="absolute inset-0 top-30 flex flex-col items-center justify-center  p-4 rounded-sm">
          <p className="text-center text-sm dark:text-slate-100 mb-2">
            Please fill out the onboarding for this project.
          </p>
          <button
            onClick={handleBoarding}
            className="w-2/3 mt-3 py-3 px-4 bg-blue-500 text-white rounded hover:bg-blue-500/85"
          >
            Go to onboarding
          </button>
        </div>
      )}
    </div>
  );
};

export default CardDataStats;
