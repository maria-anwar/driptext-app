import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface CardDataStatsProps {
  title: string;
  domain: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  domain,
  rate,
  levelUp,
  levelDown,
  children,
}) => {
  return (
    <Link to='task-table' className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        {children}
      </div>
      <h4 className="text-title-md font-bold text-black dark:text-white my-3">
        {domain}
      </h4>
      <div className="my-6">
        <hr className="text-custom-gray" />
      </div>
      <div className="mt-3 mb-3 flex items-end justify-between">
         <div className="text-sm font-medium text-dark-gray">{title} <div className="text-meta-5">0/5</div></div>
         <div className="text-sm font-medium text-dark-gray">Created on: <div className="text-meta-3 flex justify-end">08-06-2024</div></div>
      </div>
      <div className="mt-3 mb-3 flex items-end justify-between">
         <div className="text-sm font-medium text-dark-gray">Service Period <div className="text-meta-5">12th Aug</div></div>
         <div className="text-sm font-medium text-dark-gray">Orders per month <div className="text-meta-5 flex justify-end">01</div></div>
      </div>
      <div className="mt-3 mb-3 flex items-end justify-between">
         <div className="text-sm font-medium text-dark-gray"> Maximum Orders: <div className="text-meta-5">12</div></div>
         <div className="text-sm font-medium text-dark-gray">Project Duration <div className="text-meta-5 flex justify-end">01</div></div>
      </div>
     
    </Link>
  );
};

export default CardDataStats;
