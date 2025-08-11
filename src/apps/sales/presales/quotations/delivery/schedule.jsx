import React, { useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { catalogs_dataTable } from "../../../../../data/sales/masterdata/catalogs/DataCatalogsTable";
import { catalogs_table } from "../../../../../data/sales/masterdata/catalogs/DataCatalogs";
import Switch from "../../../../../components/form/swicth";
import SelectBasic from "../../../../../components/form/select-basic";
import { FormProvider, useForm } from "react-hook-form";
import InputText from "../../../../../components/form/input-text";
import InputTextarea from "../../../../../components/form/input-textarea";

export default function Schedule({ disabled }) {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const columns = catalogs_table.map((column) => column.name_fild); // Use 'name' for column headers

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const filtered = catalogs_dataTable.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(value)
      )
    );

    setFilteredData(filtered);
  };
  const methods = useForm({ mode: "onChange" });
  const [show, setShow] = useState(0);
  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };
  return (
    <div className="px-[20px] py-[30px]">
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <Row className=" Row-SystemId">
            <Col>
              <div className=" flex flex-col gap-[24px]">
                <SelectBasic
                  customWidth={"w-1/2"}
                  label={"Delivery SLA"}
                  id="Delivery SLA"
                  options={[]}
                  disabled={disabled}
                  placeholder="Delivery SLA"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <Switch disabled={disabled} label={"Bill to Customer"} />
                <SelectBasic
                  customWidth={"w-1/2"}
                  label={"Shipping Point"}
                  id="Shipping Point"
                  options={[]}
                  disabled={disabled}
                  placeholder="Shipping Point"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  customWidth={"w-1/2"}
                  label={"Default Shipping Address"}
                  id="Default Shipping Address"
                  options={[]}
                  disabled={disabled}
                  placeholder="Default Shipping Address"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
              </div>
            </Col>
          </Row>
          <div className="scrollbar-custom my-[25px]">
            <Table responsive className="mb-0">
              <thead>
                <tr>
                  <th scope="col" className=" w-[30px]">
                    <center>
                      <i className=" fars-ellipsis-vertical"></i>
                    </center>
                  </th>
                  <th scope="col">
                    <p className="m-0 min-w-max">Item</p>
                  </th>
                  <th scope="col">
                    <p className="m-0 min-w-max">Product ID</p>
                  </th>
                  <th scope="col">
                    <p className="m-0 min-w-max">Unit Price</p>
                  </th>
                  <th scope="col">
                    <p className="m-0 min-w-max">Quantity</p>
                  </th>
                  <th scope="col">
                    <p className="m-0 min-w-max">Discount</p>
                  </th>
                  <th scope="col">
                    <p className="m-0 min-w-max">Sub Total</p>
                  </th>
                  <th scope="col">
                    <p className="m-0 min-w-max">Category</p>
                  </th>
                  <th scope="col">
                    <p className="m-0 min-w-max">Product Type</p>
                  </th>
                  <th scope="col">
                    <p className="m-0 min-w-max">Internal Product Type</p>
                  </th>
                  <th scope="col">
                    <p className="m-0 min-w-max">Product Group</p>
                  </th>
                  <th scope="col">
                    <p className="m-0 min-w-max">Internal Product Group</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
                    <tr key={index}>
                      {Object.values(item).map((value, index) => (
                        <td>
                          <p
                            className={
                              index === 0 ? " w-[30px]" : "value-table"
                            }
                          >
                            {value}
                          </p>
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={12} className="p-4 text-gray-500">
                      No Data Found
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
          <Row className=" Row-SystemId">
            <Col>
              <div className=" flex flex-col gap-[24px]">
                <InputTextarea
                  label="Notes"
                  id="Notes"
                  disabled={disabled}
                  placeholder="Please Input Notes"
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
