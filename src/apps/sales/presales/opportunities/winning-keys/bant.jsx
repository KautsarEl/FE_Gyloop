import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import SelectBasic from "../../../../../components/form/select-basic";
import { FormProvider, useForm } from "react-hook-form";
import InputTextarea from "../../../../../components/form/input-textarea";
import InputText from "../../../../../components/form/input-text";
import InputDate from "../../../../../components/form/input-date";

export default function BANTAnalysis({ disabled }) {
  const methods = useForm({ mode: "onChange" });

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
                label="Product Characteristic"
                id="Product Characteristic"
                options={[]}
                disabled={disabled}
                placeholder="Select Product Characteristic"
                required={true}
                rules={{ required: "This field is required" }}
              />
            </Col>
          </Row>
          <Row className=" Row-SystemId">
            <Col>
              <div className=" flex flex-col gap-[24px]">
                <SelectBasic
                  label="Budget Confirmation"
                  id="Budget Confirmation"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Budget Confirmation"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Authority Identification"
                  id="Authority Identification"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Authority Identification"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Need Identification"
                  id="Need Identification"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Need Identification"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Timeline Identification"
                  id="Timeline Identification"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Timeline Identification"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <InputTextarea
                  label="Notes"
                  id="Notes"
                  disabled={disabled}
                  placeholder="Please Input Description"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
              </div>
            </Col>

            <Col>
              <div className=" flex flex-col gap-[24px]">
                <Form.Group>
                  <Form.Label className="f-1 form-label-custom">
                    Estimated Ammount
                  </Form.Label>
                  <div className=" flex gap-[10px]">
                    <SelectBasic
                      customWidth={"w-[20%]"}
                      id="Account Name"
                      options={[]}
                      disabled={disabled}
                      placeholder="IDR"
                      required={true}
                      rules={{ required: "This field is required" }}
                    />
                    <InputText
                    customWidth={"w-[50%]"}
                      id="Rev"
                      type="text"
                      disabled={disabled}
                      placeholder="280.000.000"
                      required={true}
                      rules={{ required: "This field is required" }}
                      styles={"text-right"}
                    />
                  </div>
                </Form.Group>
                <SelectBasic
                  label="Key Person"
                  id="Key Person"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Key Person"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <InputDate label={"Timeline Date"} disabled={disabled} customWidth={"w-1/2"} />
              </div>
            </Col>
          </Row>
        </Form>
      </FormProvider>
    </div>
  );
}
