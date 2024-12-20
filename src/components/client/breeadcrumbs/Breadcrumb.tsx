import { useTranslation } from "react-i18next";
import React, { Link } from "react-router-dom";
interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  const { t } = useTranslation();
  return (
    <div className="mb-2 flex flex-col gap-5 justify-start item-start">
      {/* <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" to="/client-dashboard">
           {t("project.breadcrumb.dashboard")}
            </Link>
          </li>
          <li className="font-medium text-primary">{pageName}</li>
        </ol>
      </nav> */}
      <h2 className="text-title-md2 font-semibold text-black dark:text-white pb-3">
        {pageName}
      </h2>
    </div>
  );
};

export default Breadcrumb;
