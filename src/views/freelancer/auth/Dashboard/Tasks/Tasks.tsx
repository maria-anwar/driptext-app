import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllTasks from "./AllTask";
import TexterTasks from "./TexterTask";
import LectorTasks from "./LectorTask";
import SeoTasks from "./SeoTask";

const Tasks: React.FC = () => {
  const taskDataArray = [
    {
      projectName: "Marketing Campaign",
      deadline: "2 months ago",
      taskStatus: "Ready to start",
      activeRole: "TEXTER",
      googleLink: "campaign-63",
      wordCount: "0/1500",
      labels: {
        project: "PROJECTS",
        deadline: "DEADLINE",
        taskStatus: "TASK STATUS",
        activeRole: "ACTIVE ROLE",
        googleLink: "GOOGLE-LINK",
        wordCount: "WORDCOUNT",
      }
    },
    {
      projectName: "Website Redesign",
      deadline: "1 month ago",
      taskStatus: "In Progress",
      activeRole: "REVIEWER",
      googleLink: "redesign-72",
      wordCount: "500/2000",
      labels: {
        project: "PROJECTS",
        deadline: "DEADLINE",
        taskStatus: "TASK STATUS",
        activeRole: "ACTIVE ROLE",
        googleLink: "GOOGLE-LINK",
        wordCount: "WORDCOUNT",
      }
    },
    {
      projectName: "App Development",
      deadline: "3 weeks ago",
      taskStatus: "Completed",
      activeRole: "EDITOR",
      googleLink: "appdev-84",
      wordCount: "2000/2000",
      labels: {
        project: "PROJECTS",
        deadline: "DEADLINE",
        taskStatus: "TASK STATUS",
        activeRole: "ACTIVE ROLE",
        googleLink: "GOOGLE-LINK",
        wordCount: "WORDCOUNT",
      }
    },
    {
      projectName: "Content Creation",
      deadline: "1 week ago",
      taskStatus: "Not Started",
      activeRole: "WRITER",
      googleLink: "content-91",
      wordCount: "0/2500",
      labels: {
        project: "PROJECTS",
        deadline: "DEADLINE",
        taskStatus: "TASK STATUS",
        activeRole: "ACTIVE ROLE",
        googleLink: "GOOGLE-LINK",
        wordCount: "WORDCOUNT",
      }
    },
    {
      projectName: "SEO Optimization",
      deadline: "5 days ago",
      taskStatus: "Review Pending",
      activeRole: "SUPERVISOR",
      googleLink: "seo-47",
      wordCount: "1500/1500",
      labels: {
        project: "PROJECTS",
        deadline: "DEADLINE",
        taskStatus: "TASK STATUS",
        activeRole: "ACTIVE ROLE",
        googleLink: "GOOGLE-LINK",
        wordCount: "WORDCOUNT",
      }
    },
    {
      projectName: "Market Research",
      deadline: "2 days ago",
      taskStatus: "On Hold",
      activeRole: "MANAGER",
      googleLink: "research-58",
      wordCount: "750/3000",
      labels: {
        project: "PROJECTS",
        deadline: "DEADLINE",
        taskStatus: "TASK STATUS",
        activeRole: "ACTIVE ROLE",
        googleLink: "GOOGLE-LINK",
        wordCount: "WORDCOUNT",
      }
    }
  ];

  const [activeButton, setActiveButton] = useState("All");
  const [component, setComponent] = useState(<AllTasks />);

  const handleTasks = (name) => {
    setActiveButton(name);
    switch (name) {
      case "All":
        setComponent(<AllTasks />);
        break;
      case "Texter":
        setComponent(<TexterTasks />);
        break;
      case "Lector":
        setComponent(<LectorTasks />);
        break;
      case "Seo Optimizer":
        setComponent(<SeoTasks />);
        break;
      default:
        break;
    }
  };
  const buttons = [
    { name: "All", label: "All" },
    { name: "Texter", label: "Texter" },
    { name: "Lector", label: "Lector" },
    { name: "Seo Optimizer", label: "Seo Optimizer" },
  ];
  return (
    <>
      <div className="w-full flex flex-col gap-3 2xl:gap-0 2xl:flex-row 2xl:justify-between items-center 4xl:px-14 mb-3 4xl:mb-6 mt-2 lg:mt-1">
        <div className="w-full 2xl:max-w-max">
          <h1 className="text-title-md font-bold text-black dark:text-white mb-2">
            Your Tasks Overview
          </h1>
          <p className="text-dark-gray">Here you can view your tasks.</p>
        </div>

        <div className=" w-full 2xl:max-w-max flex justify-start 2xl:justify-end mt-2 ">
          {/* <DarkBtn name={"Add Project"} url={"/onboarding-probetext"} /> */}
        </div>
      </div>
      <div className="w-full">
        {buttons.map((button) => (
          <button
            key={button.name}
            onClick={() => handleTasks(button.name)}
            className={`py-1 px-4 mx-1 font-medium outline-none border-sky-500 rounded-sm sm
            ${
              activeButton === button.name
                ? "bg-sky-500 text-white font-semibold"
                : "bg-white text-black hover:bg-sky-500 hover:text-white"
            }`}
          >
            {button.label}
          </button>
        ))}
      </div>
      {component}
    </>
  );
};

export default Tasks;
