import React from "react";
import TasksCard from "../../../../../components/freelancer/AllTask/TasksCard";
import { Task } from "../../../../../components/freelancer/Type/types";
import UpcommingTasks from "../../../../../components/freelancer/AllTask/UpcommingCard";
import MetaLectorCard from "../../../../../components/freelancer/AllTask/MetaLectorCard";

interface ProofreaderProps {
  activeTasks: Task[];
  upcommingTasks: Task[];
  userId: string;
  getRefreshTask: () => void;
}

const MetaLector: React.FC<ProofreaderProps> = ({
  activeTasks,
  upcommingTasks,
  userId,
  getRefreshTask,
}) => {
  const filterActiveTask = activeTasks.filter(
    (task) => task.metaLector === userId
  );
  const filterUpcommingTask = upcommingTasks.filter(
    (task) => task.metaLector === userId
  );
  return (
    <>
      <h1 className="text-lg text-center text-black dark:text-white pt-10">
        Active Tasks
      </h1>
      {filterActiveTask.length > 0 ? (
        filterActiveTask.map((task) => (
          <MetaLectorCard
            key={task._id}
            task={task}
            getRefreshTask={getRefreshTask}
          />
        ))
      ) : (
        <>
          <p className="text-center text-white dark:text-white  font-semibold text-lg pt-3 pb-6">
            There is no any Active Meta-Lector task
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
          There is no any Upcoming Meta-Lector task
        </p>
      )}
    </>
  );
};

export default MetaLector;
