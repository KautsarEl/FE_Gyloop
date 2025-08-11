import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { catalogs_dataTable } from "../../../../../data/sales/masterdata/catalogs/DataCatalogsTable";
import { catalogs_table } from "../../../../../data/sales/masterdata/catalogs/DataCatalogs";

export default function StockItems() {
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
                <p className="m-0 min-w-max">Required Quantity </p>
              </th>
              <th scope="col">
                <p className="m-0 min-w-max">Available Quantity</p>
              </th>
              <th scope="col">
                <p className="m-0 min-w-max">Status</p>
              </th>
              <th scope="col">
                <p className="m-0 min-w-max">Remaining Quantity</p>
              </th>
              <th scope="col">
                <p className="m-0 min-w-max">Sources</p>
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
                <td colSpan={12} className="p-4 text-gray-500">
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
