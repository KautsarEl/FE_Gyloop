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
                label="Opportunity Type"
                id="Opportunity_type"
                options={[]}
                disabled={disabled}
                placeholder="Please Select Opportunity Type"
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
                  label="Opportunity Name"
                  id="Opportunity Name"
                  type="text"
                  disabled={disabled}
                  placeholder="Please Input Opportunity Name"
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
                <div className=" flex justify-between gap-[10px]">
                  <InputDate label={"Closing Target"} disabled={disabled} />
                  <InputText
                    label="Rev"
                    id="Rev"
                    type="text"
                    disabled={disabled}
                    placeholder="Please Input Rev"
                    required={true}
                    rules={{ required: "This field is required" }}
                  />
                </div>
                <div className=" flex justify-between gap-[10px]">
                  <Form.Group className="w-full">
                    <Form.Label className="f-1 form-label-custom">
                      Estimated Ammount
                    </Form.Label>
                    <div className=" flex gap-[10px]">
                      <SelectBasic
                        customWidth={"w-[60%]"}
                        id="Account Name"
                        options={[]}
                        disabled={disabled}
                        placeholder="IDR"
                        required={true}
                        rules={{ required: "This field is required" }}
                      />
                      <InputText
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
                  <InputText
                    label="Rev"
                    id="Rev"
                    type="text"
                    disabled={disabled}
                    placeholder="Please Input Rev"
                    required={true}
                    rules={{ required: "This field is required" }}
                  />
                </div>
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
                  customWidth={"w-1/2"}
                  label="Lead Source"
                  id="Lead Source"
                  options={[{ value: 1, label: "1" }]}
                  disabled={disabled}
                  placeholder="Please Select Lead Source"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  customWidth={"w-1/2"}
                  label="Campaign"
                  id="Campaign"
                  options={[{ value: 1, label: "1" }]}
                  disabled={disabled}
                  placeholder="Please Select Campaign"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  customWidth={"w-1/2"}
                  label="Current Stage"
                  id="Current Stage"
                  options={[{ value: 1, label: "1" }]}
                  disabled={disabled}
                  placeholder="Please Select Current Stage"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  customWidth={"w-1/2"}
                  label="Next Steps"
                  id="Next Steps"
                  options={[{ value: 1, label: "1" }]}
                  disabled={disabled}
                  placeholder="Please Select Next Steps"
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
