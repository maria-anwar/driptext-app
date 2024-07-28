import React, { useState } from "react";

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
  const [checkboxes, setCheckboxes] = useState({
    format1: false,
    format2: false,
    format3: false,
    format4: false,
    format5: false,
    format6: false,
  });

  const formatDetails = {
    format1: "Care and accuracy",
    format2: "Content specification",
    format3: "Formal requirements",
    format4: "Structural guidelines",
    format5: "Text bloat and duplication",
    format6: "Text is error-free",
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

  const allChecked = Object.values(checkboxes).every(Boolean);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxes({
      ...checkboxes,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <div className="w-full my-5 rounded-sm border border-stroke bg-white py-1 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-2 text-white text-xl font-semibold">
        <h4>{task.projectName}</h4>
      </div>

      <div className="pb-4">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-7 lg:grid-rows-1">
          <div className="flex flex-col pr-3">
            <span className="text-base font-medium text-slate-200">{task.labels.project}</span>
            <span>{task.projectName}</span>
          </div>
          <div className="flex flex-col pr-3">
            <span className="text-base font-medium text-slate-200">{task.labels.deadline}</span>
            <span className="w-fit bg-red-600 text-white px-2 text-center rounded-full">{task.deadline}</span>
          </div>
          <div className="flex flex-col pr-3">
            <span className="text-base font-medium text-slate-200">{task.labels.taskStatus}</span>
            <span className="text-yellow-500">{task.taskStatus}</span>
          </div>
          <div className="flex flex-col pr-3">
            <span className="text-base font-medium text-slate-200">{task.labels.activeRole}</span>
            <span className="font-medium">{task.activeRole}</span>
          </div>
          <div className="flex flex-col pr-3">
            <span className="text-base font-medium text-slate-200">{task.labels.googleLink}</span>
            <span className="text-sky-500">
              <a href={task.googleLink} target="_blank" rel="noopener noreferrer">
                doc-link
              </a>
            </span>
          </div>
          <div className="flex flex-col pr-3">
            <span className="text-base font-medium text-slate-200">{task.labels.wordCount}</span>
            <span className="font-medium">{task.wordCount}</span>
          </div>
        </div>
        <div className="mt-4">
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
        onClick={() => alert("show more details")}
        className="flex justify-center items-center border-t py-2 text-white cursor-pointer font-medium"
      >
        <span>Show more details</span>
      </div>
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
          <div className="bg-black p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-white">Accept order</h2>
            <p>
              You are about to accept the order after which you have 24 hours to complete it, are you sure?
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
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
          <div className="bg-black p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-white">Project Information</h2>
            <p className="text-white">Project Name: {task.projectName}</p>
            <p className="text-white">Deadline: {task.deadline}</p>
            <p className="text-white">Task Status: {task.taskStatus}</p>
            <p className="text-white">Active Role: {task.activeRole}</p>
            <p className="text-white">
              Google Link:{" "}
              <a href={task.googleLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                doc-link
              </a>
            </p>
            <p className="text-white">Word Count: {task.wordCount}</p>
            <button
              className=" mr-4 mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              onClick={handleFinish}
            >
              Finish
            </button>
            <button
              className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              onClick={closeProjectInfoDialog}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showFinishDialog && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
          <div className="bg-black p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-white">Check Formats</h2>
            {Object.entries(formatDetails).map(([format, detail]) => (
              <div key={format} className="flex items-center mb-2 text-white">
                <input
                  type="checkbox"
                  id={format}
                  name={format}
                  checked={checkboxes[format]}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor={format}>
                  <strong>{format}</strong>: {detail}
                </label>
              </div>
            ))}
            <button
              className={`mt-4 mr-4 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-opacity-50  ${allChecked ? "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500" : "bg-slate-500 text-white cursor-not-allowed"
                }`}
              onClick={confirmFinish}
              disabled={!allChecked}
            >
              Finish
            </button>
            <button
              className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              onClick={closeFinishDialog}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TasksCard;
