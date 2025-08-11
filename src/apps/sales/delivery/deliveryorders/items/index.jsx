import React, { useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { catalogs_dataTable } from "../../../../../data/sales/masterdata/catalogs/DataCatalogsTable";
import { catalogs_table } from "../../../../../data/sales/masterdata/catalogs/DataCatalogs";
import Switch from "../../../../../components/form/swicth";
import SelectBasic from "../../../../../components/form/select-basic";
import { FormProvider, useForm } from "react-hook-form";
import InputText from "../../../../../components/form/input-text";

export default function Items({ disabled }) {
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
                <p className="m-0 min-w-max">Product ID</p>
              </th>
              <th scope="col">
                <p className="m-0 min-w-max">Req. Quantity</p>
              </th>
              <th scope="col">
                <p className="m-0 min-w-max">Delivery Point</p>
              </th>
              <th scope="col">
                <p className="m-0 min-w-max">Storage Loc.</p>
              </th>
              <th scope="col">
                <p className="m-0 min-w-max">Delivery Quantity</p>
              </th>
              <th scope="col">
                <p className="m-0 min-w-max">Customer Product ID</p>
              </th>
              <th scope="col">
                <p className="m-0 min-w-max">Batch</p>
              </th>
              <th scope="col">
                <p className="m-0 min-w-max">Serial Number</p>
              </th>
              <th scope="col">
                <p className="m-0 min-w-max">Volume</p>
              </th>
              <th scope="col">
                <p className="m-0 min-w-max">Weight</p>
              </th>
              <th scope="col">
                <p className="m-0 min-w-max">Category</p>
              </th>
              <th scope="col">
                <p className="m-0 min-w-max">Remaining Qty</p>
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
                <td colSpan={14} className="p-4 text-gray-500">
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
