import React from "react";
import { Col, Form, Row, Table } from "react-bootstrap";
import SelectBasic from "../../../../../components/form/select-basic";
import { FormProvider, useForm } from "react-hook-form";
import { specification_table } from "../../../../../data/sales/masterdata/products/DataSpecificationTable";

export default function Specification({ disabled }) {
  const methods = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };
  const columns = specification_table;
    const data = [];
    const TableSpecification = () => {
      return (
        <div className="scrollbar-custom mt-[30px]">
          <Table responsive className="mb-0">
            <thead>
              <tr>
                {columns.map((item, i) => (
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
              <SelectBasic
                label="Specification Profile"
                id="Specification Profile"
                options={[]}
                disabled={disabled}
                placeholder="Please Select Specification Profile"
                required={true}
                rules={{ required: "This field is required" }}
              />
            </Col>
          </Row>
          <TableSpecification/>
        </Form>
      </FormProvider>
    </div>
  );
}
