import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import SelectBasic from "../../../../../components/form/select-basic";
import InputText from "../../../../../components/form/input-text";
import Switch from "../../../../../components/form/swicth";
import RadioGroup from "../../../../../components/form/radio-group";

export default function Dimension({ disabled }) {
  const methods = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };
  return (
    <div className="px-[20px] py-[30px]">
      {/* <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}> */}
          <Row className=" Row-SystemId">
            <Col>
              <div className=" flex flex-col gap-[24px]">
                <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="Length Dimension"
                    id="dime_leng"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    // label={"Lenght UoM"}
                    customWidth={"w-[110px]"}
                    id="uoms_leng"
                    options={[]}
                    disabled={disabled}
                    placeholder="Cm"
                    rules={{ required: "This field is required" }}
                  />
                </div>
                <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="Width Dimensiion"
                    id="dime_widt"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    // label={"Width UoM"}
                    customWidth={"w-[110px]"}
                    id="uoms_widt"
                    options={[]}
                    disabled={disabled}
                    placeholder="Cm"
                    rules={{ required: "This field is required" }}
                  />
                </div>
                <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="Height Dimension"
                    id="dime_high"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    // label={"Height UoM"}
                    customWidth={"w-[110px]"}
                    id="uoms_high"
                    options={[]}
                    disabled={disabled}
                    placeholder="Cm"
                    rules={{ required: "This field is required" }}
                  />
                </div>
              </div>
            </Col>
            <Col>
              <div className=" flex flex-col gap-[24px]">
                <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="Volume for Shipment"
                    id="volm_ship"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    // label={"Volume UoM"}
                    customWidth={"w-[110px]"}
                    id="uoms_volm"
                    options={[]}
                    disabled={disabled}
                    placeholder="Cm3"
                    rules={{ required: "This field is required" }}
                  />
                </div>
                <SelectBasic
                  label={"3D Shape"}
                  id="shap_form"
                  options={[]}
                  disabled={disabled}
                  required={true}
                  placeholder="Cube"
                  rules={{ required: "This field is required" }}
                />
              </div>
            </Col>
          </Row>
        {/* </Form>
      </FormProvider> */}
    </div>
  );
}
