import React from "react";
import TasksCard from "../../../../../components/freelancer/AllTask/TasksCard";
import { Task } from "../../../../../components/freelancer/Type/types";
import UpcommingTasks from "../../../../../components/freelancer/AllTask/UpcommingCard";
import MetaLectorCard from "../../../../../components/freelancer/AllTask/MetaLectorCard";
import NoTask from "../../../../../components/freelancer/Helper/NoTask";

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
  if (filterActiveTask.length === 0 && filterUpcommingTask.length === 0) {
    return <NoTask label="There is no any Active and Upcoming tasks to show" />;
  }
  return (
    <>
      <div>
        {filterActiveTask.length > 0 ? (
          <>
            <h1 className="text-lg font-bold text-center text-black dark:text-white pt-10">
              Active Tasks
            </h1>
            {filterActiveTask.map((task) => (
              <MetaLectorCard
                key={task._id}
                task={task}
                getRefreshTask={getRefreshTask}
              />
            ))}
          </>
        ) : (
          <NoTask label="There is no any Active task to show" />
        )}
      </div>
      <span className="block ring-1 ring-zinc-300 dark:ring-zinc-500 mx-auto w-full my-4"></span>
      <div>
        {filterUpcommingTask.length > 0 ? (
          <>
            <h1 className="text-lg font-bold text-center text-black dark:text-white pt-10">
              Upcoming Tasks
            </h1>
            {filterUpcommingTask.map((task) => (
              <UpcommingTasks key={task._id} task={task} Upcomming={true} />
            ))}
          </>
        ) : (
          <NoTask label="There is no any Upcoming Task to show" />
        )}
      </div>
    </>
  );
};

export default MetaLector;
