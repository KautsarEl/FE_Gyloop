import React from "react";
import { Col, Form, FormLabel, Row } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import SelectBasic from "../../../../../components/form/select-basic";
import InputText from "../../../../../components/form/input-text";
import Switch from "../../../../../components/form/swicth";
import RadioGroup from "../../../../../components/form/radio-group";
import InputTextarea from "../../../../../components/form/input-textarea";

export default function MaterialReqPlanning({ disabled }) {
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
                  label={"MRP Profile"}
                  id="prof_mrp"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please input MRP Profile"
                  rules={{ required: "This field is required" }}
                />
                {/* <Switch
                  label={"Auto Min-Max Calculation"}
                  disabled={disabled}
                /> */}
                <SelectBasic
                  label={"Output Document"}
                  id="docs_data"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please input output Document"
                  rules={{ required: "This field is required" }}
                />
                <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="Minimum Stock Quantity"
                    id="qnty_invt_mins"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    customWidth={"w-[110px]"}
                    id="uoms_invt_mins"
                    options={[]}
                    disabled={disabled}
                    placeholder="Pcs"
                    rules={{ required: "This field is required" }}
                  />
                </div>
                <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="Maximum Stock Quantity"
                    id="qnty_invt_maxs"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    customWidth={"w-[110px]"}
                    id="uoms_invt_maxs"
                    options={[]}
                    disabled={disabled}
                    placeholder="Pcs"
                    rules={{ required: "This field is required" }}
                  />
                </div>
                <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="Safety Stock Quantity"
                    id="qnty_invt_saft"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    customWidth={"w-[110px]"}
                    id="uoms_invt_saft"
                    options={[]}
                    disabled={disabled}
                    placeholder="Pcs"
                    rules={{ required: "This field is required" }}
                  />
                </div>
                <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="Minimum Lot Quantity"
                    id="qnty_lots_mins"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    customWidth={"w-[110px]"}
                    id="uoms_lots_mins"
                    options={[]}
                    disabled={disabled}
                    placeholder="Pcs"
                    rules={{ required: "This field is required" }}
                  />
                </div>
                <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="Maximum Lot Quantity"
                    id="qnty_lots_maxs"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    customWidth={"w-[110px]"}
                    id="uoms_lots_maxs"
                    options={[]}
                    disabled={disabled}
                    placeholder="Pcs"
                    rules={{ required: "This field is required" }}
                  />
                </div>
                <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="Planned Delivery"
                    id="plan_delv"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    customWidth={"w-[110px]"}
                    id="uoms_delv"
                    options={[]}
                    disabled={disabled}
                    placeholder="Pcs"
                    rules={{ required: "This field is required" }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        {/* </Form>
      </FormProvider> */}
    </div>
  );
}
