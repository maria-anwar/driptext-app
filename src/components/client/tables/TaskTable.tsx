import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import Checkbox1 from "../buttons/CheckboxThree";
import Checkbox2 from "../buttons/CheckboxTwo";
import DarkBtn from "../buttons/DarkBtn";
import { useNavigate } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import { Task } from "../Type/types";

const TaskTable = () => {
  const { state } = useLocation(); // Assuming you are using React Router
const productUniqueID = state?.productUniqueID;
const domain = state?.domain;
  const { t } = useTranslation();
  useTitle(t("taskTable.title"));
  const navigate = useNavigate();
  const projectId = localStorage.getItem("projectId");
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const [taskData, setTaskData] = useState<Task[]>([]);
  const [userToken, setUserToken] = useState(user.user.token);
  const [openBarIndex, setOpenBarIndex] = useState(null); // Track the index of the currently open task
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [userId, setUserID] = useState(user.user.data.user._id);

  useEffect(() => {
    TaskDetails();
  }, [projectId, refreshTrigger]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      try {
        const tasks = JSON.parse(storedTasks);
        if (Array.isArray(tasks)) {
          setTaskData(tasks);
        } else {
          console.error("Stored data is not an array");
        }
        setRefreshTrigger(0);
      } catch (error) {
        console.error("Error parsing stored tasks:", error);
        setRefreshTrigger(0);
      }
    }
  }, [projectId, refreshTrigger]);

  const TaskDetails = () => {
    let token = userToken;
    axios.defaults.headers.common["access-token"] = token;
    let payload = {
      projectId: projectId,
    };

    axios
      .post(`${import.meta.env.VITE_DB_URL}/project/tasks/detail`, payload)
      .then((response) => {
        const tasks = response.data.data;
        if (Array.isArray(tasks)) {
          localStorage.setItem("tasks", JSON.stringify(tasks));
          setTaskData(tasks);
          setLoading(false);
        } else {
          console.error("Received data is not an array");
        }
        setRefreshTrigger(0);
      })
      .catch((err) => {
        console.error("Error fetching project details:", err);
        setRefreshTrigger(0);
        setLoading(false);
      });
  };

  const handleCheckboxClick = (index: any) => {
    setOpenBarIndex(openBarIndex === index ? null : index); // Toggle the clicked task's index
  };

  const handleCrossApi = (projectTaskId:string) => {
    let token = userToken;
    axios.defaults.headers.common["access-token"] = token;
    let payload = {
      projectId: projectId,
      projectTaskId: projectTaskId,
    };

    axios
      .post(
        `${import.meta.env.VITE_DB_URL}/project/tasks/projecttaskupdate`,
        payload
      )
      .then((response) => {
        setRefreshTrigger((prev) => prev + 1);
      })
      .catch((err) => {
        console.error("Error fetching project details:", err);
      });
  };

  const handleTickApi = (projectTaskId:string) => {
    let token = userToken;
    axios.defaults.headers.common["access-token"] = token;
    let payload = {
      projectId: projectId,
      projectTaskId: projectTaskId,
    };

    axios
      .post(
        `${import.meta.env.VITE_DB_URL}/project/tasks/projecttaskupdate`,
        payload
      )
      .then((response) => {
        setRefreshTrigger((prev) => prev + 1);
      })
      .catch((err) => {
        console.error("Error fetching project details:", err);
      });
  };

  const handleAddProjectClick = async () => {
    const projectName = localStorage.getItem("projectName");
    if (user.user.data.user.role.title.toLowerCase() === "leads") {
      try {
        let token = userToken;
        axios.defaults.headers.common["access-token"] = token;
        let payload = {
          userId: userId,
        };

        const response = await axios.post(
          `${import.meta.env.VITE_DB_URL}/projects/detail`,
          payload
        );
        const projectDataArray = response.data.data;
        const allProjects = projectDataArray.flatMap((item) => item.projects);
        if (allProjects.length > 0 && allProjects[0].tasks === 1) {
          navigate("/package-booking");
        } else {
          navigate("/onboarding-probetext", {
            state: { projectName: projectName, projectId: projectId },
          });
        }
      } catch (error) {
        console.log("get project detail error: ", error);
      }
    } else {
      navigate("/onboarding-probetext", {
        state: { projectName: projectName, projectId: projectId },
      });
    }
  };

  const formatDate = (dateString:Date | string) => {
    if (!dateString) {
      return "N/A";
    }
    const date = new Date(dateString);
    return format(date, "MMMM yyyy");
  };

  return (
    <>
      <div className="2xl:px-6 3xl:px-10">
        <div className="w-full flex justify-between items-start mb-2">
          <ol className="flex items-center gap-2">
            <li>
              <Link className="font-medium" to="/client-dashboard">
                {t("taskTable.breadcrumb.dashboard")}
              </Link>
            </li>
            <li className="font-medium text-primary">
              {productUniqueID}: {domain}
            </li>
          </ol>
          {/* <DarkBtn
            name={"Extend Monthly Package"}
            url={"https://driptext.de/buchung/"}
          /> */}
          {/* <div onClick={handleAddProjectClick}>
            <DarkBtn name={"Add Text"} url={""} />
          </div> */}
        </div>
        <div className="flex justify-between items-center flex-row mb-6 mt-4 ">
          <h2 className="text-title-md2 font-semibold text-black dark:text-white ">
            {t("taskTable.projectTexts")} {productUniqueID}: {domain}
          </h2>
          <div>
            <DarkBtn
              name={t("taskTable.addSubscriptionButton")}
              url={"/package-booking"}
            />
          </div>
        </div>
        {loading ? (
          <div className="rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1  w-full bg-slate-200 h-[300px] animate-pulse"></div>
        ) : (
          <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto mb-4">
                <thead>
                  <tr className="bg-gray-2 text-left dark:bg-meta-4">
                    <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                      {t("taskTable.columns.textNumber")}
                    </th>
                    <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                      {t("taskTable.columns.status")}
                    </th>
                    <th className="min-w-[170px] py-4 px-4 font-medium text-black dark:text-white">
                      {t("taskTable.columns.serviceDuration")}
                    </th>
                    <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                      {t("taskTable.columns.keyword")}
                    </th>
                    <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                      {t("taskTable.columns.published")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {taskData.map((task, index) => (
                    <tr key={task._id}>
                      <td className="border-b border-[#eee] py-5 px-4 pl-5 sm:pl-9 dark:border-strokedark xl:pl-11">
                        <a
                          href={
                            task?.status.toLowerCase() === "final"
                              ? task?.fileLink
                              : "#"
                          }
                          target={
                            task?.status.toLowerCase() === "final"
                              ? "_blank"
                              : undefined
                          }
                          rel="noopener noreferrer"
                          aria-disabled={task?.status.toLowerCase() !== "final"}
                          className={`${
                            task?.status.toLowerCase() === "final"
                              ? "text-blue-500"
                              : "cursor-not-allowed text-gray-500"
                          } text-left`}
                          onClick={(e) => {
                            if (task?.status.toLowerCase() !== "final") {
                              e.preventDefault();
                            }
                          }}
                        >
                          {task.taskName}
                        </a>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p
                          className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium text-center  ${
                            task?.status.toUpperCase() === "FINAL"
                              ? "bg-green-500/20 text-green-500"
                              : task.status.toUpperCase() === "FREE TRIAL"
                              ? "bg-yellow-500/20 text-yellow-500"
                              : task.status.toUpperCase() === "READY TO WORK"
                              ? "bg-yellow-500/20 text-yellow-500"
                              : task.status.toUpperCase() === "IN PROGRESS"
                              ? "bg-blue-500/20 text-blue-500"
                              : task.status.toUpperCase() ===
                                "READY FOR PROOFREADING"
                              ? "bg-orange-500/20 text-orange-500"
                              : task.status.toUpperCase() ===
                                "PROOFREADING IN PROGRESS"
                              ? "bg-purple-500/20 text-purple-500"
                              : task.status.toUpperCase() ===
                                "READY FOR SEO OPTIMIZATION"
                              ? "bg-indigo-500/20 text-indigo-500"
                              : task.status.toUpperCase() ===
                                "SEO OPTIMIZATION IN PROGRESS"
                              ? "bg-pink-500/20 text-pink-500"
                              : task.status.toUpperCase() ===
                                "READY FOR 2ND PROOFREADING"
                              ? "bg-violet-500/20 text-violet-500" // New color for "READY FOR 2ND PROOFREADING"
                              : task.status.toUpperCase() ===
                                "2ND PROOFREADING IN PROGRESS"
                              ? "bg-lime-300/20 text-lime-700" // Different color for "2ND PROOFREADING IN PROGRESS"
                              : "bg-red-500/20 text-red-500"
                          }`}
                        >
                          {task.status}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 pl-5  dark:border-strokedark ">
                        <p className="text-sm text-black dark:text-white">
                          {formatDate(task?.dueDate)}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {task?.keywords}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark  ">
                        <div
                          onClick={() =>
                            task?.status.toLowerCase() === "ready to work"
                              ? handleCheckboxClick(index)
                              : null
                          }
                          className="cursor-pointer flex items-center ml-7"
                        >
                          {task.published === false ? (
                            <Checkbox1 />
                          ) : (
                            <Checkbox2 />
                          )}
                          {openBarIndex === index && (
                            <div className="relative ml-5 mt-4">
                              <div className="absolute right-0">
                                <div className="w-full py-2 pl-3 flex mt-2 space-x-2 border border-zinc-200 bg-white shadow-md">
                                  <div
                                    onClick={() => {
                                      handleCheckboxClick(index);
                                      if (task.published === true) {
                                        handleCrossApi(task._id);
                                      }
                                    }}
                                    className="cursor-pointer"
                                  >
                                    <Checkbox1 />
                                  </div>
                                  <div
                                    onClick={() => {
                                      handleCheckboxClick(index);
                                      if (task.published === false) {
                                        handleTickApi(task._id);
                                      }
                                    }}
                                    className="cursor-pointer"
                                  >
                                    <Checkbox2 />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskTable;
