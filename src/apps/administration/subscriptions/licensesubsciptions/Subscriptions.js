// Tables: system.config

import React, { useEffect, useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../../../layouts/Header";
import Footer from "../../../../layouts/Footer";
import { Button, Col, Dropdown, Nav, Row, Form, Table } from "react-bootstrap";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { SketchPicker } from "react-color";
import "../../../../assets/css/react-datepicker.min.css";
import { createRoot } from "react-dom/client";

import {
  systemid_config,
  currentIdno_Systm,
} from "../../../../data/administration/orgsystems/systemid/DataSystemid";

import { createContext } from "react";

import {
  selectBoolean,
  selectSystemType,
  selectActivationStatus,
  selectLicenseTypeServer,
} from "../../../../data/general/DataGeneralSelection";

import { subscriptionsHeader } from "../../../../data/administration/subscriptions/licensesubscriptions/DataSubscriptions";
import { subscriptions_table } from "../../../../data/administration/subscriptions/licensesubscriptions/DataSubscriptionsTable";

import { organizationid_config } from "../../../../data/administration/orgsystems/organizationid/DataOrganizationid";
// import { organizationid_table } from "../../data/administration/DataOrganizationidTable";
import SearchTable from "../../../../components/form/search-table";
import BtnActionTable from "../../../../components/button/action-table";

export default function Subscriptions() {
  // Get the data from current system number
  const index = systemid_config.findIndex(
    (item) => item.idno_systm === currentIdno_Systm
  );

  const columns = subscriptions_table.map((column) => column.name_fild); // Use 'name' for column headers
  const data = subscriptionsHeader.map(
    (row) => subscriptions_table.map((column) => row[column.vlue_fild]) // Map data to match columns
  );

  //   const columns = organizationid_table.map((column) => column.name_fild); // Use 'name' for column headers
  //   const data = organizationid_config.map(
  //     (row) => organizationid_table.map((column) => row[column.vlue_fild]) // Map data to match columns
  //   );
  const [show, setShow] = useState("Display");

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
  const [filteredData, setFilteredData] = useState(subscriptionsHeader);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const filtered = subscriptionsHeader.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(value)
      )
    );
    setFilteredData(filtered);
  };

  return (
    <React.Fragment>
      <Header />
      <div className="main main-table p-3 p-lg-4">
        <div className="d-md-flex align-items-center justify-content-between mb-4">
          <div>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item">
                <Link to="#">Administration</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="#">Subscriptions</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
              License Subscriptions
              </li>
            </ol>
            <h4 className="main-title mb-0">
              {show === "Edit" ? "Edit" : "Display"} License Subscriptions
              
            </h4>
          </div>

          <div className="d-flex gap-2 mt-3 mt-md-0">
            <Button
              variant=""
              className="btn-white d-flex align-items-center gap-2"
            >
              <i className="fars-lightbulb-on"></i>Documentation
            </Button>
          </div>
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
                  {subscriptionsHeader.length}{" "}
                </span>{" "}
                of{" "}
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  {subscriptionsHeader.length}{" "}
                </span>{" "}
                results
              </h6>
              <div className=" container-action-table">
                <Link to={"/apps/administration/subscriptions/subscriptionsdetail"}>
                  <Button
                    variant="primary"
                    className="d-flex align-items-center gap-2"
                  >
                    <i className="fars-square-plus"></i>
                    <span className="d-none d-sm-inline">
                      {" "}
                      Add{" "}
                    </span>
                  </Button>
                </Link>

                <Button
                  // id="action-table"
                  variant=""
                  className="btn-white d-flex align-items-center gap-2"
                >
                  <i className="fars-filter"></i>
                </Button>
                <Button
                  // id="action-table"
                  variant=""
                  className="btn-white d-flex align-items-center gap-2"
                >
                  <i className="fars-sort-amount-up"></i>
                </Button>
                <Button
                  // id="action-table"
                  variant=""
                  className="btn-white d-flex align-items-center gap-2"
                >
                  <i className="fars-layer-group"></i>
                </Button>
                <Button
                  // id="action-table"
                  variant=""
                  className="btn-white d-flex align-items-center gap-2"
                >
                  <i className="fars-color-palette"></i>
                </Button>
                <Button
                  // id="action-table"
                  variant=""
                  className="btn-white d-flex align-items-center gap-2"
                >
                  <i className="fars-cloud-arrow-down"></i>
                </Button>
                {/* <BtnActionTable
                  children={<i className="far-file-spreadsheet"></i>}
                /> */}
                <SearchTable search={search} handleSearch={handleSearch} />
              </div>
            </div>
            <div className="scrollbar-custom">
              <Table responsive className="mb-0">
                <thead>
                  <tr>
                    {columns.map((item, i) => (
                      <th key={i} scope="col">
                        <p style={{ minWidth: "max-content", margin: 0 }}>
                          {" "}
                          {item}{" "}
                        </p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                      <tr key={index}>
                        {Object.values(item).map((value, index) => (
                          <th scope="row">
                            <p className="value-table"> {value} </p>
                          </th>
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
