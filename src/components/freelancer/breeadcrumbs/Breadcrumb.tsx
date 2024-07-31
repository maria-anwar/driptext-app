import React, { Link } from 'react-router-dom';
interface BreadcrumbProps {
  pageName: string;
  pageData:string;
}
const Breadcrumb = ({ pageName,pageData }: BreadcrumbProps) => {
  return (
    <div className="mb-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="w-full 2xl:max-w-max">
          <h1 className="text-title-md font-bold text-black dark:text-white mb-2">
            {pageName}
          </h1>
          <p className="text-dark-gray">{pageData}</p>
        </div>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" to="/freelancer-dashboard">
              Dashboard /
            </Link>
          </li>
          <li className="font-medium text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
