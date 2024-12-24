import React, { useEffect, useState } from "react";
import {
  faTimes,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TaskInfoCard from "./TaskComponents/TaskInfoCard";
import Card from "./TaskComponents/TaskMainCard";
import { Task } from "../Type/types";
import { useSelector } from "react-redux";
import axios from "axios";
import CheckBox from "./TaskComponents/CheckBox";
import CrossCheck from "./TaskComponents/CrossCheck";
import TickCheck from "./TaskComponents/TickCheck";
import { useTranslation } from "react-i18next";

interface MetaLectorCardProps {
  task: Task;
  getRefreshTask: (val:boolean) => void;
}

const MetaLectorCard: React.FC<MetaLectorCardProps> = ({
  task,
  getRefreshTask,
}) => {
  const { t } = useTranslation();
  const user = useSelector<any>((state) => state.user);
  const userToken = user?.user?.token;
  const [clickableLink, setClickableLink] = useState<boolean>(false);
  const [isStart, setIsStart] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [isFinish, setIsFinish] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [showProjectInfo, setShowProjectInfo] = useState(false);
  const [showFinishDialog, setShowFinishDialog] = useState(false);
  const [showDetailsDialog, setShowDetailsDialog] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);
  const [comment, setComment] = useState("");
  const [commentCheck, setCommentCheck] = useState(false);
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
    if (
      task?.status.toLowerCase() === "ready for 2nd proofreading" ||
      task?.status.toLowerCase() === "2nd proofreading in progress"
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

  const formatDetails = {
    format1: {
      h: t(
        "task.lectorCard.actions.finishConfirmation.details.format1.heading"
      ),
      p: t(
        "task.lectorCard.actions.finishConfirmation.details.format1.description"
      ),
    },
    format2: {
      h: t(
        "task.lectorCard.actions.finishConfirmation.details.format2.heading"
      ),
      p: t(
        "task.lectorCard.actions.finishConfirmation.details.format2.description"
      ),
    },
    format3: {
      h: t(
        "task.lectorCard.actions.finishConfirmation.details.format3.heading"
      ),
      p: t(
        "task.lectorCard.actions.finishConfirmation.details.format3.description"
      ),
    },
    format4: {
      h: t(
        "task.lectorCard.actions.finishConfirmation.details.format4.heading"
      ),
      p: t(
        "task.lectorCard.actions.finishConfirmation.details.format4.description"
      ),
    },
    format5: {
      h: t(
        "task.lectorCard.actions.finishConfirmation.details.format5.heading"
      ),
      p: t(
        "task.lectorCard.actions.finishConfirmation.details.format5.description"
      ),
    },
    format6: {
      h: t(
        "task.lectorCard.actions.finishConfirmation.details.format6.heading"
      ),
      p: t(
        "task.lectorCard.actions.finishConfirmation.details.format6.description"
      ),
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
        localStorage.setItem("startTaskMetaId", taskId);
      })
      .catch((err) => {
        console.error("Error task decline", err);
      });
    setIsStart(true);
    setShowDialog(false);
  };

  const startTaskId = localStorage.getItem("startTaskMetaId");
  useEffect(() => {
    if (startTaskId === task._id) {
      setShowProjectInfo(true);
    }
  }, [startTaskId]);

  const handleStart = () => {
    setShowDialog(true);
  };

  const handleFinish = () => {
    localStorage.removeItem("startTaskMetaId");
    setShowProjectInfo(false);
    setShowFinishDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
    setIsStart(true);
  };

  const closeProjectInfoDialog = () => {
    setShowProjectInfo(false);
    localStorage.removeItem("startTaskMetaId");
  };

  const closeFinishDialog = () => {
    setShowFinishDialog(false);
  };

  const confirmFinish = (taskId: string) => {
    let payload;
    if (!allChecked && comment) {
      payload = {
        taskId: taskId,
        feedback: comment,
      };
    } else if (allChecked) {
      payload = {
        taskId: taskId,
      };
    }
    let token = userToken;
    axios.defaults.headers.common["access-token"] = token;
    axios
      .post(`${import.meta.env.VITE_DB_URL}/freelancer/taskFinish`, payload)
      .then((response) => {
        getRefreshTask(true);
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

  const handleComment = (e) => {
    setComment(e.target.value);
    if (comment.length > 0) {
      setCommentCheck(true);
    }
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
          {t("task.lectorCard.actions.projectHeader.infoTab")}
        </button>
        <button
          className={`cursor-pointer px-4 py-2 rounded ${
            showInfo
              ? "bg-white dark:bg-transparent dark:text-white dark:ring-1 hover:bg-slate-100 dark:ring-white text-blue-500 ring-1 ring-blue-500 dark:hover:bg-blue-500"
              : "bg-blue-500 text-white"
          }`}
          onClick={handleShowFeedback}
        >
          {t("task.lectorCard.actions.projectHeader.feedbackTab")}
        </button>
      </div>
    );
  };

  return (
    <div className="w-full mt-3 mb-10 rounded-sm ring-1 ring-slate-200 dark:border-stroke  py-1 px-7.5 shadow-2 dark:border-strokedark  dark:bg-boxdark">
      <div className="py-2 dark:text-white text-xl font-semibold pt-6 flex flex-row">
        <h4>{task?.project?.projectId}:</h4>
        <h4 className="pl-1">{task?.project?.projectName}</h4>
      </div>
      <div className="pb-4">
        <Card task={task} clickableLink={clickableLink} />
        <div className="mt-4 flex flex-row justify-end items-end">
          {task?.status.toLowerCase() === "ready for 2nd proofreading" &&
            !isAccepted && (
              <>
                <button
                  className="mr-3 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  onClick={handleAccept}
                >
                  {t("task.lectorCard.actions.accept")}
                </button>
                <button
                  onClick={() => handleDecline(task?._id)}
                  className="mr-3 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                  {t("task.lectorCard.actions.decline")}
                </button>
              </>
            )}
          {task?.status.toLowerCase() === "ready for 2nd proofreading" &&
            isAccepted && (
              <button
                className="mx-2.5 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={handleStart}
              >
                {t("task.lectorCard.actions.start")}
              </button>
            )}
          {task?.status.toLowerCase() === "2nd proofreading in progress" && (
            <button
              className="mx-2.5 bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              onClick={handleFinish}
            >
              {t("task.lectorCard.actions.finish")}
            </button>
          )}
        </div>
      </div>
      <div
        onClick={hanldeShowAllInfo}
        className="flex justify-center items-center border-t mt-1 py-2 lg:py-4 border-slate-300 dark:border-slate-200 cursor-pointer font-medium"
      >
        <span className="text-slate-600 hover:text-slate-800 dark:text-slate-200 dark:hover:text-slate-300">
          {t("task.lectorCard.actions.showDetails")}
        </span>
      </div>
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center z-9999 bg-neutral-200 dark:bg-slate dark:bg-opacity-15 bg-opacity-60 px-4">
          <div className="bg-white dark:bg-black p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4 dark:text-white">
              {t("task.lectorCard.actions.acceptConfirmation.title")}
            </h2>
            <p>{t("task.lectorCard.actions.acceptConfirmation.message")}</p>
            <button
              className=" mr-4 mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              onClick={() => handleStartTask(task._id)}
            >
              {t("task.lectorCard.actions.acceptConfirmation.confirm")}
            </button>
            <button
              className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              onClick={closeDialog}
            >
              {t("task.lectorCard.actions.acceptConfirmation.close")}
            </button>
          </div>
        </div>
      )}
      {showProjectInfo && (
        <div className="w-auto fixed inset-0 flex items-center justify-center z-[9999] bg-neutral-200 dark:bg-slate dark:bg-opacity-15 bg-opacity-60 px-4">
          <div className="bg-white dark:bg-black p-6 rounded shadow-lg  lg:w-8/12 xl:w-8/12 2xl:w-8/12 3xl:w-6/12 max-h-[90vh] overflow-y-auto scrollbar-hide">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold  dark:text-white">
                {t("task.lectorCard.actions.projectHeader.title")}
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
                  <p className="text-red-600 font-semibold">{task.feedback}</p>
                ) : (
                  <p className="text-gray-500 italic">
                    {t(
                      "task.lectorCard.actions.projectHeader.feedbackNoFeedback"
                    )}
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
              {task?.taskName} ({task?.keywords}) {t("task.lectorCard.actions.finishConfirmation.title")}
              </h2>
              <FontAwesomeIcon
                className="cursor-pointer text-lg text-red-500"
                onClick={closeFinishDialog}
                icon={faTimes}
              />
            </div>
            <p className="dark:text-white pb-2">
              {t("task.lectorCard.actions.finishConfirmation.message")}
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

            {/* Show the Renew Required section only when not all checkboxes are checked */}
            {!allChecked && (
              <div className="py-4 px-4 bg-red-600/30 dark:bg-red-500/20">
                <label className="ml-2 dark:text-white">
                  <strong>
                    {t(
                      "task.lectorCard.actions.finishConfirmation.renewRequired.heading"
                    )}
                  </strong>
                </label>
                <div className="flex justify-center items-start py-2">
                  <FontAwesomeIcon
                    className="pl-2 pt-1 text-red-500"
                    icon={faExclamationCircle}
                  />
                  <p className="pl-3 font-base dark:text-white">
                    {t(
                      "task.lectorCard.actions.finishConfirmation.renewRequired.message"
                    )}
                  </p>
                </div>

                <p className="font-semibold pt-2 pb-2">
                  {t(
                    "task.lectorCard.actions.finishConfirmation.commentPrompt.label"
                  )}{" "}
                  <span className="text-red-600">*</span>
                </p>
                <textarea
                  value={comment}
                  onChange={handleComment}
                  placeholder={t(
                    "task.lectorCard.actions.finishConfirmation.commentPrompt.textareaPlaceholder"
                  )}
                  className="w-full h-30 py-3 px-4 outline-none focus:ring-2 text-black placeholder:text-slate-500"
                ></textarea>
              </div>
            )}

            {/* Confirm Button */}
            <div className="flex justify-center items-center">
              <button
                className={`mt-4 mr-4 font-bold py-2 px-8 rounded focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                  allChecked || comment // Make button clickable if allChecked is true or comment is not empty
                    ? "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500"
                    : "bg-bodydark dark:bg-slate-500 text-white cursor-not-allowed"
                }`}
                onClick={() => confirmFinish(task?._id)}
                disabled={!allChecked && !comment} // Disable the button if not all checked and no comment is written
              >
                {t(
                  "task.lectorCard.actions.finishConfirmation.confirmFinish.buttonText"
                )}
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
                {t("task.lectorCard.actions.projectHeader.title")}
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
                      {t(
                        "task.lectorCard.actions.projectHeader.feedbackNoFeedback"
                      )}
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

export default MetaLectorCard;
