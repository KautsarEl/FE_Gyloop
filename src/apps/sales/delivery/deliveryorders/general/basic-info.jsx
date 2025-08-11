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
                label="Delivery Order Type"
                id="Delivery Order Type"
                options={[]}
                disabled={disabled}
                placeholder="Please Select Delivery Order Type"
                required={true}
                rules={{ required: "This field is required" }}
              />
            </Col>
          </Row>
          <Row className=" Row-SystemId">
            <Col>
              <div className=" flex flex-col gap-[24px]">
                <SelectBasic
                  label="Customer Name"
                  id="Customer Name"
                  options={[{ value: 1, label: "1" }]}
                  disabled={disabled}
                  placeholder="Please Select Customer Name"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Delivery to Party"
                  id="Delivery to Party"
                  options={[{ value: 1, label: "1" }]}
                  disabled={disabled}
                  placeholder="Please Select Delivery to Party"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Attention To"
                  id="Attention To"
                  options={[{ value: 1, label: "1" }]}
                  disabled={disabled}
                  placeholder="Please Select Attention To"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <InputDate
                  label={"Delivery Order Date"}
                  customWidth={"w-1/2"}
                  disabled={disabled}
                />
                <InputDate
                  label={"Delivery Due Date"}
                  customWidth={"w-1/2"}
                  disabled={disabled}
                />
                <InputTextarea
                  label="Notes"
                  id="Notes"
                  disabled={disabled}
                  placeholder="Please Input notes"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
              </div>
            </Col>

            <Col>
              <div className=" flex flex-col gap-[24px]">
                <SelectBasic
                  label="Delivery Person in Charge"
                  id="Delivery Person in Charge"
                  options={[{ value: 1, label: "1" }]}
                  disabled={disabled}
                  placeholder="Please Select Delivery Person in Charge"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
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
                  label="Inconters Location 2"
                  id="Inconters Location 2"
                  options={[{ value: 1, label: "1" }]}
                  disabled={disabled}
                  placeholder="Please Select Inconters Location 2"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Delivery Point"
                  id="Delivery Point"
                  options={[{ value: 1, label: "1" }]}
                  disabled={disabled}
                  placeholder="Please Select Delivery Point"
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
