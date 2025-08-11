import React from "react";
import { Col, Form, Row, Table } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import SelectBasic from "../../../../../components/form/select-basic";
import InputText from "../../../../../components/form/input-text";
import Switch from "../../../../../components/form/swicth";
import RadioGroup from "../../../../../components/form/radio-group";
import { packaging_table } from "../../../../../data/sales/masterdata/products/DataPackagingTable";

export default function Packaging({ disabled }) {
  const methods = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };
  const columns = packaging_table;
  const data = [];
  const TablePackaging = () => {
    return (
      <div className="scrollbar-custom mt-[30px]">
        <Table responsive className="mb-0">
          <thead>
            <tr>
              {columns.map((item, i) => (
                <th key={i} scope="col">
                  <p style={{ minWidth: "max-content", margin: 0 }}>
                    {item.name_fild}
                  </p>
                </th>
              ))}
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
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <Row className=" Row-SystemId">
            <Col>
              <div className=" flex flex-col gap-[24px]">
                <Switch label="Is Packaging Product?" disabled={disabled} />
                <SelectBasic
                  label={"Use Packaging?"}
                  id="Use Packaging"
                  options={[]}
                  disabled={disabled}
                  placeholder="Optional for Packaging"
                  rules={{ required: "This field is required" }}
                />
              </div>
            </Col>
          </Row>
          <TablePackaging />
        </Form>
      </FormProvider>
    </div>
  );
}
