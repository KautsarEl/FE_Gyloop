import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import SelectBasic from "../../../../../components/form/select-basic";
import { FormProvider, useForm } from "react-hook-form";
import InputTextarea from "../../../../../components/form/input-textarea";

export default function Classification({ disabled }) {
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
                  label="Catalog Type"
                  id="Catalog Type"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Select Catalog Type"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Catalog Group"
                  id="Catalog Group"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Select Catalog Group"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Catalog Class"
                  id="Catalog Class"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Select Catalog Class"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Industry Target"
                  id="Industry Target"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Select Industry Target"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
              </div>
            </Col>

            <Col>
              <div className=" flex flex-col gap-[24px]">
                <SelectBasic
                  label="Catalog Profile"
                  id="Catalog Profile"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Select Catalog Profile"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Catalog Profile"
                  id="Catalog Profile"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Select Catalog Profile"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <InputTextarea
                  label="Catalog Notes"
                  id="Catalog Notes"
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
