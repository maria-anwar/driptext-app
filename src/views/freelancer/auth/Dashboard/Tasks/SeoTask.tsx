import React from "react";
import TasksCard from "../../../../../components/freelancer/TasksCard";

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
interface SeoTasksProps {
  taskDataArray: Task[];
}

const SeoTasks: React.FC<SeoTasksProps> = ({ taskDataArray }) => {
  return (
    <>
      {taskDataArray.map((task, index) => (
        <TasksCard key={index} task={task} />
      ))}
    </>
  );
};

export default SeoTasks;
