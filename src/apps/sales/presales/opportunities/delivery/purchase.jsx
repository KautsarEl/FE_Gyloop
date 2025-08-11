import React from "react";
import { Col, Form, FormLabel, Row } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import SelectBasic from "../../../../../components/form/select-basic";
import InputText from "../../../../../components/form/input-text";
import Switch from "../../../../../components/form/swicth";
import RadioGroup from "../../../../../components/form/radio-group";
import InputTextarea from "../../../../../components/form/input-textarea";

export default function Purchase({ disabled }) {
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
                  label={"Purchase Delivery Routing"}
                  id="Purchase Delivery Routing"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please input delivery routing"
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label={"Special Indicator"}
                  id="Special Indicator"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please input special indicator"
                  rules={{ required: "This field is required" }}
                />
                <Form.Group>
                  <Form.Label className="f-1 form-label-custom">Estimated Delivery Time</Form.Label>
                  <div className=" flex gap-[15px] items-center w-full">
                    <SelectBasic
                      customWidth={"w-full"}
                      id="Basic UoM"
                      options={[]}
                      disabled={disabled}
                      placeholder="kg"
                      rules={{ required: "This field is required" }}
                    />
                    <InputText
                      customWidth={"w-full"}
                      id="Price Per UoM"
                      disabled={disabled}
                      placeholder="1,00"
                      styles={"text-right"}
                      rules={{ required: "This field is required" }}
                    />
                    to
                    <InputText
                      customWidth={"w-full"}
                      id="Price Per UoM"
                      disabled={disabled}
                      placeholder="10,00"
                      styles={"text-right"}
                      rules={{ required: "This field is required" }}
                    />
                  </div>
                </Form.Group>
                <InputTextarea
                  label={"Purchase Delivery Notes"}
                  id="Purchase Delivery Notes"
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
