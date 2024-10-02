import React from "react";
import TasksCard from "../../../../../components/freelancer/AllTask/TasksCard";
import { Task } from "../../../../../components/freelancer/Type/types";
import UpcommingTasks from "../../../../../components/freelancer/AllTask/UpcommingCard";

interface TexterTasksProps {
  activeTasks: Task[];
  upcommingTasks: Task[];
}

const TexterTasks: React.FC<TexterTasksProps> = ({ activeTasks, upcommingTasks }) => {
  return (
    <>
      <h1 className="text-lg text-center text-black dark:text-white pt-10">
        Active Tasks
      </h1>
      {activeTasks.length > 0 ? (
        activeTasks.map((task, index) => (
          <TasksCard key={index} task={task} />
        ))
      ) : (
        <p className="text-center text-gray-500 pt-10 pb-3">No active texter tasks</p>
      )}

      <h1 className="text-lg text-center text-black dark:text-white">
        Upcoming Tasks
      </h1>
      {upcommingTasks.length > 0 ? (
        upcommingTasks.map((task, index) => (
          <UpcommingTasks key={index} task={task} Upcomming={true} />
        ))
      ) : (
        <p className="text-center text-gray-500 pt-10 pb-3">No upcoming texter tasks</p>
      )}
    </>
  );
};

export default TexterTasks;
