// Tables: system.config

import React, { useEffect, useRef, useState } from "react";
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

import {
  selectBoolean,
  selectSystemType,
  selectActivationStatus,
  selectLicenseTypeServer,
} from "../../../../data/general/DataGeneralSelection";

import { Grid } from "gridjs-react";
import SearchTable from "../../../../components/form/search-table";
import BtnActionTable from "../../../../components/button/action-table";

export default function Systemid() {
  // Get the data from current system number
  const index = systemid_config.findIndex(
    (item) => item.idno_systm === currentIdno_Systm
  );

  const [startDate, setStartDate] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
  const [show, setShow] = useState("Display");

  
  // const renderAction = ()=>{
  //   const targetElement = document.querySelector(".gridjs-search");

  //   if (targetElement && !document.getElementById("excel-container")) {
  //     const newElement = document.createElement("div");
  //     newElement.id = "excel-container"; // Beri ID agar tidak duplikat
  //     targetElement.appendChild(newElement);

  //     const root = createRoot(newElement);
  //     root.render(<Excel />);
  //   }
  // };

  const mainRender = () => {
    document.body.classList.add("page-app");
    return () => {
      document.body.classList.remove("page-app");
    };
  };

  useEffect(() => {
    // renderAction();
    mainRender();
  }, [show]);

  const [chatActive, setChatActive] = useState(1);
  const [msgShow, setMsgShow] = useState(false);

  // Toggle chat option in each item
  const navToggle = (e) => {
    e.target.closest(".row").classList.toggle("nav-show");
  };

  // Selection for Deplyment Source
  const selectDeploymentSources = [
    ...new Set(
      systemid_config
        .map((item) => item.name_sytm)
        .filter((source) => source !== "N/A")
    ),
  ].map((source) => ({ value: source, label: source }));
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(systemid_config);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const filtered = systemid_config.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(value)
      )
    );

    setFilteredData(filtered);
  };
  return (
    <React.Fragment>
      <Header />
      <div className="main main-app p-3 p-lg-4">
        <div className="d-md-flex align-items-center justify-content-between mb-4">
          <div>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item">
                <Link to="#">Administration</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="#">Org. Systems</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                System ID
              </li>
            </ol>
            <h4 className="main-title mb-0">
              {show === "Edit" ? "Edit" : "Display"} System ID Configuration
            </h4>
          </div>

          <div className="d-flex gap-2 mt-3 mt-md-0">
            <Button
              onClick={() =>
                show === "Display" ? setShow("Edit") : setShow("Display")
              }
              variant=""
              className="btn-white d-flex align-items-center gap-2"
            >
              <i
                className={` ${
                  show === "Edit" ? "fars-glasses" : "fars-pen-to-square"
                }`}
                style={{ fontSize: 14 }}
              ></i>
              {show === "Edit" ? "Display" : "Change"}
            </Button>
            <Button
              variant=""
              className="btn-white d-flex align-items-center gap-2"
            >
              <i className="fars-receipt"></i>Logs
            </Button>
            <Button
              variant=""
              className="btn-white d-flex align-items-center gap-2"
            >
              <i className="fars-lightbulb-on"></i>Documentation
            </Button>
          </div>
        </div>

        <div className={"chat-panel" + (msgShow ? " msg-show" : "")}>
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
              <div style={{ width: 200 }}>
                <Select
                  id="option1"
                  options={selectSystemType}
                  isSearchable={false}
                  placeholder={
                    <>
                      <i className=" far-server" style={{ marginRight: 5 }}></i>
                      Server
                    </>
                  }
                  className=" react-select-server"
                />
              </div>
            </div>
          </div>
          <div className="main-panel-config">
            <div style={{ marginTop: 10, padding: 0 }}>
              <Row className=" Row-SystemId">
                {/* //Coumn 1 */}
                <Col>
                  {/* // System ID */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="System ID"
                    >
                      System ID
                    </Form.Label>
                    <Form.Control
                      required
                      id="idno_systm"
                      type="text"
                      placeholder="Generated number from the systems"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={systemid_config[index].idno_systm}
                    />
                  </div>
                  {/* // System Type */}
                  <div className="mb-4 react-select-form">
                    <Form.Label className="form-label-custom">
                      System Type
                    </Form.Label>
                    <Select
                      id="type_sytm"
                      options={selectSystemType}
                      isSearchable={true}
                      isDisabled={show === "Edit" ? false : true}
                      className=" react-select-custom"
                      defaultValue={[
                        {
                          value: systemid_config[index + 1].type_sytm,
                          label: systemid_config[index].type_sytm,
                        },
                      ]}
                    />
                  </div>
                  {/* // System Name */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="System Name"
                    >
                      System Name
                    </Form.Label>
                    <Col className=" custom-form-control">
                      <Form.Control
                        required
                        id="name_sytm"
                        type="text"
                        placeholder="Please input System Name"
                        disabled={show === "Edit" ? false : true}
                        defaultValue={systemid_config[index].name_sytm}
                      />
                    </Col>
                  </div>
                  {/* // System URL */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="System URL"
                    >
                      System URL
                    </Form.Label>
                    <Form.Control
                      required
                      id="addr_sytm"
                      type="text"
                      placeholder="Generated URL from the systems"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={systemid_config[index].addr_sytm}
                    />
                  </div>
                  {/* // System IP */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="System IP"
                    >
                      System IP
                    </Form.Label>
                    <Form.Control
                      required
                      id="ip_sytm"
                      type="text"
                      placeholder="Generated IP from the systems"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={systemid_config[index].ip_sytm}
                    />
                  </div>
                  {/* <div className="mb-4">
                    <Form.Label className="form-label-custom">
                      System Type
                    </Form.Label>
                    <Col className="custom-form-control">
                      <DatePicker
                        selected={startDate2}
                        onChange={(date) => setStartDate2(date)}
                        className="form-control"
                        disabled={show === "Edit" ? false : true}
                        dateFormat="dd MMMM yyyy"
                      />
                    </Col>
                  </div> */}
                </Col>
                {/* //Coumn 2 */}
                <Col>
                  {/* // Is Default System? */}
                  <div className="mb-4 react-select-form">
                    <Form.Label className="form-label-custom">
                      Is Default System?
                    </Form.Label>
                    <Col className=" custom-form-control">
                      <Select
                        id="is_deft"
                        options={selectBoolean}
                        isSearchable={true}
                        isDisabled={show === "Edit" ? false : true}
                        className=" react-select-custom"
                        defaultValue={[
                          {
                            value: systemid_config[index + 1].is_deft,
                            label: systemid_config[index].is_deft,
                          },
                        ]}
                      />
                    </Col>
                  </div>
                  {/* // Is Master Systems? */}
                  <div className="mb-4 react-select-form">
                    <Form.Label className="form-label-custom">
                      Is Master System?
                    </Form.Label>
                    <Col className=" custom-form-control">
                      <Select
                        id="is_mstr"
                        options={selectBoolean}
                        isSearchable={true}
                        isDisabled={show === "Edit" ? false : true}
                        className=" react-select-custom"
                        defaultValue={[
                          {
                            value: systemid_config[index + 1].is_mstr,
                            label: systemid_config[index].is_mstr,
                          },
                        ]}
                      />
                    </Col>
                  </div>
                  {/* // Deployment Source */}
                  <div className="mb-4 react-select-form">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Deployment Source Systems"
                    >
                      Deployment Source Systems
                    </Form.Label>
                    <Col className=" custom-form-control">
                      <Select
                        id="deployment-select"
                        options={selectDeploymentSources}
                        isSearchable={true}
                        isDisabled={show === "Edit" ? false : true}
                        className="react-select-custom"
                        defaultValue={{
                          value: systemid_config[index + 1].sorc_depl,
                          label: systemid_config[index].sorc_depl,
                        }}
                      />
                    </Col>
                  </div>
                  {/* // Super Admin ID */}
                  {/* <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Super Admin ID"
                    >
                      Super Admin ID
                    </Form.Label>
                    <Form.Control
                      required
                      id="idno_sadm"
                      type="text"
                      placeholder="Please input Super Admin ID"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={systemid_config[index].idno_sadm}
                    />
                  </div>
                  </div> */}

                  

                  {/* // Registered Date & Time */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Registered Date"
                    >
                      Registered Date
                    </Form.Label>
                    <Form.Control
                      required
                      id="date_time_regs"
                      type="text"
                      placeholder="Generated date & time from the systems"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={`${systemid_config[index].date_regs}, ${systemid_config[index].time_regs}`}
                    />
                  </div>
                </Col>
                {/* //Coumn 3 */}
                <Col>
                  {/* // System Status */}
                  <div className="mb-4 react-select-form">
                    <Form.Label className="form-label-custom">
                      System Status
                    </Form.Label>
                    <Col className=" custom-form-control">
                      <Select
                        id="sytm_sint"
                        options={selectActivationStatus}
                        isSearchable={true}
                        isDisabled={show === "Edit" ? false : true}
                        className=" react-select-custom"
                        defaultValue={[
                          {
                            value: systemid_config[index+1].sytm_sint,
                            label: systemid_config[index].sytm_sint,
                          },
                        ]}
                      />
                    </Col>
                  </div>
                  {/* // SKU Number */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="SKU Number"
                    >
                      SKU Number
                    </Form.Label>
                    <Form.Control
                      required
                      id="idno_skus"
                      type="text"
                      placeholder="Generated SKU Number from the systems"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={systemid_config[index].idno_skus}
                    />
                  </div>
                  {/* // License Number */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="License Number"
                    >
                      License Number
                    </Form.Label>
                    <Form.Control
                      required
                      id="idno_lcsn"
                      type="text"
                      placeholder="Generated License Number from the systems"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={systemid_config[index].idno_lcsn}
                    />
                  </div>

                  {/* // License Type */}
                  <div className="mb-4 react-select-form">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="License Type"
                    >
                      License Type
                    </Form.Label>
                      <Select
                        id="type_lcsn"
                        options={selectLicenseTypeServer}
                        isSearchable={true}
                        isDisabled={show === "Edit" ? false : true}
                        className=" react-select-custom"
                        defaultValue={[
                          {
                            value: systemid_config[index + 1].type_lcsn,
                            label: systemid_config[index].type_lcsn,
                          },
                        ]}
                      />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div
            className="custom-table"
            style={{ position: "relative", width: "100%" }}
          >
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
                  {systemid_config.length}{" "}
                </span>{" "}
                of{" "}
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  {systemid_config.length}{" "}
                </span>{" "}
                results
              </h6>
              <div className=" container-action-table">
                <BtnActionTable
                  children={<i className="far-file-spreadsheet"></i>}
                />
                <SearchTable search={search} handleSearch={handleSearch} />
              </div>
            </div>
            <div className="scrollbar-custom">
              <Table responsive className="mb-0">
                <thead>
                  <tr>
                    <th scope="col" style={{ minWidth: "max-content" }}>
                      System ID
                    </th>
                    <th scope="col" style={{ minWidth: "max-content" }}>
                      System Type
                    </th>
                    <th scope="col" style={{ minWidth: "max-content" }}>
                      System Name
                    </th>
                    <th scope="col" style={{ minWidth: "max-content" }}>
                      System URL
                    </th>
                    <th scope="col" style={{ minWidth: "max-content" }}>
                      System IP
                    </th>
                    <th scope="col" style={{ minWidth: "max-content" }}>
                      Is Default System
                    </th>
                    <th scope="col" style={{ minWidth: "max-content" }}>
                      Is Master System
                    </th>
                    <th scope="col" style={{ minWidth: "max-content" }}>
                      Deployment Source Systems
                    </th>
                    <th scope="col" style={{ minWidth: "max-content" }}>
                      Super Admin ID
                    </th>
                    <th scope="col" style={{ minWidth: "max-content" }}>
                      Registered Date
                    </th>
                    <th scope="col" style={{ minWidth: "max-content" }}>
                      System Status
                    </th>
                    <th scope="col" style={{ minWidth: "max-content" }}>
                      SKU Number
                    </th>
                    <th scope="col" style={{ minWidth: "max-content" }}>
                      License Number
                    </th>
                    <th scope="col" style={{ minWidth: "max-content" }}>
                      License Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                      <tr key={index}>
                        <th scope="row">
                          <p className="value-table"> {item.idno_systm} </p>
                        </th>
                        <td>
                          <p className="value-table"> {item.type_sytm} </p>
                        </td>
                        <td>
                          <p className="value-table"> {item.name_sytm} </p>
                        </td>
                        <td>
                          <p className="value-table"> {item.addr_sytm} </p>
                        </td>
                        <td>
                          <p className="value-table"> {item.ip_sytm} </p>
                        </td>
                        <td>
                          <p className="value-table"> {item.is_deft} </p>
                        </td>
                        <td>
                          <p className="value-table"> {item.is_mstr} </p>
                        </td>
                        <td>
                          <p className="value-table"> {item.sorc_depl} </p>
                        </td>
                        <td>
                          <p className="value-table"> {item.idno_sadm} </p>
                        </td>
                        <td>
                          <p className="value-table"> {item.date_regs} </p>
                        </td>
                        <td>
                          <p className="value-table"> {item.idno_systm} </p>
                        </td>
                        <td>
                          <p className="value-table"> {item.idno_skus} </p>
                        </td>
                        <td>
                          <p className="value-table"> {item.idno_lcsn} </p>
                        </td>
                        <td>
                          <p className="value-table"> {item.type_lcsn} </p>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="14"
                        className="text-center p-4 text-gray-500"
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
        <div style={{ paddingBottom: 60 }}>
          <Footer />
        </div>
      </div>
      <div className=" button-action">
        <Button
          variant=""
          className={`${show === "Edit" ? "btn-primary" : "btn-disable"} `}
        >
          Save
        </Button>
        <Button
          variant=""
          className={`${show === "Edit" ? "btn-danger" : "btn-disable"} `}
        >
          Discard
        </Button>
      </div>
    </React.Fragment>
  );
}
