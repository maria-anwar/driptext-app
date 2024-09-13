import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import Breadcrumb from "../breeadcrumbs/Breadcrumb";
import Checkbox1 from "../buttons/CheckboxThree";
import Checkbox2 from "../buttons/CheckboxTwo";
import DarkBtn from "../buttons/DarkBtn";
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading";

const TaskTable = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const projectId = localStorage.getItem("projectId");
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const [taskData, setTaskData] = useState([]);
  const [userToken, setUserToken] = useState(user.user.token);
  const [openBarIndex, setOpenBarIndex] = useState(null); // Track the index of the currently open task
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [userId, setUserID] = useState(user.user.data.user._id);

  useEffect(() => {
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

  const handleCheckboxClick = (index) => {
    setOpenBarIndex(openBarIndex === index ? null : index); // Toggle the clicked task's index
  };

  const handleCrossApi = (projectTaskId) => {
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

  const handleTickApi = (projectTaskId) => {
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

  return (
    <>
      <div className="2xl:px-6 3xl:px-10">
        <div className="w-full flex justify-between items-start mb-2">
          <ol className="flex items-center gap-2">
            <li>
              <Link className="font-medium" to="/client-dashboard">
                Dashboard /
              </Link>
            </li>
            <li className="font-medium text-primary">Project Tasks</li>
          </ol>
          {/* <DarkBtn
            name={"Extend Monthly Package"}
            url={"https://driptext.de/buchung/"}
          /> */}
          <div onClick={handleAddProjectClick}>
            <DarkBtn name={"Add Text"} url={""} />
          </div>
        </div>
        <h2 className="text-title-md2 font-semibold text-black dark:text-white py-5">
          Project Tasks
        </h2>
        {loading ? (
           <div className="rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1  w-full bg-slate-200 h-[300px] animate-pulse"></div>
          
        ) : (
          <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto mb-4">
                <thead>
                  <tr className="bg-gray-2 text-left dark:bg-meta-4">
                    <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                      Order Id
                    </th>
                    <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                      Status
                    </th>
                    <th className="min-w-[170px] py-4 px-4 font-medium text-black dark:text-white">
                      Service Duration
                    </th>
                    <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                      Keyword
                    </th>
                    <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                      Published
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {taskData.map((task, index) => (
                    <tr key={task._id}>
                      <td className="border-b border-[#eee] py-5 px-4 pl-5 sm:pl-9 dark:border-strokedark xl:pl-11">
                        <Link to="#" className="text-blue-500 text-sm">
                          {task.taskName}
                        </Link>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p
                          className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                            task.status === "Final"
                              ? "bg-success text-success"
                              : task.status === "Not initalized"
                              ? "bg-danger text-danger"
                              : task.status === "Ready to Start"
                              ? "bg-warning text-warning"
                              : task.status === "Ready For Proofreading"
                              ? "bg-warning text-warning"
                              : "bg-blue-400 text-blue-400"
                          }`}
                        >
                          {task.status}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 pl-5  dark:border-strokedark ">
                        <p className="text-sm">{task.serviceDuration}</p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {task.keywords}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark  ">
                        <div
                          onClick={() =>
                            task.status === "Ready to Start"
                              ? handleCheckboxClick(index)
                              : null
                          }
                          className="cursor-pointer flex items-center"
                        >
                          {task.published === false ? (
                            <Checkbox1 />
                          ) : (
                            <Checkbox2 />
                          )}
                          {openBarIndex === index && (
                            <div className="relative ml-0 mt-4">
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
