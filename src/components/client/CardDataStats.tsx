import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
  children: ReactNode;
  plan : any;
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
  children,
  onBoarding,
  plan

}) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

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
      state: { projectName: domain,plan:plan },
    });
  };

  const handleProjectTask = () => {
    localStorage.setItem("projectName", domain);
    localStorage.setItem("projectId", id.toString());
    navigate("task-table", { state: { projectId: id } });
  };

  const hasAllProps = texts !== 0 || projectStatus !== "Not initalized";

  const handleNothing = () => {};

  return (
    <div
      onClick={onBoarding ? handleProjectTask : handleNothing}
      className={`relative rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark ${
        onBoarding ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        {children}
      </div>
      <h4 className="text-title-md font-bold text-black dark:text-white my-3">
        {domain} || {productUniqueID}
      </h4>
      <div className={`relative ${!onBoarding ? "blur-sm" : ""}`}>
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
            className="w-2/3 mt-3 py-2 px-4 bg-blue-500 text-white rounded-md"
          >
            Go to onboarding
          </button>
        </div>
      )}
    </div>
  );
};

export default CardDataStats;
