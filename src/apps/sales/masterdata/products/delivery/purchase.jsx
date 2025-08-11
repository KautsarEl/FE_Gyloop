import React from "react";
import { Col, Form, FormLabel, Row } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import SelectBasic from "../../../../../components/form/select-basic";
import InputText from "../../../../../components/form/input-text";
import Switch from "../../../../../components/form/swicth";
import RadioGroup from "../../../../../components/form/radio-group";
import InputTextarea from "../../../../../components/form/input-textarea";
import InputDate from "../../../../../components/form/input-date";

export default function Purchase({ disabled }) {
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
                  label={"Purchase Delivery Routing Profile"}
                  id="code_purc_rout"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please input delivery routing"
                  rules={{ required: "This field is required" }}
                />
                <Form.Group>
                  <Form.Label className="f-1 form-label-custom">
                    Estimated Purchase Time
                  </Form.Label>
                  <div className=" flex gap-[15px] items-center w-full">
                    <InputText
                      customWidth={"w-full"}
                      id="strt_purc_delv"
                      disabled={disabled}
                      placeholder="1,00"
                      required={true}
                      styles={"text-right"}
                      rules={{ required: "This field is required" }}
                    />
                    to
                    <InputText
                      customWidth={"w-full"}
                      id="endd_purc_delv"
                      disabled={disabled}
                      placeholder="10,00"
                      required={true}
                      styles={"text-right"}
                      rules={{ required: "This field is required" }}
                    />
                    <SelectBasic
                      customWidth={"w-[210px]"}
                      id="uoms_purc_delv"
                      options={[]}
                      disabled={disabled}
                      placeholder="kg"
                      rules={{ required: "This field is required" }}
                    />
                  </div>
                </Form.Group>
                <InputText
                  label={"Purchase Delivery UoM"}
                  customWidth={"w-full"}
                  id="uoms_purc_delv"
                  disabled={disabled}
                  placeholder="Please input purchase delivery uom"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <Switch
                  id={"is_purc_note"}
                  label={"Is Use Purchase Delivery Long Text"}
                  disabled={disabled}
                />
                <InputTextarea
                  label={"Purchase Delivery Note"}
                  id="purc_note"
                  disabled={disabled}
                  placeholder="Please Input Description"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
              </div>
            </Col>
          </Row>
        {/* </Form>
      </FormProvider> */}
    </div>
  );
}
