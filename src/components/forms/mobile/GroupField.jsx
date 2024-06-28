import React from "react";

export const GroupField = ({
  label,
  type,
  placeholder,
  name,
  id,
  value,
  onChange,
  errors,
}) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <label className="text-white">
          {label}
          <sup className="text-red-600">*</sup>
        </label>
        <input
          className="w-full px-2 xs:px-2.5 py-2 focus:outline-none font-normal"
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          errors={errors}
        />
        {errors ? <div className="text-red-700">{errors}</div> : ""}
        {/* <div className="text-red-700">'Erroe here'</div> */}
      </div>
    </>
  );
};
