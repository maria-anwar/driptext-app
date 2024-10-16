import React from "react";
import moment from "moment";
import { Task } from "../../Type/types";

interface TaskProps {
  task: Task;
  Upcomming?: boolean;
  clickableLink: boolean;
}

const Card: React.FC<TaskProps> = ({ task, Upcomming, clickableLink }) => {
  const formatDate = (date: string, format: string = "MMM  YYYY") => {
    return moment(date).format(format);
  };
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1">
      <div className="flex flex-col pr-3">
        <span className="text-base font-semibold text-dark-gray dark:text-slate-200 py-4 uppercase">
          Task
        </span>
        <span>{task?.taskName}</span>
      </div>
      <div className="flex flex-col pr-3">
        <span className="text-base font-medium text-dark-gray dark:text-slate-200 py-4 uppercase">
          Deadline
        </span>
        <span
    className={`w-fit 
      ${new Date(task?.dueDate) < new Date() ? 'bg-red-600' : 'bg-green-600'} 
      text-white px-3 text-center rounded-full`}
  >
    {formatDate(task?.dueDate) ?? "no set"}
  </span>
      </div>
      <div className="flex flex-col pr-3">
        <span className="text-base font-medium text-dark-gray dark:text-slate-200 py-4 uppercase">
          status
        </span>
        <span
          className={` rounded-full text-left   ${
            task?.status.toUpperCase() === "FINAL"
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
              : task.status.toUpperCase() === "READY FOR 2ND PROOFREADING"
              ? " text-violet-500" // New color for "READY FOR 2ND PROOFREADING"
              : task.status.toUpperCase() === "2ND PROOFREADING IN PROGRESS"
              ? " text-lime-700" // Different color for "2ND PROOFREADING IN PROGRESS"
              : " text-red-500"
          }`}
        >
          {task?.status}
        </span>
      </div>
      <div className="flex flex-col pr-3">
        <span className="text-base font-medium text-dark-gray dark:text-slate-200 py-4 uppercase">
          active role
        </span>
        <span className="uppercase">{task?.activeRole}</span>
      </div>
      <div className="flex flex-col pr-3">
        <span className="text-base font-medium text-dark-gray dark:text-slate-200 py-4 uppercase">
          google-link
        </span>
        <span className="text-sky-500">
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
                e.preventDefault();
              }
            }}
          >
            doc-link
          </a>
        </span>
      </div>
      <div className="flex flex-col pr-3">
        <span className="text-base font-medium text-dark-gray dark:text-slate-200 py-4 uppercase">
          wordcount
        </span>
        <span className="font-medium">
          {task?.actualNumberOfWords}/{task?.desiredNumberOfWords}
        </span>
      </div>
    </div>
  );
};

export default Card;
