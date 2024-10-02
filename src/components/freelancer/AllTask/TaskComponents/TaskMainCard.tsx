import React from "react";
import moment from "moment";
import { Task } from "../../Type/types";

interface TaskProps {
  task: Task;
  Upcomming?: boolean;
}

const Card: React.FC<TaskProps> = ({ task, Upcomming }) => {
  const formatDate = (date: string, format: string = "MMM  YYYY") => {
    return moment(date).format(format);
  };
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1">
      <div className="flex flex-col pr-3">
        <span className="text-base font-semibold text-dark-gray dark:text-slate-200 py-4 uppercase">
          Projects
        </span>
        <span>{task?.taskName}</span>
      </div>
      <div className="flex flex-col pr-3">
        <span className="text-base font-medium text-dark-gray dark:text-slate-200 py-4 uppercase">
          Deadline
        </span>
        <span className="w-fit bg-red-600 text-white px-3 text-center rounded-full">
          {formatDate(task?.dueDate) ?? "no set"}
        </span>
      </div>
      <div className="flex flex-col pr-3">
        <span className="text-base font-medium text-dark-gray dark:text-slate-200 py-4 uppercase">
          status
        </span>
        <span className="text-yellow-500">{task?.status}</span>
      </div>
      <div className="flex flex-col pr-3">
        <span className="text-base font-medium text-dark-gray dark:text-slate-200 py-4 uppercase">
          active role
        </span>
        <span>{"task.activeRole"}</span>
      </div>
      <div className="flex flex-col pr-3">
        <span className="text-base font-medium text-dark-gray dark:text-slate-200 py-4 uppercase">
          google-link
        </span>
        <span className="text-sky-500">
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
        </span>
      </div>
      <div className="flex flex-col pr-3">
        <span className="text-base font-medium text-dark-gray dark:text-slate-200 py-4 uppercase">
          wordcount
        </span>
        <span className="font-medium">{task?.desiredNumberOfWords}</span>
      </div>
    </div>
  );
};

export default Card;
