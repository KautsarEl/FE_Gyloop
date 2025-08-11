import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import product from "../../../../../assets/img/no-image.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Donwload from "../../../../../components/dropdown/download";
import { Button } from "react-bootstrap";
// import CardImage from "./cardImage";
// import AddNewItem from "./addNewItem";

// interface addNew {
//   id: string;
//   nameImg: string;
//   imgUrl: string;
//   detailImage: image;
// }

export default function ImageTag() {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [temp, setTemp] = useState("");
  const [newValue, setNewValue] = useState("");
  const [search, setSeacrh] = useState("");
  const [active, setActive] = useState(0);
  const [createItem, setCreateItem] = useState([
    {
      title: "",
      desc: "",
      red: "",
      sum: "",
      status: true,
    },
  ]);

  const onSubmit = (e) => {
    e.preventDefault();
    const newData = dataSearch.map((item, i) => {
      if (i === active) {
        return { ...item, nameImg: newValue };
      }
      return item;
    });
    setDataSearch(newData);
    setEdit(false);
  };
  const handleEdit = (value) => {
    setEdit(true);
    setTemp(value);
  };

  const [dataImg, setDataImg] = useState([
    { image: product, nameImg: "Image 1" },
    { image: product, nameImg: "Image 2" },
  ]);

  const [dataSearch, setDataSearch] = useState([
    {
      id: "0001",
      nameImg: "",
      imgUrl: "",
      detailItem: [{ title: "", desc: "", sum: "", red: "", status: false }],
    },
  ]);

  const handleActive = (index) => {
    const change = dataSearch[active].detailItem.map((item, i) => {
      if (i === index) {
        return { ...item, status: true };
      }
      return { ...item, status: false };
    });
    const newData = dataSearch.map((item, i) => {
      if (i === active) {
        return { ...item, detailItem: change };
      }
      return item;
    });
    setDataSearch(newData);
  };
  const uploadImage = (event, index) => {
    if (event.target.files && event.target.files[0]) {
      const upload = dataSearch.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            imgUrl: URL.createObjectURL(event.target.files[0]),
            nameImg: `Image ${index + 1}`,
          };
        }
        return item;
      });
      const createTemp = {
        id: `000${index + 1}`,
        nameImg: "",
        imgUrl: "",
        detailItem: [{ title: "", desc: "", sum: "", red: "", status: false }],
      };
      setDataSearch([...upload, createTemp]);
    }
  };

  const SearchItem = () => {
    return dataSearch[active].detailItem[0].title !== "" ? (
      dataSearch[active].detailItem
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.desc.toString().toLowerCase().includes(search) ||
                item.sum.toLowerCase().includes(search) ||
                item.red.toLowerCase().includes(search) ||
                item.desc.toString().toLowerCase().includes(search);
        })
        .map((item, i) => (
          <div
            key={i}
            onClick={() => handleActive(i)}
            className="cursor-pointer"
          >
            {/* <CardImage
              status={item.status}
              title={item.title}
              sum={item.sum}
              desc={item.desc}
              red={item.red}
            /> */}
          </div>
        ))
    ) : (
      <></>
    );
  };
  const handleAdd = (data) => {
    const temp = dataSearch[active].detailItem;
    if (dataSearch[active].detailItem[active].title === "") {
      const newData = dataSearch.map((item, i) => {
        if (i === active) {
          return {
            ...item,
            detailItem: [
              {
                title: data.title,
                red: data.red,
                sum: data.sum,
                desc: data.desc,
                status: data.status,
              },
            ],
          };
        }
        return item;
      });
      setDataSearch(newData);
    } else {
      temp.push({
        title: data.title,
        red: data.red,
        sum: data.sum,
        desc: data.desc,
        status: data.status,
      });
      const newData = dataSearch.map((item, i) => {
        if (i === active) {
          return { ...item, detailItem: temp };
        }
        return item;
      });
      setDataSearch(newData);
    }
  };
  return (
    <>
      <div className="p-[20px] h-[590px] w-full">
        <div className=" grid 2xl:grid-cols-4 grid-cols-3 gap-[30px] bg-[#F8F9FC] h-full w-full img-tags">
          <div className="w-full 2xl:w-[350px] bg-white h-full flex flex-col pt-[0px] p-[5px] gap-[5px]">
            <div className="py-[5px] border-b border-[#dfeaf4] w-full relative mb-[5px]">
              <input
                type="text"
                name=""
                id=""
                className=" outline-none bg-[#F4F4F4] h-[35px] pl-[35px] w-full font-normal focus:border-[1px] border-soft-blue rounded-[3px]"
                placeholder="Search"
                onChange={(e) => setSeacrh(e.target.value)}
              />
              <i className="far fa-search text-[#989898] absolute top-[15px] left-[10px]"></i>
            </div>
            <div className="overflow-y-auto h-full flex flex-col gap-[5px]">
              <SearchItem />
            </div>

            {/* <AddNewItem
              active={dataSearch[active].imgUrl !== "" ? true : false}
              handleAdd={handleAdd}
            /> */}
          </div>
          <div className=" 2xl:col-span-3 col-span-2 flex flex-col w-full h-full gap-[50px] p-[10px]">
            <div className="flex justify-end gap-[8px] w-full">
              <Donwload />
              <Button
                variant=""
                className="btn-white flex items-center justify-center h-[36px] w-[40px]"
              >
                <i className=" fars-pin"></i>
              </Button>
              <Button
                variant=""
                className="btn-white flex items-center justify-center h-[36px]"
              >
                <i className=" fars-expand"></i>
              </Button>
            </div>
            <div className="flex justify-center items-center w-full">
              <div className=" flex flex-col justify-center items-center h-[400px] gap-[10px] relative 2xl:w-1/2 w-full px-[20px] py-[10px]">
                <button
                  className={`imgPrev flex justify-center items-center absolute z-10 left-[-2px] w-[20px] h-[20px] rounded-[100%] bg-[#eaedf4]`}
                >
                  <i className="fas-chevron-left text-[10px] imgColor-disabled "></i>
                </button>
                <div className="w-full h-[500px] pagination-bullet-show">
                  <Swiper
                    slidesPerView={1}
                    navigation={{ nextEl: ".imgNext", prevEl: ".imgPrev" }}
                    modules={[Pagination, Navigation]}
                    pagination={true}
                    onSlideChange={(x) => setActive(x.activeIndex)}
                    className="mySwiper"
                  >
                    {dataSearch.map((item, i) => (
                      <SwiperSlide key={i} className=" bg-transparent">
                        <div className="flex justify-center items-center flex-col gap-[10px]">
                          <>
                            {item.imgUrl === "" ? (
                              <span className="h-[25px]"></span>
                            ) : (
                              <div className="flex gap-[10px] items-center h-[25px]">
                                {edit ? (
                                  <>
                                    <div className="relative h-full ">
                                      <form action="" onSubmit={onSubmit}>
                                        <input
                                          type="text"
                                          name=""
                                          id=""
                                          className="outline-none pl-2 text-center focus:border-blue-primary border-[#d9d9d9] border-b bg-transparent w-[300px]"
                                          defaultValue={item.nameImg}
                                          onChange={(e) =>
                                            setNewValue(e.target.value)
                                          }
                                        />
                                      </form>
                                      <button
                                        onClick={onSubmit}
                                        type="submit"
                                        className="hover:bg-blue-primary border-[1px] border-blue-primary text-blue-primary hover:text-white px-[5px] rounded-[3px] text-[14px] absolute z-10 right-[-30px] top-[2px] transition-all duration-150"
                                      >
                                        <i className="fas fa-check text-[12px]"></i>
                                      </button>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <p className="m-0 font-bold text-[#525252] text-[14px]">
                                      {item.nameImg}
                                    </p>
                                    <i
                                      onClick={() => handleEdit(item.nameImg)}
                                      className="fas fa-pencil text-blue-primary cursor-pointer"
                                    ></i>
                                  </>
                                )}
                              </div>
                            )}
                          </>
                        </div>
                        <div className="bg-white w-full h-[400px] flex justify-center items-center flex-col gap-[10px] px-[20px] py-[10px] img-tags">
                          <>
                            {item.imgUrl === "" ? (
                              <>
                                <input
                                  type="file"
                                  id={item.id}
                                  onChange={(e) => uploadImage(e, i)}
                                  hidden
                                />
                                <label
                                  htmlFor={item.id}
                                  className="h-[200px] w-[200px] bg-[#E9EEF1] flex justify-center items-center cursor-pointer"
                                >
                                  <span className="w-[100px] h-[100px] border-[1px] border-dashed border-blue-primary flex justify-center items-center rounded-[100%]">
                                    <i className="fars-square-plus text-[#0070d0] !text-[16px] "></i>
                                  </span>
                                </label>
                              </>
                            ) : (
                              <img
                                src={item.imgUrl}
                                alt=""
                                width={0}
                                height={0}
                                className=" h-[360px] w-[610px] object-cover"
                              />
                            )}
                          </>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <button
                  id="imgNext"
                  className={`imgNext flex justify-center items-center absolute z-10 right-[-2px] w-[20px] h-[20px] rounded-[100%] bg-[#eaedf4]`}
                >
                  <i className="fas-chevron-right text-[10px] imgColor-disabled"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
