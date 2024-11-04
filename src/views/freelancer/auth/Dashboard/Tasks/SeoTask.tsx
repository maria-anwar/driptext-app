import React from "react";
import SEOCard from "../../../../../components/freelancer/AllTask/SEOCard";
import { Task } from "../../../../../components/freelancer/Type/types";
import UpcommingTasks from "../../../../../components/freelancer/AllTask/UpcommingCard";
import NoTask from "../../../../../components/freelancer/Helper/NoTask";

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
  if (filterActiveTask.length === 0 && filterUpcommingTask.length === 0) {
    return <NoTask label="There are no any Active and Upcoming tasks to show" />;
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
              <SEOCard
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

export default SeoTasks;
