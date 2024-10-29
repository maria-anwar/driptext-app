import React from "react";
import TasksCard from "../../../../../components/freelancer/AllTask/TasksCard";
import { Task } from "../../../../../components/freelancer/Type/types";
import UpcommingTasks from "../../../../../components/freelancer/AllTask/UpcommingCard";

interface TexterTasksProps {
  activeTasks: Task[];
  upcommingTasks: Task[];
  userId: string;
  getRefreshTask: () => void;
}

const TexterTasks: React.FC<TexterTasksProps> = ({
  activeTasks,
  upcommingTasks,
  userId,
  getRefreshTask,
}) => {
  const filterActiveTask = activeTasks.filter((task) => task.texter === userId);
  const filterUpcommingTask = upcommingTasks.filter(
    (task) => task.texter === userId
  );
  return (
    <>
      <div>
        <h1 className="text-lg text-center text-black dark:text-white pt-10">
          Active Tasks
        </h1>
        {filterActiveTask.length > 0 ? (
          filterActiveTask.map((task) => (
            <TasksCard
              key={task._id}
              task={task}
              getRefreshTask={getRefreshTask}
            />
          ))
        ) : (
          <>
            <p className="text-center text-white dark:text-white  font-semibold text-lg pt-3 pb-6">
              There is no any Active Texter task
            </p>
            <span className="block border-t-2 border-cardHeading mx-auto w-1/2 my-4"></span>
          </>
        )}
      </div>
      <div>
        <h1 className="text-lg text-center text-black dark:text-white mt-10">
          Upcoming Tasks
        </h1>
        {filterUpcommingTask.length > 0 ? (
          filterUpcommingTask.map((task) => (
            <UpcommingTasks key={task._id} task={task} Upcomming={true} />
          ))
        ) : (
          <p className="text-center text-white dark:text-white  font-semibold text-lg pt-3 pb-3">
            There is no any Upcoming Texter task
          </p>
        )}
      </div>
    </>
  );
};

export default TexterTasks;
