import React, { useEffect, useState } from "react";
import Breadcrumb from "../../../../components/freelancer/breeadcrumbs/Breadcrumb";
import axios from "axios";
import { useSelector } from "react-redux";
import moment from "moment";
import { Earn } from "../../../../components/freelancer/Type/types";

const Earning: React.FC = () => {
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
      console.log("projectDataArray", projectDataArray);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching project details:", err);
      setLoading(false);
    }
  };
  
  const formatDate = (date: string, format: string = "MMM  YYYY") => {
    return moment(date).format(format);
  };

  return (
    <>
      <div className="2xl:px-6 3xl:px-10">
        <Breadcrumb
          pageName="Earnings"
          pageData="Here you can see all the earning from all your DripTexts projects."
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
                      Task Id
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
                      Difference
                    </th>
                    <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                      Billed Words
                    </th>
                   
                    <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                      Price
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
                          {earn?.finalize ?  Number(earn?.difference)?.toFixed(0) : 'Available after completion'}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className={`${earn?.finalize? "text-yellow-500":"text-black dark:text-white"}`}>
                            {earn?.finalize ? Number(earn?.billedWords)?.toFixed(0) : 'Available after completion'}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <p className={`${earn?.finalize? "text-green-500":"text-black dark:text-white"}`}>
                          {earn?.finalize ? '€ ' +earn?.price.toFixed(4) : 'Available after completion'}
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
                          No earning data available
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
