import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import SelectBasic from "../../../../../components/form/select-basic";
import { FormProvider, useForm } from "react-hook-form";

export default function DiscoveryAttribute({ disabled }) {
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
                label="Custom Field Profile"
                id="Custom Field Profile"
                options={[]}
                disabled={disabled}
                placeholder="Select Custom Field Profile"
                required={true}
                rules={{ required: "This field is required" }}
              />
            </Col>
          </Row>
          <Row className=" Row-SystemId">
            <Col>
              <div className=" flex flex-col gap-[24px]">
                <SelectBasic
                  label="Custom Field 1"
                  id="Custom Field 1"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Custom Field 1"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Custom Field 2"
                  id="Custom Field 2"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Custom Field 2"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Custom Field 3"
                  id="Custom Field 3"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Custom Field 3"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Custom Field 4"
                  id="Custom Field 4"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Custom Field 4"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Custom Field 5"
                  id="Custom Field 5"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Custom Field 5"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
              </div>
            </Col>

            <Col>
              <div className=" flex flex-col gap-[24px]">
              <SelectBasic
                  label="Custom Field 6"
                  id="Custom Field 6"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Custom Field 6"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
              <SelectBasic
                  label="Custom Field 7"
                  id="Custom Field 7"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Custom Field 7"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
              <SelectBasic
                  label="Custom Field 8"
                  id="Custom Field 8"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Custom Field 8"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
              <SelectBasic
                  label="Custom Field 9"
                  id="Custom Field 9"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Custom Field 9"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
              <SelectBasic
                  label="Custom Field 10"
                  id="Custom Field 10"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Custom Field 10"
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
