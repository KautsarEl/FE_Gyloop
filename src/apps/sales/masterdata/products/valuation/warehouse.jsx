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

export default function Warehouse({ disabled }) {
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
                  id={"is_valu"}
                  label="Is Valuated Stock"
                  disabled={disabled}
                />
                <SelectBasic
                  label={"Valuation Method"}
                  id="meth_valu"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please select valuation method"
                  rules={{ required: "This field is required" }}
                />
                <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="Inventory Price"
                    id="invt_basc"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    customWidth={"w-[110px]"}
                    id="invt_curr"
                    options={[]}
                    disabled={disabled}
                    placeholder="IDR"
                    rules={{ required: "This field is required" }}
                  />
                </div>
                <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="Inventory Price per Quantity"
                    id="invt_qnty_pric"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    customWidth={"w-[110px]"}
                    id="invt_uoms_pric"
                    options={[]}
                    disabled={disabled}
                    placeholder="Kg"
                    rules={{ required: "This field is required" }}
                  />
                </div>
                {/* <Switch label="Batch Management" disabled={disabled} />
                <SelectBasic
                  label={"Batch Profile"}
                  id="Batch Profile"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please select Batch Profile"
                  rules={{ required: "This field is required" }}
                />
                <Switch label="Serial Number" disabled={disabled} />
                <SelectBasic
                  label={"Serial Number Profile"}
                  id="Serial Number Profile"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please select Serial Number Profile"
                  rules={{ required: "This field is required" }}
                /> */}
              </div>
            </Col>
            <Col>
              <div className=" flex flex-col gap-[24px]">
                <SelectBasic
                  label={"Valuation Reference Code"}
                  id="code_reff_valu"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Input"
                  rules={{ required: "This field is required" }}
                />
                <SelectBasic
                  label={"Movement Reference Code"}
                  id="code_reff_move"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Input"
                  rules={{ required: "This field is required" }}
                />
                <Switch
                  id={"is_warh_surc"}
                  label={"Is Use Default Warehouse Surcharge Item?"}
                  disabled={disabled}
                />
                <SelectBasic
                  label={"Warehouse Surcharge Item"}
                  id="assg_warh_surc"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please Input"
                  rules={{ required: "This field is required" }}
                />
                {/* <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="Stock Value"
                    id="Net Weight"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    customWidth={"w-[100px]"}
                    id="Slect Basic Price List"
                    options={[]}
                    disabled={disabled}
                    placeholder="IDR"
                    rules={{ required: "This field is required" }}
                  />
                </div>
                <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="Value Per UoM"
                    id="Net Weight"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    customWidth={"w-[100px]"}
                    id="Slect Basic Price List"
                    options={[]}
                    disabled={disabled}
                    placeholder="Pcs"
                    rules={{ required: "This field is required" }}
                  />
                </div> */}
              </div>
            </Col>
          </Row>
          {/* <div className="mt-[30px]">
            <TableCheckbox
              label={"Use Default Surchage Item"}
              id="User Alternatif UoM"
              disabled={disabled}
              required={true}
              content={<TableWarehouse />}
            />
          </div> */}
        {/* </Form>
      </FormProvider> */}
    </div>
  );
}
