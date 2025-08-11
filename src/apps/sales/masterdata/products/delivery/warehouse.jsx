import React from "react";
import { Col, Form, FormLabel, Row } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import SelectBasic from "../../../../../components/form/select-basic";
import InputText from "../../../../../components/form/input-text";
import Switch from "../../../../../components/form/swicth";
import RadioGroup from "../../../../../components/form/radio-group";
import InputTextarea from "../../../../../components/form/input-textarea";

export default function Warehouse({ disabled }) {
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
                  label={"Storage Type"}
                  id="type_stor"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please input storage type"
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label={"Warehouse Strategy"}
                  id="strg_whrs"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please input warehouse strategy"
                  rules={{ required: "This field is required" }}
                />
                <Switch
                  id={"is_qmis"}
                  label={"Is Quality Inspection Required?"}
                  disabled={disabled}
                />
                <Switch
                  id={"is_whrs_note"}
                  label={"Is Use Wrehouse Delivery Long Text"}
                  disabled={disabled}
                />
                <InputTextarea
                  label={"Warehouse Delivery Notes"}
                  id="whrs_note"
                  disabled={disabled}
                  placeholder="Please Input Description"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
              </div>
            </Col>
            {/* <Col>
              <div className=" flex flex-col gap-[24px]">
                <Switch label={"Use Reorder Point"} disabled={disabled} />
                <SelectBasic
                  label={"ROP Profile"}
                  id="ROP Profile"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please input ROP Profile"
                  rules={{ required: "This field is required" }}
                />
                <Switch
                  label={"Auto Min-Max Calculation"}
                  disabled={disabled}
                />
                <SelectBasic
                  label={"Output Data Flow"}
                  id="Output Data Flow"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please input output Data Flow"
                  rules={{ required: "This field is required" }}
                />
                <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="Minimum Stock QTY"
                    id="Net Weight"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    customWidth={"w-[100px]"}
                    id="Slect Basic Price List"
                    options={[]}
                    disabled={disabled}
                    placeholder="Pcs"
                    rules={{ required: "This field is required" }}
                  />
                </div>
                <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="Maximum Stock QTY"
                    id="Net Weight"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    customWidth={"w-[100px]"}
                    id="Slect Basic Price List"
                    options={[]}
                    disabled={disabled}
                    placeholder="Pcs"
                    rules={{ required: "This field is required" }}
                  />
                </div>
                <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="Safety Stock QTY"
                    id="Net Weight"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    customWidth={"w-[100px]"}
                    id="Slect Basic Price List"
                    options={[]}
                    disabled={disabled}
                    placeholder="Pcs"
                    rules={{ required: "This field is required" }}
                  />
                </div>
                <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="Minimum Lot QTY"
                    id="Net Weight"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    customWidth={"w-[100px]"}
                    id="Slect Basic Price List"
                    options={[]}
                    disabled={disabled}
                    placeholder="Pcs"
                    rules={{ required: "This field is required" }}
                  />
                </div>
                <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="Maximum Lot QTY"
                    id="Net Weight"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    customWidth={"w-[100px]"}
                    id="Slect Basic Price List"
                    options={[]}
                    disabled={disabled}
                    placeholder="Pcs"
                    rules={{ required: "This field is required" }}
                  />
                </div>
                <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="ROP Planned Delivery"
                    id="Net Weight"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    customWidth={"w-[100px]"}
                    id="Slect Basic Price List"
                    options={[]}
                    disabled={disabled}
                    placeholder="Pcs"
                    rules={{ required: "This field is required" }}
                  />
                </div>
              </div>
            </Col> */}
          </Row>
        {/* </Form>
      </FormProvider> */}
    </div>
  );
}
