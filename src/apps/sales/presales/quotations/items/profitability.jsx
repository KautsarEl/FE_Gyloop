import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { catalogs_dataTable } from "../../../../../data/sales/masterdata/catalogs/DataCatalogsTable";
import { catalogs_table } from "../../../../../data/sales/masterdata/catalogs/DataCatalogs";

export default function Profitability() {
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
  return (
    <div className="px-[20px] py-[30px]">
      <div className=" mb-[25px]">
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
                  <p className="m-0 min-w-max">Product ID </p>
                </th>
                <th scope="col">
                  <p className="m-0 min-w-max">Unit Price </p>
                </th>
                <th scope="col">
                  <p className="m-0 min-w-max">COGS</p>
                </th>
                <th scope="col">
                  <p className="m-0 min-w-max">Discount</p>
                </th>
                <th scope="col">
                  <p className="m-0 min-w-max">Gross Profit per Unit</p>
                </th>
                <th scope="col">
                  <p className="m-0 min-w-max">Gros Profit</p>
                </th>
                <th scope="col">
                  <p className="m-0 min-w-max">Quantity</p>
                </th>
                <th scope="col">
                  <p className="m-0 min-w-max">Sub Total GP</p>
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
                  <td colSpan={11} className="p-4 text-gray-500">
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
      <div className="">
        <Form.Label className="f-1 form-label-custom !mb-[20px]">
          Summary
        </Form.Label>
        <div className="w-1/3">
          <Table responsive>
            <tbody>
              <tr>
                <td className="bg-transparent">
                  <p className="mb-0 font-bold px-[16px]">Sub Total</p>
                </td>
                <td className="bg-transparent flex justify-between">
                  <p className="mb-0">IDR</p>
                  <p className="mb-0">2.000.000,00</p>
                </td>
              </tr>
              <tr>
                <td className="bg-transparent">
                  <p className="mb-0 font-bold px-[16px]">
                    Price List Discount
                  </p>
                </td>
                <td className="bg-transparent flex justify-between">
                  <p className="mb-0">IDR</p>
                  <p className="mb-0">-2.000.000,00</p>
                </td>
              </tr>
              <tr>
                <td className="bg-transparent">
                  <p className="mb-0 font-bold px-[16px]">Voucher Discount</p>
                </td>
                <td className="bg-transparent flex justify-between">
                  <p className="mb-0">IDR</p>
                  <p className="mb-0">-500.000,00</p>
                </td>
              </tr>
              <tr>
                <td className="bg-transparent">
                  <p className="mb-0 font-bold px-[16px]">Total</p>
                </td>
                <td className="bg-transparent flex justify-between">
                  <p className="mb-0">IDR</p>
                  <p className="mb-0">1.500.000,00</p>
                </td>
              </tr>
              <tr>
                <td className="bg-transparent">
                  <p className="mb-0 font-bold px-[16px]">Surcharge</p>
                </td>
                <td className="bg-transparent flex justify-between">
                  <p className="mb-0">IDR</p>
                  <p className="mb-0">500.000,00</p>
                </td>
              </tr>
              <tr>
                <td className="bg-transparent">
                  <p className="mb-0 font-bold px-[16px]">Tax</p>
                </td>
                <td className="bg-transparent flex justify-between">
                  <p className="mb-0">IDR</p>
                  <p className="mb-0">200.000,00</p>
                </td>
              </tr>
              <tr>
                <td className="bg-transparent">
                  <p className="mb-0 font-bold px-[16px]">Grand Total</p>
                </td>
                <td className="bg-transparent flex justify-between">
                  <p className="mb-0">IDR</p>
                  <p className="mb-0">2.200.000,00</p>
                </td>
              </tr>
              <tr></tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
