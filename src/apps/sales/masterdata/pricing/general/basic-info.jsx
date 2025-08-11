import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import InputText from "../../../../../components/form/input-text";
import SelectBasic from "../../../../../components/form/select-basic";
import SelectTags from "../../../../../components/form/select-tags";
import { FormProvider, useForm } from "react-hook-form";
import InputTextarea from "../../../../../components/form/input-textarea";
import Switch from "../../../../../components/form/swicth";
import SwitchTextArea from "../../../../../components/form/swicth-textarea";

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
          <Row className="Row-SystemId">
            <Col>
              <div className="flex flex-col gap-[24px]">
                <SelectBasic
                  label="Price Type"
                  id="price_type"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Select Price Type"
                  required={true}
                  rules={{ required: "This field is required" }}
                />

                <InputText
                  customWidth={"w-1/2"}
                  label="Price ID"
                  id="price_id"
                  type="text"
                  disabled={disabled}
                  placeholder="Please Input Price ID"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <InputText
                  label="Short Description"
                  id="desc_shrt"
                  type="text"
                  disabled={disabled}
                  placeholder="Please Input Price Description"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Price Profile"
                  id="price_profile"
                  options={[{ value: 1, label: "1" }]}
                  disabled={disabled}
                  placeholder="Please Select Price Profile"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <Switch label={"Is Use Tags"} disabled={disabled} />
                <SelectTags
                  label="Price Tags"
                  id="price_tags"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Select Tags"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SwitchTextArea
                  placeholder={"Long Text Description"}
                  label={"Is Use Long Desc"}
                  disabled={disabled}
                />
              </div>
            </Col>

            <Col>
              <div className="flex flex-col gap-[24px]">
                <InputText
                  customWidth={"w-1/2"}
                  label="Internal Number"
                  id="idno_intr"
                  type="text"
                  disabled={disabled}
                  placeholder="Please Input Internal Number"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <InputText
                  label="Price Brand"
                  id="price_bran"
                  type="text"
                  disabled={disabled}
                  placeholder="Please Input Brand"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <InputText
                  label="Manufacturing Part Number (MPN)"
                  id="idno_mpnn"
                  type="text"
                  disabled={disabled}
                  placeholder="Please Input Manufacturing Part Number (MPN)"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <InputText
                  label="Barcode"
                  id="code_xbar"
                  type="text"
                  disabled={disabled}
                  placeholder="Please Input Barcode"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <InputText
                  label="QR Barcode"
                  id="code_xqrc"
                  type="text"
                  disabled={disabled}
                  placeholder="Please Input Barcode"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <InputText
                  label="SKU Number"
                  id="idno_skus"
                  type="text"
                  disabled={disabled}
                  placeholder="Please Input SKU Number"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <InputText
                  label="Article Number"
                  id="idno_artc"
                  type="text"
                  disabled={disabled}
                  placeholder="Please Input Article Number"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <InputText
                  label="Reference Number"
                  id="idno_refr"
                  type="text"
                  disabled={disabled}
                  placeholder="Please Input Reference Number"
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