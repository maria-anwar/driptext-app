import React from "react";
import { Link } from "react-router-dom";

const TasksCard: React.FC = () => {

  return (
    <>
      <div className=" w-full my-5 rounded-sm border border-stroke bg-white py-1 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="py-2 text-white text-xl font-semibold">
          <h4>63-AM Keyword</h4>
        </div>
        <div className="flex justify-between items-center pb-4">
          <div className="flex text-sm">
            <div className="flex flex-col pr-3">
              <span className="text-base font-medium text-slate-200">PROJECTS</span>
              <span>63-AM</span>
            </div>
            <div className="flex flex-col px-3">
              <span className="text-base font-medium text-slate-200">DEADLINE</span>
              <span className="bg-red-600 text-white px-2 rounded-full">2 month ago</span>
            </div>
            <div className="flex flex-col px-3">
              <span className="text-base font-medium text-slate-200">TASK STATUS</span>
              <span className="text-yellow-500">Ready to start</span>
            </div>
            <div className="flex flex-col px-3">
              <span className="text-base font-medium text-slate-200">ACTIVE ROLE</span>
              <span className="font-medium">TEXTER</span>
            </div>
            <div className="flex flex-col px-3">
              <span className="text-base font-medium text-slate-200">GOOGLE-LINK</span>
              <span className="text-sky-500">
                <Link to={""}>63-AM-1</Link>
              </span>
            </div>
            <div className="flex flex-col px-3">
              <span className="text-base font-medium text-slate-200">WORDCOUNT</span>
              <span className="font-medium">0/1500</span>
            </div>
          </div>
          <div>
            <button className="mx-2.5 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">Accept</button>
            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">Decline</button>
          </div>
          
        </div>
        <div onClick={()=>alert('show more details')} className="flex justify-center items-center border-t py-2 text-white cursor-pointer font-medium">
            <span>Show more details</span>
          </div>
      </div>
    </>
  );
};

export default TasksCard;
