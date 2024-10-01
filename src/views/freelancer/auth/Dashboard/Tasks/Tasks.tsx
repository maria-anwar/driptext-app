import React, { useEffect, useState } from "react";
import AllTasks from "./AllTask";
import TexterTasks from "./TexterTask";
import LectorTasks from "./LectorTask";
import SeoTasks from "./SeoTask";
import Proofreader from "./Proofreader";
import { useSelector } from "react-redux";
import axios from "axios";

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
];

const Tasks: React.FC = () => {
  const user = useSelector((state) => state.user);
  const userId = user?.user?.data?.user?._id;
  const userToken = user?.user?.token;
  const [tasks,setTask]=useState({currentTasks:[],upcomingTasks:[]})

  useEffect(() => {
    if (userId && userToken) {
      getProjects();
    }
  }, [userId, userToken]);

  const getProjects = () => {
    axios.defaults.headers.common["access-token"] = userToken;
    const payload = { freelancerId: userId };
    axios
      .post(`${import.meta.env.VITE_DB_URL}/freelancer/getTasks`, payload)
      .then((response) => {
        const projectDataArray = response.data.tasks;
        setTask(projectDataArray);
        console.log("projectDataArray", projectDataArray);
      })
      .catch((err) => {
        console.error("Error fetching project details:", err);
      });
  };

  const [activeButton, setActiveButton] = useState("All");

  const handleTasks = (name: string) => {
    setActiveButton(name);
  };


  const buttons = [
    { name: "All", label: "All" },
    { name: "Texter", label: "Texter" },
    { name: "Lector", label: "Lector" },
    { name: "Seo Optimizer", label: "Seo Optimizer" },
    { name: "Meta lector", label: "Meta lector" },
  ];

  const renderTasks = () => {
    switch (activeButton) {
      case "Texter":
        return <TexterTasks activeTasks={tasks.currentTasks} upcommingTasks={tasks.upcomingTasks} />;
      case "Lector":
        return <LectorTasks activeTasks={tasks.currentTasks} upcommingTasks={tasks.upcomingTasks} />;
      case "Seo Optimizer":
        return <SeoTasks activeTasks={tasks.currentTasks} upcommingTasks={tasks.upcomingTasks} />;
      case "Meta lector":
        return <Proofreader activeTasks={tasks.currentTasks} upcommingTasks={tasks.upcomingTasks} />;
      default:
        return <AllTasks activeTasks={tasks.currentTasks} upcommingTasks={tasks.upcomingTasks} />;
    }
  };

  console.log("tasks", tasks.currentTasks);

  return (
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
      {renderTasks()}
    </div>
  );
};

export default Tasks;
