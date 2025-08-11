// Tables: system.config

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../../../layouts/Header";
import Footer from "../../../../layouts/Footer";
import { Button, Col, Row, Form } from "react-bootstrap";
import Select from "react-select";
import "../../../../assets/css/react-datepicker.min.css";
import { createRoot } from "react-dom/client";
// import PhoneInput from "react-phone-number-input/input";

import { tenantid_config } from "../../../../data/administration/orgsystems/tenantid/DataTenantid";

import { currentIdno_Systm } from "../../../../data/administration/orgsystems/systemid/DataSystemid";

import {
  selectBoolean,
  selectSystemType,
  selectActivationStatus,
  selectLicenseTypeUser,
} from "../../../../data/general/DataGeneralSelection";

// import { provinceData } from "../../data/DataProvince copy";
import countryList from "react-select-country-list";
import ReactCountryFlag from "react-country-flag";
import { useDispatch, useSelector } from "react-redux";
import { fetchSytemConfig } from "../../../../data/administration/orgsystems/systemid/system_config";
import { provinceData } from "../../../../data/locations/DataProvince";
import { provinceDataId } from "../../../../data/locations/DataProvince";
import { cityData } from "../../../../data/locations/DataCity";

import { Grid } from "gridjs-react";

// import React from "react";
import DataCountrySelection from "../../../../data/locations/DataCountrySelection";
import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

export default function Tenantid() {
  // Get the data from current system number
  const index = tenantid_config.findIndex(
    (item) => item.idno_systm === currentIdno_Systm
  );
  const [phone, setPhone] = useState(null);
  const options = useMemo(() => countryList().getData(), []);
  const [show, setShow] = useState("Display");
  const [value, setValue] = useState(tenantid_config[index].main_addr_cntr_id);
  const [label, setLabel] = useState(tenantid_config[index].main_addr_cntr);
  const [number, setNumber] = useState(
    tenantid_config[index].main_addr_cntr_id
  );
  const [msgShow, setMsgShow] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.configs.data);

  const mainRender = () => {
    document.body.classList.add("page-app");
    return () => {
      document.body.classList.remove("page-app");
    };
  };

  useEffect(() => {
    mainRender();
    dispatch(fetchSytemConfig());
    // console.log(data)
  }, [dispatch, data]);

  const handleChange = (selectedOption) => {
    setValue(selectedOption.value);
    setLabel(selectedOption.label);
    setNumber(selectedOption.value);
    // setPhone(selectedOption.value)
  };
  const handleProvince = (value) => {
    setValue(value.id_cntr);
    setLabel(value.label_cntr);
    setNumber(value.id_cntr);
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
                Tenant ID
              </li>
            </ol>
            <h4 className="main-title mb-0">
              {show === "Edit" ? "Edit" : "Display"} Tenant ID Configuration
              (Admin Console)
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
                  Last update: {tenantid_config[index].date_updt},{" "}
                  {tenantid_config[index].time_updt}
                </p>
              </div>
              <div style={{ width: 200 }}>
                {/* <Select
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
                /> */}
              </div>
            </div>
          </div>
          <div className="main-panel-config">
            <div style={{ marginTop: 10, padding: 0 }}>
              <Row className=" Row-SystemId">
                {/* //Coumn 1 */}
                <Col>
                  {/* // Tenant ID */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Tenant ID"
                    >
                      Tenant ID
                    </Form.Label>
                    <Form.Control
                      required
                      id="idno_tent"
                      type="text"
                      placeholder="Generated Tenant ID from the systems"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={tenantid_config[index].idno_tent}
                    />
                  </div>

                  {/* // Tenant Name */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Tenant Name"
                    >
                      Tenant Name
                    </Form.Label>
                    <Form.Control
                      required
                      id="name_tent"
                      type="text"
                      placeholder="Please input Tenant Name"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={tenantid_config[index].name_tent}
                    />
                  </div>

                  {/* // Tenant Code */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Tenant Code"
                    >
                      Tenant Code
                    </Form.Label>
                    <Col className=" custom-form-control">
                      <Form.Control
                        required
                        id="code_tent"
                        type="text"
                        placeholder="Please input Tenant Code"
                        disabled={show === "Edit" ? false : true}
                        defaultValue={tenantid_config[index].code_tent}
                      />
                    </Col>
                  </div>

                  {/* // Representative Organization */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Representative Organization"
                    >
                      Representative Organization
                    </Form.Label>
                    <Form.Control
                      required
                      id="rept_orgz"
                      type="text"
                      placeholder="Please input Representative Organization"
                      disabled={show === "Edit" ? false : true}
                      //   defaultValue={tenantid_config[index].rept_orgz}
                      defaultValue={`${tenantid_config[index].type_orgz}. ${tenantid_config[index].rept_orgz}`}
                    />
                  </div>

                  {/* // Organization Code */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Tenant Code"
                    >
                      Organization Code
                    </Form.Label>
                    <Col className=" custom-form-control">
                      <Form.Control
                        required
                        id="code_orgz"
                        type="text"
                        placeholder="Please input Organization Code"
                        disabled={show === "Edit" ? false : true}
                        defaultValue={tenantid_config[index].code_orgz}
                      />
                    </Col>
                  </div>
                </Col>

                {/* //Coumn 2 */}
                <Col>
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
                      defaultValue={`${tenantid_config[index].date_regs}, ${tenantid_config[index].time_regs}`}
                    />
                  </div>

                  {/* // Super Admin ID */}
                  <div className="mb-4">
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
                      defaultValue={tenantid_config[index].idno_sadm}
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
                            label: tenantid_config[index].sytm_sint,
                          },
                        ]}
                      />
                    </Col>
                  </div>

                  {/* // License Type */}
                  <div className="mb-4 react-select-form">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="License Type"
                    >
                      License Type
                    </Form.Label>
                    {/* <Col className=" custom-form-control">
                      <Form.Control
                        required
                        id="type_lcsn"
                        type="text"
                        placeholder="Generated License Type from the systems"
                        disabled={show === "Edit" ? false : true}
                        defaultValue={systemid_config[index].type_lcsn}
                      />
                    </Col> */}
                    {/* <Col className=" custom-form-control"> */}
                    <Select
                      id="type_lcsn"
                      options={selectLicenseTypeUser}
                      isSearchable={true}
                      isDisabled={show === "Edit" ? false : true}
                      className=" react-select-custom"
                      defaultValue={[
                        {
                          label: tenantid_config[index].deft_type_lcsn,
                        },
                      ]}
                    />
                    {/* </Col> */}
                  </div>
                </Col>
              </Row>
            </div>

            <div className="divider" style={{ paddingBottom: 15 }}></div>

            <div style={{ marginTop: 10, padding: 0 }}>
              <Row className=" Row-SystemId">
                {/* //Coumn 1 */}
                <Col>
                  {/* // Main Address */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Office Name"
                    >
                      Office Name
                    </Form.Label>
                    <Form.Control
                      required
                      id="main_addr_addr"
                      type="text"
                      placeholder="Please input Main Address"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={tenantid_config[index].main_addr_addr}
                    />
                  </div>

                  {/* // Address Line 1 */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Address Line 1"
                    >
                      Address Line 1
                    </Form.Label>
                    <Form.Control
                      required
                      id="main_addr_ln01"
                      type="text"
                      placeholder="Please input Address Line 1"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={tenantid_config[index].main_addr_ln01}
                    />
                  </div>

                  {/* // Address Line 2 */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Address Line 2"
                    >
                      Address Line 2
                    </Form.Label>
                    <Form.Control
                      required
                      id="main_addr_ln02"
                      type="text"
                      placeholder="Please input Address Line 2"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={tenantid_config[index].main_addr_ln02}
                    />
                  </div>

                  {/* // City */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="City"
                    >
                      City
                    </Form.Label>
                    <Form.Control
                      required
                      id="main_addr_city"
                      type="text"
                      placeholder="Please input City"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={tenantid_config[index].main_addr_city}
                    />
                  </div>

                  {/* // Province */}
                  <div className="mb-4 react-select-form">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Province"
                    >
                      Province
                    </Form.Label>

                    <Select
                      id="main_addr_prov"
                      options={provinceData.map((item, i) => ({
                        label: item.main_addr_prov,
                        value: item.main_addr_prov,
                        id_cntr: item.main_addr_cntr_id,
                        label_cntr: item.main_addr_cntr,
                      }))}
                      isSearchable={true}
                      isDisabled={show === "Edit" ? false : true}
                      className=" react-select-custom"
                      onChange={(e) => handleProvince(e)}
                      defaultValue={[
                        {
                          label: provinceData[index].main_addr_prov,
                        },
                      ]}
                    />
                    {/* <option style={{marginTop: 15}} value="">Select Province</option>
                      {provinceData
                        .filter(
                          (province) => province.main_addr_cntr_id === "ID"
                        )
                        .map((province) => (
                          <option
                            key={province.main_addr_prov_id}
                            value={province.main_addr_prov}
                          >
                            {province.main_addr_prov}
                          </option>
                        ))} */}
                  </div>
                  {/* // Province */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Province"
                    >
                      Province
                    </Form.Label>
                    <Form.Control
                      required
                      id="main_addr_prov"
                      as="select"
                      disabled={
                        show !== "Edit" ||
                        tenantid_config[index].main_addr_cntr !== "Indonesia"
                      }
                      value={tenantid_config[index].main_addr_prov || ""}
                    >
                      <option value="">Select Province</option>
                      {provinceData
                        .filter((province) => province.addr_cntr_id === "ID")
                        .map((province) => (
                          <option
                            key={province.addr_prov_id}
                            value={province.addr_prov}
                          >
                            {province.addr_prov}
                          </option>
                        ))}
                    </Form.Control>
                  </div>

                  {/* <Select
                        id="main_addr_prov"
                        options={selectActivationStatus}
                        isSearchable={true}
                        isDisabled={show === "Edit" ? false : true}
                        className=" react-select-custom"
                        defaultValue={[
                          {
                            label: tenantid_config[index].sytm_sint
                          },
                        ]}
                      /> */}

                  {/* // District */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="City"
                    >
                      District
                    </Form.Label>
                    {/* <Col className=" custom-form-control"> */}
                    <Form.Control
                      required
                      id="main_addr_dist"
                      type="text"
                      placeholder="Please input District"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={tenantid_config[index].main_addr_dist}
                    />
                    {/* </Col> */}
                  </div>

                  {/* // State */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="State"
                    >
                      State
                    </Form.Label>
                    {/* <Col className=" custom-form-control"> */}
                    <Form.Control
                      required
                      id="main_addr_stat"
                      type="text"
                      placeholder="Please input State"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={tenantid_config[index].main_addr_stat}
                    />
                    {/* </Col> */}
                  </div>

                  {/* // Postal Code */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Postal Code"
                    >
                      Postal Code
                    </Form.Label>
                    <Col className=" custom-form-control">
                      <Form.Control
                        required
                        id="main_addr_stat"
                        type="text"
                        placeholder="Please input Postal Code"
                        disabled={show === "Edit" ? false : true}
                        defaultValue={tenantid_config[index].main_addr_zipc}
                      />
                    </Col>
                  </div>
                  {/* // Country */}
                  <div className="mb-4 react-select-form">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Country"
                    >
                      Country
                    </Form.Label>
                    {/* <DataCountrySelection
                      id="main_addr_cntr"
                      isDisabled={show === "Edit" ? false : true}
                      className="react-select-custom"
                      defaultCountryName={value}
                      onChange={(selectedCountry) => {
                        // Add your state management for selected country here
                      }}
                    /> */}
                    <Select
                      value={{ value: value, label: label }} // The current selected option
                      onChange={handleChange} // On user select
                      options={options} // All countries
                      isSearchable={true}
                      isDisabled={show !== "Edit" ? true : false}
                      className="react-select-custom"
                      // Tells react-select how to match/filter by text
                      getOptionLabel={(option) => option.label}
                      getOptionValue={(option) => option.value}
                      // Custom label rendering (flag + country name)
                      formatOptionLabel={(option) => (
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <ReactCountryFlag
                            countryCode={option.value}
                            svg
                            style={{
                              width: "1.5em",
                              height: "1.5em",
                              marginRight: "8px",
                            }}
                          />
                          <span>{option.label}</span>
                        </div>
                      )}
                    />
                  </div>
                </Col>

                {/* //Coumn 2 */}
                <Col>
                  {/* // Phone Number */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Phone Number"
                    >
                      Phone Number
                    </Form.Label>
                    <div className=" flex items-center custom-reactPhone">
                      <PhoneInput
                        country={number.toLowerCase()}
                        value={""}
                        disabled={true}
                        onChange={(phone) => console.log(phone.dialcode)}
                      />
                      <div class="input-group">
                        <input
                          disabled={show === "Edit" ? false : true}
                          id="inputPhoneNumber"
                          type="text"
                          class="form-control"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>
                  </div>

                  {/* // Website */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Website"
                    >
                      Website
                    </Form.Label>
                    <Form.Control
                      required
                      id="addr_webs"
                      type="text"
                      placeholder="Please input Super Website"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={tenantid_config[index].addr_webs}
                    />
                  </div>

                  {/* // Default Time Zone */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Default Time Zone"
                    >
                      Default Time Zone
                    </Form.Label>
                    <Col className=" custom-form-control">
                      <Form.Control
                        required
                        id="main_code_tzon"
                        type="text"
                        placeholder="Please input Default Time Zone"
                        disabled={show === "Edit" ? false : true}
                        defaultValue={tenantid_config[index].main_code_tzon}
                      />
                    </Col>
                  </div>
                </Col>

                {/* //Coumn 3 */}
                <Col></Col>
              </Row>
            </div>
          </div>
          <div className="custom-table" style={{ position: "relative" }}>
            {/* <div
              className="header-table-custom"
              style={{ position: "absolute", top: 37 }}
            >
              <h6 style={{ fontWeight: "500", fontSize: "16px", margin: 0 }}>
                Showing <span style={{ fontWeight: "bold" }}>1</span> to{" "}
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  {dataTableSystemId.length}{" "}
                </span>{" "}
                of{" "}
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  {dataTableSystemId.length}{" "}
                </span>{" "}
                results
              </h6>
              
            </div>
            <Grid
              data={dataTableSystemIdGrid}
              columns={[
                "System ID",
                "System Type",
                "System Type Date",
                "Created By",
                "Created URL",
              ]}
              search={true}
              pagination={false}
              className={{
                table: "table mb-0",
              }}
            /> */}
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
