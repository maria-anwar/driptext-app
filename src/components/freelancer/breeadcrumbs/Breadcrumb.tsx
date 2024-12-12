import { useTranslation } from "react-i18next";
import React, { Link } from "react-router-dom";
interface BreadcrumbProps {
  pageName: string;
  pageData: string;
}
const Breadcrumb = ({ pageName, pageData }: BreadcrumbProps) => {
  const { t } = useTranslation();
  return (
    <div className="mb-2 flex flex-col gap-5 justify-start item-start">
      {/* <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" to="/freelancer-dashboard">
             {t("task.breadcrumb.dashboard")}
            </Link>
          </li>
          <li className="font-medium text-primary">{pageName}</li>
        </ol>
      </nav> */}
      <div className="w-full 2xl:max-w-max pb-2">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white pb-2 lg:pb-0">
          {pageName}
        </h2>
        <p className="text-dark-gray">{pageData}</p>
      </div>
    </div>
  );
};

export default Breadcrumb;
