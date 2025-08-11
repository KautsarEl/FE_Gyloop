import React, { useEffect, useState } from "react";
import noImage from "../../assets/img/no-image.png";
import axios from "axios";

export default function PeekDetail({ closePopover, data }) {
  const [dataTags, setDataTags] = useState(["Hino", "Engine Part", "Top Gear"]);
  const handleClose = (e) => {
    const newData = dataTags.filter((item) => item !== e);
    setDataTags(newData);
  };
  useEffect(() => {}, [dataTags]);
  return (
    <>
      <div className=" relative rounded-t-[8px] flex gap-[10px] p-[15px] bg-[#F8F9FC] border-b border-[#dfeaf4] w-full">
          <img
          src={`http://203.175.11.244:8080/${data.fnam_imag}`}
          alt="product_img"
          className="min-w-[85px] h-[85px] object-cover"
          />
        <div className=" flex flex-col gap-[15px] w-full">
          <div className="">
            <h6 className="mb-0 font-bold text-[#0070d0] text-[15px]">
              {data.idno_prod}
            </h6>
            <p className="mb-0 text-[12px] text-[#525252]">{data.idno_intr}</p>
          </div>
          <h6 className="font-bold mb-0 text-[14px] text-[#525252]">
            {data.desc_shrt}
          </h6>
        </div>
        <button
          onClick={() => closePopover(false)}
          className="absolute right-[16px] top-[16px]"
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div className="flex flex-col gap-[15px] py-[15px] mx-[15px] border-b border-[#dfeaf4]">
        <div>
          <p className="form-label-custom form-label mb-0">
            Heavy Equipment Parts
          </p>
          <p className="mb-0 p-0 text-[14px] text-black">{data.prod_bran}</p>
        </div>
        <div>
          <p className="form-label-custom form-label mb-0">Internal Code</p>
          <p className="mb-0 p-0 text-[14px] text-black">{data.idno_intr}</p>
        </div>
        <div>
          <p className="form-label-custom form-label mb-0">
            MPN / Article Number
          </p>
          <p className="mb-0 p-0 text-[14px] text-black">{data.idno_mpnn} / {data.idno_artc}</p>
        </div>
        <div>
          <p className="form-label-custom form-label mb-0">Tags</p>
          <div className=" flex flex-wrap gap-[4px] mt-[4px] cursor-not-allowed">
            {data.prod_tags.map((item, i) => (
              <span className=" inline-flex items-center bg-[#c5c5c5] text-white py-[2px] px-[7px] text-[12px] rounded-[3px] gap-[10px]">
                {item}
                <i
                  // onClick={() => handleClose(item)}
                  className="fars-xmark text-[12px]"
                ></i>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[15px] py-[15px] mx-[15px] border-b border-[#dfeaf4]">
        <div className="">
          <p className="form-label-custom form-label mb-0">Characteristic</p>
          <p className="mb-0 p-0 text-[14px] text-black">{data.char_prod}
          </p>
        </div>
        <div className="">
          <p className="form-label-custom form-label mb-0">
            Product Type / Internal
          </p>
          <p className="mb-0 p-0 text-[14px] text-black">
            {data.type_prod} / -
          </p>
        </div>
        <div className="">
          <p className="form-label-custom form-label mb-0">
            Product Group / Internal
          </p>
          <p className="mb-0 p-0 text-[14px] text-black">
            - / -
          </p>
        </div>
        <div className="">
          <p className="form-label-custom form-label mb-0">Class</p>
          <p className="mb-0 p-0 text-[14px] text-black">-</p>
        </div>
        <div className="">
          <p className="form-label-custom form-label mb-0">Model</p>
          <p className="mb-0 p-0 text-[14px] text-black">H92K</p>
        </div>
        <div className="">
          <p className="form-label-custom form-label mb-0">Series</p>
          <p className="mb-0 p-0 text-[14px] text-black">-</p>
        </div>
      </div>
      <div className="flex flex-col gap-[15px] py-[15px] mx-[15px]">
        <div className="flex justify-between w-full ">
          <div className="flex flex-col gap-[15px] w-full">
            <div className="">
              <p className="form-label-custom form-label mb-0">Minimum Order</p>
              <p className="mb-0 p-0 text-[14px] text-black">12 PCs</p>
            </div>
            <div className="">
              <p className="form-label-custom form-label mb-0">Indicator</p>
              <p className="mb-0 p-0 text-[14px] text-black">
                Pre-Order Product
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[15px] w-full">
            <div className="">
              <p className="form-label-custom form-label mb-0">Delivery</p>
              <p className="mb-0 p-0 text-[14px] text-black">7-10 Days</p>
            </div>
          </div>
        </div>
        <div className="">
          <p className="form-label-custom form-label mb-0">
            Sales Delivery Notes
          </p>
          <p className="mb-0 p-0 text-[14px] text-black">
            <i>
              Please check validation before selling this product May delayed
              delivery occurred during the crisis
            </i>
          </p>
        </div>
      </div>
    </>
  );
}
