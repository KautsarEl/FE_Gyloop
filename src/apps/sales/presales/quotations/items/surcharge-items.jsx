import React, { useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { catalogs_dataTable } from "../../../../../data/sales/masterdata/catalogs/DataCatalogsTable";
import { catalogs_table } from "../../../../../data/sales/masterdata/catalogs/DataCatalogs";
import Switch from "../../../../../components/form/swicth";
import SelectBasic from "../../../../../components/form/select-basic";
import { FormProvider, useForm } from "react-hook-form";
import InputText from "../../../../../components/form/input-text";

export default function SurchargeItems({ disabled }) {
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
      <Switch label={"Bill to Customer"} disabled={disabled} />
      <div className=" mb-[25px]">
        <Form.Label className="f-1 form-label-custom !mb-[20px]">
          Items
        </Form.Label>
        <div className="scrollbar-custom">
          <Table responsive className="mb-0">
            <thead>
              <tr>
                <th scope="col" className=" w-[30px]">
                  <center>
                    <i className=" fars-ellipsis-vertical"></i>
                  </center>
                </th>
                <th scope="col">
                  <p className="m-0 min-w-max">Item </p>
                </th>
                <th scope="col">
                  <p className="m-0 min-w-max">Surcharge</p>
                </th>
                <th scope="col">
                  <p className="m-0 min-w-max">Surcharge Unit Price </p>
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
                  <p className="m-0 min-w-max">Applied Items</p>
                </th>
                <th scope="col">
                  <p className="m-0 min-w-max">Finance Account</p>
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
                          className={index === 0 ? " w-[30px]" : "value-table"}
                        >
                          {value}
                        </p>
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={10} className="p-4 text-gray-500">
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <Row className=" Row-SystemId">
            <Col>
              <div className=" flex flex-col gap-[24px]">
                <Form.Group className="w-1/2">
                  <Form.Label className="f-1 form-label-custom">
                    Total Surcharge
                  </Form.Label>
                  <div className=" flex gap-[10px]">
                    <SelectBasic
                      customWidth={"w-[60%]"}
                      id="Account Name"
                      options={[]}
                      disabled={disabled}
                      placeholder="IDR"
                      required={true}
                      rules={{ required: "This field is required" }}
                    />
                    <InputText
                      id="Rev"
                      type="text"
                      disabled={disabled}
                      placeholder="280.000.000"
                      required={true}
                      rules={{ required: "This field is required" }}
                      styles={"text-right"}
                    />
                  </div>
                </Form.Group>
                <SelectBasic
                  customWidth={"w-1/2"}
                  label={"Applied Item"}
                  id="Applied Item"
                  options={[]}
                  disabled={disabled}
                  placeholder="Applied Item"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
              </div>
            </Col>
          </Row>
          <Row className=" w-1/2 !my-[25px]">
            <Col>
              <div className=" flex gap-[10px]">
                <InputText
                  label={"Category"}
                  id="Category"
                  type="text"
                  disabled={disabled}
                  placeholder="Please Input Category"
                  required={true}
                  rules={{ required: "This field is required" }}
                />
                <Form.Group className="w-full">
                  <Form.Label className="f-1 form-label-custom">
                    Surcharge Price
                  </Form.Label>
                  <div className=" flex gap-[10px]">
                    <SelectBasic
                      customWidth={"w-[60%]"}
                      id="Account Name"
                      options={[]}
                      disabled={disabled}
                      placeholder="IDR"
                      required={true}
                      rules={{ required: "This field is required" }}
                    />
                    <InputText
                      id="Rev"
                      type="text"
                      disabled={disabled}
                      placeholder="280.000.000"
                      required={true}
                      rules={{ required: "This field is required" }}
                      styles={"text-right"}
                    />
                  </div>
                </Form.Group>
                <Form.Group className="w-full">
                  <Form.Label className="f-1 form-label-custom">
                    Price per UoM
                  </Form.Label>
                  <div className=" flex gap-[10px]">
                    <InputText
                      id="Rev"
                      type="text"
                      disabled={disabled}
                      placeholder="280.000.000"
                      required={true}
                      rules={{ required: "This field is required" }}
                      styles={"text-right"}
                    />
                    <SelectBasic
                      customWidth={"w-[60%]"}
                      id="Account Name"
                      options={[]}
                      disabled={disabled}
                      placeholder="IDR"
                      required={true}
                      rules={{ required: "This field is required" }}
                    />
                  </div>
                </Form.Group>
              </div>
            </Col>
          </Row>
        </Form>
      </FormProvider>
      <div className="scrollbar-custom">
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
                <p className="m-0 min-w-max">Parameter Unit</p>
              </th>
              <th scope="col">
                <p className="m-0 min-w-max">Item Qty</p>
              </th>
              <th scope="col">
                <p className="m-0 min-w-max">Surcharge Qty</p>
              </th>
              <th scope="col">
                <p className="m-0 min-w-max">Sub Total</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index}>
                  {Object.values(item).map((value, index) => (
                    <td>
                      <p className={index === 0 ? " w-[30px]" : "value-table"}>
                        {value}
                      </p>
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="p-4 text-gray-500">
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
