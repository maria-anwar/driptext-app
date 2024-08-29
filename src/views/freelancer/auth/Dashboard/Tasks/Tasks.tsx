import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllTasks from "./AllTask";
import TexterTasks from "./TexterTask";
import LectorTasks from "./LectorTask";
import SeoTasks from "./SeoTask";
import Proofreader from "./Proofreader";
import Breadcrumb from "../../../../../components/freelancer/breeadcrumbs/Breadcrumb";

const Tasks: React.FC = () => {
  const taskDataArray = [
    {
      projectName: "MA-AB010 || Marketing Campaign",
      deadline: "2 months ago",
      taskStatus: "Ready to start",
      activeRole: "TEXTER",
      googleLink:
        "https://docs.google.com/document/d/1lth731M_StJek0kU3dsV8bmilAqfEkq3KixXJTlbsNU/edit?addon_store",
      wordCount: "0/1500",
      labels: {
        project: "PROJECTS",
        deadline: "DEADLINE",
        taskStatus: "TASK STATUS",
        activeRole: "ACTIVE ROLE",
        googleLink: "GOOGLE-LINK",
        wordCount: "WORDCOUNT",
      },
      isStart: false,
      isAccepted: false,
      isFinish: false,
    },
    {
      projectName: "WE-CD011 || Website Redesign",
      deadline: "1 month ago",
      taskStatus: "In Progress",
      activeRole: "TEXTER",
      googleLink:
        "https://docs.google.com/document/d/1lth731M_StJek0kU3dsV8bmilAqfEkq3KixXJTlbsNU/edit?addon_store",
      wordCount: "500/2000",
      labels: {
        project: "PROJECTS",
        deadline: "DEADLINE",
        taskStatus: "TASK STATUS",
        activeRole: "ACTIVE ROLE",
        googleLink: "GOOGLE-LINK",
        wordCount: "WORDCOUNT",
      },
      isStart: false,
      isAccepted: false,
      isFinish: false,
    },
    {
      projectName: "AP-EF012 || App Development",
      deadline: "3 weeks ago",
      taskStatus: "Completed",
      activeRole: "LECTOR",
      googleLink:
        "https://docs.google.com/document/d/1lth731M_StJek0kU3dsV8bmilAqfEkq3KixXJTlbsNU/edit?addon_store",
      wordCount: "2000/2000",
      labels: {
        project: "PROJECTS",
        deadline: "DEADLINE",
        taskStatus: "TASK STATUS",
        activeRole: "ACTIVE ROLE",
        googleLink: "GOOGLE-LINK",
        wordCount: "WORDCOUNT",
      },
      isStart: false,
      isAccepted: false,
      isFinish: false,
    },
    {
      projectName: "CO-FG013 || Content Creation",
      deadline: "1 week ago",
      taskStatus: "Not Started",
      activeRole: "LECTOR",
      googleLink: "https://docs.google.com/document/d/content-91",
      wordCount: "0/2500",
      labels: {
        project: "PROJECTS",
        deadline: "DEADLINE",
        taskStatus: "TASK STATUS",
        activeRole: "ACTIVE ROLE",
        googleLink: "GOOGLE-LINK",
        wordCount: "WORDCOUNT",
      },
      isStart: false,
      isAccepted: false,
      isFinish: false,
    },
    {
      projectName: "SE-HI014 || SEO Optimization",
      deadline: "5 days ago",
      taskStatus: "Review Pending",
      activeRole: "SEO",
      googleLink: "https://docs.google.com/document/d/seo-47",
      wordCount: "1500/1500",
      labels: {
        project: "PROJECTS",
        deadline: "DEADLINE",
        taskStatus: "TASK STATUS",
        activeRole: "ACTIVE ROLE",
        googleLink: "GOOGLE-LINK",
        wordCount: "WORDCOUNT",
      },
      isStart: false,
      isAccepted: false,
      isFinish: false,
    },
    {
      projectName: "MA-JK015 || Market Research",
      deadline: "2 days ago",
      taskStatus: "On Hold",
      activeRole: "SEO",
      googleLink: "https://docs.google.com/document/d/research-58",
      wordCount: "750/3000",
      labels: {
        project: "PROJECTS",
        deadline: "DEADLINE",
        taskStatus: "TASK STATUS",
        activeRole: "ACTIVE ROLE",
        googleLink: "GOOGLE-LINK",
        wordCount: "WORDCOUNT",
      },
      isStart: false,
      isAccepted: false,
      isFinish: false,
    },
    {
      projectName: "SO-LM016 || Social Media Strategy",
      deadline: "3 days ago",
      taskStatus: "In Progress",
      activeRole: "TEXTER",
      googleLink: "https://docs.google.com/document/d/social-91",
      wordCount: "250/1200",
      labels: {
        project: "PROJECTS",
        deadline: "DEADLINE",
        taskStatus: "TASK STATUS",
        activeRole: "ACTIVE ROLE",
        googleLink: "GOOGLE-LINK",
        wordCount: "WORDCOUNT",
      },
      isStart: false,
      isAccepted: false,
      isFinish: false,
    },
    {
      projectName: "EM-NO017 || Email Campaign",
      deadline: "1 month ago",
      taskStatus: "Review Pending",
      activeRole: "TEXTER",
      googleLink: "https://docs.google.com/document/d/email-11",
      wordCount: "800/2000",
      labels: {
        project: "PROJECTS",
        deadline: "DEADLINE",
        taskStatus: "TASK STATUS",
        activeRole: "ACTIVE ROLE",
        googleLink: "GOOGLE-LINK",
        wordCount: "WORDCOUNT",
      },
      isStart: false,
      isAccepted: false,
      isFinish: false,
    },
    {
      projectName: "BL-PQ018 || Blog Writing",
      deadline: "2 weeks ago",
      taskStatus: "Completed",
      activeRole: "TEXTER",
      googleLink: "https://docs.google.com/document/d/blog-21",
      wordCount: "1500/1500",
      labels: {
        project: "PROJECTS",
        deadline: "DEADLINE",
        taskStatus: "TASK STATUS",
        activeRole: "ACTIVE ROLE",
        googleLink: "GOOGLE-LINK",
        wordCount: "WORDCOUNT",
      },
      isStart: false,
      isAccepted: false,
      isFinish: false,
    },
    {
      projectName: "TE-RS019 || Technical Documentation",
      deadline: "1 week ago",
      taskStatus: "Not Started",
      activeRole: "TEXTER",
      googleLink: "https://docs.google.com/document/d/tech-12",
      wordCount: "0/3500",
      labels: {
        project: "PROJECTS",
        deadline: "DEADLINE",
        taskStatus: "TASK STATUS",
        activeRole: "ACTIVE ROLE",
        googleLink: "GOOGLE-LINK",
        wordCount: "WORDCOUNT",
      },
      isStart: false,
      isAccepted: false,
      isFinish: false,
    },
    {
      projectName: "US-TV020 || User Manual",
      deadline: "3 days ago",
      taskStatus: "On Hold",
      activeRole: "TEXTER",
      googleLink: "https://docs.google.com/document/d/manual-15",
      wordCount: "600/1500",
      labels: {
        project: "PROJECTS",
        deadline: "DEADLINE",
        taskStatus: "TASK STATUS",
        activeRole: "ACTIVE ROLE",
        googleLink: "GOOGLE-LINK",
        wordCount: "WORDCOUNT",
      },
      isStart: false,
      isAccepted: false,
      isFinish: false,
    },
    {
      projectName: "PR-WX021 || Proofreading",
      deadline: "5 days ago",
      taskStatus: "Review Pending",
      activeRole: "LECTOR",
      googleLink: "https://docs.google.com/document/d/proof-85",
      wordCount: "700/700",
      labels: {
        project: "PROJECTS",
        deadline: "DEADLINE",
        taskStatus: "TASK STATUS",
        activeRole: "ACTIVE ROLE",
        googleLink: "GOOGLE-LINK",
        wordCount: "WORDCOUNT",
      },
      isStart: false,
      isAccepted: false,
      isFinish: false,
    },
    {
      projectName: "ED-YZ022 || Editing",
      deadline: "1 month ago",
      taskStatus: "In Progress",
      activeRole: "LECTOR",
      googleLink: "https://docs.google.com/document/d/edit-47",
      wordCount: "200/1000",
      labels: {
        project: "PROJECTS",
        deadline: "DEADLINE",
        taskStatus: "TASK STATUS",
        activeRole: "ACTIVE ROLE",
        googleLink: "GOOGLE-LINK",
        wordCount: "WORDCOUNT",
      },
      isStart: false,
      isAccepted: false,
      isFinish: false,
    },
    {
      projectName: "CO-AA023 || Copywriting",
      deadline: "3 weeks ago",
      taskStatus: "Completed",
      activeRole: "TEXTER",
      googleLink: "https://docs.google.com/document/d/copy-31",
      wordCount: "1200/1200",
      labels: {
        project: "PROJECTS",
        deadline: "DEADLINE",
        taskStatus: "TASK STATUS",
        activeRole: "ACTIVE ROLE",
        googleLink: "GOOGLE-LINK",
        wordCount: "WORDCOUNT",
      },
      isStart: false,
      isAccepted: false,
      isFinish: false,
    },
    {
      projectName: "RE-BB024 || Research Paper",
      deadline: "1 week ago",
      taskStatus: "On Hold",
      activeRole: "TEXTER",
      googleLink: "https://docs.google.com/document/d/research-93",
      wordCount: "300/2500",
      labels: {
        project: "PROJECTS",
        deadline: "DEADLINE",
        taskStatus: "TASK STATUS",
        activeRole: "ACTIVE ROLE",
        googleLink: "GOOGLE-LINK",
        wordCount: "WORDCOUNT",
      },
      isStart: false,
      isAccepted: false,
      isFinish: false,
    },
  ];

  const [activeButton, setActiveButton] = useState("All");
  const [component, setComponent] = useState(
    <AllTasks taskDataArray={taskDataArray} />
  );

  const handleTasks = (name) => {
    setActiveButton(name);
    switch (name) {
      case "All":
        setComponent(<AllTasks taskDataArray={taskDataArray} />);
        break;
      case "Texter":
        setComponent(<TexterTasks taskDataArray={taskDataArray} />);
        break;
      case "Lector":
        setComponent(<LectorTasks taskDataArray={taskDataArray} />);
        break;
      case "Seo Optimizer":
        setComponent(<SeoTasks taskDataArray={taskDataArray} />);
        break;
      case "Meta lector":
        setComponent(<Proofreader taskDataArray={taskDataArray} />);
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
    { name: "Meta lector", label: "Meta lector" },
  ];
  return (
    <>
      <div className="2xl:px-6 3xl:px-10">
        <div className="w-full 2xl:max-w- pb-2">
          <h1 className="text-title-md font-bold text-black dark:text-white mb-1">
            Tasks
          </h1>
          <p className="text-dark-gray">Here you can view your tasks.</p>
        </div>
        <div className="w-full">
          {buttons.map((button) => (
            <button
              key={button.name}
              onClick={() => handleTasks(button.name)}
              className={`py-2 px-6 mx-1 my-1 font-medium outline-none bg-cardHeadingborder-sky-500
            ${
              activeButton === button.name
                ? "bg-cardHeading text-white font-semibold "
                : "bg-white ring-1 ring-cardHeading dark:hover:ring-0 dark:ring-white  dark:text-white dark:bg-transparent hover:bg-cardHeading hover:text-white"
            }`}
            >
              {button.label}
            </button>
          ))}
        </div>
        {component}
      </div>
    </>
  );
};

export default Tasks;
