import React, { useEffect, useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TaskInfoCard from "./TaskComponents/TaskInfoCard";
import Card from "./TaskComponents/TaskMainCard";
import { Task } from "../Type/types";
import { useSelector } from "react-redux";
import axios from "axios";
import CheckBox from "./TaskComponents/CheckBox";
import CrossCheck from "./TaskComponents/CrossCheck";
import TickCheck from "./TaskComponents/TickCheck";

interface TaskCardProps {
  task: Task;
  Upcomming?: boolean;
  getRefreshTask: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  Upcomming,
  getRefreshTask,
}) => {
  const user = useSelector<any>((state) => state.user);
  const userToken = user?.user?.token;
  const [clickableLink, setClickableLink] = useState<boolean>(false);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [isAccepted, setIsAccepted] = useState<boolean>(false);
  const [isFinish, setIsFinish] = useState<boolean>(false);
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [showProjectInfo, setShowProjectInfo] = useState<boolean>(false);
  const [showFinishDialog, setShowFinishDialog] = useState<boolean>(false);
  const [showDetailsDialog, setShowDetailsDialog] = useState<boolean>(false);
  const [showInfo, setShowInfo] = useState<boolean>(true);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [checkboxes, setCheckboxes] = useState({
    format1: false,
    format2: false,
    format3: false,
    format4: false,
    format5: false,
    format6: false,
  });

  useEffect(() => {
    getWordCount();
    checkWordCount();
    if (
      task?.status.toLowerCase() === "ready to work" ||
      task?.status.toLowerCase() === "in progress" ||
      task?.status.toLowerCase() === "in rivision"
    ) {
      setClickableLink(true);
    }
  }, [task, task.actualNumberOfWords, task.desiredNumberOfWords]);

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
      .then((response) => {
        console.log("word count");
      })
      .catch((err) => {
        console.error("Error updating word count of project:", err);
      });
  };
  const checkWordCount = () => {
    setIsChecked(task.actualNumberOfWords >= task.desiredNumberOfWords);
  };

  const formatDetails = {
    format1: {
      h: "Care and accuracy",
      p: "(consistency of words, figures/facts are correct)",
    },
    format2: {
      h: "Content specification",
      p: "(text fits the customer/context, special requests adhered to)",
    },
    format3: {
      h: "Formal requirements",
      p: "(saturations, writing perspective, tone of voice))",
    },
    format4: {
      h: "Structural guidelinesCare and accuracy",
      p: "(structure, paragraph, common thread, palagiarism)",
    },
    format5: {
      h: "Text bloat and duplication",
      p: "(conciseness, added value, no duplication)",
    },
    format6: {
      h: "Text is error-free",
      p: "(spelling, punctuation, grammer)",
    },
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
        getRefreshTask();
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
        console.log("Task accepted", response);
        getRefreshTask();
        setIsStart(true);
        setShowDialog(false);
      })
      .catch((err) => {
        console.error("Error task decline", err);
      });
  };

  const handleStart = () => {
    setShowDialog(true);
  };

  const handleFinish = () => {
    getWordCount();
    setShowProjectInfo(false);
    setShowFinishDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
    setIsStart(true);
    setShowProjectInfo(true);
  };

  const closeProjectInfoDialog = () => {
    setShowProjectInfo(false);
  };

  const closeFinishDialog = () => {
    setShowFinishDialog(false);
  };

  const confirmFinish = (taskId: string) => {
    let token = userToken;
    axios.defaults.headers.common["access-token"] = token;
    let payload = {
      taskId: taskId,
    };
    axios
      .post(`${import.meta.env.VITE_DB_URL}/freelancer/taskFinish`, payload)
      .then((response) => {
        getRefreshTask();
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

  const allChecked = Object.values(checkboxes).every(Boolean);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxes({
      ...checkboxes,
      [e.target.name]: e.target.checked,
    });
  };

  const ProjectHeader = () => {
    return (
      <div>
        <button
          className={`px-4 py-2 mb-3 rounded mr-2 cursor-pointer ${
            showFeedback
              ? "bg-white dark:bg-transparent dark:text-white dark:ring-1 hover:bg-slate-100 dark:ring-slate-50 text-blue-500 ring-1 ring-blue-500 dark:hover:bg-blue-500"
              : "bg-blue-500 text-white"
          }`}
          onClick={handleShowInfo}
        >
          Info
        </button>
        <button
          className={`cursor-pointer px-4 py-2 rounded ${
            showInfo
              ? "bg-white dark:bg-transparent dark:text-white dark:ring-1 hover:bg-slate-100 dark:ring-white text-blue-500 ring-1 ring-blue-500 dark:hover:bg-blue-500"
              : "bg-blue-500 text-white"
          }`}
          onClick={handleShowFeedback}
        >
          Feedback
        </button>
      </div>
    );
  };

  return (
    <div className="w-full mb-10 mt-3 rounded-sm ring-1 ring-slate-200 dark:border-stroke  py-1 px-7.5 shadow-2 dark:border-strokedark  dark:bg-boxdark">
      <div className="py-2 dark:text-white text-xl font-semibold pt-6">
        <h4>{task?.project?.projectName}</h4>
      </div>
      <div className="pb-4">
        <Card task={task} clickableLink={clickableLink} />
        <div className="mt-4 flex flex-row justify-end items-end">
          {task?.status.toLowerCase() === "ready to work" && !isAccepted && (
            <>
              <button
                className="mr-3 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                onClick={handleAccept}
              >
                Accept
              </button>
              <button
                onClick={() => handleDecline(task?._id)}
                className="mr-3 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                Decline
              </button>
            </>
          )}
          {task?.status.toLowerCase() === "ready to work" && isAccepted && (
            <button
              className="mx-2.5 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={handleStart}
            >
              Start
            </button>
          )}
          {(task?.status.toLowerCase() === "in progress" ||
            task?.status.toLowerCase() === "in rivision") && (
            <button
              className="mx-2.5 bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              onClick={handleFinish}
            >
              Finish
            </button>
          )}
        </div>
      </div>
      <div
        onClick={hanldeShowAllInfo}
        className="flex justify-center items-center border-t mt-1 py-2 lg:py-4 border-slate-300 dark:border-slate-200 cursor-pointer font-medium"
      >
        <span className="text-slate-600 hover:text-slate-800 dark:text-slate-200 dark:hover:text-slate-300">
          Show more details
        </span>
      </div>
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center z-9999 bg-neutral-200 dark:bg-slate dark:bg-opacity-15 bg-opacity-60 px-4">
          <div className="bg-white dark:bg-black p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4 dark:text-white">
              Accept order
            </h2>
            <p>
              You are about to accept the order after which you have 24 hours to
              complete it, are you sure?
            </p>
            <button
              className=" mr-4 mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              onClick={() => handleStartTask(task._id)}
            >
              Confirm
            </button>
            <button
              className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              onClick={closeDialog}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showProjectInfo && (
        <div className="w-auto fixed inset-0 flex items-center justify-center z-[9999] bg-neutral-200 dark:bg-slate dark:bg-opacity-15 bg-opacity-60 px-4 pt-8">
          <div className="bg-white dark:bg-black p-6 rounded shadow-lg  lg:w-8/12 xl:w-8/12 2xl:w-8/12 3xl:w-6/12 max-h-[90vh] overflow-y-auto scrollbar-hide">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold  dark:text-white">
                Task Details
              </h2>
              <FontAwesomeIcon
                className="cursor-pointer text-lg dark:text-white text-black"
                onClick={closeProjectInfoDialog}
                icon={faTimes}
              />
            </div>
            <div className="flex justify-between items-center space-x-2 my-4">
              <ProjectHeader />
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
                      No feedback available
                    </p>
                  )}
                </div>
              )}
          </div>
        </div>
      )}
      {showFinishDialog && (
        <div className="w-auto fixed inset-0 flex items-center justify-center z-[9999] bg-neutral-200 dark:bg-slate dark:bg-opacity-15 bg-opacity-60 px-4 pt-6">
          <div className="bg-white dark:bg-black p-6 rounded shadow-lg  lg:w-8/12 xl:w-8/12 2xl:w-8/12 3xl:w-6/12 max-h-[90vh] overflow-y-auto scrollbar-hide">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold dark:text-white">
                Finish order
              </h2>
              <FontAwesomeIcon
                className="cursor-pointer text-lg dark:text-white text-black"
                onClick={closeFinishDialog}
                icon={faTimes}
              />
            </div>
            <p className="dark:text-white pb-2">
              You're about to complete the order, are you sure?
            </p>

            {Object.entries(formatDetails).map(([key, { h, p }]) => (
              <div key={key} className="mb-2 flex">
                <div
                  className="pt-1"
                  onClick={() =>
                    handleCheckboxChange({
                      target: { name: key, checked: !checkboxes[key] },
                    })
                  }
                >
                  <CheckBox
                    isChecked={checkboxes[key as keyof typeof checkboxes]}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor={key} className="ml-0 dark:text-white">
                    <strong>{h}</strong>
                  </label>
                  <p className="pl-2">{p}</p>
                </div>
              </div>
            ))}

            <div className="py-4 px-4 bg-slate-200 dark:bg-slate-700">
              <div className="flex items-center">
                {isChecked ? (
                  <TickCheck isChecked={true} />
                ) : (
                  <CrossCheck isChecked={false} />
                )}
                <label className="dark:text-white">
                  <strong>Minimum Word Count</strong>
                </label>
              </div>
              <p className="pl-8">
                Ensure that the text meets or exceeds the required minimum word
                count.
              </p>
            </div>

            <div className="flex justify-center items-center">
              <button
                className={`mt-4 mr-4 font-bold py-2 px-8 rounded focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                  allChecked && isChecked
                    ? "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500"
                    : "bg-bodydark dark:bg-slate-500 text-white cursor-not-allowed"
                }`}
                onClick={() => confirmFinish(task?._id)}
                disabled={!allChecked || !isChecked}
              >
                Confirm Finish
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
                Task Details
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
                      No feedback available
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

export default TaskCard;
