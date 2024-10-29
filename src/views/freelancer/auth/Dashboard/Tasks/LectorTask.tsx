import React from "react";
import LectorCard from "../../../../../components/freelancer/AllTask/LectorCard";
import UpcommingTasks from "../../../../../components/freelancer/AllTask/UpcommingCard";
import { Task } from "../../../../../components/freelancer/Type/types";

// Define the type for the props
interface LectorTasksProps {
  activeTasks: Task[];
  upcommingTasks: Task[];
  userId: string;
  getRefreshTask: () => void;
}

const LectorTasks: React.FC<LectorTasksProps> = ({
  activeTasks,
  upcommingTasks,
  userId,
  getRefreshTask,
}) => {
  const filterActiveTask = activeTasks.filter((task) => task.lector === userId);
  const filterUpcommingTask = upcommingTasks.filter(
    (task) => task.lector === userId
  );
  return (
    <>
      <h1 className="text-lg text-center text-black dark:text-white pt-10">
        Active Tasks
      </h1>
      {filterActiveTask.length > 0 ? (
        filterActiveTask.map((task) => (
          <LectorCard
            key={task._id}
            task={task}
            getRefreshTask={getRefreshTask}
          />
        ))
      ) : (
        <>
          <p className="text-center text-white dark:text-white  font-semibold text-lg pt-3 pb-6">
            There is no any Active Lector task
          </p>
          <span className="block border-t-2 border-cardHeading mx-auto w-1/2 my-4"></span>
        </>
      )}
      <h1 className="text-lg text-center text-black dark:text-white pt-10">
        Upcoming Tasks
      </h1>
      {filterUpcommingTask.length > 0 ? (
        filterUpcommingTask.map((task) => (
          <UpcommingTasks key={task._id} task={task} Upcomming={true} />
        ))
      ) : (
        <p className="text-center text-white dark:text-white  font-semibold text-lg pt-3 pb-3">
          There is no any Upcoming Lector task
        </p>
      )}
    </>
  );
};

export default LectorTasks;
