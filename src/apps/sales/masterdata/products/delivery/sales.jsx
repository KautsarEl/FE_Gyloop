import React from "react";
import { Col, Form, FormLabel, Row } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import SelectBasic from "../../../../../components/form/select-basic";
import InputText from "../../../../../components/form/input-text";
import Switch from "../../../../../components/form/swicth";
import RadioGroup from "../../../../../components/form/radio-group";
import InputTextarea from "../../../../../components/form/input-textarea";
import InputDate from "../../../../../components/form/input-date";
import SwitchTextArea from "../../../../../components/form/swicth-textarea";

export default function Sales({ disabled }) {
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
                <SelectBasic
                  label={"Sales Delivery Routing profile"}
                  id="code_sale_rout"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please input delivery routing profile"
                  rules={{ required: "This field is required" }}
                />
                {/* <SelectBasic
                  label={"Special Indicator"}
                  id="Special Indicator"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please input special indicator"
                  rules={{ required: "This field is required" }}
                /> */}
                <Form.Group>
                  <Form.Label className="f-1 form-label-custom">
                    Estimated Delivery Time
                  </Form.Label>
                  <div className=" flex gap-[15px] items-center w-full">
                    <InputText
                      customWidth={"w-full"}
                      id="strt_sale_delv"
                      disabled={disabled}
                      placeholder="1,00"
                      required={true}
                      styles={"text-right"}
                      rules={{ required: "This field is required" }}
                    />
                    to
                    <InputText
                      customWidth={"w-full"}
                      id="endd_sale_delv"
                      disabled={disabled}
                      placeholder="10,00"
                      required={true}
                      styles={"text-right"}
                      rules={{ required: "This field is required" }}
                    />
                    <SelectBasic
                      customWidth={"w-[210px]"}
                      id="uoms_sale_delv"
                      options={[]}
                      disabled={disabled}
                      placeholder="kg"
                      rules={{ required: "This field is required" }}
                    />
                  </div>
                </Form.Group>
                <InputText
                  label={"Sales Delivery UoM"}
                  customWidth={"w-full"}
                  id="uoms_sale_delv"
                  disabled={disabled}
                  placeholder="Please input sales delivery uom"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                {/* <Switch
                  id={"is_sale_note"}
                  label={"Is Use Sales Delivery Long Text"}
                  disabled={disabled}
                /> */}
                {/* <SwitchTextArea
                  placeholder={"Long Text Description"}
                  label={"Is Use Sales Delivery Long Text"}
                  disabled={disabled}
                /> */}
              </div>
            </Col>
            <Col>
              <SwitchTextArea
                placeholder={"Long Text Description"}
                label={"Is Use Sales Delivery Long Text"}
                disabled={disabled}
              />
            </Col>
          </Row>
        {/* </Form>
      </FormProvider> */}
    </div>
  );
}
