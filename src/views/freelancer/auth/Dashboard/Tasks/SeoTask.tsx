import React from "react";
import SEOCard from "../../../../../components/freelancer/AllTask/SEOCard";
import { Task } from "../../../../../components/freelancer/Type/types";
import UpcommingTasks from "../../../../../components/freelancer/AllTask/UpcommingCard";

// Define the type for the props
interface SeoTasksProps {
  activeTasks: Task[];
  upcommingTasks: Task[];
}

const SeoTasks: React.FC<SeoTasksProps> = ({ activeTasks, upcommingTasks  }) => {
  // const  filteredTasks = taskDataArray.filter(task => task.activeRole.toLowerCase() === 'texter');
  return (
    <>
    <>
      <h1 className="text-lg text-center text-black dark:text-white pt-10">
        Active Tasks
      </h1>
      {activeTasks.map((task, index) => (
        <SEOCard key={index} task={task} />
      ))}
    </>
    <>
      <h1 className="text-lg text-center text-black dark:text-white">
        Upcomming tasks
      </h1>
      {upcommingTasks.map((task, index) => (
        <UpcommingTasks key={index} task={task} Upcomming={true}  />
      ))}
    </>
  </>
  );
};

export default SeoTasks;
