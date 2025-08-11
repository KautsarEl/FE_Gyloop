import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import SelectBasic from "../../../../../components/form/select-basic";
import { FormProvider, useForm } from "react-hook-form";
import InputTextarea from "../../../../../components/form/input-textarea";
import InputText from "../../../../../components/form/input-text";
import InputDate from "../../../../../components/form/input-date";
import Switch from "../../../../../components/form/swicth";

export default function InitialDiscovery({ disabled }) {
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
                <InputText
                  label="Opportunity Name"
                  id="Opportunity Name"
                  type="text"
                  disabled={disabled}
                  placeholder="Please Input Opportunity Name"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <Switch label={"Is Budget Already Exist"} />
                <Form.Group className="w-full">
                  <Form.Label className="f-1 form-label-custom">
                    Estimated Budget
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
                  label="Potential Order Products"
                  id="Potential Order Products"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Potential Order Products"
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
                  label="Priority"
                  id="Priority"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Priority"
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
