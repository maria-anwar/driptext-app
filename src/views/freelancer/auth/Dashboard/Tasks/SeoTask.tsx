import React from "react";
import SEOCard from "../../../../../components/freelancer/AllTask/SEOCard";
import { Task } from "../../../../../components/freelancer/Type/types";
import UpcommingTasks from "../../../../../components/freelancer/AllTask/UpcommingCard";

// Define the type for the props
interface SeoTasksProps {
  activeTasks: Task[];
  upcommingTasks: Task[];
}

const SeoTasks: React.FC<SeoTasksProps> = ({ activeTasks, upcommingTasks }) => {
  return (
    <>
      {/* Active Tasks Section */}
      <h1 className="text-lg text-center text-black dark:text-white pt-10">
        Active Tasks
      </h1>
      {activeTasks.length > 0 ? (
        activeTasks.map((task, index) => (
          <SEOCard key={index} task={task} />
        ))
      ) : (
        <p className="text-center text-gray-500 pt-10 pb-3">No active seo tasks</p>
      )}

      {/* Upcoming Tasks Section */}
      <h1 className="text-lg text-center text-black dark:text-white pt-10">
        Upcoming Tasks
      </h1>
      {upcommingTasks.length > 0 ? (
        upcommingTasks.map((task, index) => (
          <UpcommingTasks key={index} task={task} Upcomming={true} />
        ))
      ) : (
        <p className="text-center text-gray-500 pt-10 pb-3">No upcoming seo tasks</p>
      )}
    </>
  );
};

export default SeoTasks;
