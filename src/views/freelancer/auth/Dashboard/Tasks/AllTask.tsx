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
  console.log(activeTasks);
  if (activeTasks.length === 0 && upcommingTasks.length === 0) {
    return <NoTask label="There are no any Active and Upcoming tasks to show" />;
  }
  return (
    <>
      <div>
        {activeTasks.length > 0 ? (
          <>
            <h1 className="text-xl font-bold text-center text-black dark:text-white pt-10">
              Active Tasks
            </h1>
            {activeTasks.map((task) => {
              let TaskCard = null;

              if (
                task.texter === userId &&
                ["ready to work", "in progress", "in rivision", "final"].includes(
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
                [
                  "ready to work",
                  "in progress",
                  "in rivision",
                  "final",
                  "ready for proofreading",
                  "proofreading in progress",
                ].includes(task.status.toLowerCase())
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
                [
                  "ready to work",
                  "in progress",
                  "in rivision",
                  "final",
                  "ready for proofreading",
                  "proofreading in progress",
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
                [
                  "ready to work",
                  "in progress",
                  "in rivision",
                  "final",
                  "ready for proofreading",
                  "proofreading in progress",
                  "ready for seo optimization",
                  "seo optimization in progress",
                  "ready for 2nd proofreading",
                  "2nd proofreading in progress",
                 ,
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

              return TaskCard ? TaskCard : null;  
            })}
          </>
        ) : (
          <NoTask label="There is no any Active Task to show" />
        )}
      </div>
      <span className="block border-t  border-zinc-200 dark:border-zinc-500 mx-auto w-full mt-4 font-thin"></span>
      <div>
        {upcommingTasks.length > 0 ? (
          <>
            <h1 className="text-xl font-bold text-center text-black dark:text-white pt-10">
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
