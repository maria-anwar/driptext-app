import React, { useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

interface TaskProps {
  task: Task;
}

const TaskInfoCard: React.FC<TaskProps> = ({ task }) => {
  return (
    <>
      <div className="bg-slate-100 dark:bg-boxdark rounded py-4 px-4">
        <p className="dark:text-white font-semibold text-lg">Task</p>
        <p className="dark:text-white">Project Name: {task.projectName}</p>
        <p className="dark:text-white">
          Deadline:{" "}
          <span className="w-fit bg-red-600 rounded-full px-3">
            {task.deadline}
          </span>
        </p>
        <p className="dark:text-white">Task Status: {task.taskStatus}</p>
        <p className="dark:text-white">Active Role: {task.activeRole}</p>
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
        <p className="dark:text-white">Word Count: {task.wordCount}</p>
      </div>
      <div className="bg-slate-100 dark:bg-boxdark rounded py-4 px-4 mt-6">
        <p className="dark:text-white font-semibold text-lg">Project</p>
        <p className="dark:text-white pt-2">1. General information:</p>
        <div className="px-2">
          <p className="dark:text-white">Address of Speech</p>
          <p className="dark:text-white bg-white dark:bg-meta-4 py-2 px-4 mb-2 rounded">
            various
          </p>
          <p className="dark:text-white">Perspective</p>
          <p className="dark:text-white bg-white dark:bg-meta-4 py-2 px-4 mb-2 rounded">
            me
          </p>
          <p className="dark:text-white">Website</p>
          <p className="dark:text-white bg-white dark:bg-meta-4 py-2 px-4 mb-2 rounded">
            various
          </p>
        </div>
        <p className="dark:text-white pt-2">
          2. Information about the Company:
        </p>
        <div className="px-2">
          <p className="dark:text-white">Company Background</p>
          <p className="dark:text-white bg-white dark:bg-meta-4 py-2 px-4 mb-2 rounded">
            various
          </p>
          <p className="dark:text-white">Company Attributes</p>
          <p className="dark:text-white bg-white dark:bg-meta-4 py-2 px-4 mb-2 rounded">
            me
          </p>
          <p className="dark:text-white">Company Services</p>
          <p className="dark:text-white bg-white dark:bg-meta-4 py-2 px-4 mb-2 rounded">
            various
          </p>
        </div>
        <p className="dark:text-white pt-2">
          3. Information about the target customers:
        </p>
        <div className="px-2">
          <p className="dark:text-white">Target Audience</p>
          <p className="dark:text-white bg-white dark:bg-meta-4 py-2 px-4 mb-2 rounded">
            various
          </p>
          <p className="dark:text-white">Customer Interests</p>
          <p className="dark:text-white bg-white dark:bg-meta-4 py-2 px-4 mb-2 rounded">
            me
          </p>
        </div>
        <p className="dark:text-white pt-2">4. Aim of content:</p>
        <div className="px-2">
          <p className="dark:text-white">Content Goal</p>
          <p className="dark:text-white bg-white dark:bg-meta-4 py-2 px-4 mb-2 rounded">
            various
          </p>
          <p className="dark:text-white">Brand Content Information</p>
          <p className="dark:text-white bg-white dark:bg-meta-4 py-2 px-4 mb-2 rounded">
            me
          </p>
        </div>
      </div>
    </>
  );
};

export default TaskInfoCard;
