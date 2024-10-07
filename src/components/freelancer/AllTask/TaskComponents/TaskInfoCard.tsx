import React, { useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Task } from "../../Type/types";
import { formatDate } from "../../Helper/formatDate";
import AccordionData from "./AccordionData";

interface TaskProps {
  task: Task;
  Upcomming?: boolean;
  getWordCount: () => void;
  clickableLink: boolean;
}

const TaskInfoCard: React.FC<TaskProps> = ({
  task,
  Upcomming,
  getWordCount,
  clickableLink,
}) => {
  const project = task?.project;
  getWordCount();
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
        <p className="dark:text-white">
          Task Status:{" "}
          <span
            className={` text-left  rounded-full  ${
              task.status.toUpperCase() === "FINAL"
                ? " text-green-500"
                : task.status.toUpperCase() === "FREE TRIAL"
                ? " text-yellow-500"
                : task.status.toUpperCase() === "READY TO WORK"
                ? " text-yellow-500"
                : task.status.toUpperCase() === "IN PROGRESS"
                ? " text-blue-500"
                : task.status.toUpperCase() === "READY FOR PROOFREADING"
                ? " text-orange-500"
                : task.status.toUpperCase() === "PROOFREADING IN PROGRESS"
                ? " text-purple-500"
                : task.status.toUpperCase() === "READY FOR SEO OPTIMIZATION"
                ? " text-indigo-500"
                : task.status.toUpperCase() === "SEO OPTIMIZATION IN PROGRESS"
                ? " text-pink-500"
                : " text-violet-500"
            }`}
          >
            {task?.status}
          </span>
        </p>
        <p className="dark:text-white">Active Role: {task?.activeRole}</p>
        <p className="dark:text-white">
          Google Link:{" "}
          <a
            href={!Upcomming && clickableLink ? task?.fileLink : "#"}
            target={!Upcomming && clickableLink ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-disabled={Upcomming || !clickableLink}
            className={`${
              !Upcomming && clickableLink
                ? "text-blue-500"
                : "cursor-not-allowed text-gray-500"
            }`}
            onClick={(e) => {
              if (Upcomming || !clickableLink) {
                e.preventDefault(); // Prevent click if Upcomming is true or clickableLink is false
              }
            }}
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
