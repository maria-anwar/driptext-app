import React from "react";

 const GroupField = ({
  label,
  type,
  placeholder,
  name,
  id,
  value,
  onChange,
  errors,
  disabled,
}) => {
  return (
    <>
      <div className="w-full flex flex-col gap-1">
        <label                className="pb-2 block text-sm font-medium text-black dark:text-white pt-4"
>
          {label}
          <span className="text-red-600 text:lg 2xl:text-[17px] mt-6 pl-1">*</span>
        </label>
        <input
                          className="w-full rounded border border-stroke bg-gray py-3 pl-6 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          errors={errors}
          disabled={disabled}
        />
        {errors ? <div className="text-sm text-red-700">{errors}</div> : ""}
        {/* <div className="text-red-700">'Erroe here'</div> */}
      </div>
    </>
  );
};

export default GroupField;