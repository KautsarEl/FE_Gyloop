import React from "react";
import { Col, Form, Row, Table } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import SelectBasic from "../../../../../components/form/select-basic";
import InputTextarea from "../../../../../components/form/input-textarea";
import TableCheckbox from "../../../../../components/form/table-checkbox";
import { uom_table } from "../../../../../data/sales/masterdata/products/DataUoMTable";
import Switch from "../../../../../components/form/swicth";

export default function AlternateUnitOfMeasure({ disabled }) {
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
                <Switch label={"Is Use Alternate UoM?"} id={"is_altr"} disabled={disabled} />
              </div>
            </Col>
          </Row>
        {/* </Form>
      </FormProvider> */}
    </div>
  );
}
