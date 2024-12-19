import React, { useState } from "react";
import { Pagination } from "antd";
import "antd/dist/reset.css";
import "./custompagination.css";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { set } from "date-fns";
import { useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";

interface KpiTableProps {
  InVoiceData: any;
}

const InvoiceTable: React.FC<KpiTableProps> = ({ InVoiceData }) => {
  const { t, i18n } = useTranslation();
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setLoading] = useState<boolean>(false);
  const user = useSelector<any>((state) => state.user);
  const currentLanguage = i18n.language;

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const offset = (page - 1) * rowsPerPage;
  const paginatedInVoices = InVoiceData.slice(offset, offset + rowsPerPage);

  const dateFormater = (timestamp: number) => {
    if (currentLanguage === "de") {
      const date = new Date(timestamp * 1000);
      return date.toLocaleString("de-DE", { month: "long", year: "numeric" });
    } else {
      const date = new Date(timestamp * 1000);
      return date.toLocaleString("en-US", { month: "long", year: "numeric" });
    }
  };

  function formatNumber(number: number) {
    return new Intl.NumberFormat("de-DE").format(number);
  }

  const handleDownload = async (id: string) => {
    setLoading(true);
    let token = user?.user?.token;
    axios.defaults.headers.common["access-token"] = token;
    let payload = {
      invoice_id: id,
    };
    console.log(payload);
    await axios
      .post(`${import.meta.env.VITE_DB_URL}/users/getInvoiceUrl`, payload)
      .then((response) => {
        console.log(response.data.data);
        window.open(response.data.data.download.download_url, "_self");
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching project details:", err);
        setLoading(false);
      });
  };

  return (
    <div className="mt-6">
      <div className="rounded-sm border border-stroke bg-white pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 ">
        <div className="max-w-full overflow-x-auto px-4 py-2">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-3 text-left dark:bg-meta-4">
                <th className="min-w-[160px] py-4 px-4 font-semibold text-black dark:text-white">
                  {t("Invoice.invoiceId")}
                </th>
                <th className="min-w-[200px] py-4 px-4 font-semibold text-black dark:text-white">
                  {t("Invoice.name")}
                </th>
                <th className=" min-w-[150px] py-4 px-4 font-semibold text-black dark:text-white">
                  {t("Invoice.date")}
                </th>
                <th className=" min-w-[200px] py-4 px-4 font-semibold text-black dark:text-white">
                  {t("Invoice.plan")}
                </th>

                <th className=" min-w-[170px] py-4 px-4 font-semibold text-black dark:text-white">
                  <div className="flex items-center justify-center">
                    {t("Invoice.amountPaid")}
                  </div>
                </th>
                <th className=" min-w-[180px] py-4 px-4 font-semibold text-black dark:text-white">
                  {t("Invoice.download")}
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedInVoices.map((data) => (
                <tr className="text-left" key={data?._id}>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white ">
                      {data?.subscriptionData?.invoice?.id}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white ">
                      {
                        data?.subscriptionData?.invoice?.billing_address
                          ?.first_name
                      }{" "}
                      {
                        data?.subscriptionData?.invoice?.billing_address
                          ?.last_name
                      }
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white ">
                      {dateFormater(data?.subscriptionData?.invoice?.date)}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white capitalize ">
                      {
                        data?.subscriptionData?.invoice?.line_items[0]
                          ?.description
                      }
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <div className="flex items-center justify-center">
                      <p className="text-black dark:text-white  ">
                        {formatNumber(
                          data?.subscriptionData?.invoice?.total / 100
                        )}{" "}
                        €
                      </p>
                    </div>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <div
                      className={
                        "bg-blue-500 hover:bg-blue-500/90 w-32 h-9 flex justify-center items-center rounded cursor-pointer text-white text-base font-medium text-center py-1 px-2"
                      }
                      onClick={() =>
                        handleDownload(data?.subscriptionData?.invoice?.id)
                      }
                    >
                      {t("Invoice.download")}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 mb-2 flex justify-between items-center">
            <select
              className="p-2 ring-1 ml-2  ring-slate-200 bg-transparent rounded outline-none shadow-2 "
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
            >
              <option className="dark:text-black " value={5}>
                5
              </option>
              <option className="dark:text-black" value={10}>
                10
              </option>
              <option className="dark:text-black" value={25}>
                25
              </option>
              <option className="dark:text-black" value={50}>
                50
              </option>
            </select>
            <Pagination
              current={page}
              pageSize={rowsPerPage}
              total={InVoiceData.length}
              onChange={handlePageChange}
              className="ant-pagination"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTable;
