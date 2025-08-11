import React from "react";
import { Col, Form, Row, Table } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import SelectBasic from "../../../../../components/form/select-basic";
import InputTextarea from "../../../../../components/form/input-textarea";
import TableCheckbox from "../../../../../components/form/table-checkbox";
import { uom_table } from "../../../../../data/sales/masterdata/products/DataUoMTable";

export default function UnitOfMeasure({ disabled }) {
  const methods = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  const columns = uom_table;
  const data = [];

  const TableUom = () => {
    return (
      <div className="scrollbar-custom">
        <Table responsive className="mb-0">
          <thead>
            <tr>
              {columns.map((item, i) =>
                i === 0 ? (
                  <th key={i} scope="col" style={{ width: 50 }}>
                    {item.name_fild}
                  </th>
                ) : (
                  <th key={i} scope="col">
                    <p style={{ minWidth: "max-content", margin: 0 }}>
                      {item.name_fild}
                    </p>
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index}>
                  {Object.values(item).map((value, index) => (
                    <td>
                      {index === 0 ? (
                        value
                      ) : (
                        <p
                          className={index === 0 ? " w-[30px]" : "value-table"}
                        >
                          {value}
                        </p>
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="p-4 text-gray-500">
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    );
  };
  return (
    <div className="px-[20px] py-[30px]">
      {/* <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}> */}
          <Row className=" Row-SystemId">
            <Col>
              <div className=" flex flex-col gap-[24px]">
                <SelectBasic
                  label="Basic Unit of Measure"
                  id="uoms_basc"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Basic Unit of Measure"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="CRM Default Unit of Measure"
                  id="uoms_crmx"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select CRM Default Unit of Measure"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="SRM Default Unit of Measure"
                  id="uoms_srmx"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select CRM Default Unit of Measure"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label="WMS Default Unit of Measure"
                  id="uoms_wmsx"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select CRM Default Unit of Measure"
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
