import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardDataStats from "../../../components/client/CardDataStats";
import DarkBtn from "../../../components/client/buttons/DarkBtn";
import axios from "axios";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading";

const Projects: React.FC = () => {
  const navigate = useNavigate();
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
  }, [user]);

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
                Dashboard /
              </Link>
            </li>
            <li className="font-medium text-primary">Projects</li>
          </ol>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 2xl:gap-0 2xl:flex-row 2xl:justify-between items-center 4xl:px-14 mb-3 4xl:mb-6 mt-2 lg:mt-1">
        <div className="w-full 2xl:max-w-max">
          <h1 className="text-title-md font-bold text-black dark:text-white mb-2">
            Projects
          </h1>
          <p className="text-dark-gray">
            Here you can see all the projects for which DripTexts are created.
          </p>
        </div>
        <div className=" w-full 2xl:max-w-max flex justify-start 2xl:justify-end mt-2 gap-2 ">
          <div>
            <DarkBtn name={"Add Project"} url={"/package-booking"} />
          </div>
        </div>
      </div>
      {loading ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 2xl:grid-cols-3 5xl:grid-cols-4 4xl:px-14">
          <div className="rounded-sm border border-stroke  pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark px-7.5 xl:pb-1  w-full bg-slate-200 h-[300px] animate-pulse"></div>
          <div className="rounded-sm border border-stroke  pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark px-7.5 xl:pb-1  w-full bg-slate-200 h-[300px] animate-pulse"></div>
          <div className="rounded-sm border border-stroke  pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark px-7.5 xl:pb-1  w-full bg-slate-200 h-[300px] animate-pulse"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 2xl:grid-cols-3 5xl:grid-cols-4 4xl:px-14">
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
              >
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
              </CardDataStats>
            ))}
        </div>
      )}
    </>
  );
};

export default Projects;
