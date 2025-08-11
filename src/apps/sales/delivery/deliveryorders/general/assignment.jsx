import React from "react";
import { Col, Form, Row, Table } from "react-bootstrap";
import SelectBasic from "../../../../../components/form/select-basic";
import Switch from "../../../../../components/form/swicth";
import { FormProvider, useForm } from "react-hook-form";
import CheckboxGroup from "../../../../../components/form/input-checkbox-group";
import { assingment_table } from "../../../../../data/sales/masterdata/products/DataAssignmentTable";

export default function Assignment({ disabled }) {
  const methods = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };
  const columns = assingment_table;
  const data = [];
  return (
    <div className=" p-[20px]">
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <Row className=" Row-SystemId">
            <Col>
              <div className=" flex flex-col gap-[24px]">
                <CheckboxGroup
                  label={"Object Use"}
                  dataCheck={["Sales", "Purchase", "Warehouse"]}
                  disabled={disabled}
                />
                <SelectBasic
                  label="Object Owner"
                  id="object_owner"
                  options={[]}
                  disabled={disabled}
                  placeholder="Select Object Owner"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
              </div>
            </Col>
          </Row>
          <div className="scrollbar-custom mt-[30px]">
            <Table responsive className="mb-0">
              <thead>
                <tr>
                  {columns.map((item, i) =>
                    i === 0 ? (
                      <th key={i} scope="col" style={{width:50}}>
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
                              className={
                                index === 0 ? " w-[30px]" : "value-table"
                              }
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
        </Form>
      </FormProvider>
    </div>
  );
}
