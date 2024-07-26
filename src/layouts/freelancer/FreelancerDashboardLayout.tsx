import React, { useState, ReactNode, useContext } from "react";
import Header from "../../components/freelancer/Header"
import Sidebar from "../../components/freelancer/Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const FreelancerDashboardLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
 
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">

        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
         
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            {/* <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 border">
              <Outlet/>
            </div> */}
            <div className="w-full p-4 md:p-6 2xl:p-10">
              {/* {children} */}
              <Outlet/>
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default FreelancerDashboardLayout;
