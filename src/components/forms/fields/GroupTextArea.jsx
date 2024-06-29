import React from 'react'

const GroupTextArea = ({ type, label, name, id, value, onChange, errors, placeholder }) => {
  return (
    <div className="w-full flex flex-col gap-1.5">
        <label className="text-gray-700 font-medium">
          {label}
          <span className="text-red-600 text-base 3xl:text-lg 4xl:text-xl mt-6 pl-1">*</span>
        </label>
        <textarea
          className="w-full h-24 3xl:h-28 rounded-md py-2 px-3 text-dark-blue font-normal text-sm border border-gray-200 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-0 appearance-none "
          placeholder={placeholder}
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          errors={errors}
        />
        {errors ? <div className="text-red-500">{errors}</div> : ""}
      </div>
  )
}

export default GroupTextArea