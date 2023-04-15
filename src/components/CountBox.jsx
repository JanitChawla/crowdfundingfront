import React from "react";

const CountBox = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center w-[150px]">
      <h4 className="font-epilogue text-white p-3 bg-[#1c1c24] rounded-t-[10px] text-center truncate font-bold text-[30px]">
        {value}
      </h4>
      <p className="text-[#808191] bg-[#28282e] px-3 font-epilogue py-2 w-full rounded-b-[10px] font-normal text-center">
        {title}
      </p>
    </div>
  );
};

export default CountBox;
