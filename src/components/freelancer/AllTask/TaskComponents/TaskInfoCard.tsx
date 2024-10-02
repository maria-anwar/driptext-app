import React, { useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Task } from "../../Type/types";
import { formatDate } from "../../Helper/formatDate";
import AccordionData from "./AccordionData";

interface TaskProps {
  task: Task;
  Upcomming?: boolean;
}

const TaskInfoCard: React.FC<TaskProps> = ({ task, Upcomming  }) => {
  const project = task?.project;
  return (
    <>
      <div className="bg-slate-200 dark:bg-boxdark rounded py-4 px-4">
        <p className="dark:text-white font-semibold text-lg">Task</p>
        <p className="dark:text-white">Project Name: {task?.taskName}</p>
        <p className="dark:text-white">
          Deadline:{" "}
          <span className="w-fit bg-red-600 text-white rounded-full px-3">
            {formatDate(task?.dueDate)}
          </span>
        </p>
        <p className="dark:text-white">Task Status: {task?.status}</p>
        <p className="dark:text-white">Active Role: {task?.activeRole}</p>
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
          Word Count: {task?.actualNumberOfWords}/{task?.desiredNumberOfWords}
        </p>
      </div>

      <AccordionData
        speech={project?.speech}
        perspective={project?.prespective}
        projectName={project?.projectName}
        onBoarding={project?.onBoardingInfo}
      />
    </>
  );
};

export default TaskInfoCard;
