import React, { useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import SelectBasic from "../../../../../components/form/select-basic";
import { FormProvider, useForm } from "react-hook-form";
import InputTextarea from "../../../../../components/form/input-textarea";
import Switch from "../../../../../components/form/swicth";

export default function CompetitionAnalysis({ disabled }) {
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
                <Switch label={"Any Competitors"} />
                <SelectBasic
                  label="Key Challenges"
                  id="Key Challenges"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Key Challenges"
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
                <SelectBasic
                  label="Competitors"
                  id="Competitors"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Competitors"
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
