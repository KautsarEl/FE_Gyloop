import React, { useState } from 'react'
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CardStatusTracker from '../card/card-status-tracker';

export default function Tracker({ data, title, dataItems }) {
    const items = dataItems;
    const [dataShow, setDataShow] = useState(data)
    const handleActive = (e) => {
        const newData = dataShow.map((item, i) => { if (i === e) { return { ...item, status: "success", statusLine: "success", dropdown: true, btnNext: false } } return item })
        const active = newData.map((item, i) => { if (i === e + 1) { return { ...item, status: "pending", statusLine: "pending", dropdown: true, } } return item })
        setDataShow(active)
    }
    return (
        <>
            <div className='flex justify-between items-end w-full relative my-2 sm:h-[52px] sm:my-3 sm:flex-row flex-col'>
                <div className='flex gap-0 bg-[#FCE21D] px-[13px] py-[8px] sm:w-fit w-full h-fit md:flex-col sm:flex-row sm:justify-start justify-between'>
                    <p className='p-0 m-0 text-[12px] font-normal text-[#525252] w-[101px]'>Status <span className='text-[#393939] font-bold'>Outstanding</span></p>
                    <p className='p-0 m-0 text-[12px] font-normal text-[#525252]'>Lead Time <span className='text-[#393939] font-bold'>13 Days</span></p>
                </div>
                <div className=' w-full flex sm:items-start items-end sm:hidden'>
                    <button className='arrow-leftModal flex bg-[#EAEDF4] p-[8px] w-[40px] h-[52px] justify-center items-center'>
                        <i className='far fa-chevron-left text-blue-primary color-disabled'></i>
                    </button>
                    <div className=' overflow-hidden w-full trakcer'>
                        <Swiper
                            mousewheel={true}
                            slidesPerView={'auto'}
                            keyboard={true}
                            navigation={{ nextEl: ".arrow-rightModal", prevEl: ".arrow-leftModal" }}
                            modules={[Pagination, Navigation]}
                            className=""
                        >
                            {dataShow.map((item, i) => (
                                <SwiperSlide key={item.id} >
                                    <CardStatusTracker
                                        line={item.statusLine === "success" ? 'bg-green-primary' : item.statusLine === "pending" ? 'bg-orange-primary' : 'bg-[#cecece]'}
                                        next={item.btnNext}
                                        activeArrow={item.status === "success" ? 'bg-green-primary' : item.status === "pending" ? 'bg-orange-primary' : 'bg-[#CECECE]'}
                                        width={i === 0 ? 'w-0' : "w-[119px]"}
                                        activeStatus={item.status === "success" ? 'text-green-primary' : item.status === "pending" ? 'text-orange-primary' : 'text-[#CECECE]'}
                                        activeCaretDown={item.status === "success" || "pending" ? 'text-blue-primary' : 'text-[#CECECE]'}
                                        status={item.title}
                                        dropdown={item.dropdown}
                                        btnNext={() => handleActive(i)}
                                        items={items}
                                        title={title}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <button className='arrow-rightModal flex bg-[#EAEDF4] p-[8px] w-[40px] h-[52px] justify-center items-center'>
                        <i className='far fa-chevron-right text-blue-primary color-disabled'></i>
                    </button>
                </div>
                <div className='sm:block hidden'>
                    <button className='arrow-leftModal flex  bg-[#EAEDF4] p-[8px] !w-[40px] h-[52px] justify-center items-center'>
                        <i className='far fa-chevron-left text-blue-primary color-disabled translate-x-[-5px]'></i>
                    </button>
                </div>
                <div className=' overflow-hidden w-full trakcer sm:block hidden'>
                    <Swiper
                        mousewheel={true}
                        slidesPerView={'auto'}
                        keyboard={true}
                        navigation={{ nextEl: ".arrow-rightModal", prevEl: ".arrow-leftModal" }}
                        modules={[Pagination, Navigation]}
                        className=""
                    >
                        {dataShow.map((item, i) => (
                            <SwiperSlide key={item.id} >
                                <CardStatusTracker
                                    line={item.statusLine === "success" ? 'bg-green-primary' : item.statusLine === "pending" ? 'bg-orange-primary' : 'bg-[#cecece]'}
                                    next={item.btnNext}
                                    activeArrow={item.status === "success" ? 'bg-green-primary' : item.status === "pending" ? 'bg-orange-primary' : 'bg-[#CECECE]'}
                                    width={i === 0 ? 'w-0' : "w-[119px]"}
                                    activeStatus={item.status === "success" ? 'text-green-primary' : item.status === "pending" ? 'text-orange-primary' : 'text-[#CECECE]'}
                                    activeCaretDown={item.status === "success" || "pending" ? 'text-blue-primary' : 'text-[#CECECE]'}
                                    status={item.title}
                                    dropdown={item.dropdown}
                                    btnNext={() => handleActive(i)}
                                    items={items}
                                    title={title}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='sm:block hidden'>
                    <button className='arrow-rightModal flex bg-[#EAEDF4] p-[8px] w-[40px] h-[52px] justify-center items-center'>
                        <i className='far fa-chevron-right text-blue-primary color-disabled translate-x-[-5px]'></i>
                    </button>
                </div>
            </div>
        </>
    )
}
