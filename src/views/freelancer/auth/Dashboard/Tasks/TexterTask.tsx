import React from "react";
import TasksCard from "../../../../../components/freelancer/AllTask/TasksCard";
import { Task } from "../../../../../components/freelancer/Type/types";
import UpcommingTasks from "../../../../../components/freelancer/AllTask/UpcommingCard";


interface TexterTasksProps {
  activeTasks: Task[];
  upcommingTasks: Task[];
}

const TexterTasks: React.FC<TexterTasksProps> = ({ activeTasks, upcommingTasks }) => {
  console.log("upcommingTasks", upcommingTasks);
  // const  filteredTasks = taskDataArray.filter(task => task.activeRole.toLowerCase() === 'texter');
  return (
    <>
      <>
        <h1 className="text-lg text-center text-black dark:text-white pt-10">
          Active Tasks
        </h1>
        {activeTasks.map((task, index) => (
          <TasksCard key={index} task={task} />
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

export default TexterTasks;
