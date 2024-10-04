import React from "react";
import CrossCheck from "./CrossCheck";
import TickCheck from "./TickCheck";

const CheckBox: React.FC<{ isChecked: boolean }> = ({ isChecked }) => {
  return isChecked ? (
    <CrossCheck isChecked={isChecked} />
  ) : (
    <TickCheck isChecked={isChecked} />
  );
};

export default CheckBox;
