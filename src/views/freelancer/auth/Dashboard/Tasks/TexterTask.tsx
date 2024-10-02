import React from "react";
import TasksCard from "../../../../../components/freelancer/AllTask/TasksCard";
import { Task } from "../../../../../components/freelancer/Type/types";
import UpcommingTasks from "../../../../../components/freelancer/AllTask/UpcommingCard";

interface TexterTasksProps {
  activeTasks: Task[];
  upcommingTasks: Task[];
  userId: string;
}

const TexterTasks: React.FC<TexterTasksProps> = ({ activeTasks, upcommingTasks,userId }) => {
  const filterActiveTask = activeTasks.filter((task) => task.texter === userId);
  const filterUpcommingTask = upcommingTasks.filter((task) => task.texter === userId);
  return (
    <>
      <h1 className="text-lg text-center text-black dark:text-white pt-10">
        Active Tasks
      </h1>
      {filterActiveTask.length > 0 ? (
        filterActiveTask.map((task, index) => (
          <TasksCard key={index} task={task}  />
        ))
      ) : (
        <p className="text-center text-gray-500 pt-10 pb-3">No active texter tasks</p>
      )}

      <h1 className="text-lg text-center text-black dark:text-white">
        Upcoming Tasks
      </h1>
      {filterUpcommingTask.length > 0 ? (
        filterUpcommingTask.map((task, index) => (
          <UpcommingTasks key={index} task={task} Upcomming={true}  />
        ))
      ) : (
        <p className="text-center text-gray-500 pt-10 pb-3">No upcoming texter tasks</p>
      )}
    </>
  );
};

export default TexterTasks;
