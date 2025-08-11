import React, { useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import SelectBasic from "../../../../../components/form/select-basic";
import { FormProvider, useForm } from "react-hook-form";
import InputTextarea from "../../../../../components/form/input-textarea";
import Switch from "../../../../../components/form/swicth";
import ProgressBar from "react-bootstrap/ProgressBar";
import RangeSlider from "../../../../../components/form/range-slider";
import InputText from "../../../../../components/form/input-text";

export default function OpportunityScore({ disabled }) {
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
                <RangeSlider label={"Pricing"} score={50} />
                <RangeSlider label={"Competition"} score={70} />
                <RangeSlider label={"Product"} score={90} />
                <RangeSlider label={"Service"} score={90} />
                <RangeSlider label={"Solution"} score={50} />
                <RangeSlider label={"Resources"} score={90} />
                <RangeSlider label={"Stock"} score={20} />
              </div>
            </Col>

            <Col>
              <div className=" flex flex-col gap-[24px]">
                <Form.Group>
                  <Form.Label className="f-1 form-label-custom">
                    Estimated Budget
                  </Form.Label>
                  <div className=" flex gap-[10px]">
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
                    <SelectBasic
                      customWidth={"w-[20%]"}
                      id="Account Name"
                      options={[]}
                      disabled={disabled}
                      placeholder="IDR"
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
