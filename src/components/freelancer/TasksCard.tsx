import React, { useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Define the type for the task prop
interface Task {
  projectName: string;
  deadline: string;
  taskStatus: string;
  activeRole: string;
  googleLink: string;
  wordCount: string;
  labels: {
    project: string;
    deadline: string;
    taskStatus: string;
    activeRole: string;
    googleLink: string;
    wordCount: string;
  };
  isStart: boolean;
  isAccepted: boolean;
  isFinish: boolean;
}

// Define the type for the props
interface TasksCardProps {
  task: Task;
}

const TasksCard: React.FC<TasksCardProps> = ({ task }) => {
  const [isStart, setIsStart] = useState(task.isStart);
  const [isAccepted, setIsAccepted] = useState(task.isAccepted);
  const [isFinish, setIsFinish] = useState(task.isFinish);
  const [showDialog, setShowDialog] = useState(false);
  const [showProjectInfo, setShowProjectInfo] = useState(false);
  const [showFinishDialog, setShowFinishDialog] = useState(false);
  const [showDetailsDialog, setShowDetailsDialog] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    format1: false,
    format2: false,
    format3: false,
    format4: false,
    format5: false,
    format6: false,
  });

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

  const handleStart = () => {
    setShowDialog(true);
  };

  const handleFinish = () => {
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

  const confirmFinish = () => {
    setIsFinish(true);
    setShowFinishDialog(false);
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

  return (
    <div className="w-full my-10 rounded-sm ring-1 ring-slate-200 dark:border-stroke  py-1 px-7.5 shadow-2 dark:border-strokedark  dark:bg-boxdark">
      <div className="py-2 dark:text-white text-xl font-semibold">
        <h4>{task.projectName}</h4>
      </div>

      <div className="pb-4">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-7 lg:grid-rows-1">
          <div className="flex flex-col pr-3">
            <span className="text-base font-semibold text-dark-gray dark:text-slate-200 py-4">
              {task.labels.project}
            </span>
            <span>{task.projectName}</span>
          </div>
          <div className="flex flex-col pr-3">
            <span className="text-base font-medium text-dark-gray dark:text-slate-200 py-4">
              {task.labels.deadline}
            </span>
            <span className="w-fit bg-red-600 text-white px-2 text-center rounded-full">
              {task.deadline}
            </span>
          </div>
          <div className="flex flex-col pr-3">
            <span className="text-base font-medium text-dark-gray dark:text-slate-200 py-4">
              {task.labels.taskStatus}
            </span>
            <span className="text-yellow-500">{task.taskStatus}</span>
          </div>
          <div className="flex flex-col pr-3">
            <span className="text-base font-medium text-dark-gray dark:text-slate-200 py-4">
              {task.labels.activeRole}
            </span>
            <span>{task.activeRole}</span>
          </div>
          <div className="flex flex-col pr-3">
            <span className="text-base font-medium text-dark-gray dark:text-slate-200 py-4">
              {task.labels.googleLink}
            </span>
            <span className="text-sky-500">
              <a
                href={task.googleLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                doc-link
              </a>
            </span>
          </div>
          <div className="flex flex-col pr-3">
            <span className="text-base font-medium text-dark-gray dark:text-slate-200 py-4">
              {task.labels.wordCount}
            </span>
            <span className="font-medium">{task.wordCount}</span>
          </div>
        </div>
        <div className="mt-4 flex flex-row justify-end items-end">
          {!isStart && !isAccepted && (
            <>
              <button
                className="mr-3 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                onClick={handleAccept}
              >
                Accept
              </button>
              <button className="mr-3 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                Decline
              </button>
            </>
          )}
          {isAccepted && !isStart && (
            <button
              className="mx-2.5 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={handleStart}
            >
              Start
            </button>
          )}
          {isStart && !isFinish && (
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
        <div className="fixed inset-0 flex items-center justify-center z-9999 bg-neutral-200 dark:bg-slate dark:bg-opacity-15 bg-opacity-60">
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
              onClick={closeDialog}
            >
              Confirm
            </button>
            <button
              className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              onClick={() => setShowDialog(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showProjectInfo && (
        <div className="w-auto fixed inset-0 flex items-center justify-center z-[9999] bg-neutral-200 dark:bg-slate dark:bg-opacity-15 bg-opacity-60">
          <div className="bg-white dark:bg-black p-6 rounded shadow-lg lg:w-5/12 xl:w-5/12 2xl:w-5/12 3xl:w-5/12 max-h-[80vh] overflow-y-auto scrollbar-hide">
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
            <div className="flex justify-start items-center space-x-2 my-4 gap-60">
              <div>
                <button
                  className={`px-4 py-2 rounded mr-2 cursor-pointer ${
                    showFeedback
                      ? "bg-white text-blue-500 border border-blue-500 hover:bg-slate-100"
                      : "bg-blue-500 text-white"
                  }`}
                  onClick={handleShowInfo}
                >
                  Info
                </button>
                <button
                  className={`cursor-pointer px-4 py-2 rounded ${
                    showInfo
                      ? "bg-white text-blue-500 border border-blue-500 hover:bg-slate-100"
                      : "bg-blue-500 text-white"
                  }`}
                  onClick={handleShowFeedback}
                >
                  Feedback
                </button>
              </div>

              <button
                className=" bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                onClick={handleFinish}
              >
                Finish
              </button>
            </div>
            {showInfo && (
              <>
                <div className="bg-slate-100 dark:bg-boxdark rounded py-4 px-4">
                  <p className="dark:text-white font-semibold text-lg">Task</p>
                  <p className="dark:text-white">
                    Project Name: {task.projectName}
                  </p>
                  <p className="dark:text-white">
                    Google Link:{" "}
                    <a
                      href={task.googleLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      doc-link
                    </a>
                  </p>
                  <p className="dark:text-white">
                    Task Status: {task.taskStatus}
                  </p>
                  <p className="dark:text-white">Deadline: {task.deadline}</p>

                  <p className="dark:text-white">
                    Active Role: {task.activeRole}
                  </p>

                  <p className="dark:text-white">
                    Word Count: {task.wordCount}
                  </p>
                </div>
                <div className="bg-slate-100 dark:bg-boxdark rounded py-4 px-4 mt-6">
                  <p className="dark:text-white font-semibold text-lg">
                    Project
                  </p>
                  <p className="dark:text-white">
                    1. Allgemeine informationen:
                  </p>
                  <div className="px-2">
                    <p className="dark:text-white">Address of Speech</p>
                    <p className="dark:text-white bg-white dark:bg-meta-4 py-2 px-4 mb-2 rounded">
                      various
                    </p>
                    <p className="dark:text-white">Perspective:</p>
                    <p className="dark:text-white bg-white dark:bg-meta-4 py-2 px-4 mb-2 rounded">
                      me
                    </p>
                    <p className="dark:text-white">Website:</p>
                    <p className="dark:text-white bg-white dark:bg-meta-4 py-2 px-4 mb-2 rounded">
                      various
                    </p>
                  </div>
                </div>
              </>
            )}
            {showFeedback && <div>Feedback</div>}
          </div>
        </div>
      )}
      {showFinishDialog && (
        <div className="fixed inset-0 flex items-center justify-center z-9999 bg-neutral-200 dark:bg-slate dark:bg-opacity-15 bg-opacity-60 px-4">
          <div className="bg-white dark:bg-black p-6 rounded shadow-lg">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold  dark:text-white">
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
              <div key={key} className="mb-2">
                <input
                  type="checkbox"
                  id={key}
                  name={key}
                  checked={checkboxes[key as keyof typeof checkboxes]}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={key} className="ml-2 dark:text-white">
                  <strong>{h}</strong>
                </label>
                <p className="pl-5">{p}</p>
              </div>
            ))}
            <div className="py-4 px-4 bg-slate-200 dark:bg-slate-700">
              <input
                type="checkbox"
                id={"wordlimit"}
                name={"kewordlimity"}
                checked={false}
              />
              <label className="ml-2 dark:text-white">
                <strong>Minimum Word Count</strong>
              </label>
              <p className="pl-5">
                Ensure that the text meets or exceeds the required minimum word
                count.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button
                className={`mt-4 mr-4 font-bold py-2 px-8 rounded focus:outline-none focus:ring-2 focus:ring-opacity-50  ${
                  allChecked
                    ? "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500"
                    : "bg-bodydark dark:bg-slate-500 text-white cursor-not-allowed"
                }`}
                onClick={confirmFinish}
                disabled={!allChecked}
              >
                Confirm Finish
              </button>
            </div>
          </div>
        </div>
      )}

      {showDetailsDialog && (
        <div className="w-auto fixed inset-0 flex items-center justify-center z-[9999] bg-neutral-200 dark:bg-slate dark:bg-opacity-15 bg-opacity-60">
          <div className="bg-white dark:bg-black p-6 rounded shadow-lg lg:w-5/12 xl:w-5/12 2xl:w-5/12 3xl:w-5/12 max-h-[80vh] overflow-y-auto scrollbar-hide">
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
            <div className="flex justify-start items-center space-x-2 my-4">
              <button
                className={`px-4 py-2 rounded mr-2 cursor-pointer ${
                  showFeedback
                    ? "bg-white text-blue-500 border border-blue-500 hover:bg-slate-100"
                    : "bg-blue-500 text-white"
                }`}
                onClick={handleShowInfo}
              >
                Info
              </button>
              <button
                className={`cursor-pointer px-4 py-2 rounded ${
                  showInfo
                    ? "bg-white text-blue-500 border border-blue-500 hover:bg-slate-100"
                    : "bg-blue-500 text-white"
                }`}
                onClick={handleShowFeedback}
              >
                Feedback
              </button>
            </div>
            <div className="space-y-4">
              {showInfo && (
                <>
                  <div className="bg-slate-100 dark:bg-boxdark rounded py-4 px-4">
                    <p className="dark:text-white font-semibold text-lg">
                      Task
                    </p>
                    <p className="dark:text-white">
                      Project Name: {task.projectName}
                    </p>
                    <p className="dark:text-white">
                      Google Link:{" "}
                      <a
                        href={task.googleLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                      >
                        doc-link
                      </a>
                    </p>
                    <p className="dark:text-white">
                      Task Status: {task.taskStatus}
                    </p>
                    <p className="dark:text-white">Deadline: {task.deadline}</p>
                    <p className="dark:text-white">
                      Active Role: {task.activeRole}
                    </p>
                    <p className="dark:text-white">
                      Word Count: {task.wordCount}
                    </p>
                  </div>
                  <div className="bg-slate-100 dark:bg-boxdark rounded py-4 px-4 mt-6">
                    <p className="dark:text-white font-semibold text-lg">
                      Project
                    </p>
                    <p className="dark:text-white">
                      1. Allgemeine informationen:
                    </p>
                    <div className="px-2">
                      <p className="dark:text-white">Address of Speech</p>
                      <p className="dark:text-white bg-white dark:bg-meta-4 py-2 px-4 mb-2 rounded">
                        various
                      </p>
                      <p className="dark:text-white">Perspective:</p>
                      <p className="dark:text-white bg-white dark:bg-meta-4 py-2 px-4 mb-2 rounded">
                        me
                      </p>
                      <p className="dark:text-white">Website:</p>
                      <p className="dark:text-white bg-white dark:bg-meta-4 py-2 px-4 mb-2 rounded">
                        various
                      </p>
                    </div>
                  </div>
                </>
              )}
              {showFeedback && <div>Feedback</div>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TasksCard;