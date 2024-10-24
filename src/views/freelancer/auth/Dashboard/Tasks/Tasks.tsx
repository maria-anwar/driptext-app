import React, { useEffect, useState } from "react";
import AllTasks from "./AllTask";
import TexterTasks from "./TexterTask";
import LectorTasks from "./LectorTask";
import SeoTasks from "./SeoTask";
import MetaLector from "./MetaLector";
import { useSelector } from "react-redux";
import axios from "axios";

const Tasks: React.FC = () => {
  const user = useSelector((state) => state.user);
  const userId = user?.user?.data?.user?._id;
  const userToken = user?.user?.token;
  const [tasks, setTask] = useState({ currentTasks: [], upcomingTasks: [] });
  const [activeButton, setActiveButton] = useState("All");
  const [loading, setLoading] = useState(true); 

  useEffect(() => {

  
    if (user) {
      getWordCount();
      getProjects();
    }
  }, [user]);
  
  const getProjects = async () => {
    setLoading(true);
    try {
      axios.defaults.headers.common["access-token"] = userToken;
      const payload = { freelancerId: userId };
      const response = await axios.post(
        `${import.meta.env.VITE_DB_URL}/freelancer/getTasks`,
        payload
      );
      
      const projectDataArray = response.data.tasks;
      setTask(projectDataArray);
      console.log("projectDataArray", projectDataArray);
    } catch (err) {
      console.error("Error fetching project details:", err);
    } finally {
      setLoading(false);
    }
  };
  
  const getWordCount = async () => {
    try {
      axios.defaults.headers.common["access-token"] = userToken;
      const payload = { freelancerId: userId };
  
      const response = await axios.post(
        `${import.meta.env.VITE_DB_URL}/freelancer/updateWordCountAllTasks`,
        payload
      );
      
      if (response.status === 200) {
        console.log("Word count", response);
      }
    } catch (err) {
      console.error("Error updating word count of project:", err);
    }
  };
  

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
        return (
          <TexterTasks
            activeTasks={tasks.currentTasks}
            upcommingTasks={tasks.upcomingTasks}
            userId={userId}
            getRefreshTask={getProjects}
          />
        );
      case "Lector":
        return (
          <LectorTasks
            activeTasks={tasks.currentTasks}
            upcommingTasks={tasks.upcomingTasks}
            userId={userId}
            getRefreshTask={getProjects}
          />
        );
      case "Seo Optimizer":
        return (
          <SeoTasks
            activeTasks={tasks.currentTasks}
            upcommingTasks={tasks.upcomingTasks}
            userId={userId}
            getRefreshTask={getProjects}
          />
        );
      case "Meta lector":
        return (
          <MetaLector
          activeTasks={tasks.currentTasks}
          upcommingTasks={tasks.upcomingTasks}
          userId={userId}
          getRefreshTask={getProjects}
          />
        );
      default:
        return (
          <AllTasks
            activeTasks={tasks.currentTasks}
            upcommingTasks={tasks.upcomingTasks}
            userId={userId}
            getRefreshTask={getProjects}
          />
        );
    }
  };

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
                  : "bg-white ring-1 ring-cardHeading dark:hover:ring-0 dark:ring-white dark:text-white dark:bg-transparent hover:bg-cardHeading hover:text-white"
              }`}
          >
            {button.label}
          </button>
        ))}
      </div>
      {loading
        ? [1, 2, 3, 4].map((value, index) => (
            <div
              key={index}
              className="rounded-sm border border-stroke pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 mt-10 w-full bg-slate-200 h-[460px] md:h-[300px] animate-pulse"
            ></div>
          ))
        : renderTasks()}
    </div>
  );
};

export default Tasks;
