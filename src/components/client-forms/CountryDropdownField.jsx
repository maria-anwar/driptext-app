import React from "react";

export const CountryDropdownField = ({
  label,
  type,
  placeholder,
  name,
  id,
  value,
  onChange,
  errors,
  countriesList,
}) => {
  return (
    <>
      <div className="w-full flex flex-col gap-1">
        <label className="text-custom-black text-sm lg:text-sm font-semibold  2xl:font-semibold">
          {label}
          <span className="text-red-600 text:lg 2xl:text-[17px] -mb-10 pl-1">*</span>
        </label>
        <div className="relative">
          <select
            className=" w-full bg-white text-custom-black text-sm 2xl:text-base px-2 xs:px-3.5 py-3 rounded-xl focus:ring-none focus:outline-none appearance-none   dark:placeholder-gray-400"
            type={type}
            placeholder={placeholder}
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            errors={errors}
          >
            {
              countriesList.map((country,index)=>{
                return(
                  <option selected={country.value}>{country.name}</option>
                )
              })
            }
            
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            {/* Custom arrow icon */}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>

        {errors ? <div className="text-sm text-red-700">{errors}</div> : ""}
        {/* <div className="text-red-700">'Erroe here'</div> */}
      </div>
    </>
  );
};
