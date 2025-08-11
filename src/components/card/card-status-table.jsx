import React from "react";

export default function CardStatusTable({ status, icon, items, title }) {
  return (
    <>
      <div className=" flex items-center gap-[12px] z-20 relative">
        <h6
          className={`${
            status ? "text-black" : "text-[#b3b5b5]"
          } text-[14px] font-bold m-0`}
        >
          {title}
        </h6>
        <i
          className={`${status ? `fas-${icon}` : `fars-${icon}`} !text-[24px] ${
            status ? "text-[#ee8d3b]" : "text-[#b3b5b5]"
          }`}
        ></i>
      </div>
      <span
        className={` ${
          status ? "text-black" : "text-[#b3b5b5]"
        } z-10 bg-white absolute bottom-0  text-[12px] w-fit text-center text-nowrap px-[5px] translate-x-[-5px]`}
      >
        {items}
      </span>
      <span
        className={`absolute bottom-[8px] !h-[1px] w-full left-0 ${
          status ? "bg-[#0070d0]" : "bg-[#e2e5ec]"
        }`}
      ></span>
    </>
  );
}
