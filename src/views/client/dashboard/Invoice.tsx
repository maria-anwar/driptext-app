import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import axios from "axios";
import InvoiceTable from "../../../components/client/tables/InvoiceTable";

const Invoice: React.FC = () => {
  const { t } = useTranslation();
  useTitle("Invoice");
  const user = useSelector<any>((state) => state.user);
  const [loading, setLoading] = useState<boolean>(true);
  const [invoice, seInVoices] = useState([]);

  console.log(user.user.data.user.email);

  useEffect(() => {
    if (user) {
      getInVoices();
    }
  }, [user]);

  const getInVoices = async () => {
    let token = user?.user?.token;
    axios.defaults.headers.common["access-token"] = token;
    let payload = {
      email: user?.user?.data?.user?.email,
    };
    await axios
      .post(`${import.meta.env.VITE_DB_URL}/users/getClientInvoice`, payload)
      .then((response) => {
        console.log(response.data.data);
        seInVoices(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching project details:", err);
        setLoading(false);
      });
  };

  return (
    <div className="mx-auto 3xl:px-4">
      <div className="flex justify-between items-center relative">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white pb-2 lg:pb-0">
          {t("Invoice.invoice")}
        </h2>
      </div>

      {loading ? (
        <div className="mt-4 rounded-sm border border-stroke pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 w-full bg-slate-200 h-[350px] animate-pulse"></div>
      ) : (
        <InvoiceTable InVoiceData={invoice} />
      )}
    </div>
  );
};

export default Invoice;
