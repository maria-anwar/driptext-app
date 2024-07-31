import React from "react";
import TasksCard from "../../../../../components/freelancer/TasksCard";
import LectorCard from "../../../../../components/freelancer/LectorCard";

// Define the type for the task object
interface Task {
  projectName: string;
  deadline: string;
  taskStatus: string;
  activeRole: string;
  googleLink: string;
  wordCount: string;
  labels: {
    project: string;
    deadline: string;
    taskStatus: string;
    activeRole: string;
    googleLink: string;
    wordCount: string;
  };
  isStart: boolean;
  isAccepted: boolean;
  isFinish: boolean;
}

// Define the type for the props
interface LectorTasksProps {
  taskDataArray: Task[];
}

const LectorTasks: React.FC<LectorTasksProps> = ({ taskDataArray }) => {
  // Example filtering based on taskStatus
const  filteredTasks = taskDataArray.filter(task => task.activeRole.toLowerCase() === 'lector');

  return (
    <>
      {filteredTasks.map((task, index) => (
        <LectorCard key={index} task={task} />
      ))}
    </>
  );
};

export default LectorTasks;
