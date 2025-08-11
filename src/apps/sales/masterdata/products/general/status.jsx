import React from "react";
import Select from "react-select";
import { Button, Col, Row, Form } from "react-bootstrap";
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
      {/* <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}> */}
          <Row className=" Row-SystemId">
            <Col>
              <div className=" flex flex-col gap-[24px]">
                <SelectBasic
                  label="Internal Status"
                  id="stat_intr"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Internal Status"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                {/* <Switch
                  id={"is_extr"}
                  label="Is USe External Status?"
                  disabled={disabled}
                /> */}
                <SelectBasic
                  label="External Status"
                  id="stat_extr"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select External Status"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                {/* <SelectBasic
                  label="Object Version"
                  id="vers_onjc"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Object Version"
                  required={true}
                  rules={{ required: "This field is required" }}
                /> */}
                {/* <SelectBasic
                  label="Change Logs"
                  id="change_logs"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Change Logs"
                  required={true}
                  rules={{ required: "This field is required" }}
                /> */}
              </div>
            </Col>
          </Row>
        {/* </Form>
      </FormProvider> */}
    </div>
  );
}
