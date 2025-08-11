import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import SelectBasic from "../../../../../components/form/select-basic";
import { FormProvider, useForm } from "react-hook-form";
import InputTextarea from "../../../../../components/form/input-textarea";
import InputDate from "../../../../../components/form/input-date";
import InputText from "../../../../../components/form/input-text";

export default function References({ disabled }) {
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
                <SelectBasic
                  label="Reference Type"
                  id="Reference Type"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Select Reference Type"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Sales Order Number"
                  id="Sales Order Number"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Select Sales Order Number"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <InputDate
                  label={"Delivery Order Date"}
                  customWidth={"w-1/2"}
                  disabled={disabled}
                />
                <SelectBasic
                  label="Delivery SLA"
                  id="Delivery SLA"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Select Delivery SLA"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
              </div>
            </Col>

            <Col>
              <div className=" flex flex-col gap-[24px]">
                <SelectBasic
                  label="Account Owner"
                  id="Account Owner"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Select Account Owner"
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
