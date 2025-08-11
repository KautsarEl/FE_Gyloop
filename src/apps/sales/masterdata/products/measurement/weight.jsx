import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import SelectBasic from "../../../../../components/form/select-basic";
import InputText from "../../../../../components/form/input-text";
import Switch from "../../../../../components/form/swicth";
import RadioGroup from "../../../../../components/form/radio-group";

export default function Weight({ disabled }) {
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
                <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="Net Weight"
                    id="wght_nett"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    // label={"Net Weight UoM"}
                    customWidth={"w-[110px]"}
                    id="uoms_nett"
                    options={[]}
                    disabled={disabled}
                    placeholder="kg"
                    rules={{ required: "This field is required" }}
                  />
                </div>
                <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="Gross Weight"
                    id="wght_gros"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    customWidth={"w-[110px]"}
                    // label="Gross Weight UoM"
                    id="uoms_gros"
                    options={[]}
                    disabled={disabled}
                    placeholder="kg"
                    rules={{ required: "This field is required" }}
                  />
                </div>
              </div>
            </Col>
            <Col>
              <div className=" flex flex-col gap-[24px]">
                <Switch
                  id={"is_upck"}
                  label="Is Use Packaging?"
                  disabled={disabled}
                />
                <Switch
                  id={"is_gross_reff"}
                  label="Is Use Gross Weight ref_for Shipment"
                  disabled={disabled}
                />
                <Switch
                  id={"is_nett_reff"}
                  label="Is Use Nett Weight ref_for Shipment"
                  disabled={disabled}
                />
                {/* <div>
                  <RadioGroup
                    label="Weight Reference for Shipment"
                    id="Weight Reference for Shipment"
                    disabled={disabled}
                    required={true}
                    rules={{ required: "This field is required" }}
                    name1={"Net Weight"}
                    name2={"Gross Weight"}
                    group={"group-1"}
                  />
                </div> */}
              </div>
            </Col>
          </Row>
        {/* </Form>
      </FormProvider> */}
    </div>
  );
}
