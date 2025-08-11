import React, { useState } from "react";

export default function Tabs({ data, datTab }) {
  const [tab, setTab] = useState(data);
  const [active, setActive] = useState(0);
  const dataTab = datTab;

  const handleTab = (e, i) => {
    const active = tab.map((item) => {
      return { ...item, status: item.title === e.title ? true : false };
    });
    setTab(active);
    setActive(i);
  };
  return (
    <div className=" flex flex-col">
      <div className="flex gap-[25px] pt-[16px] border-b border-[#e2e5ec] relative px-[20px]">
        {tab.map((item, i) => (
          <button
            type="button"
            onClick={() => handleTab(item, i)}
            className=" relative w-fit"
          >
            <p
              className={` pb-[8px] font-[600] text-nowrap m-0 ${
                item.status
                  ? "before:content-[''] before:bottom-[-1px] before:right-0 before:left-0 before:block before:absolute before:border-b-[1.5px] before:border-[#0070d0] text-[#212830]"
                  : " border-transparent text-[#b3b5b5]"
              }`}
            >
              {item.title}
            </p>
          </button>
        ))}
      </div>
      {tab.map((item, i) => item.status && dataTab[active])}
    </div>
  );
}
