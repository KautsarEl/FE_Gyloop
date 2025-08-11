import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import InputText from "../../../../../components/form/input-text";
import SelectBasic from "../../../../../components/form/select-basic";
import SelectTags from "../../../../../components/form/select-tags";
import { FormProvider, useForm } from "react-hook-form";
import InputTextarea from "../../../../../components/form/input-textarea";
import InputDate from "../../../../../components/form/input-date";

export default function BasicInfo({ disabled }) {
  const methods = useForm({ mode: "onChange" });
  const [show, setShow] = useState(0);
  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };
  return (
    <div className="px-[20px] py-[30px]">
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <Row className=" Row-SystemId mb-[25px]">
            <Col>
              <SelectBasic
                label="Quotations Type"
                id="Quotations_type"
                options={[]}
                disabled={disabled}
                placeholder="Please Select Quotation Type"
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
                  label="Quotation Name"
                  id="Quotation Name"
                  type="text"
                  disabled={disabled}
                  placeholder="Please Input quotation name"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Account Name"
                  id="Account Name"
                  options={[{ value: 1, label: "1" }]}
                  disabled={disabled}
                  placeholder="Please Select Account Name"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Attention To"
                  id="Attention To"
                  options={[{ value: 1, label: "1" }]}
                  disabled={disabled}
                  placeholder="Please Select Attention To"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <div className=" flex justify-between gap-[10px]">
                  <InputDate label={"Quotation Date"} disabled={disabled} />
                  <InputDate label={"Expired"} disabled={disabled} />
                </div>
                <SelectBasic
                  label="Following Action"
                  id="Following Action"
                  options={[{ value: 1, label: "1" }]}
                  disabled={disabled}
                  placeholder="Please Select Following Action"
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
                  options={[{ value: 1, label: "1" }]}
                  disabled={disabled}
                  placeholder="Please Select Account Owner"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Company"
                  id="Company"
                  options={[{ value: 1, label: "1" }]}
                  disabled={disabled}
                  placeholder="Please Select Company"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Territory ID"
                  id="Territory ID"
                  options={[{ value: 1, label: "1" }]}
                  disabled={disabled}
                  placeholder="Please Select Territory ID"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Sales Group ID"
                  id="Sales Group ID"
                  options={[{ value: 1, label: "1" }]}
                  disabled={disabled}
                  placeholder="Please Select Sales Group ID"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Division"
                  id="Division"
                  options={[{ value: 1, label: "1" }]}
                  disabled={disabled}
                  placeholder="Please Select Division"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Department"
                  id="Department"
                  options={[{ value: 1, label: "1" }]}
                  disabled={disabled}
                  placeholder="Please Select Department"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Profit Center"
                  id="Profit Center"
                  options={[{ value: 1, label: "1" }]}
                  disabled={disabled}
                  placeholder="Please Select Profit Center"
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
