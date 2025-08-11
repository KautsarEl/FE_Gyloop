import React, { useState } from "react";
import { Button, Pagination, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { catalogs_dataTable } from "../../../../../data/sales/masterdata/catalogs/DataCatalogsTable";
import Sort from "../../../../../components/dropdown/sort";
import Group from "../../../../../components/dropdown/group";
import Layout from "../../../../../components/dropdown/layout";
import Donwload from "../../../../../components/dropdown/download";
import SearchTable from "../../../../../components/form/search-table";
import { catalogs_table } from "../../../../../data/sales/masterdata/catalogs/DataCatalogs";

export default function BomItems() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(catalogs_dataTable);
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
      <div
        className="header-table-custom"
        style={{ marginBottom: 20, width: "100%" }}
      >
        <h6
          style={{
            fontWeight: "500",
            fontSize: "16px",
            margin: 0,
            width: "100%",
          }}
        >
          Showing <span style={{ fontWeight: "bold" }}>1</span> to{" "}
          <span style={{ fontWeight: "bold" }}>
            {" "}
            {catalogs_dataTable.length}{" "}
          </span>{" "}
          of{" "}
          <span style={{ fontWeight: "bold" }}>
            {" "}
            {catalogs_dataTable.length}{" "}
          </span>{" "}
          results
        </h6>
        <div className=" container-action-table">
          <Link>
            <Button
              variant="primary"
              className="d-flex align-items-center gap-2"
            >
              <i className="fars-square-plus"></i>
              <span className="d-none d-sm-inline"> Create</span>
            </Button>
          </Link>

          <Button
            // id="action-table"
            variant=""
            className="btn-white d-flex align-items-center gap-2"
          >
            <i className="fars-filter"></i>
          </Button>
          <Sort />
          <Group />
          <Layout />
          <Donwload />
          <SearchTable search={search} handleSearch={handleSearch} />
        </div>
      </div>
      <div className="scrollbar-custom">
        <Table responsive className="mb-0">
          <thead>
            <tr>
              {columns.map((item, i) => (
                <th key={i} scope="col">
                  <p style={{ minWidth: "max-content", margin: 0 }}> {item} </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index}>
                  {Object.values(item).map((value, index) => (
                    <td>
                      {index === columns.length - 1 ? (
                        <p className={"value-table text-green-500 font-bold"}>
                          {value}
                        </p>
                      ) : index === 0 ? (
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
        <Pagination className=" mt-[30px]">
          <Pagination.Prev />
          {[1].map((item) => (
            <Pagination.Item key={item} active={item === 1}>
              {item}
            </Pagination.Item>
          ))}
          <Pagination.Next />
        </Pagination>
      </div>
    </div>
  );
}
