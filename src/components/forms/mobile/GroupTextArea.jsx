import React from "react";

export const GroupTextArea = ({
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
        <textarea
          className="w-full h-24 px-2 xs:px-2.5 py-2 font-normal focus:outline-none focus:ring-0 appearance-none "
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
