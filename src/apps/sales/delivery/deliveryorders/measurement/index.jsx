import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import SelectBasic from "../../../../../components/form/select-basic";
import { FormProvider, useForm } from "react-hook-form";
import InputTextarea from "../../../../../components/form/input-textarea";
import InputDate from "../../../../../components/form/input-date";
import InputText from "../../../../../components/form/input-text";

export default function Measurement({ disabled }) {
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
                <Form.Group className="w-1/2">
                  <Form.Label className="f-1 form-label-custom">
                    Total Volume
                  </Form.Label>
                  <div className=" flex gap-[10px]">
                    <InputText
                      id={"default"}
                      type="text"
                      disabled={disabled}
                      placeholder="1,00"
                      required={true}
                      styles={"text-right"}
                      rules={{ required: "This field is required" }}
                    />
                    <SelectBasic
                      id={"default"}
                      customWidth={"w-[65%]"}
                      options={[]}
                      disabled={disabled}
                      placeholder="Cbm"
                      required={true}
                      rules={{ required: "This field is required" }}
                    />
                  </div>
                </Form.Group>
                <Form.Group className="w-1/2">
                  <Form.Label className="f-1 form-label-custom">
                    Total Weight
                  </Form.Label>
                  <div className=" flex gap-[10px]">
                    <InputText
                      id={"default"}
                      type="text"
                      disabled={disabled}
                      placeholder="1,00"
                      required={true}
                      styles={"text-right"}
                      rules={{ required: "This field is required" }}
                    />
                    <SelectBasic
                      id={"default"}
                      customWidth={"w-[65%]"}
                      options={[]}
                      disabled={disabled}
                      placeholder="Cbm"
                      required={true}
                      rules={{ required: "This field is required" }}
                    />
                  </div>
                </Form.Group>
              </div>
            </Col>
          </Row>
        </Form>
      </FormProvider>
    </div>
  );
}
