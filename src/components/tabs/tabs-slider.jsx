import React, { useState } from "react";
import { Button } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function TabsSlider({ data, datTab, actived }) {
  const [tab, setTab] = useState(data);
  const [active, setActive] = useState(0);
  const dataTab = datTab;

  const handleTab = (e, i) => {
    const active = tab.map((item) => {
      return { ...item, status: item.title === e.title ? true : false };
    });
    setTab(active);
    setActive(i);
    actived(i)
  };

  return (
    <div className="">
      <div className=" flex justify-between items-center">
        <Button
          variant=""
          className=" imgPrev btn-white flex justify-center items-center p-0 min-w-[37px] h-[35px]"
        >
          <i className="fas-chevron-left"></i>
        </Button>
        <div className="mx-[10px] overflow-hidden relative w-full">
          <Swiper
            slidesPerView={"auto"}
            navigation={{ nextEl: ".imgNext", prevEl: ".imgPrev" }}
            modules={[Pagination, Navigation]}
            className="mySwiper pt-[10px] px-[10px]"
            // onSlideChange={(x) => handleChange(x.activeIndex)}
            spaceBetween={0}          >
            <div className="flex gap-[25px] pt-[16px] border-b border-[#e2e5ec] relative px-[20px]">
              {tab.map((item, i) => (
                <SwiperSlide
                //   onClick={() => handleChange(i)}
                  className=" cursor-pointer bg-transparent !h-fit !w-fit relative pb-[10px] px-[12px]"
                >
                  <button
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
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
          <span className=" absolute bottom-[8px] h-[1px] bg-[#e2e5ec] w-full"></span>
        </div>
        <div className=" flex gap-[10px]">
          <Button
            variant=""
            className=" imgNext btn-white flex justify-center items-center p-0 min-w-[37px] h-[35px]"
          >
            <i className="fas-chevron-right"></i>
          </Button>
        </div>
      </div>
      {tab[active].component}
    </div>
  );
}
