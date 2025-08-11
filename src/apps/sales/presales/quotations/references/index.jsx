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
                  label="Opportunity Number"
                  id="Opportunity Number"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Select Opportunity Number"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <InputDate
                  label={"Registered Date"}
                  customWidth={"w-1/2"}
                  disabled={disabled}
                />
                <InputDate
                  label={"Closing Target"}
                  customWidth={"w-1/2"}
                  disabled={disabled}
                />
                <Form.Group className="w-1/2">
                  <Form.Label className="f-1 form-label-custom">
                    Probability
                  </Form.Label>
                  <div className=" flex gap-[10px]">
                    <InputText
                      id="Rev"
                      type="text"
                      disabled={disabled}
                      placeholder="23,55"
                      required={true}
                      rules={{ required: "This field is required" }}
                      styles={"text-right"}
                    />
                    <SelectBasic
                      customWidth={"w-[50%]"}
                      id="Account Name"
                      options={[]}
                      disabled={disabled}
                      placeholder="%"
                      required={true}
                      rules={{ required: "This field is required" }}
                    />
                  </div>
                </Form.Group>
              </div>
            </Col>

            <Col>
              <div className=" flex flex-col gap-[24px]">
                <SelectBasic
                  label="Lead Source"
                  id="Lead Source"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Select Lead Source"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Campaign"
                  id="Campaign"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Select Campaign"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Opportunity Stage"
                  id="Opportunity Stage"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Select Opportunity Stage"
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
