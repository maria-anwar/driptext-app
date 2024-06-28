import  { useState } from "react";

const Accordion = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full mb-6">
      <div
        className="flex justify-between items-center border-b border-white overflow-hidden pb-2 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-base font-normal text-white pr-10">{props.title}</h3>
        <span className="text-3xl text-white">{isOpen ? `-` : `+`}</span>
      </div>
      <div
        className={`${
          isOpen ? "h-auto py-8" : "h-0"
        } text-sm text-white transition-height duration-500 ease-in-out overflow-hidden`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Accordion;
