import React, { useEffect, useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TaskInfoCard from "./TaskComponents/TaskInfoCard";
import Card from "./TaskComponents/TaskMainCard";
import { Task } from "../Type/types";
import axios from "axios";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

interface LectorCardProps {
  task: Task;
  getRefreshTask: (val:boolean) => void;
}

const LectorCard: React.FC<LectorCardProps> = ({ task, getRefreshTask }) => {
  const { t } = useTranslation();
  const user = useSelector<any>((state) => state.user);
  const userToken = user?.user?.token;
  const [clickableLink, setClickableLink] = useState<boolean>(false);
  const [isStart, setIsStart] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [showProjectInfo, setShowProjectInfo] = useState(false);
  const [showFinishDialog, setShowFinishDialog] = useState(false);
  const [showDetailsDialog, setShowDetailsDialog] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    getWordCount();
    if (
      task?.status.toLowerCase() === "ready for seo optimization" ||
      task?.status.toLowerCase() === "seo optimization in progress"
    ) {
      setClickableLink(true);
    }
  }, [task]);

  const getWordCount = () => {
    let token = userToken;
    axios.defaults.headers.common["access-token"] = token;
    let payload = {
      taskId: task._id,
    };
    axios
      .post(
        `${import.meta.env.VITE_DB_URL}/freelancer/updateWordCount`,
        payload
      )
      .then((response) => {})
      .catch((err) => {
        console.error("Error updating word count of project:", err);
      });
  };

  const handleAccept = () => {
    setIsAccepted(true);
  };

  const handleDecline = (taskId: string) => {
    let token = userToken;
    axios.defaults.headers.common["access-token"] = token;
    let payload = {
      taskId: taskId,
    };
    axios
      .post(`${import.meta.env.VITE_DB_URL}/freelancer/taskDecline`, payload)
      .then((response) => {
        console.log("Task Declined", response);
        getRefreshTask(true);
      })
      .catch((err) => {
        console.error("Error task decline", err);
      });
  };

  const handleStartTask = (taskId: string) => {
    let token = userToken;
    axios.defaults.headers.common["access-token"] = token;
    let payload = {
      taskId: taskId,
    };
    axios
      .post(`${import.meta.env.VITE_DB_URL}/freelancer/taskStart`, payload)
      .then((response) => {
        getRefreshTask(true);
        localStorage.setItem("startTaskSEOId", taskId);
      })
      .catch((err) => {
        console.error("Error task decline", err);
      });
    setIsStart(true);
    setShowDialog(false);
  };

  const startTaskId = localStorage.getItem("startTaskSEOId");
  useEffect(() => {

    if (startTaskId === task._id) {
      setShowProjectInfo(true);
    }
  }, [startTaskId]);


  const handleStart = () => {
    setShowDialog(true);
  };

  const handleFinish = () => {
    localStorage.removeItem("startTaskSEOId");
    setShowProjectInfo(false);
    setShowFinishDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
    setIsStart(true);
  };

  const closeProjectInfoDialog = () => {
    setShowProjectInfo(false);
    localStorage.removeItem("startTaskSEOId");
  };

  const closeFinishDialog = () => {
    setShowFinishDialog(false);
  };

  const confirmFinish = (taskId:string) => {
    let  payload = {
        taskId: taskId,
      };
    
    let token = userToken;
    axios.defaults.headers.common["access-token"] = token;
    axios
      .post(`${import.meta.env.VITE_DB_URL}/freelancer/taskFinish`, payload)
      .then((response) => {
        getRefreshTask(true);
        setIsFinish(true);
        setShowFinishDialog(false);
      })
      .catch((err) => {
        console.error("Error task finish", err);
      });
  };

  const hanldeShowAllInfo = () => {
    setShowDetailsDialog(true);
  };
  const hanldeCloseAllInfo = () => {
    setShowDetailsDialog(false);
  };

  const handleShowInfo = () => {
    setShowInfo(true);
    setShowFeedback(false);
  };

  const handleShowFeedback = () => {
    setShowFeedback(true);
    setShowInfo(false);
  };

  const ProjectHeader = () => {
    return (
      <div>
        <button
          className={`px-4 py-2 rounded mr-2 cursor-pointer ${
            showFeedback
              ? "bg-white dark:bg-transparent dark:text-white dark:ring-1 hover:bg-slate-100 dark:ring-slate-50 text-blue-500 ring-1 ring-blue-500 dark:hover:bg-blue-500"
              : "bg-blue-500 text-white"
          }`}
          onClick={handleShowInfo}
        >
          {t("task.seoCard.projectHeader.infoButton")}
        </button>
        <button
          className={`cursor-pointer px-4 py-2 rounded ${
            showInfo
              ? "bg-white dark:bg-transparent dark:text-white dark:ring-1 hover:bg-slate-100 dark:ring-white text-blue-500 ring-1 ring-blue-500 dark:hover:bg-blue-500"
              : "bg-blue-500 text-white"
          }`}
          onClick={handleShowFeedback}
        >
          {t("task.seoCard.projectHeader.feedbackButton")}
        </button>
      </div>
    );
  };
  return (
    <div className="w-full mb-10 mt-3 rounded-sm ring-1 ring-slate-200 dark:border-stroke  py-1 px-7.5 shadow-2 dark:border-strokedark  dark:bg-boxdark">
     <div className="py-2 dark:text-white text-xl font-semibold pt-6 flex flex-row">
        <h4>{task?.project?.projectId}:</h4>
        <h4 className="pl-1">{task?.project?.projectName}</h4>
      </div>
      <div className="pb-4">
        <Card task={task} clickableLink={clickableLink} />
        <div className="mt-4 flex flex-row justify-end items-end">
          {task?.status.toLowerCase() === "ready for seo optimization" && !isAccepted && (
            <>
              <button
                className="mr-3 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                onClick={handleAccept}
              >
                {t("task.seoCard.taskActions.acceptButton")}
              </button>
              <button
                onClick={() => handleDecline(task?._id)}
                className="mr-3 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                {t("task.seoCard.taskActions.declineButton")}
              </button>
            </>
          )}
          {task?.status.toLowerCase()  === "ready for seo optimization" && isAccepted && (
            <button
              className="mx-2.5 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={handleStart}
            >
              {t("task.seoCard.taskActions.startButton")}
            </button>
          )}
          {task?.status.toLowerCase() === "seo optimization in progress" && (
            <button
              className="mx-2.5 bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              onClick={handleFinish}
            >
              {t("task.seoCard.taskActions.finishButton")}
            </button>
          )}
        </div>
      </div>
      <div
        onClick={hanldeShowAllInfo}
        className="flex justify-center items-center border-t mt-1 py-2 lg:py-4 border-slate-300 dark:border-slate-200 cursor-pointer font-medium"
      >
        <span className="text-slate-600 hover:text-slate-800 dark:text-slate-200 dark:hover:text-slate-300">
        {t("task.seoCard.taskInfo.showMoreDetails")}
        </span>
      </div>
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center z-9999 bg-neutral-200 dark:bg-slate dark:bg-opacity-15 bg-opacity-60 px-4">
          <div className="bg-white dark:bg-black p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4 dark:text-white">
            {t("task.seoCard.acceptDialog.title")}
            </h2>
            <p>
            {t("task.seoCard.acceptDialog.message")}
            </p>
            <button
              className=" mr-4 mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              onClick={() => handleStartTask(task._id)}
            >
              {t("task.seoCard.acceptDialog.confirmButton")}
            </button>
            <button
              className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              onClick={closeDialog}
            >
              {t("task.seoCard.acceptDialog.closeButton")}
            </button>
          </div>
        </div>
      )}
      {showProjectInfo && (
        <div className="w-auto fixed inset-0 flex items-center justify-center z-[9999] bg-neutral-200 dark:bg-slate dark:bg-opacity-15 bg-opacity-60 px-4">
          <div className="bg-white dark:bg-black p-6 rounded shadow-lg  lg:w-8/12 xl:w-8/12 2xl:w-8/12 3xl:w-6/12 max-h-[90vh] overflow-y-auto scrollbar-hide">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold  dark:text-white">
                {t("task.seoCard.projectHeader.title")}
              </h2>
              <FontAwesomeIcon
                className="cursor-pointer text-lg dark:text-white text-black"
                onClick={closeProjectInfoDialog}
                icon={faTimes}
              />
            </div>
            <div className="flex justify-between items-center space-x-2 my-4">
              <ProjectHeader />
              <button
              className="mx-2.5 bg-purple-500 text-white  py-2 px-4 rounded hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              onClick={handleFinish}
            >
              {t("task.taskbuttons.finishButton")}
            </button>
            </div>
            {showInfo && (
              <TaskInfoCard
                task={task}
                getWordCount={getWordCount}
                clickableLink={clickableLink}
              />
            )}
            {showFeedback && (
                <div>
                  {task?.feedback ? (
                    <p className="text-red-600 font-semibold">
                      {task.feedback}
                    </p>
                  ) : (
                    <p className="text-gray-500 italic">
                      {t("task.seoCard.projectHeader.noFeedback")}
                    </p>
                  )}
                </div>
              )}
          </div>
        </div>
      )}
      {showFinishDialog && (
        <div className="fixed inset-0 flex items-center justify-center z-9999 bg-neutral-200 dark:bg-slate dark:bg-opacity-15 bg-opacity-60 px-4">
          <div className="bg-white dark:bg-black p-6 rounded shadow-lg">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold  dark:text-white">
              {task?.taskName} ({task?.keywords}) {t("task.seoCard.finishDialog.title")}
              </h2>
              <FontAwesomeIcon
                className="cursor-pointer text-lg text-red-500"
                onClick={closeFinishDialog}
                icon={faTimes}
              />
            </div>
            <p className="dark:text-white pb-2">
            {t("task.seoCard.finishDialog.message")}
            </p>

            <div className="flex justify-center items-center">
              <button
                className={`mt-4 mr-4 font-bold py-2 px-8 rounded focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-green-500 text-white hover:bg-green-600 focus:ring-green-500"
                   `}
                onClick={()=>confirmFinish(task?._id)}
              >
               {t("task.seoCard.finishDialog.confirmButton")}
              </button>
            </div>
          </div>
        </div>
      )}

      {showDetailsDialog && (
        <div className="w-auto fixed inset-0 flex items-center justify-center z-[9999] bg-neutral-200 dark:bg-slate dark:bg-opacity-15 bg-opacity-60 px-4">
          <div className="bg-white dark:bg-black p-6 rounded shadow-lg  lg:w-8/12 xl:w-8/12 2xl:w-8/12 3xl:w-6/12 max-h-[90vh] overflow-y-auto scrollbar-hide">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold dark:text-white">
              {t("task.seoCard.projectHeader.title")}
              </h2>
              <FontAwesomeIcon
                className="cursor-pointer text-lg dark:text-white text-black"
                onClick={hanldeCloseAllInfo}
                icon={faTimes}
              />
            </div>
            <ProjectHeader />
            <div className="space-y-4 mt-4">
              {showInfo && (
                <TaskInfoCard
                  task={task}
                  getWordCount={getWordCount}
                  clickableLink={clickableLink}
                />
              )}
              {showFeedback && (
                <div>
                  {task?.feedback ? (
                    <p className="text-red-600 font-semibold">
                      {task.feedback}
                    </p>
                  ) : (
                    <p className="text-gray-500 italic">
                     {t("task.seoCard.projectHeader.noFeedback")}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LectorCard;
