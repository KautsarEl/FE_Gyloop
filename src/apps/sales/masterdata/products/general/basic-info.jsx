import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row, Toast, ToastContainer } from "react-bootstrap";
import InputText from "../../../../../components/form/input-text";
import SelectBasic from "../../../../../components/form/select-basic";
import SelectTags from "../../../../../components/form/select-tags";
import { useFormContext } from "react-hook-form";
import InputTextarea from "../../../../../components/form/input-textarea";
import Switch from "../../../../../components/form/swicth";
import SwitchTextArea from "../../../../../components/form/swicth-textarea";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProductTypes } from "../../../../../data/configuration/masterdata/products/DataConfigProductType";
import { getProductBrands } from "../../../../../data/configuration/masterdata/products/DataConfigProductBrand";
import { getProductTags } from "../../../../../data/configuration/masterdata/products/DataConfigProductTags";

export default function BasicInfo({ disabled }) {
  const { id } = useParams();
  const [showA, setShowA] = useState(true);
  const navigate = useNavigate();

  const toggleShowA = () => setShowA(!showA);
  const methods = useFormContext();
  const fnam_imag = methods.watch("fnam_imag");

  const imgUrl = id
    ? `http://203.175.11.244:8080/${fnam_imag}`
    : fnam_imag instanceof File
    ? URL.createObjectURL(fnam_imag)
    : fnam_imag; // fallback jika user upload tapi bukan file object

  const [dataImage, setDataImage] = useState({
    // id: "inpt-Image0",
    // default: "inpt-defaults-Image0",
    // edit: "inpt-edit-Image0",
    imgUrl: "",
  });

  const dispatch = useDispatch();
  const { product_type, loading } = useSelector(
    (state) => state.configProductType
  );
  const { product_brand } = useSelector((state) => state.configProductBrand);
  const { product_tags } = useSelector((state) => state.configProductTags);

  useEffect(() => {
    dispatch(getProductTypes());
    dispatch(getProductBrands());
    dispatch(getProductTags());
  }, [dispatch]);

  return (
    <div className="px-[20px] py-[30px]">
      {/* <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}> */}
      <Row className=" Row-SystemId mb-[25px]">
        <Col>
          <input
            type={"file"}
            id={"fnam_imag"}
            // onChange={(e) => uploadImag(e)}
            {...methods.register("fnam_imag", {
              onChange: (e) => {
                const file = e.target.files[0];
                if (file) {
                  setDataImage({ imgUrl: URL.createObjectURL(file) });
                }
              },
            })}
            name="fnam_imag"
            hidden
          />
          {!imgUrl ? (
            <label
              htmlFor={"fnam_imag"}
              className={`h-[150px] w-[150px] bg-[#E9EEF1] flex justify-center items-center cursor-pointer`}
            >
              <span className="w-[50px] h-[50px] border-[1px] border-dashed border-blue-primary flex justify-center items-center rounded-[100%]">
                <i className="fars-square-plus text-[#0070d0] !text-[15px] "></i>
              </span>
            </label>
          ) : (
            <div className="">
              <img
                id="fnam_imag"
                src={id ? imgUrl : dataImage.imgUrl}
                alt=""
                width={0}
                height={0}
                className={`w-[150px] h-[150px]`}
              />
            </div>
          )}
          {/* {disabled ? (
                <div className="h-[150px] w-[150px] bg-[#f2f2f2] flex justify-center items-center cursor-pointer">
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
                          src={`http://203.175.11.244:8080/${dataImage[0].imgUrl}`}
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
              )} */}
        </Col>
      </Row>
      <Row className=" Row-SystemId">
        <Col>
          <div className=" flex flex-col gap-[24px]">
            <SelectBasic
              label="Product Type"
              id="type_prod"
              options={product_type.map((item, i) => ({
                value: { value: item.type_prod, label: item.desc_shrt },
                label: (
                  <div className=" truncate ...">
                    {item.type_prod} - {item.desc_shrt}
                  </div>
                ),
              }))}
              disabled={disabled}
              placeholder="Please Select Product Type"
              // required={true}
              rules={{ required: "This field is required" }}
            />

            <InputText
              customWidth={"w-1/2"}
              label="Product ID"
              id="idno_prod"
              type="text"
              disabled={disabled}
              placeholder="Please Input Product Id"
              required={true}
              rules={{ required: "This field is required" }}
            />
            <InputText
              label="Short Description"
              id="desc_shrt"
              type="text"
              disabled={disabled}
              placeholder="Please Input Product Description"
              required={true}
              rules={{ required: "This field is required" }}
            />
            <SelectBasic
              label="Product Profile"
              id="prof_prod"
              options={[
                { value: "2210", label: "2210" },
                { value: "2211", label: "2211" },
              ]}
              disabled={disabled}
              placeholder="Please Select Product Profile"
              required={true}
              rules={{ required: "This field is required" }}
            />
            <Switch
              id={"is_tags"}
              label={"Is Use Tags"}
              disabled={disabled}
              // status={formList.is_tags}
            />
            <SelectTags
              label="Product Tags"
              id="prod_tags"
              options={product_tags.map((item, i) => ({
                value: { value: item.prod_tags, label: item.prod_tags },
                label: <div className=" truncate ...">{item.prod_tags}</div>,
              }))}
              disabled={disabled}
              placeholder="Please Select Tags"
              required={true}
              rules={{ required: "This field is required" }}
            />
            <SwitchTextArea
              // status={formList.is_long}
              id={"is_tags"}
              placeholder={"Long Text Description"}
              label={"Is Use Long Desc"}
              disabled={disabled}
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
              label="Internal Number"
              id="idno_intr"
              type="text"
              disabled={disabled}
              placeholder="Please Input Internal Number"
              required={true}
              rules={{ required: "This field is required" }}
            />
            <SelectBasic
              label="Product Brand"
              id="prod_bran"
              options={product_brand.map((item, i) => ({
                value: { value: item.prod_bran, label: item.prod_bran },
                label: <div className=" truncate ...">{item.prod_bran}</div>,
              }))}
              disabled={disabled}
              placeholder="Please Select Product Type"
              // required={true}
              rules={{ required: "This field is required" }}
            />
            <InputText
              label="Manufacturing Part Number (MPN)"
              id="idno_mpnn"
              type="text"
              disabled={disabled}
              placeholder="Please Input Manufacturing Part Number (MPN)"
              required={true}
              rules={{ required: "This field is required" }}
            />
            <InputText
              label="Barcode"
              id="code_xbar"
              type="text"
              disabled={disabled}
              placeholder="Please Input Barcode"
              required={true}
              rules={{ required: "This field is required" }}
            />
            <InputText
              label="QR Barcode"
              id="code_xqrc"
              type="text"
              disabled={disabled}
              placeholder="Please Input Barcode"
              required={true}
              rules={{ required: "This field is required" }}
            />
            <InputText
              label="SKU Number"
              id="idno_skus"
              type="text"
              disabled={disabled}
              placeholder="Please Input SKU Number"
              required={true}
              rules={{ required: "This field is required" }}
            />
            <InputText
              label="Article Number"
              id="idno_artc"
              type="text"
              disabled={disabled}
              placeholder="Please Input Article Number"
              required={true}
              rules={{ required: "This field is required" }}
            />
            <InputText
              label="Reference Number"
              id="idno_refr"
              type="text"
              disabled={disabled}
              placeholder="Please Input Reference Number"
              required={true}
              rules={{ required: "This field is required" }}
            />
          </div>
        </Col>
      </Row>
      {/* <div className=" button-action">
            {disabled ? (
              <Button variant="" className={`btn-disable`}>
                Save
              </Button>
            ) : (
              <Button
                onClick={() => onSubmit()}
                type="submit"
                variant=""
                className={`btn-primary`}
              >
                Save
              </Button>
            )}
            <Button
              variant=""
              className={`${disabled ? "btn-disable" : "btn-danger"} `}
            >
              Discard
            </Button>
          </div> */}
      {/* <ToastContainer
          className="p-3"
          position={"top-center"}
          style={{ zIndex: 900 }}
        >
          <Toast
            className=" !bg-green-700"
            delay={3000}
            autohide={true}
            onClose={toggleShowB}
            show={showB}
            animation={false}
          >
            <Toast.Header
              closeVariant="white"
              className=" !bg-transparent  !border-b-0"
            >
              <strong className="me-auto text-[20px] text-white">
                Succeed
              </strong>
            </Toast.Header>
            <Toast.Body className=" text-white">Data has been added</Toast.Body>
          </Toast>
        </ToastContainer> */}
      {/* </Form>
      </FormProvider> */}
    </div>
  );
}
