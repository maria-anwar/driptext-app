import React from "react";
import TasksCard from "../../../../../components/freelancer/AllTask/TasksCard";
import { Task } from "../../../../../components/freelancer/Type/types";
import UpcommingTasks from "../../../../../components/freelancer/AllTask/UpcommingCard";
import LectorCard from "../../../../../components/freelancer/AllTask/LectorCard";
import SEOCard from "../../../../../components/freelancer/AllTask/SEOCard";
import Proofreader from "../../../../../components/freelancer/AllTask/Proofreader";

// Define the type for the props
interface AllTasksProps {
  activeTasks: Task[];
  upcommingTasks: Task[];
  userId: string;
}

const AllTasks: React.FC<AllTasksProps> = ({
  activeTasks,
  upcommingTasks,
  userId,
}) => {
  return (
    <>
      {/* Active Tasks Section */}
      <h1 className="text-lg text-center text-black dark:text-white pt-10">
        Active Tasks
      </h1>
      {activeTasks.length > 0 ? (
        activeTasks.map((task, index) => {
          let TaskCard;

        if (task.texter === userId) {
          TaskCard = <TasksCard key={index} task={task} />;
        } else if (task.lector === userId) {
          TaskCard = <LectorCard key={index} task={task} />;
        } else if (task.seo === userId) {
          TaskCard = <SEOCard key={index} task={task} />;
        }

        return TaskCard || null; // Return the card or null if no match
})
      ) : (
        <p className="text-center text-gray-500 pt-10 pb-3">No active tasks</p>
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
        <p className="text-center text-gray-500 pt-10 pb-3">
          No upcoming tasks
        </p>
      )}
    </>
  );
};

export default AllTasks;
