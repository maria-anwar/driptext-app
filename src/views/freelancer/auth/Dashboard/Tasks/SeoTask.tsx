import React from "react";
import SEOCard from "../../../../../components/freelancer/AllTask/SEOCard";
import { Task } from "../../../../../components/freelancer/Type/types";
import UpcommingTasks from "../../../../../components/freelancer/AllTask/UpcommingCard";

// Define the type for the props
interface SeoTasksProps {
  activeTasks: Task[];
  upcommingTasks: Task[];
  userId: string;
}

const SeoTasks: React.FC<SeoTasksProps> = ({ activeTasks, upcommingTasks,userId }) => {
  const filterActiveTask = activeTasks.filter((task) => task.seo === userId);
  const filterUpcommingTask = upcommingTasks.filter((task) => task.seo === userId);
  return (
    <>
      {/* Active Tasks Section */}
      <h1 className="text-lg text-center text-black dark:text-white pt-10">
        Active Tasks
      </h1>
      {filterActiveTask.length > 0 ? (
        filterActiveTask.map((task, index) => (
          <SEOCard key={index} task={task} role={'SEO'} />
        ))
      ) : (
        <p className="text-center text-gray-500 pt-10 pb-3">No active seo tasks</p>
      )}

      {/* Upcoming Tasks Section */}
      <h1 className="text-lg text-center text-black dark:text-white pt-10">
        Upcoming Tasks
      </h1>
      {filterUpcommingTask.length > 0 ? (
        filterUpcommingTask.map((task, index) => (
          <UpcommingTasks key={index} task={task} Upcomming={true} role={'SEO'} />
        ))
      ) : (
        <p className="text-center text-gray-500 pt-10 pb-3">No upcoming seo tasks</p>
      )}
    </>
  );
};

export default SeoTasks;
