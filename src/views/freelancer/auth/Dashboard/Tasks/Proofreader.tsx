import React from "react";
import TasksCard from "../../../../../components/freelancer/AllTask/TasksCard";
import { Task } from "../../../../../components/freelancer/Type/types";
import UpcommingTasks from "../../../../../components/freelancer/AllTask/UpcommingCard";
import LectorCard from "../../../../../components/freelancer/AllTask/LectorCard";

interface ProofreaderProps {
  activeTasks: Task[];
  upcommingTasks: Task[];
  userId: string;
  getRefreshTask: () => void
}

const Proofreader: React.FC<ProofreaderProps> = ({
  activeTasks, upcommingTasks,userId,getRefreshTask
}) => {
  const filterActiveTask = activeTasks.filter((task) => task.metaLector === userId);
  const filterUpcommingTask = upcommingTasks.filter((task) => task.metaLector === userId);
  return (
    <>
      <h1 className="text-xl text-center text-black dark:text-white pt-10">
        Active Tasks
      </h1>
      {filterActiveTask.length > 0 ? (
        filterActiveTask.map((task) => (
          <LectorCard key={task._id} task={task} getRefreshTask={getRefreshTask} />
        ))
      ) : (
        <p className="text-center text-gray-500 pt-10 pb-3">No active meta-lector tasks</p>
      )}
      <span className="block border-t  border-zinc-200 dark:border-zinc-500 mx-auto w-full mt-4 font-thin"></span>

      <h1 className="text-xl text-center text-black dark:text-white pt-10 pb-3">
        Upcoming Tasks
      </h1>
      {filterUpcommingTask.length > 0 ? (
        filterUpcommingTask.map((task) => (
          <UpcommingTasks key={task._id} task={task} Upcomming={true}  />
        ))
      ) : (
        <p className="text-center text-gray-500 pt-10 pb-3">No upcoming meta-lector tasks</p>
      )}
    </>
  );
};

export default Proofreader;
