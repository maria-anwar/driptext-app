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
  getRefreshTask: () => void;
}

const AllTasks: React.FC<AllTasksProps> = ({
  activeTasks,
  upcommingTasks,
  userId,
  getRefreshTask,
}) => {
  return (
    <>
      <h1 className="text-lg text-center text-black dark:text-white pt-10">
        Active Tasks
      </h1>
      {activeTasks.length > 0 ? (
        activeTasks.map((task) => {
          let TaskCard = null;

          if (task.texter === userId && ["ready for work", "in progress", "in rivision"].includes(task.status.toLowerCase())) {
              TaskCard = <TasksCard key={task._id} task={task} getRefreshTask={getRefreshTask} />;
          } else if (task.lector === userId  && ["ready for proofreading", "proofreading in progress"].includes(task.status.toLowerCase())) {
              TaskCard = <LectorCard key={task._id} task={task} getRefreshTask={getRefreshTask} />;
          } else if (task.seo === userId &&["ready for seo optimization", "seo optimization in progress",'final'].includes(task.status.toLowerCase())) {
              TaskCard = <SEOCard key={task._id} task={task} getRefreshTask={getRefreshTask} />;
          }
          
          return TaskCard;
})
      ) : (
        <p className="text-center text-gray-500 pt-10 pb-3">No active tasks</p>
      )}
      <h1 className="text-lg text-center text-black dark:text-white pt-10">
        Upcoming Tasks
      </h1>
      {upcommingTasks.length > 0 ? (
        upcommingTasks.map((task) => (
          <UpcommingTasks key={task._id} task={task} Upcomming={true} />
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
