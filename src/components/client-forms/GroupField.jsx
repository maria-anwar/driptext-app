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
        <label className="text-custom-black text-sm font-semibold">
          {label}
          <sup className="text-red-600">*</sup>
        </label>
        <input
          className="w-full text-[#e5e5e7] text-sm px-2 xs:px-3.5 font-extralight py-3 focus:outline-none focus:ring-none  rounded-xl"
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
