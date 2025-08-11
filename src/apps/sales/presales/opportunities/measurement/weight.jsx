import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import SelectBasic from "../../../../../components/form/select-basic";
import InputText from "../../../../../components/form/input-text";
import Switch from "../../../../../components/form/swicth";
import RadioGroup from "../../../../../components/form/radio-group";

export default function Weight({ disabled }) {
  const methods = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };
  return (
    <div className="px-[20px] py-[30px]">
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <Row className=" Row-SystemId">
            <Col>
              <div className=" flex flex-col gap-[24px]">
                <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="Net Weight"
                    id="Net Weight"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    customWidth={"w-[100px]"}
                    id="Basic UoM"
                    options={[]}
                    disabled={disabled}
                    placeholder="kg"
                    rules={{ required: "This field is required" }}
                  />
                </div>
                <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="Gross Weight"
                    id="Gross Weight"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    customWidth={"w-[100px]"}
                    id="Basic UoM"
                    options={[]}
                    disabled={disabled}
                    placeholder="kg"
                    rules={{ required: "This field is required" }}
                  />
                </div>
              </div>
            </Col>
            <Col>
              <div className=" flex flex-col gap-[24px]">
                <Switch label="Use Packaging" disabled={disabled} />
                <div>
                  <RadioGroup
                    label="Weight Reference for Shipment"
                    id="Weight Reference for Shipment"
                    disabled={disabled}
                    required={true}
                    rules={{ required: "This field is required" }}
                    name1={"Net Weight"}
                    name2={"Gross Weight"}
                    group={"group-1"}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Form>
      </FormProvider>
    </div>
  );
}
