import React, { useEffect, useState } from "react";
import Breadcrumb from "../../../../components/freelancer/breeadcrumbs/Breadcrumb";
import axios from "axios";
import { useSelector } from "react-redux";
import moment from "moment";
import { Earn } from "../../../../components/freelancer/Type/types";
import useTitle from "../../../../hooks/useTitle";
import { useTranslation } from "react-i18next";

const Earning: React.FC = () => {
  const { t } = useTranslation();
  useTitle(t("earning.pageTitle"));
  const user = useSelector((state) => state.user);
  const [earningData, setEarning] = useState<Earn[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      getEarning();
    }
  }, [user]);

  const getEarning = async () => {
    setLoading(true);
    try {
      const userId = user?.user?.data?.user?._id;
      const userToken = user?.user?.token;
      axios.defaults.headers.common["access-token"] = userToken;
      const payload = { freelancerId: userId };
      const response = await axios.post(
        `${import.meta.env.VITE_DB_URL}/freelancer/getEarnings`,
        payload
      );
      const projectDataArray = response.data.data;
      setEarning(projectDataArray);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching project details:", err);
      setLoading(false);
    }
  };
  
  const formatDate = (date: string, format: string = "DD.MM.YYYY") => {
    return moment(date).format(format);
  };
  const formatCurrency = (value) => {
    try {
      if (value == null || isNaN(value)) return `${value} €`;
      const number = parseFloat(value).toFixed(2); 
      let [integer, decimal] = number.split('.'); 
      integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); 
      return `${integer},${decimal} €`; 
    } catch (error) {
      return  `${value} €`; 
    }
  };

  return (
    <>
      <div className="2xl:px-6 3xl:px-10">
        <Breadcrumb
          pageName={t("earning.breadcrumb.pageName")}
          pageData={t("earning.breadcrumb.pageData")}
        />
        {loading ? (
          <div className="rounded-sm border border-stroke pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 mt-10 w-full bg-slate-200 h-[460px] md:h-[600px] animate-pulse"></div>
        ) : (
          <div className="rounded-sm border border-stroke bg-white pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="max-w-full overflow-x-auto ">
              <table className="w-full table-auto ">
                <thead>
                  <tr className="bg-gray-2 text-left dark:bg-meta-4 ">
                    <th className="min-w-[120px] py-4 px-4 font-medium  text-black dark:text-white">
                    {t("earning.tableHeaders.taskId")}
                    </th>
                    <th className="min-w-[130px] py-4 px-4 font-medium text-black dark:text-white">
                    {t("earning.tableHeaders.date")}
                    </th>
                    <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    {t("earning.tableHeaders.role")}
                    </th>
                    <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    {t("earning.tableHeaders.articleKeyword")}
                    </th>
                    <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    {t("earning.tableHeaders.targetWords")}
                    </th>
                    <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    {t("earning.tableHeaders.actualWords")}
                    </th>
                    <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    {t("earning.tableHeaders.difference")}
                    </th>
                    <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    {t("earning.tableHeaders.billedWords")}
                    </th>
                   
                    <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    {t("earning.tableHeaders.price")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {earningData.length > 0 ? (
                    earningData.map((earn, index) => (
                      <tr className="text-left" key={earn?._id}>
                        <td className="border-b border-[#eee]  py-5 px-4 dark:border-strokedark">
                          <a
                          href={earn?.task?.fileLink}
                          target="_blank"
                            className="text-blue-500  text-sm"
                          >
                            {earn?.task?.taskName}
                          </a>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <p className="text-black dark:text-white">
                          {formatDate(earn?.date)}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <p className="text-black dark:text-white">
                          {earn?.role}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <p className="text-black dark:text-white">
                          {earn?.task?.keywords}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <p className="text-black dark:text-white">
                          {earn?.task?.desiredNumberOfWords}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <p className="text-black dark:text-white">
                          {earn?.task?.actualNumberOfWords}
                          </p>
                        </td>
                       
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className={`${earn?.finalize? "text-red-500":"text-black dark:text-white"}`}>
                        {earn?.finalize ? `${Number(earn?.difference)>0? '+':''}${Number(earn?.difference).toFixed(2)}%` : t("earning.finalizeText.price")}
                        </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className={`text-black dark:text-white`}>
                            {earn?.finalize ? Number(earn?.billedWords)?.toFixed(0) : t("earning.finalizeText.price")}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <p className={`text-black dark:text-white`}>
                          {earn?.finalize ? formatCurrency(earn?.price) : t("earning.finalizeText.price")}
                          </p>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={10}
                        className="border-b border-[#eee] py-5 px-4 dark:border-strokedark"
                      >
                        <p className="text-black dark:text-white text-left">
                         {t("earning.noEarnings")}
                        </p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Earning;
