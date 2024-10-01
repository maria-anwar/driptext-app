import React from "react";
import TasksCard from "../../../../../components/freelancer/AllTask/TasksCard";
import LectorCard from "../../../../../components/freelancer/AllTask/LectorCard";
import UpcommingTasks from "../../../../../components/freelancer/AllTask/UpcommingCard";
import { Task } from "../../../../../components/freelancer/Type/types";




interface LectorTasksProps {
  activeTasks: Task[];
  upcommingTasks: Task[];
}

const LectorTasks: React.FC<LectorTasksProps> = ({ activeTasks, upcommingTasks }) => {
  // Example filtering based on taskStatus
// const  filteredTasks = taskDataArray.filter(task => task.activeRole.toLowerCase() === 'texter');

  return (
    <>
    <>
      <h1 className="text-lg text-center text-black dark:text-white pt-10">
        Active Tasks
      </h1>
      {activeTasks.map((task, index) => (
        <LectorCard key={index} task={task} />
      ))}
    </>
    <>
      <h1 className="text-lg text-center text-black dark:text-white pt-10 pb-3">
        Upcomming tasks
      </h1>
      {upcommingTasks.map((task, index) => (
        <UpcommingTasks key={index} task={task} Upcomming={true}  />
      ))}
    </>
  </>
  );
};

export default LectorTasks;
