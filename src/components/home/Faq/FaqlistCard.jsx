import { useState } from "react";

const FaqlistCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaqlistCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <div className="w-full mb-6">
      <div
        className="flex justify-between items-center border rounded-lg shadow-sm overflow-hidden px-4 py-4 cursor-pointer"
        onClick={toggleFaqlistCard}
      >
        <h3 className="text-base font-normal text-gray-700 pr-10">{props.title}</h3>
        <span className="text-3xl text-gray-700">{isOpen ? `-` : `+`}</span>
      </div>
      <div
        className={`${
          isOpen ? "h-auto py-8" : "h-0"
        } text-sm text-gray-700 transition-height duration-500 ease-in-out overflow-hidden`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default FaqlistCard;
