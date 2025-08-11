import React from "react";
import { Col, Form, Row, Table } from "react-bootstrap";
import SelectBasic from "../../../../../components/form/select-basic";
import Switch from "../../../../../components/form/swicth";
import { FormProvider, useForm } from "react-hook-form";
import CheckboxGroup from "../../../../../components/form/input-checkbox-group";
import SelectTags from "../../../../../components/form/select-tags";

export default function Assignment({ disabled }) {
  const methods = useForm({ mode: "onChange" });

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
                  label="Custom Field Profile"
                  id="prof_cusf"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Custom Field Profile"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Specification Profile"
                  id="prof_spec"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Specification Profile"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Variant Profile"
                  id="prof_vrnt"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Variant Profile"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="Object Owner"
                  id="ownr_objc"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Object Owner"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectTags
                  label="Company Assigned"
                  id="assg_comp"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Select Company Assigned"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
              </div>
            </Col>
            <Col>
              <div className="flex flex-col gap-[24px]">
                <CheckboxGroup
                  label={"Object Use"}
                  dataCheck={["Sales", "Purchase", "Warehouse"]}
                  disabled={disabled}
                />
                <Switch
                  id={"is_bomx"}
                  label="Is Use Bill of Material"
                  disabled={disabled}
                />
                <Switch
                  id={"is_subs"}
                  label="Is Substitution"
                  disabled={disabled}
                />
              </div>
            </Col>
          </Row>
        </Form>
      </FormProvider>
    </div>
  );
} 