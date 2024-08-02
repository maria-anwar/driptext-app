import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

interface CardDataStatsProps {
  id:Object;
  title: string;
  domain: string;
  keywords:string,
  projectStatus:string,
  texts:number;
  createdOn:string;
  servicePeriod:string;
  ordersPerMonth:number;
  maximumOrders:number;
  projectDuration:number;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  id,
  title,
  domain,
  keywords,
  projectStatus,
  texts,
  createdOn,
  servicePeriod,
  ordersPerMonth,
  maximumOrders,
  projectDuration,
  rate,
  levelUp,
  levelDown,
  children,
}) => {
  const navigate = useNavigate()
  const user= useSelector((state)=>state.user)

  
 const handleBoarding = ()=> {
    navigate('/onboarding-probetext',{state:{projectName:domain,userId:user.user.data.user._id}})
  } 


  const handleProjectTask = () => {
    navigate('task-table',{state:{projectId:id}})
  }

  // Check if any required prop for the Link is missing
  const hasAllProps = (texts !== 0) ? true : false;


  if (!hasAllProps) {
    return (
      <div className="flex flex-col justify-start content-center rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        {children} 
      </div>
      <h4 className="text-title-md font-bold text-black dark:text-white my-3">
        {domain} || DT-{id.slice(-4)}
      </h4>
      <div className="my-2">
        <hr className="text-custom-gray" />
      </div>
        <p className=" text-center text-sm text-slate-300">
          Please fill out the onboarding for this project.
        </p>
        <div className="flex justify-center items-center">
        <button onClick={handleBoarding} className="w-2/3 mt-3 py-2 px-4 bg-blue-500 text-white rounded-md">
            Go to onboarding
        </button>
    </div>
      </div>
    );
  }

  return (
    <div  onClick={handleProjectTask} className="cursor-pointer rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        {children}
      </div>
      <h4 className="text-title-md font-bold text-black dark:text-white my-3">
        {domain} || DT-{id.slice(-4)}
      </h4>
      <div className="my-6">
        <hr className="text-custom-gray" />
      </div>
      <div className="mt-3 mb-3 flex items-end justify-between">
         <div className="text-sm font-medium text-dark-gray">Text <div className="text-meta-5">{title}/1</div></div>
         <div className="text-sm font-medium text-dark-gray">Created on: <div className="text-meta-3 flex justify-end">{createdOn}</div></div>
         
      </div>
      <div className="mt-3 mb-3 flex items-end justify-end">
         
         <div className="text-sm font-medium text-dark-gray">Orders per month <div className="text-meta-5 flex justify-end">{ordersPerMonth}</div></div>
      </div>
      <div className="mt-3 mb-3 flex items-end justify-between">
         <div className="text-sm font-medium text-dark-gray"> Maximum Orders: <div className="text-meta-5">{maximumOrders}</div></div>
         <div className="text-sm font-medium text-dark-gray">Project Duration <div className="text-meta-5 flex justify-end">{projectDuration}</div></div>
      </div>
     
    </div>
  );
};

export default CardDataStats;
