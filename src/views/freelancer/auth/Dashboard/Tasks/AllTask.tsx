import React from "react";
import TasksCard from "../../../../../components/freelancer/AllTask/TasksCard";
import { Task } from "../../../../../components/freelancer/Type/types";
import UpcommingTasks from "../../../../../components/freelancer/AllTask/UpcommingCard";
import LectorCard from "../../../../../components/freelancer/AllTask/LectorCard";
import SEOCard from "../../../../../components/freelancer/AllTask/SEOCard";
import MetaLectorCard from "../../../../../components/freelancer/AllTask/MetaLectorCard";
import NoTask from "../../../../../components/freelancer/Helper/NoTask";

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
  if (activeTasks.length === 0 && upcommingTasks.length === 0) {
    return (
      <NoTask label="There is no any Active and Upcoming tasks to show" />
    );
  }
  return (
    <>
      <div>
        {activeTasks.length > 0 ? (
          <>
            <h1 className="text-lg text-center text-black dark:text-white pt-10">
              Active Tasks
            </h1>
        {activeTasks.map((task) => {
          let TaskCard = null;

          if (
            task.texter === userId &&
            ["ready to work", "in progress", "in rivision"].includes(
              task.status.toLowerCase()
            )
          ) {
            TaskCard = (
              <TasksCard
                key={task._id}
                task={task}
                getRefreshTask={getRefreshTask}
              />
            );
          } else if (
            task.lector === userId &&
            ["ready to work", "in progress", "in rivision","ready for proofreading", "proofreading in progress"].includes(
              task.status.toLowerCase()
            )
          ) {
            TaskCard = (
              <LectorCard
                key={task._id}
                task={task}
                getRefreshTask={getRefreshTask}
              />
            );
          } else if (
            task.seo === userId &&
            ["ready to work", "in progress", "in rivision","ready for proofreading", "proofreading in progress",
              "ready for seo optimization",
              "seo optimization in progress",
            ].includes(task.status.toLowerCase())
          ) {
            TaskCard = (
              <SEOCard
                key={task._id}
                task={task}
                getRefreshTask={getRefreshTask}
              />
            );
          } else if (
            task.metaLector === userId &&
            ["ready to work", "in progress", "in rivision","ready for proofreading", "proofreading in progress",
              "ready for seo optimization",
              "seo optimization in progress",
              "ready for 2nd proofreading",
              "2nd proofreading in progress",
              "final",
            ].includes(task.status.toLowerCase())
          ) {
            TaskCard = (
              <MetaLectorCard
                key={task._id}
                task={task}
                getRefreshTask={getRefreshTask}
              />
            );
          }

          return TaskCard;
        })}
        </>
      ) : (
        <NoTask label="There is no any Active Task to show" />
      )}
      </div>
      <span className="block ring-1 ring-zinc-300 dark:ring-zinc-500 mx-auto w-full my-4"></span>
      <div>
        {upcommingTasks.length > 0 ? (
          <>
            <h1 className="text-lg text-center text-black dark:text-white pt-8">
              Upcoming Tasks
            </h1>
            {upcommingTasks.map((task) => (
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

export default AllTasks;
