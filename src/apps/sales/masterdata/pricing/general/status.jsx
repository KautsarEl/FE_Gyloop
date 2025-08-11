import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import SelectBasic from "../../../../../components/form/select-basic";
import { FormProvider, useForm } from "react-hook-form";
import Switch from "../../../../../components/form/swicth";

export default function Status({ disabled }) {
  const methods = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="px-[20px] py-[30px]">
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <Row className="Row-SystemId">
            <Col>
              <div className="flex flex-col gap-[24px]">
                <SelectBasic
                  label="Internal Status"
                  id="stat_intr"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Internal Status"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="External Status"
                  id="stat_extr"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select External Status"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Price Status"
                  id="stat_price"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Price Status"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <Switch
                  id={"is_active"}
                  label="Is Active"
                  disabled={disabled}
                />
                <Switch
                  id={"is_default"}
                  label="Is Default Price"
                  disabled={disabled}
                />
              </div>
            </Col>
          </Row>
        </Form>
      </FormProvider>
    </div>
  );
} 