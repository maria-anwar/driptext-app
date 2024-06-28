import React from "react";

const GroupField = ({ type, label, name, id, value, onChange, errors }) => {
  return (
    <>
      <div className="w-full flex flex-col gap-1.5">
        <label className="text-gray-500 font-normal">
          {label}
          <span className="text-red-600 text-xl mt-6 pl-1">*</span>
        </label>
        <input
          className="w-full rounded-md py-2 px-3 border border-gray-200 focus:border-2 focus:border-blue-900 focus:outline-none focus:ring-0 appearance-none "
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          errors={errors}
        />
        {/* {errors ? <div className="text-red-500">{errors}</div> : ""} */}
      </div>
    </>
  );
};

export default GroupField;
