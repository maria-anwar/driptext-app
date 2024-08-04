import React from "react";
import SEOCard from "../../../../../components/freelancer/AllTask/SEOCard";

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
  const  filteredTasks = taskDataArray.filter(task => task.activeRole.toLowerCase() === 'seo');
  return (
    <>
      {filteredTasks.map((task, index) => (
        <SEOCard key={index} task={task} />
      ))}
    </>
  );
};

export default SeoTasks;
