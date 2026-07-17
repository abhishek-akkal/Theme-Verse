import React from "react";
import BottomBox from "./BottomBox";

const BottomSide = ({ theme }) => {
  return (
    <div className="pt-10 sm:pt-20 px-4">
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight flex items-center justify-center text-center">
        Popular Themes
      </div>

      <BottomBox theme={theme} />
    </div>
  );
};

export default BottomSide;
