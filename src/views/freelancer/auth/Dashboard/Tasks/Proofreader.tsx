import React from "react";
import TasksCard from "../../../../../components/freelancer/AllTask/TasksCard";
import { Task } from "../../../../../components/freelancer/Type/types";

interface ProofreaderProps {
  activeTasks: Task[];
  upcommingTasks: Task[];
}

const Proofreader: React.FC<ProofreaderProps> = ({
  activeTasks,
  upcommingTasks,
}) => {
  // const  filteredTasks = taskDataArray.filter(task => task.activeRole.toLowerCase() === 'seo');
  return (
    <>
      {/* {filteredTasks.map((task, index) => (
        <TasksCard key={index} task={task} />
      ))} */}
      Meta lector
    </>
  );
};

export default Proofreader;
