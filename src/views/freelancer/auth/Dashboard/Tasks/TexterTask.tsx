import React from "react";
import TasksCard from "../../../../../components/freelancer/AllTask/TasksCard";

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
interface TexterTasksProps {
  taskDataArray: Task[];
}

const TexterTasks: React.FC<TexterTasksProps> = ({ taskDataArray }) => {
  const  filteredTasks = taskDataArray.filter(task => task.activeRole.toLowerCase() === 'texter');
  return (
    <>
      {filteredTasks.map((task, index) => (
        <TasksCard key={index} task={task} />
      ))}
    </>
  );
};

export default TexterTasks;
