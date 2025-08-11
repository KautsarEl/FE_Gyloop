import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import InputText from "../../../../../components/form/input-text";
import SelectBasic from "../../../../../components/form/select-basic";
import SelectTags from "../../../../../components/form/select-tags";
import { FormProvider, useForm } from "react-hook-form";
import InputTextarea from "../../../../../components/form/input-textarea";
import CheckboxGroup from "../../../../../components/form/input-checkbox-group";

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
                label="BoM Type"
                id="BoM_type"
                options={[]}
                disabled={disabled}
                placeholder="Please Select BoM Type"
                required={true}
                rules={{ required: "This field is required" }}
              />
            </Col>
          </Row>
          <Row className=" Row-SystemId">
            <Col>
              <div className=" flex flex-col gap-[24px]">
                <InputText
                  customWidth={"w-1/2"}
                  label="Product ID"
                  id="product_id"
                  type="text"
                  disabled={disabled}
                  placeholder="Please Input Product Id"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <InputText
                  label="Product Description"
                  id="Product_desc"
                  type="text"
                  disabled={disabled}
                  placeholder="Please Input Product Description"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <CheckboxGroup
                  label={"Object Use"}
                  dataCheck={["Sales", "Purchase", "Warehouse"]}
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
          </Row>
        </Form>
      </FormProvider>
    </div>
  );
}
