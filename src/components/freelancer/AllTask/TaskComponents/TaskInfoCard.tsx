import React, { useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Task } from "../../Type/types";
import { formatDate } from "../../Helper/formatDate";

interface TaskProps {
  task: Task;
  Upcomming?: boolean;
}

const TaskInfoCard: React.FC<TaskProps> = ({ task, Upcomming }) => {
  return (
    <>
      <div className="bg-slate-100 dark:bg-boxdark rounded py-4 px-4">
        <p className="dark:text-white font-semibold text-lg">Task</p>
        <p className="dark:text-white">Project Name: {task?.taskName}</p>
        <p className="dark:text-white">
          Deadline:{" "}
          <span className="w-fit bg-red-600 rounded-full px-3">
            {formatDate(task?.dueDate)}
          </span>
        </p>
        <p className="dark:text-white">Task Status: {task.status}</p>
        <p className="dark:text-white">Active Role: {"task.activeRole"}</p>
        <p className="dark:text-white">
          Google Link:{" "}
          <a
            href={!Upcomming ? task?.fileLink : "#"}
            target={!Upcomming ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-disabled={Upcomming}
            className={`${
              Upcomming ? "cursor-not-allowed text-gray-500" : "text-blue-500"
            }`}
            onClick={(e) => Upcomming && e.preventDefault()}
          >
            doc-link
          </a>
        </p>
        <p className="dark:text-white">
          Word Count: {task?.desiredNumberOfWords}
        </p>
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
