import React from "react";
import SEOCard from "../../../../../components/freelancer/AllTask/SEOCard";
import { Task } from "../../../../../components/freelancer/Type/types";
import UpcommingTasks from "../../../../../components/freelancer/AllTask/UpcommingCard";

// Define the type for the props
interface SeoTasksProps {
  activeTasks: Task[];
  upcommingTasks: Task[];
  userId: string;
  getRefreshTask: () => void;
}

const SeoTasks: React.FC<SeoTasksProps> = ({
  activeTasks,
  upcommingTasks,
  userId,
  getRefreshTask,
}) => {
  const filterActiveTask = activeTasks.filter((task) => task.seo === userId);
  const filterUpcommingTask = upcommingTasks.filter(
    (task) => task.seo === userId
  );
  return (
    <>
      <h1 className="text-lg text-center text-black dark:text-white pt-10">
        Active Tasks
      </h1>
      {filterActiveTask.length > 0 ? (
        filterActiveTask.map((task) => (
          <SEOCard key={task._id} task={task} getRefreshTask={getRefreshTask} />
        ))
      ) : (
        <>
        <p className="text-center text-black dark:text-white  font-semibold text-lg pt-3 pb-3">
        There is no any Active SEO task
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
        <p className="text-center text-black dark:text-white  font-semibold text-lg pt-3 pb-3">
          There is no any Upcoming SEO task
        </p>
      )}
    </>
  );
};

export default SeoTasks;
