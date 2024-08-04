import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../../components/freelancer/breeadcrumbs/Breadcrumb";
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
      <div className="2xl:px-6 3xl:px-10">
        <Breadcrumb
          pageName="Earnings"
          pageData="Here you can see all the earning from all your DripTexts projects."
        />
        <div className="rounded-sm border border-stroke bg-white pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto ">
            <table className="w-full table-auto ">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4 ">
                  <th className="min-w-[140px]  py-4 px-4 font-medium text-black dark:text-white ">
                    Performance Period
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-medium  text-black dark:text-white">
                    Order Number
                  </th>
                  <th className="min-w-[130px] py-4 px-4 font-medium text-black dark:text-white">
                    Date
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    Role
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    Article/Keyword
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    Target Number of Words
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    Actual Number of Words
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    Billed Words
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    Difference
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((value) => (
                  <tr className="text-left" key={value.orderNumber}>
                    <td className="border-b  border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black  dark:text-white">
                        {value.performancePeriod}
                      </p>
                    </td>

                    <td className="border-b border-[#eee]  py-5 px-4 dark:border-strokedark">
                      <Link
                        to="#"
                        className="text-blue-500  text-sm"
                        onClick={() => alert(value.orderNumber)}
                      >
                        {value.orderNumber}
                      </Link>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">{value.date}</p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">{value.role}</p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {value.articleKeyword}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {value.targetNumberOfWords}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {value.actualNumberOfWords}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {value.billedWords}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {value.difference}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {value.price}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
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
