import React from 'react'

const CrossCheck:React.FC<{isChecked:boolean}> = ({isChecked}) => {
  return (
    <div className="relative">
      <input
        type="checkbox"
        id="checkboxLabelThree"
        className="sr-only"
        checked={isChecked}
        readOnly
      />
      <div
        className={`box mr-4 flex h-4 w-4 items-center justify-center rounded border
        border-red-400 bg-gray-100 dark:bg-transparent`}
      >
        <span className={`text-red-500 !opacity-100`}>
          <svg
            className="h-3.5 w-3.5 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  )
}

export default CrossCheck