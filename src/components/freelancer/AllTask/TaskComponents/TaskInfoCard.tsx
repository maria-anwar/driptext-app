import React, { useState } from "react";
import { Task } from "../../Type/types";
import AccordionData from "./AccordionData";
import { useTranslation } from "react-i18next";
import moment from "moment";

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
  const {t} = useTranslation();
  const project = task?.project;
  getWordCount();
  const [actualNumber, setActualNumber] = useState<string>(task?.actualNumberOfWords)

  const formatDate = (date: string, format: string = "DD.MM.YYYY") => {
    if (!date) return "";
    return moment(date).format(format);
  };

  return (
    <>
      <div className="bg-slate-200 dark:bg-boxdark rounded py-4 px-4">
        <p className="dark:text-white font-semibold text-lg">Details zu {task?.taskName}({task?.keywords})</p>
        <p className="dark:text-white">
        {t('task.taskModel.taskModellabels.taskId')}:{" "}
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
          {task?.taskName}
          </a>
        </p>
        <p className="dark:text-white">
        {t('task.taskModel.taskModellabels.deadline')}:{" "}
          <span
            className={`w-fit 
      ${
        new Date(task?.dueDate).setHours(0, 0, 0, 0) >=
        new Date().setHours(0, 0, 0, 0)
          ? "bg-green-600"
          : "bg-red-600"
      }
      text-white px-3 text-center rounded-full`}
          >
            {formatDate(task?.dueDate) ?? "no set"}
          </span>
        </p>
        <p className="dark:text-white">
        {t('task.taskModel.taskModellabels.taskStatus')}:{" "}
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
        </p>
        <p className="dark:text-white">
        {t('task.taskModel.taskModellabels.activeRole')}:{" "}
          {task?.status.toUpperCase() === "FINAL"
            ? t('task.buttons.none')
            :task.status.toUpperCase() === "FREE TRIAL" ||
            task.status.toUpperCase() === "READY TO WORK" ||
            task.status.toUpperCase() === "IN PROGRESS" ||
            task.status.toUpperCase() === "READY FOR RIVISION (LECTOR)" ||
            task.status.toUpperCase() === "READY FOR RIVISION (META LECTOR)" ||
            task.status.toUpperCase() === "IN RIVISION (LECTOR)" ||
            task.status.toUpperCase() === "IN RIVISION (META LECTOR)"
            ? t('task.buttons.texter')
            : task.status.toUpperCase() === "READY FOR PROOFREADING" ||
              task.status.toUpperCase() === "PROOFREADING IN PROGRESS"
            ? t('task.buttons.lector')
            : task.status.toUpperCase() === "READY FOR SEO OPTIMIZATION" ||
              task.status.toUpperCase() === "SEO OPTIMIZATION IN PROGRESS"
            ? t('task.buttons.seo')
            : task.status.toUpperCase() === "READY FOR 2ND PROOFREADING" ||
              task.status.toUpperCase() === "2ND PROOFREADING IN PROGRESS"
            ? t('task.buttons.metaLector')
            : t('task.buttons.none')}
        </p>
        <p className="dark:text-white">{t('task.taskModel.taskModellabels.yourRole')}: {task?.activeRole}</p>
        <p className="dark:text-white">
        {t('task.taskModel.taskModellabels.wordCount')}: {Number(actualNumber) ===1? 0 :task?.actualNumberOfWords}/{task?.desiredNumberOfWords}

        </p>
        {task?.comments?.trim() ? (
          <p className="dark:text-white">{t('task.taskModel.taskModellabels.comment')}: {task?.comments}</p>
        ) : null}
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
