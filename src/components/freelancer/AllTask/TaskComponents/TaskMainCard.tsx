import React, { useState, useEffect } from "react";
import { Task } from "../../Type/types";
import moment from "moment";
import { useTranslation } from "react-i18next";

interface TaskProps {
  task: Task;
  Upcomming?: boolean;
  clickableLink: boolean;
}

const Card: React.FC<TaskProps> = ({ task, Upcomming, clickableLink }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const formatDate = (date: string, format: string = "DD.MM.YYYY") => {
    if (!date) return "";
    return moment(date).format(format);
  };

  // Initialize state for actual number of words
  const [actualNumber, setActualNumber] = useState<string>(task?.actualNumberOfWords || "0");

  // Update actualNumber whenever task changes
  useEffect(() => {
    if (task?.actualNumberOfWords !== actualNumber) {
      setActualNumber(task?.actualNumberOfWords || "0");
    }
  }, [task]);

  const statusMap: { [key: string]: string } = {
    "ready to work": "Bereit zu starten",
    "in progress": "In Bearbeitung",
    "ready for rivision (lector)": "Bereit für Revision (Lektor)",
    "in rivision (lector)": "In Revision (Lektor)",
    "ready for rivision (meta lector)": "Bereit für Revision (Meta-Lektor)",
    "in rivision (meta lector)": "In Revision (Meta-Lektor)",
    "ready for proofreading": "Wird lektoriert",
    "proofreading in progress": "Im Lektorat",
    "ready for seo optimization": "Bereit für SEO-Optimierung",
    "seo optimization in progress": "Wird SEO-optimiert",
    "ready for 2nd proofreading": "Im Meta-Lektorat",
    "2nd proofreading in progress": "Im Meta-Lektorat",
    "free trial": "Kostenlose Testversion",
    "final": "Texterstellung abgeschlossen"
  };

  const handleStatusGerman = (statusFilter: string): string => {
    return currentLanguage === "de" && statusMap[statusFilter] ? statusMap[statusFilter] : statusFilter;
  };

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 2xl:grid-cols-3 3xl:grid-cols-6 3xl:grid-rows-1">
      {/* Task Name */}
      <div className="flex flex-col pr-3">
        <span className="text-base font-semibold text-dark-gray dark:text-slate-200 py-2 capitalize">
          {t("task.cardLabels.task")}
        </span>
        <span className="text-sky-500">
          <a
            href={!Upcomming && clickableLink ? task?.fileLink : "#"}
            target={!Upcomming && clickableLink ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-disabled={Upcomming || !clickableLink}
            className={`${
              !Upcomming && clickableLink ? "text-blue-500" : "cursor-not-allowed text-gray-500"
            }`}
            onClick={(e) => {
              if (Upcomming || !clickableLink) {
                e.preventDefault();
              }
            }}
          >
            {task?.taskName}
          </a>
        </span>
      </div>

      {/* Deadline */}
      <div className="flex flex-col pr-3">
        <span className="text-base font-medium text-dark-gray dark:text-slate-200 py-2 capitalize">
          {t("task.cardLabels.deadline")}
        </span>
        <span
          className={`w-fit ${new Date(task?.dueDate).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0)
            ? "bg-green-600"
            : "bg-red-600"} text-white px-3 text-center rounded-full`}
        >
          {formatDate(task?.dueDate) ?? "no set"}
        </span>
      </div>

      {/* Status */}
      <div className="flex flex-col pr-3">
        <span className="text-base font-medium text-dark-gray dark:text-slate-200 py-2 capitalize">
          {t("task.cardLabels.status")}
        </span>
        <span
          className={`rounded-full text-left capitalize ${task?.status.toUpperCase() === "FINAL"
            ? "text-green-500"
            : task.status.toUpperCase() === "FREE TRIAL"
              ? "text-yellow-500"
              : task.status.toUpperCase() === "READY TO WORK"
                ? "text-yellow-500"
                : task.status.toUpperCase() === "IN PROGRESS"
                  ? "text-blue-500"
                  : task.status.toUpperCase() === "READY FOR PROOFREADING"
                    ? "text-orange-500"
                    : task.status.toUpperCase() === "PROOFREADING IN PROGRESS"
                      ? "text-purple-500"
                      : task.status.toUpperCase() === "READY FOR SEO OPTIMIZATION"
                        ? "text-indigo-500"
                        : task.status.toUpperCase() === "SEO OPTIMIZATION IN PROGRESS"
                          ? "text-pink-500"
                          : task.status.toUpperCase() === "READY FOR 2ND PROOFREADING"
                            ? "text-violet-500"
                            : task.status.toUpperCase() === "2ND PROOFREADING IN PROGRESS"
                              ? "text-lime-700"
                              : "text-red-500"
            }`}
        >
          {handleStatusGerman(task?.status.toLowerCase())}
        </span>
      </div>

      {/* Active Role */}
      <div className="flex flex-col pr-3">
        <span className="text-base font-medium text-dark-gray dark:text-slate-200 py-2 capitalize">
          {t("task.cardLabels.activeRole")}
        </span>
        <span className="capitalize">
          {task?.status.toUpperCase() === "FINAL"
            ? t("task.buttons.none")
            : task.status.toUpperCase() === "FREE TRIAL" ||
              task.status.toUpperCase() === "READY TO WORK" ||
              task.status.toUpperCase() === "IN PROGRESS" ||
              task.status.toUpperCase() === "READY FOR RIVISION (LECTOR)" ||
              task.status.toUpperCase() === "READY FOR RIVISION (META LECTOR)" ||
              task.status.toUpperCase() === "IN RIVISION (LECTOR)" ||
              task.status.toUpperCase() === "IN RIVISION (META LECTOR)"
            ? t("task.buttons.texter")
            : task.status.toUpperCase() === "READY FOR PROOFREADING" ||
              task.status.toUpperCase() === "PROOFREADING IN PROGRESS"
            ? t("task.buttons.lector")
            : task.status.toUpperCase() === "READY FOR SEO OPTIMIZATION" ||
              task.status.toUpperCase() === "SEO OPTIMIZATION IN PROGRESS"
            ? t("task.buttons.seo")
            : task.status.toUpperCase() === "READY FOR 2ND PROOFREADING" ||
              task.status.toUpperCase() === "2ND PROOFREADING IN PROGRESS"
            ? t("task.buttons.metaLector")
            : t("task.buttons.none")}
        </span>
      </div>

      {/* Your Role */}
      <div className="flex flex-col pr-3">
        <span className="text-base font-medium text-dark-gray dark:text-slate-200 py-2 capitalize">
          {t("task.cardLabels.yourRole")}
        </span>
        <span className="capitalize">{task?.activeRole}</span>
      </div>

      {/* Word Count */}
      <div className="flex flex-col pr-3">
        <span className="text-base font-medium text-dark-gray dark:text-slate-200 py-2 capitalize">
          {t("task.cardLabels.wordCount")}
        </span>
        <span className="font-medium">
          {Number(actualNumber) === 1 ? 0 : actualNumber}/{task?.desiredNumberOfWords}
        </span>
      </div>
    </div>
  );
};

export default Card;
