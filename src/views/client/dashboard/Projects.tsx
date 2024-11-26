import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardDataStats from "../../../components/client/CardDataStats";
import DarkBtn from "../../../components/client/buttons/DarkBtn";
import axios from "axios";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import useTitle from "../../../hooks/useTitle";
import { useTranslation } from "react-i18next";
import usei18n from "../../../i18n";

const Projects: React.FC = () => {
  usei18n();
  const { t } = useTranslation();
  useTitle(t("project.title"));
  const user = useSelector<any>((state) => state.user);
  const [loading, setLoading] = useState(true);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "MMMM yyyy");
  };

  const [projectData, setProjectData] = useState([]);
  const [userId, setUserID] = useState(user.user.data.user._id);
  const [userToken, setUserToken] = useState(user.user.token);

  useEffect(() => {
    Projects();
  }, [user]);

  const Projects = () => {
    let token = userToken;
    axios.defaults.headers.common["access-token"] = token;
    let payload = {
      userId: userId,
    };

    axios
      .post(`${import.meta.env.VITE_DB_URL}/projects/detail`, payload)
      .then((response) => {
        const projectDataArray = response.data.data;
        const allProjects = projectDataArray.flatMap((item) => item.projects);

        if (allProjects.length > 0) {
          setProjectData(allProjects);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("Error fetching project details:", err);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="w-full flex flex-row justify-start items-center   4xl:px-14">
        <div className="flex items-center justify-between space-x-4 mb-4 mt-2">
          <ol className="flex items-center gap-2 text-left">
            <li>
              <Link
                className="font-medium text-black hover:text-black dark:text-bodydark dark:hover:text-bodydark"
                to="/client-dashboard"
              >
                {t("project.breadcrumb.dashboard")}
              </Link>
            </li>
            <li className="font-medium text-primary">
              {t("project.breadcrumb.currentPage")}
            </li>
          </ol>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 2xl:gap-0 2xl:flex-row 2xl:justify-between items-center 4xl:px-14 mb-3 4xl:mb-6 mt-2 lg:mt-1">
        <div className="w-full 2xl:max-w-max">
          <h1 className="text-title-md font-bold text-black dark:text-white mb-2">
            {t("project.header.mainTitle")}
          </h1>
          <p className="text-dark-gray">{t("project.header.subTitle")}</p>
        </div>
        <div className=" w-full 2xl:max-w-max flex justify-start 2xl:justify-end mt-2 gap-2 ">
          <div>
            <DarkBtn
              name={t("project.buttons.addProject")}
              url={"/package-booking"}
            />
          </div>
        </div>
      </div>
      {loading ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 2xl:grid-cols-3 5xl:grid-cols-4 4xl:px-14">
          <div className="rounded-sm border border-stroke  pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark px-7.5 xl:pb-1  w-full bg-slate-200 h-[300px] animate-pulse"></div>
          <div className="rounded-sm border border-stroke  pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark px-7.5 xl:pb-1  w-full bg-slate-200 h-[300px] animate-pulse"></div>
          <div className="rounded-sm border border-stroke  pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark px-7.5 xl:pb-1  w-full bg-slate-200 h-[300px] animate-pulse"></div>
          <div className="rounded-sm border border-stroke  pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark px-7.5 xl:pb-1  w-full bg-slate-200 h-[300px] animate-pulse"></div>
          <div className="rounded-sm border border-stroke  pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark px-7.5 xl:pb-1  w-full bg-slate-200 h-[300px] animate-pulse"></div>
          <div className="rounded-sm border border-stroke  pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark px-7.5 xl:pb-1  w-full bg-slate-200 h-[300px] animate-pulse"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 2xl:grid-cols-3 5xl:grid-cols-4 4xl:px-14 z-99">
          {projectData
            .filter((project) => project?.isActive === "Y") // Filter only active projects
            .map((project) => (
              <CardDataStats
                key={project._id}
                id={project._id}
                texts={project?.plan?.textsCount}
                productUniqueID={project.projectId}
                domain={project.projectName}
                keywords={project.keywords}
                projectStatus={project.projectStatus}
                createdOn={formatDate(project.createdAt)}
                totalTexts={project?.plan?.totalTexts}
                servicePeriod={project.servicePeriod || ""}
                ordersPerMonth={project?.plan?.tasksPerMonth}
                usedordersPerMonth={project?.plan?.tasksPerMonthCount}
                projectDuration={project?.plan?.duration}
                onBoarding={project?.onBoarding}
                plan={project?.plan?.subscription}
                onBoardingInfo={project.onBoardingInfo}
                speech={project?.speech}
                prespective={project?.prespective}
                projectRefresh={Projects}
              />
            ))}
        </div>
      )}
    </>
  );
};

export default Projects;
