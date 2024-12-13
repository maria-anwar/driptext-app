import React from "react";

export const GroupDropdownField = ({
  label,
  type,
  placeholder,
  name,
  id,
  value,
  onChange,
  errors,
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
  option7,
  disabled
}) => {
  console.log("value select: ", value)
  return (
    <>
      <div className="w-full flex flex-col gap-1.5">
        <label className="text-custom-black text-sm lg:text-sm font-semibold  2xl:font-semibold">
          {label}
          <span className="text-red-600 text:lg 2xl:text-[17px] -mb-10 pl-1">*</span>
        </label>
        <div className="relative">
          <select
            className={`w-full bg-white text-custom-black text-sm 2xl:text-base px-2 xs:px-3.5 py-3 rounded-xl focus:ring-none focus:outline-none appearance-none   dark:placeholder-gray-400`}
            type={type}
            placeholder={placeholder}
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            errors={errors}
            disabled={disabled}
          >
            <option   value={option1}>{option1}</option>
            <option value={option2}>{option2}</option>
            <option value={option3}>{option3}</option>
            {option4 && (<option value={option4}>{option4}</option>)}
            {option5 && (<option value={option5}>{option5}</option>)}
            {option6 && (<option value={option6}>{option6}</option>)}
            {option7 && (<option value={option7}>{option7}</option>)}
            
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
