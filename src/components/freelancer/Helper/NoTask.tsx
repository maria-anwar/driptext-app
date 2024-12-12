import React from "react";

const NoTask: React.FC<{label:string}> = ({label}) => {
  return (
    <>
      <div className="flex justify-center items-center mt-15">
        {/* <img
          src="/empty.png"
          alt="No Active Task"
          className="w-32 h-32 xl:w-48 xl:h-48"
        />{" "} */}
        <p className="text-center  text-cardHeading font-light text-lg lg:text-2xl xl:text-3xl  pt-6 pb-8">
      {label}
      </p>
      </div>
      
    </>
  );
};

export default NoTask;
