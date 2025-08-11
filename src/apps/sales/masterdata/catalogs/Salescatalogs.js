import React, { useEffect, useState } from "react";
import Header from "../../../../layouts/Header";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  currentIdno_Systm,
  systemid_config,
} from "../../../../data/administration/orgsystems/systemid/DataSystemid";
import SearchTable from "../../../../components/form/search-table";

import Guidiance from "../../../../components/dropdown/guidiance";
import Donwload from "../../../../components/dropdown/download";
import Layout from "../../../../components/dropdown/layout";
import Group from "../../../../components/dropdown/group";
import Sort from "../../../../components/dropdown/sort";
import { catalogs_table } from "../../../../data/sales/masterdata/catalogs/DataCatalogs";
import { catalogs_dataTable } from "../../../../data/sales/masterdata/catalogs/DataCatalogsTable";
import Filter from "../../../../components/dropdown/filter";

export default function Salesproducts() {
  const [show, setShow] = useState("Display");
  // Get the data from current system number
  const index = systemid_config.findIndex(
    (item) => item.idno_systm === currentIdno_Systm
  );

  const columns = catalogs_table.map((column) => column.name_fild); // Use 'name' for column headers

  const mainRender = () => {
    document.body.classList.add("page-app");
    return () => {
      document.body.classList.remove("page-app");
    };
  };

  useEffect(() => {
    mainRender();
  }, [show]);
  const [msgShow, setMsgShow] = useState(false);

  // Toggle chat option in each item

  // Selection for Deplyment Source
  const selectDeploymentSources = [
    ...new Set(
      systemid_config
        .map((item) => item.name_sytm)
        .filter((source) => source !== "N/A")
    ),
  ].map((source) => ({ value: source, label: source }));
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(catalogs_dataTable);

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
  let menu = []

  columns.map((item)=> menu.push({menu:item}))

  return (
    <React.Fragment>
      <Header />
      <div className="main main-table p-3 p-lg-4">
        <div className="d-md-flex align-items-center justify-content-between mb-4">
          <div>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item">
                <Link to="#">Customers</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="#">Master Data</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Catalogs
              </li>
            </ol>
            <h4 className="main-title mb-0">Catalogs Report</h4>
          </div>
          <Guidiance />
        </div>

        <div className={"chat-panel-table" + (msgShow ? " msg-show" : "")}>
          <div
            class="sidebar-header"
            style={{ alignItems: "center", display: "flex" }}
          >
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div>
                <p className="fw-normal" style={{ marginBottom: 0 }}>
                  Last update: {systemid_config[index].date_updt},{" "}
                  {systemid_config[index].time_updt}
                </p>
              </div>
            </div>
          </div>
          <div className="custom-table" style={{ position: "relative" }}>
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
                <Link
                  to={"/apps/sales/masterdata/catalogs/salescatalogscreate"}
                >
                  <Button
                    variant="primary"
                    className="d-flex align-items-center gap-2"
                  >
                    <i className="fars-square-plus"></i>
                    <span className="d-none d-sm-inline"> Create</span>
                  </Button>
                </Link>
                <Filter />
                <Sort menu={menu} />
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
                    {columns.map((item, i) =>
                      i === 0 ? (
                        <th key={i} scope="col">
                          <center>
                            <i className=" fars-ellipsis-vertical"></i>
                          </center>
                        </th>
                      ) : (
                        <th key={i} scope="col">
                          <p style={{ minWidth: "max-content", margin: 0 }}>
                            {item}
                          </p>
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                      <tr key={index}>
                        {Object.values(item).map((value, index) => (
                          <td>
                            {index === columns.length - 1 ? (
                              <p
                                className={
                                  "value-table text-green-500 font-bold"
                                }
                              >
                                {value}
                              </p>
                            ) : index === 0 ? (
                              value
                            ) : (
                              <p
                                className={
                                  index === 0 ? " w-[30px]" : "value-table"
                                }
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
                      <td
                        colSpan={columns.length}
                        className="p-4 text-gray-500"
                      >
                        No Data Found
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
