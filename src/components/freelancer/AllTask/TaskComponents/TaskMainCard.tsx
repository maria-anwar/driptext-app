import React from "react";

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

const Card: React.FC<TaskProps> = ({ task }) => {
  return (
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
          <a href={task.googleLink} target="_blank" rel="noopener noreferrer">
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
  );
};

export default Card;
