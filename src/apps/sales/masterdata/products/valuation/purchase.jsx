import React from "react";
import { Col, Form, Row, Table } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import SelectBasic from "../../../../../components/form/select-basic";
import InputText from "../../../../../components/form/input-text";
import Switch from "../../../../../components/form/swicth";
import RadioGroup from "../../../../../components/form/radio-group";
import InputTextarea from "../../../../../components/form/input-textarea";
import TableCheckbox from "../../../../../components/form/table-checkbox";
import { purchase_table } from "../../../../../data/sales/masterdata/products/DataPurchaseTable";

export default function Purchase({ disabled }) {
  const methods = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };
  const columns = purchase_table;
  const data = [];
  const TablePurcahse = () => {
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
                <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="Purchase Basic Price"
                    id="purc_basc"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    customWidth={"w-[110px]"}
                    id="purr_curr"
                    options={[]}
                    disabled={disabled}
                    placeholder="IDR"
                    rules={{ required: "This field is required" }}
                  />
                </div>
                <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="Purchase Price Per Quantity"
                    id="purc_qnty_pric"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    customWidth={"w-[110px]"}
                    id="purc_uoms_pric"
                    options={[]}
                    disabled={disabled}
                    placeholder="kg"
                    rules={{ required: "This field is required" }}
                  />
                </div>
                <Switch
                  id={"is_purc_mins"}
                  label="Is Use Minimum Purchase Quantity?"
                  disabled={disabled}
                />
                <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="Minimum Purchase Quantity"
                    id="qnty_purc_mins"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    customWidth={"w-[110px]"}
                    id="uoms_purc_mins"
                    options={[]}
                    disabled={disabled}
                    placeholder="kg"
                    rules={{ required: "This field is required" }}
                  />
                </div>
                <Switch
                  id={"is_purc_lots"}
                  label="Is Use Lot Purchase Quantity?"
                  disabled={disabled}
                />
                <div className=" flex gap-[15px] items-end w-full">
                  <InputText
                    label="Lot Purchase Quantity"
                    id="qnty_purc_lots"
                    disabled={disabled}
                    placeholder="1,00"
                    required={true}
                    styles={"text-right"}
                    rules={{ required: "This field is required" }}
                  />
                  <SelectBasic
                    customWidth={"w-[110px]"}
                    id="uoms_purc_lots"
                    options={[]}
                    disabled={disabled}
                    placeholder="kg"
                    rules={{ required: "This field is required" }}
                  />
                </div>
                <Switch
                  id={"is_purc_surc"}
                  label="Is Use Default Purchase Surcharge Item?"
                  disabled={disabled}
                />
                <SelectBasic
                  label={"Purchase Surcharge Item"}
                  id="assg_purc_surc"
                  options={[]}
                  disabled={disabled}
                  placeholder="Please select purchase surcharge item"
                  rules={{ required: "This field is required" }}
                />
              </div>
            </Col>
          </Row>
          {/* <div className="mt-[30px]">
            <TableCheckbox
              label={"Use Default Surchage Item"}
              id="User Alternatif UoM"
              disabled={disabled}
              required={true}
              content={<TablePurcahse />}
            />
          </div> */}
        {/* </Form>
      </FormProvider> */}
    </div>
  );
}
