import React, { useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TaskInfoCard from "./TaskComponents/TaskInfoCard";
import Card from "./TaskComponents/TaskMainCard";
import CheckboxThree from "../../client/buttons/CheckboxThree";

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
interface LectorCardProps {
  task: Task;
}

const LectorCard: React.FC<LectorCardProps> = ({ task }) => {
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

  const Checkbox1 = ({ isChecked }) => (
    <div className="relative">
      <input type="checkbox" id="checkboxLabelThree" className="sr-only" checked={isChecked} readOnly />
      <div
        className={`box mr-4 flex h-4 w-4 items-center justify-center rounded border
        border-red-400 bg-gray-100 dark:bg-transparent`}
      >
        <span className={`text-red-500 !opacity-100`}>
          <svg
            className="h-3.5 w-3.5 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
  
  const Checkbox2 = ({ isChecked }) => (
    <div className="relative">
      <input type="checkbox" id="checkboxLabelTwo" className="sr-only" checked={isChecked} readOnly />
      <div
        className={`mr-4 flex h-4 w-4 items-center justify-center rounded border border-green-600 bg-gray-100 dark:bg-transparent`}
      >
        <span className={`text-green-600 !opacity-100`}>
          <svg
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
              fill="#219653"
              stroke="#219653"
              strokeWidth="0.4"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
  

  const CustomCheckbox = ({ isChecked }) => {
    return isChecked ? <Checkbox2 isChecked={isChecked} /> : <Checkbox1 isChecked={isChecked} />;
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
    <div className="w-full my-10 rounded-sm ring-1 ring-slate-200 dark:border-stroke  py-1 px-7.5 shadow-2 dark:border-strokedark  dark:bg-boxdark">
      <div className="py-2 dark:text-white text-xl font-semibold">
        <h4>{task.projectName}</h4>
      </div>
      <div className="pb-4">
        <Card task={task} />
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
        <div className="w-auto fixed inset-0 flex items-center justify-center z-[9999] bg-neutral-200 dark:bg-slate dark:bg-opacity-15 bg-opacity-60 px-4 pt-8">
          <div className="bg-white dark:bg-black p-6 rounded shadow-lg lg:w-5/12 xl:w-5/12 2xl:w-5/12 3xl:w-5/12 max-h-[90vh] overflow-y-auto scrollbar-hide">
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
              <button
                className=" bg-green-500 text-white font-bold py-2 px-4 -mt-3 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                onClick={handleFinish}
              >
                Finish
              </button>
            </div>
            {showInfo && <TaskInfoCard task={task} />}
            {showFeedback && <div>Feedback</div>}
          </div>
        </div>
      )}
      {showFinishDialog && (
        <div className="w-auto fixed inset-0 flex items-center justify-center z-[9999] bg-neutral-200 dark:bg-slate dark:bg-opacity-15 bg-opacity-60 px-4 pt-6">
          <div className="bg-white dark:bg-black p-6 rounded shadow-lg lg:w-5/12 xl:w-5/12 2xl:w-5/12 3xl:w-5/12 max-h-[90vh] overflow-y-auto scrollbar-hide">
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
        <div key={key} className="mb-2 flex">
          <div className="pt-1" onClick={() => handleCheckboxChange({ target: { name: key, checked: !checkboxes[key] } })}>
            <CustomCheckbox isChecked={checkboxes[key as keyof typeof checkboxes]} />
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
              {/* <input
                type="checkbox"
                id={"wordlimit"}
                name={"kewordlimity"}
                checked={false}
              /> */}
              <div className="flex items-center">

              <CheckboxThree/>
              <label className=" dark:text-white">
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
        <div className="w-auto fixed inset-0 flex items-center justify-center z-[9999] bg-neutral-200 dark:bg-slate dark:bg-opacity-15 bg-opacity-60 px-4">
          <div className="bg-white dark:bg-black p-6 rounded shadow-lg lg:w-5/12 xl:w-5/12 2xl:w-5/12 3xl:w-5/12 max-h-[90vh] overflow-y-auto scrollbar-hide">
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
              {showInfo && <TaskInfoCard task={task} />}
              {showFeedback && <div>Feedback</div>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LectorCard;
