import React from "react";
import { Col, Form, Row, Table } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import SelectBasic from "../../../../../components/form/select-basic";
import InputText from "../../../../../components/form/input-text";
import Switch from "../../../../../components/form/swicth";
import RadioGroup from "../../../../../components/form/radio-group";
import InputTextarea from "../../../../../components/form/input-textarea";
import { warehouse_table } from "../../../../../data/sales/masterdata/products/DataWarehouseTable";
import TableCheckbox from "../../../../../components/form/table-checkbox";

export default function BatchManagement({ disabled }) {
  const methods = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };
  const columns = warehouse_table;
  const data = [];

  const TableWarehouse = () => {
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
                <Switch
                  id={"is_bich"}
                  label="Is Use Batch Management?"
                  disabled={disabled}
                />
                <SelectBasic
                  label={"Batch Profile"}
                  id="prof_btch"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please select Batch Profile"
                  rules={{ required: "This field is required" }}
                />
                <Switch
                  id={"is_sern"}
                  label="Is Use Serial Number"
                  disabled={disabled}
                />
                <SelectBasic
                  label={"Serial Number Profile"}
                  id="prof_sern"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please select Serial Number Profile"
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
