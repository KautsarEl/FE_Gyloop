import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardStatusTable from "../card/card-status-table";
import { Button } from "react-bootstrap";

export default function SliderStatusTable({ data, handleChange, child }) {
  return (
    <div className=" flex justify-between items-center pb-[24px]">
      <Button
        variant=""
        className=" imgPrev btn-white flex justify-center items-center p-0 min-w-[37px] h-[35px]"
      >
        <i className="fas-chevron-left"></i>
      </Button>
      <div className="mx-[10px] overflow-hidden relative">
        <Swiper
          slidesPerView={"auto"}
          navigation={{ nextEl: ".imgNext", prevEl: ".imgPrev" }}
          modules={[Pagination, Navigation]}
          className="mySwiper pt-[10px] px-[10px]"
          // onSlideChange={(x) => handleChange(x.activeIndex)}
          spaceBetween={50}
        >
          {data
            .filter((item, i) => item.show === true)
            .map((item, i) => (
              <SwiperSlide
                onClick={() => handleChange(i)}
                className=" cursor-pointer bg-white !h-fit !w-fit relative pb-[10px] px-[12px]"
              >
                <CardStatusTable
                  title={item.menu}
                  status={item.status}
                  items={item.items}
                  icon={item.icon}
                />
              </SwiperSlide>
            ))}
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
        {child}
      </div>
    </div>
  );
}
