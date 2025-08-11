import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import InputText from "../../../../../components/form/input-text";
import SelectBasic from "../../../../../components/form/select-basic";
import SelectTags from "../../../../../components/form/select-tags";
import { FormProvider, useForm } from "react-hook-form";
import InputTextarea from "../../../../../components/form/input-textarea";

export default function BasicInfo({ disabled }) {
  const methods = useForm({ mode: "onChange" });
  const [show, setShow] = useState(0);
  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };
  const uploadImage = (event, index) => {
    if (event.target.files && event.target.files[0]) {
      const newData = dataImage.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            imgUrl: URL.createObjectURL(event.target.files[0]),
          };
        }
        return item;
      });
      const tempNew = {
        id: `inpt-Image${index + 1}`,
        default: `inpt-defaults-Image${index + 1}`,
        edit: `inpt-edit-Image${index + 1}`,
        imgUrl: "",
      };
      setDataImage([...newData, tempNew]);
      setShow(show + 1);
    }
  };
  const defaultImage = (event, index) => {
    if (event.target.files && event.target.files[0]) {
      const newData = dataImage.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            imgUrl: URL.createObjectURL(event.target.files[0]),
          };
        }
        return item;
      });
      const tempNew = {
        id: `inpt-Image${index + 1}`,
        default: `inpt-defaults-Image${index + 1}`,
        edit: `inpt-edit-Image${index + 1}`,
        imgUrl: "",
      };
      setDataImage([...newData, tempNew]);
      setShow(show + 1);
    }
  };
  const changeImage = (event, index) => {
    if (event.target.files && event.target.files[0]) {
      const newData = dataImage.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            imgUrl: URL.createObjectURL(event.target.files[0]),
          };
        }
        return item;
      });
      setDataImage(newData);
      // setOpen(false)
    }
  };
  const [dataImage, setDataImage] = useState([
    {
      id: "inpt-Image0",
      default: "inpt-defaults-Image0",
      edit: "inpt-edit-Image0",
      imgUrl: "",
    },
  ]);
  return (
    <div className="px-[20px] py-[30px]">
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <Row className=" Row-SystemId mb-[25px]">
            <Col>
              <SelectBasic
                label="Catalog Type"
                id="catalog_type"
                options={[]}
                disabled={disabled}
                placeholder="Please Select Product Type"
                required={true}
                rules={{ required: "This field is required" }}
              />
            </Col>
          </Row>
          <Row className=" Row-SystemId">
            <Col>
              <div className=" flex flex-col gap-[24px]">
                {disabled ? (
                  <div className="h-[150px] w-[150px] bg-[#f2f2f2] flex justify-center items-center cursor-not-allowed">
                  <span className="w-[100px] h-[100px] border-[1px] border-dashed border-blue-primary flex justify-center items-center rounded-[100%]">
                    <i className="fars-square-plus text-gray-500 !text-[15px] "></i>
                  </span>
                  </div>
                ) : (
                  <>
                    {dataImage.map((item, i) => (
                      <>
                        <input
                          key={i}
                          type="file"
                          id={item.id}
                          onChange={(e) => uploadImage(e, i)}
                          hidden
                        />
                        <input
                          key={i}
                          type="file"
                          id={item.edit}
                          onChange={(e) => changeImage(e, i)}
                          hidden
                        />
                      </>
                    ))}
                    <div className=" flex gap-[10px] sm:flex-row flex-col">
                      {dataImage[0].imgUrl === "" ? (
                        <>
                          <input
                            type="file"
                            id={dataImage[0].default}
                            onChange={(e) => defaultImage(e, 0)}
                            hidden
                          />
                          <label
                            htmlFor={dataImage[0].default}
                            className="h-[150px] w-[150px] bg-[#E9EEF1] flex justify-center items-center cursor-pointer"
                          >
                            <span className="w-[100px] h-[100px] border-[1px] border-dashed border-blue-primary flex justify-center items-center rounded-[100%]">
                              <i className="fars-square-plus text-[#0070d0] !text-[15px] "></i>
                            </span>
                          </label>
                        </>
                      ) : (
                        <div className="w-[150px] h-[150px] relative  ">
                          <img
                            src={dataImage[0].imgUrl}
                            alt=""
                            width={0}
                            height={0}
                            className="w-[150px] h-[150px]"
                          />
                        </div>
                      )}
                      <div className="flex flex-wrap gap-[10px] w-[200px]">
                        {dataImage[0].imgUrl !== "" &&
                          dataImage.slice(1, 5).map((item, i) => {
                            if (item.imgUrl === "") {
                              return (
                                <label
                                  key={i}
                                  htmlFor={item.id}
                                  className={`h-[70px] w-[70px] bg-[#E9EEF1] flex justify-center items-center cursor-pointer ${
                                    show !== i + 1 ? "hidden" : ""
                                  } `}
                                >
                                  <span className="w-[50px] h-[50px] border-[1px] border-dashed border-blue-primary flex justify-center items-center rounded-[100%]">
                                    <i className="fars-square-plus text-[#0070d0] !text-[15px] "></i>
                                  </span>
                                </label>
                              );
                            } else {
                              return (
                                <div
                                  key={i}
                                  className="w-[70px] h-[70px] relative"
                                >
                                  <img
                                    src={item.imgUrl}
                                    alt=""
                                    width={0}
                                    height={0}
                                    className="w-full h-full"
                                  />
                                </div>
                              );
                            }
                          })}
                      </div>
                    </div>
                  </>
                )}

                <InputText
                  customWidth={"w-1/2"}
                  label="Condition ID"
                  id="condition_id"
                  type="text"
                  disabled={disabled}
                  placeholder="Please Input Product Id"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <InputText
                  label="Catalog Description"
                  id="catalog_desc"
                  type="text"
                  disabled={disabled}
                  placeholder="Please Input Product Description"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Catalog Profile"
                  id="catalog_profile"
                  options={[{ value: 1, label: "1" }]}
                  disabled={disabled}
                  placeholder="Please Select Product Profile"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectTags
                  label="Tags"
                  id="tags"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Select Tags"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <InputTextarea
                  label="Long Text Description"
                  id="Long Text Description"
                  disabled={disabled}
                  placeholder="Please Input Description"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
              </div>
            </Col>

            <Col>
              <div className=" flex flex-col gap-[24px]">
                <InputText
                  customWidth={"w-1/2"}
                  label="Internal Code"
                  id="internal_code"
                  type="text"
                  disabled={disabled}
                  placeholder="Please Input Internal Code"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
              </div>
            </Col>
          </Row>
        </Form>
      </FormProvider>
    </div>
  );
}