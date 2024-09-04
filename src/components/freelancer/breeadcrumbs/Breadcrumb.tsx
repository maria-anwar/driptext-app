import React, { Link } from 'react-router-dom';
interface BreadcrumbProps {
  pageName: string;
  pageData:string;
}
const Breadcrumb = ({ pageName,pageData }: BreadcrumbProps) => {
  return (
    <div className="mb-2 flex flex-col gap-5 justify-start item-start">
      
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
      <div className="w-full 2xl:max-w-max pb-2">
          <h1 className="text-title-md font-bold text-black dark:text-white mb-2">
            {pageName}
          </h1>
          <p className="text-dark-gray">{pageData}</p>
        </div>
    </div>
  );
};

export default Breadcrumb;
