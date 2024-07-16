import React from "react";
import { Product } from "../../../types/products";
import Breadcrumb from "../breeadcrumbs/Breadcrumb";
import { Checkbox } from "@material-tailwind/react";
import TableCheckbox from "../TableCheckbox";
import BlueBtn from "../buttons/BlueBtn";
import DarkBtn from "../buttons/DarkBtn";
import { Link } from "react-router-dom";
import CheckboxThree from "../buttons/CheckboxThree";

const productData: Product[] = [
  {
    select: "published",
    orderId: "96-DT-1",
    title: "Apple Watch Series 7",
    duration: "June 2024",
    keyword: "Keyword",
    status: "Published",
  },
  {
    select: "published",
    orderId: "96-DT-2",
    title: "Apple Watch Series 7",
    duration: "June 2024",
    keyword: "Keyword",
    status: "Published",
  },
  {
    select: "Unpublished",
    orderId: "96-DT-3",
    title: "Apple Watch Series 7",
    duration: "June 2024",
    keyword: "Keyword",
    status: "Ready to Start",
  },
  {
    select: "unselect",
    orderId: "96-DT-4",
    title: "Apple Watch Series 7",
    duration: "June 2024",
    keyword: "Keyword",
    status: "Ready to Start",
  },
];

const TextTable = () => {
  return (
    <>
      <div className="2xl:px-6 3xl:px-10 ">
        <Breadcrumb pageName="Project Tasks" />
        <div className="flex flex-col gap-6">
          <div className="w-full flex justify-start 2xl:justify-end ">
            <DarkBtn
              name={"Extend Monthly Package"}
              url={"https://driptext.de/buchung/"}
            />
          </div>
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="grid border-t border-stroke py-4.5 px-4 dark:border-strokedark grid-cols-12 sm:grid-cols-10 3xl:grid-cols-9 md:px-6 2xl:px-7.5">
              <div className="col-span-2 flex items-center">
                <p className="font-medium">Order Id</p>
              </div>

              {/* <div className="col-span-2 hidden items-center sm:flex">
                <p className="font-medium">Text Title</p>
              </div> */}

              <div className="col-span-3 xl:col-span-2 flex items-center">
                <p className="font-medium">Service Duration</p>
              </div>
              <div className="col-span-3 xl:col-span-2 flex items-center">
                <p className="font-medium">Keyword</p>
              </div>
              <div className="col-span-2 xl:col-span-1 flex items-center">
                <p className="font-medium"></p>
              </div>
              <div className="col-span-3 xl:col-span-2 flex items-center">
                <p className="font-medium">Status</p>
              </div>
            </div>

            {productData.map((product, key) => (
              <div
                className="grid grid-cols-10 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-10 3xl:grid-cols-9 md:px-6 2xl:px-7.5"
                key={key}
              >
                <Link to="#" className="col-span-2 hidden items-center sm:flex">
                  <p className="text-sm text-blue-500 dark:text-white">
                    {product.orderId}
                  </p>
                </Link>

                {/* <div className="col-span-2 hidden items-center sm:flex">
                  <p className="text-sm text-black dark:text-white">
                    {product.title}
                  </p>
                </div> */}

                <div className="col-span-3 xl:col-span-2  flex items-center">
                  <p className="text-sm text-black dark:text-white">
                    {product.duration}
                  </p>
                </div>
                <div className="col-span-3 xl:col-span-2 flex items-center">
                  <p className="text-sm text-black dark:text-white">
                    {product.keyword}
                  </p>
                </div>
                <div className="col-span-2 xl:col-span-1 hidden items-center sm:flex">
                  <p className="inline-flex items-center p-3 rounded-full cursor-pointer text-sm text-black dark:text-white">
                    {
                      product.status === 'Published'? ( <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-200 rounded focus:ring-blue-500 "
                      ></input> ) : product.status === 'Unpublished' ? ( <CheckboxThree/>) : (<input
                        disabled
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-200 rounded focus:ring-blue-500 "
                      ></input> )
                    }
                   
                    
                    {/* <label
                      className="relative flex items-center p-3 rounded-full cursor-pointer"
                      htmlFor="custom"
                    >
                      <input
                        type="checkbox"
                        className="peer relative appearance-none w-5 h-5 border rounded-md border-blue-gray-200 cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-gray-900 checked:border-gray-900 checked:before:bg-gray-900"
                        id="custom"
                      />
                      <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 h-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label> */}
                    
                  </p>
                </div>
                <div className="col-span-2 xl:col-span-2 flex items-center">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                      product.status === "Published"
                        ? "bg-success text-success"
                        : product.status === "Completed"
                        ? "bg-danger text-danger"
                        : "bg-warning text-warning"
                    }`}
                  >
                    {product.status}
                  </p>
                  {/* <p className="text-sm text-meta-3">${product.status}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TextTable;
