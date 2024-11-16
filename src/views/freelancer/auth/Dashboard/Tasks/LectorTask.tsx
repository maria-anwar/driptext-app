import React from "react";
import LectorCard from "../../../../../components/freelancer/AllTask/LectorCard";
import UpcommingTasks from "../../../../../components/freelancer/AllTask/UpcommingCard";
import { Task } from "../../../../../components/freelancer/Type/types";
import NoTask from "../../../../../components/freelancer/Helper/NoTask";
import { useTranslation } from "react-i18next";

// Define the type for the props
interface LectorTasksProps {
  activeTasks: Task[];
  //upcommingTasks: Task[];
  userId: string;
  getRefreshTask: () => void;
}

const LectorTasks: React.FC<LectorTasksProps> = ({
  activeTasks,
  //upcommingTasks,
  userId,
  getRefreshTask,
}) => {
  const { t } = useTranslation();
  const filterActiveTask = activeTasks.filter((task) => task.lector === userId);
  // const filterUpcommingTask = upcommingTasks.filter(
  //   (task) => task.lector === userId
  // );
  // if (filterActiveTask.length === 0 && filterUpcommingTask.length === 0) {
  //   return <NoTask label="There are no any Active and Upcoming tasks to show" />;
  // }
  return (
    <>
      <div>
        {filterActiveTask.length > 0 ? (
          <>
            <h1 className="text-[20px] 4xl:text-[22px] 5xl:text-[24px] font-medium text-center text-black dark:text-white pt-10">
              {t("task.activeTasks.heading")}
            </h1>
            {filterActiveTask.map((task) => (
              <LectorCard
                key={task._id}
                task={task}
                getRefreshTask={getRefreshTask}
              />
            ))}
          </>
        ) : (
          <NoTask label={t("task.activeTasks.noTasksLabel")} />
        )}
      </div>
      {/* <span className="block border-t  border-zinc-200 dark:border-zinc-500 mx-auto w-full mt-4 font-thin"></span>
      <div>
        {filterUpcommingTask.length > 0 ? (
          <>
            <h1 className="text-[20px] 4xl:text-[22px] 5xl:text-[24px] font-medium text-center text-black dark:text-white pt-10">
              Upcoming Tasks
            </h1>
            {filterUpcommingTask.map((task) => (
              <UpcommingTasks key={task._id} task={task} Upcomming={true} />
            ))}
          </>
        ) : (
          <NoTask label="There is no any Upcoming Task to show" />
        )}
      </div> */}
    </>
  );
};

export default LectorTasks;
