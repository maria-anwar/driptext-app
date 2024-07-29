import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardDataStats from "../../../components/client/CardDataStats";
import DarkBtn from "../../../components/client/buttons/DarkBtn";
import axios from "axios";

const Earning: React.FC = () => {
  const tableData = [
    {
      performancePeriod: "2024 Q1",
      orderNumber: "12345",
      date: "2024-01-15",
      role: "Content Writer",
      articleKeyword: "SEO Optimization",
      targetNumberOfWords: 500,
      actualNumberOfWords: 550,
      billedWords: 550,
      difference: 50,
      price: "$100",
    },
    {
      performancePeriod: "2024 Q1",
      orderNumber: "12346",
      date: "2024-01-20",
      role: "Editor",
      articleKeyword: "Market Analysis",
      targetNumberOfWords: 800,
      actualNumberOfWords: 750,
      billedWords: 750,
      difference: -50,
      price: "$120",
    },
    {
      performancePeriod: "2024 Q1",
      orderNumber: "12347",
      date: "2024-01-25",
      role: "Content Writer",
      articleKeyword: "Product Review",
      targetNumberOfWords: 600,
      actualNumberOfWords: 600,
      billedWords: 600,
      difference: 0,
      price: "$110",
    },
  ];

  return (
    <>
      <div className="w-full flex flex-col gap-3 2xl:gap-0 2xl:flex-row 2xl:justify-between items-center 4xl:px-14 mb-3 4xl:mb-6 mt-2 lg:mt-1">
        <div className="w-full 2xl:max-w-max">
          <h1 className="text-title-md font-bold text-black dark:text-white mb-2">
            Earning
          </h1>
          <p className="text-dark-gray">
            Here you can see all the earning from all your DripTexts projects.
          </p>
        </div>
        <div className=" w-full 2xl:max-w-max flex justify-start 2xl:justify-end mt-2 ">
          {/* <DarkBtn name={"Add Project"} url={"/onboarding-probetext"} /> */}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className=" w-full border-collapse rounded-sm border dark:border-stroke bg-slate-50 py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
          <thead>
            <tr className="dark:bg-gray-100 border-b text-left">
              <th className="px-4 py-2 dark:text-white">Performance Period</th>
              <th className="px-4 py-2 dark:text-white">Order Number</th>
              <th className="px-4 py-2 dark:text-white">Date</th>
              <th className="px-4 py-2 dark:text-white">Role</th>
              <th className="px-4 py-2 dark:text-white">Article/Keyword</th>
              <th className="px-4 py-2 dark:text-white">Target Number of Words</th>
              <th className="px-4 py-2 dark:dark:text-white">Actual Number of Words</th>
              <th className="px-4 py-2 text-white">Billed Words</th>
              <th className="px-4 py-2 dark:text-white">Difference</th>
              <th className="px-4 py-2 dark:text-white">Price</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((value) => (
              <tr
                key={value.orderNumber}
                className="border-b hover:bg-slate-200 hover:dark:bg-boxdark-2 cursor-text"
              >
                <td className="px-4 py-2">{value.performancePeriod}</td>
                <td className="px-4 py-2"><Link onClick={()=>alert(value.orderNumber)} to={''}>{value.orderNumber}</Link></td>
                <td className="px-4 py-2">{value.date}</td>
                <td className="px-4 py-2">{value.role}</td>
                <td className="px-4 py-2">{value.articleKeyword}</td>
                <td className="px-4 py-2">{value.targetNumberOfWords}</td>
                <td className="px-4 py-2">{value.actualNumberOfWords}</td>
                <td className="px-4 py-2">{value.billedWords}</td>
                <td className="px-4 py-2">{value.difference}</td>
                <td className="px-4 py-2">{value.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* {tasks.map((task, index) => {
          return (
            <CardDataStats
              title="Texts"
              domain = {task.domain}
              texts={task.texts}
              createdOn={task.createdOn}
              servicePeriod={task.servicePeriod}
              ordersPerMonth= {task.ordersPerMonth}
              maximumOrders= {task.maximumOrders}
              projectDuration={task.projectDuration}
              rate="0.43%"
              levelUp
            >
              <svg
                className="fill-primary dark:fill-white"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.43425 7.5093H2.278C2.44675 7.5093 2.55925 7.3968 2.58737 7.31243L2.98112 6.32805H5.90612L6.27175 7.31243C6.328 7.48118 6.46862 7.5093 6.58112 7.5093H7.453C7.76237 7.48118 7.87487 7.25618 7.76237 7.03118L5.428 1.4343C5.37175 1.26555 5.3155 1.23743 5.14675 1.23743H3.88112C3.76862 1.23743 3.59987 1.29368 3.57175 1.4343L1.153 7.08743C1.0405 7.2843 1.20925 7.5093 1.43425 7.5093ZM4.47175 2.98118L5.3155 5.17493H3.59987L4.47175 2.98118Z"
                  fill=""
                />
                <path
                  d="M10.1249 2.5031H16.8749C17.2124 2.5031 17.5218 2.22185 17.5218 1.85623C17.5218 1.4906 17.2405 1.20935 16.8749 1.20935H10.1249C9.7874 1.20935 9.47803 1.4906 9.47803 1.85623C9.47803 2.22185 9.75928 2.5031 10.1249 2.5031Z"
                  fill=""
                />
                <path
                  d="M16.8749 6.21558H10.1249C9.7874 6.21558 9.47803 6.49683 9.47803 6.86245C9.47803 7.22808 9.75928 7.50933 10.1249 7.50933H16.8749C17.2124 7.50933 17.5218 7.22808 17.5218 6.86245C17.5218 6.49683 17.2124 6.21558 16.8749 6.21558Z"
                  fill=""
                />
                <path
                  d="M16.875 11.1656H1.77187C1.43438 11.1656 1.125 11.4469 1.125 11.8125C1.125 12.1781 1.40625 12.4594 1.77187 12.4594H16.875C17.2125 12.4594 17.5219 12.1781 17.5219 11.8125C17.5219 11.4469 17.2125 11.1656 16.875 11.1656Z"
                  fill=""
                />
                <path
                  d="M16.875 16.1156H1.77187C1.43438 16.1156 1.125 16.3969 1.125 16.7625C1.125 17.1281 1.40625 17.4094 1.77187 17.4094H16.875C17.2125 17.4094 17.5219 17.1281 17.5219 16.7625C17.5219 16.3969 17.2125 16.1156 16.875 16.1156Z"
                  fill=""
                />
              </svg>
            </CardDataStats>
          );
        })} */}
    </>
  );
};

export default Earning;
