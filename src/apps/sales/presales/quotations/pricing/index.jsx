import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import SelectBasic from "../../../../../components/form/select-basic";
import { FormProvider, useForm } from "react-hook-form";
import InputTextarea from "../../../../../components/form/input-textarea";
import InputDate from "../../../../../components/form/input-date";
import InputText from "../../../../../components/form/input-text";

export default function Pricing({ disabled }) {
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
                  label="Pricing ID - Pricing List"
                  id="Pricing ID - Pricing List"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Select Pricing ID - Pricing List"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Pricing ID - Discount"
                  id="Pricing ID - Discount"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Select Pricing ID - Discount"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Pricing ID - Promotion"
                  id="Pricing ID - Promotion"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Select Pricing ID - Promotion"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Tax Code"
                  id="Tax Code"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Select Tax Code"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Loyalty ID"
                  id="Loyalty ID"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Select Loyalty ID"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
              </div>
            </Col>

            <Col>
              <div className=" flex flex-col gap-[24px]">
              <Form.Group className="w-full">
                  <Form.Label className="f-1 form-label-custom">
                    Inconterms
                  </Form.Label>
                  <div className=" flex gap-[10px]">
                    <SelectBasic
                      customWidth={"w-[20%]"}
                      id="Account Name"
                      options={[]}
                      disabled={disabled}
                      placeholder="FOB"
                      required={true}
                      rules={{ required: "This field is required" }}
                    />
                    <SelectBasic
                      id="Account Name"
                      options={[]}
                      disabled={disabled}
                      placeholder="Please select inconterms"
                      required={true}
                      rules={{ required: "This field is required" }}
                    />
                  </div>
                </Form.Group>
                <SelectBasic
                  customWidth={'w-1/2'}
                  label="Pricing Schema"
                  id="Pricing Schema"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Select Pricing Schema"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  customWidth={'w-1/2'}
                  label="Surcharge Condition"
                  id="Surcharge Condition"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Select Surcharge Condition"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  customWidth={'w-1/2'}
                  label="Applied Level"
                  id="Applied Level"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Select Applied Level"
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
