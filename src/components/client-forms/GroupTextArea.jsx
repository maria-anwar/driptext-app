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
      <div className="w-full flex flex-col gap-1">
        <label className="text-custom-black text-sm 3xl:text-[15px] font-semibold  2xl:font-semibold">
          {label}
          <span className="text-red-600 text:lg 2xl:text-[17px] mt-6 pl-1">*</span>
        </label>
        <textarea
          className="w-full text-custom-black text-xs xs:text-sm h-24 px-2 xs:px-2.5 py-2 font-normal focus:outline-none focus:ring-0 appearance-none rounded-xl"
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          errors={errors}
        />
        {errors ? <div className="text-sm text-red-700">{errors}</div> : ""}
        {/* <div className="text-red-700">'Erroe here'</div> */}
      </div>
    </>
  );
};
