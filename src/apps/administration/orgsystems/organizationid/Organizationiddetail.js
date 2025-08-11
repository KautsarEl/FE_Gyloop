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

import { tenantid_config } from "../../../../data/administration/orgsystems/tenantid/DataTenantid";

import {
  selectBoolean,
  selectSystemType,
  selectActivationStatus,
  selectLicenseTypeServer,
  selectLicenseTypeUser,
  selectOrganizationType,
  selectPrefixOrganization,
  selectSuffixOrganization,
  selectIndustryFocus,
  selectEmployeeSize,
  selectOfficeType,
  selectTimeZone,
} from "../../../../data/general/DataGeneralSelection";

import {
  dataSelectionSector,
  dataSelectionIndustryGroup,
  dataSelectionIndustry,
  dataSelectionSubIndustry,
} from "../../../../data/industry/DataIndustryFocusSelection";

import { provinceData } from "../../../../data/locations/DataProvince";
import { cityData } from "../../../../data/locations/DataCity";

import DataCountrySelection from "../../../../data/locations/DataCountrySelection";

import PhoneInput from "react-phone-number-input";
import { Grid } from "gridjs-react";

import { organizationid_config } from "../../../../data/administration/orgsystems/organizationid/DataOrganizationid";
import { organizationid_table } from "../../../../data/administration/orgsystems/organizationid/DataOrganizationidTable";

export default function Organizationiddetail() {
  // Get the data from current system number
  
  const index = systemid_config.findIndex(
    (item) => item.idno_systm === currentIdno_Systm
  );
  const [phone, setPhone] = useState(null);
  const [number, setNumber] = useState(
      tenantid_config[index].main_addr_cntr_id
    );

  const columns = organizationid_table.map((column) => column.name_fild); // Use 'name' for column headers
  const data = organizationid_config.map(
    (row) => organizationid_table.map((column) => row[column.vlue_fild]) // Map data to match columns
  );

  const [startDate, setStartDate] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
  const [show, setShow] = useState("Display");

  // State for selected values
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedIndustryGroup, setSelectedIndustryGroup] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [selectedSubIndustry, setSelectedSubIndustry] = useState(null); // Add state for Sub-Industry

  // Data arrays (replace with your actual data)
  const sectorData = dataSelectionSector; // Ensure this is an array
  const industryGroupData = dataSelectionIndustryGroup; // Ensure this is an array
  const industryData = dataSelectionIndustry; // Ensure this is an array
  const subIndustryData = dataSelectionSubIndustry; // Ensure this is an array

  // Map data for Select components
  const selectionSector = sectorData.map((sector) => ({
    value: sector.code_sect,
    label: sector.name_sect,
  }));

  const selectionIndustryGroup = industryGroupData.map((group) => ({
    code_sect: group.code_sect,
    value: group.code_indg,
    label: group.name_indg,
  }));

  const selectionIndustry = industryData.map((industry) => ({
    code_indg: industry.code_indg,
    value: industry.code_inds,
    label: industry.name_inds,
  }));

  const selectionSubIndustry = subIndustryData.map((subindustry) => ({
    code_inds: subindustry.code_inds,
    value: subindustry.code_subs,
    label: subindustry.name_subs,
  }));

  // Filter options based on selected values
  const filteredIndustryGroups = selectionIndustryGroup.filter(
    (group) => group.code_sect === selectedSector?.value
  );

  const filteredIndustries = selectionIndustry.filter(
    (industry) => industry.code_indg === selectedIndustryGroup?.value
  );

  const filteredSubIndustries = selectionSubIndustry.filter(
    (subIndustry) => subIndustry.code_inds === selectedIndustry?.value
  );

  const mainRender = () => {
    document.body.classList.add("page-app");
    return () => {
      document.body.classList.remove("page-app");
    };
  };

  const [chatActive, setChatActive] = useState(1);
  const [msgShow, setMsgShow] = useState(false);

  // Selection for Deplyment Source
  const selectDeploymentSources = [
    ...new Set(
      systemid_config
        .map((item) => item.name_sytm)
        .filter((source) => source !== "N/A")
    ),
  ].map((source) => ({ value: source, label: source }));

  useEffect(() => {
    mainRender();
  }, [show]);
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
              <li className="breadcrumb-item" aria-current="page">
               <Link to={'/apps/administration/organizationid'} >Organization ID</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Organization ID Data
              </li>
            </ol>
            <h4 className="main-title mb-0">
              {show === "Edit" ? "Edit" : "Display"} Organization ID
              Configuration
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

            {/* <Button variant="primary" className="d-flex align-items-center gap-2">
                        <i className="ri-bar-chart-2-line fs-18 lh-1"></i>Generate<span className="d-none d-sm-inline"> Report</span>
                    </Button> */}
          </div>
        </div>

        <div className={"chat-panel" + (msgShow ? " msg-show" : "")}>
          <div
            class="sidebar-header"
            style={{ alignItems: "center", display: "flex" }}
          >
            {/* <div class="chat-item-body" style={{alignItems: "center",  display: "flex", position:"fixed"}}> */}
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
                  {/* // Organization ID */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Organization ID"
                    >
                      Organization ID
                    </Form.Label>
                    <Form.Control
                      required
                      id="idno_orgz"
                      type="text"
                      placeholder="Generated Organization ID from the systems"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={organizationid_config[index].idno_orgz}
                    />
                  </div>

                  {/* // Organization Type */}
                  <div className="mb-4">
                    <Form.Label className="form-label-custom">
                      Organization Type
                    </Form.Label>
                    <Select
                      id="type_orgz"
                      options={selectOrganizationType}
                      isSearchable={true}
                      isDisabled={show === "Edit" ? false : true}
                      className=" react-select-custom"
                      defaultValue={[
                        {
                          label: organizationid_config[index].type_orgz,
                        },
                      ]}
                    />
                  </div>

                  {/* // Organization Name */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Organization Name"
                    >
                      Organization Name
                    </Form.Label>
                    <Form.Control
                      required
                      id="name_orgz"
                      type="text"
                      placeholder="Please input Organization Name"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={organizationid_config[index].name_orgz}
                    />
                  </div>

                  {/* // Legal Organization Name */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Legal Organization Name"
                    >
                      Legal Organization Name
                    </Form.Label>
                    <Form.Control
                      required
                      id="legl_orgz"
                      type="text"
                      placeholder="Please input Legal Organization Name"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={organizationid_config[index].legl_orgz}
                    />
                  </div>

                  {/* // Prefix Legal Name */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Prefix Legal Name"
                    >
                      Prefix Legal Name
                    </Form.Label>
                    <Col className=" custom-form-control">
                      <Select
                        id="prfx_orgz"
                        options={selectPrefixOrganization}
                        isSearchable={true}
                        isDisabled={show === "Edit" ? false : true}
                        className=" react-select-custom"
                        defaultValue={[
                          {
                            label: organizationid_config[index].prfx_orgz,
                          },
                        ]}
                      />
                    </Col>
                  </div>

                  {/* // Suffix Legal Name */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Suffix Legal Name"
                    >
                      Suffix Legal Name
                    </Form.Label>
                    <Col className=" custom-form-control">
                      <Select
                        id="sufx_orgz"
                        options={selectSuffixOrganization}
                        isSearchable={true}
                        isDisabled={show === "Edit" ? false : true}
                        className=" react-select-custom"
                        defaultValue={[
                          {
                            label: organizationid_config[index].sufx_orgz,
                          },
                        ]}
                      />
                    </Col>
                  </div>

                  {/* // Organization Code */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor=" Organization Code"
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
                        defaultValue={organizationid_config[index].code_orgz}
                      />
                    </Col>
                  </div>
                </Col>

                {/* //Coumn 2 */}
                <Col>
                  {/* // Domicile Country */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Domicile Country"
                    >
                      Domicile Country
                    </Form.Label>
                    <DataCountrySelection
                      id="legl_base"
                      isDisabled={show === "Edit" ? false : true}
                      className="react-select-custom"
                      defaultCountryName={
                        organizationid_config[index].legl_base
                      }
                      placeholder="Please select Domicile Country"
                      onChange={(selectedCountry) => {
                        // Add your state management for selected country here
                      }}
                    />
                  </div>

                  {/* Industry Sector */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Industry Sector"
                    >
                      Industry Sector
                    </Form.Label>
                    <Select
                      id="name_sect"
                      options={selectionSector}
                      isSearchable={true}
                      isDisabled={show === "Edit" ? false : true}
                      className="react-select-custom"
                      placeholder="Please select Industry Sector"
                      value={selectedSector}
                      onChange={(selectedOption) => {
                        setSelectedSector(selectedOption);
                        setSelectedIndustryGroup(null); // Reset Industry Group
                        setSelectedIndustry(null); // Reset Industry
                        setSelectedSubIndustry(null); // Reset Sub-Industry
                      }}
                    />
                  </div>

                  {/* Industry Group */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Industry Group"
                    >
                      Industry Group
                    </Form.Label>
                    <Select
                      id="name_indg"
                      options={filteredIndustryGroups}
                      isSearchable={true}
                      isDisabled={show === "Edit" ? false : true}
                      className="react-select-custom"
                      placeholder="Please select Industry Group"
                      value={selectedIndustryGroup}
                      onChange={(selectedOption) => {
                        setSelectedIndustryGroup(selectedOption);
                        setSelectedIndustry(null); // Reset Industry
                        setSelectedSubIndustry(null); // Reset Industry
                      }}
                    />
                  </div>

                  {/* Industry */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Industry"
                    >
                      Industry
                    </Form.Label>
                    <Select
                      id="name_inds"
                      options={filteredIndustries}
                      isSearchable={true}
                      isDisabled={show === "Edit" ? false : true}
                      className="react-select-custom"
                      placeholder="Please select Industry"
                      value={selectedIndustry}
                      onChange={(selectedOption) => {
                        setSelectedIndustry(selectedOption);
                        setSelectedSubIndustry(null); // Reset Sub-Industry
                      }}
                    />
                  </div>

                  {/* Sub-Industry */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Sub-Industry"
                    >
                      Sub-Industry
                    </Form.Label>
                    <Select
                      id="name_subs"
                      options={filteredSubIndustries}
                      isSearchable={true}
                      isDisabled={show === "Edit" ? false : true}
                      className="react-select-custom"
                      placeholder="Please select Sub-Industry"
                      value={selectedSubIndustry}
                      onChange={(selectedOption) =>
                        setSelectedSubIndustry(selectedOption)
                      }
                    />
                  </div>

                  {/* // Employee Size */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Employee Size"
                    >
                      Employee Size
                    </Form.Label>
                    <Col className=" custom-form-control">
                      <Select
                        id="empl_size"
                        options={selectEmployeeSize}
                        isSearchable={true}
                        isDisabled={show === "Edit" ? false : true}
                        className=" react-select-custom"
                        defaultValue={[
                          {
                            label: organizationid_config[index].empl_size,
                          },
                        ]}
                      />
                    </Col>
                  </div>

                  {/* // Admin ID */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Admin ID"
                    >
                      Admin ID
                    </Form.Label>
                    <Form.Control
                      required
                      id="idno_admn"
                      type="text"
                      placeholder="Please input Admin ID"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={organizationid_config[index].idno_admn}
                    />
                  </div>
                </Col>
                {/* //Coumn 3 */}
                <Col>
                  {/* // System Status */}
                  <div className="mb-4">
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
                            label: organizationid_config[index].sytm_sint,
                          },
                        ]}
                      />
                    </Col>
                  </div>

                  {/* // License Type */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="License Type"
                    >
                      License Type
                    </Form.Label>
                    <Select
                      id="type_lcsn"
                      options={selectLicenseTypeUser}
                      isSearchable={true}
                      isDisabled={show === "Edit" ? false : true}
                      className=" react-select-custom"
                      defaultValue={[
                        {
                          label: organizationid_config[index].deft_type_lcsn,
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
                  {/* // Office Type */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Office Type"
                    >
                      Office Type
                    </Form.Label>
                    <Select
                      id="code_addr"
                      options={selectOfficeType}
                      isSearchable={true}
                      isDisabled={show === "Edit" ? false : true}
                      className=" react-select-custom"
                      defaultValue={[
                        {
                          label: organizationid_config[index].code_addr,
                        },
                      ]}
                    />
                    {/* </Col> */}
                  </div>
                </Col>

                {/* //Coumn 2 */}
                <Col></Col>

                {/* //Coumn 3 */}
                <Col></Col>
              </Row>
            </div>

            <div className="divider" style={{ paddingBottom: 15 }}></div>

            <div style={{ marginTop: 10, padding: 0 }}>
              <Row className=" Row-SystemId">
                {/* //Coumn 1 */}
                <Col>
                  {/* // Office Name */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Office Name"
                    >
                      Office Name
                    </Form.Label>
                    <Form.Control
                      required
                      id="addr_addr"
                      type="text"
                      placeholder="Please input Office Name"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={organizationid_config[index].addr_addr}
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
                      id="addr_ln01"
                      type="text"
                      placeholder="Please input Address Line 1"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={organizationid_config[index].addr_ln01}
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
                      id="addr_ln02"
                      type="text"
                      placeholder="Please input Address Line 2"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={organizationid_config[index].addr_ln02}
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
                      id="addr_city"
                      type="text"
                      placeholder="Please input City"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={organizationid_config[index].addr_city}
                    />
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
                      id="addr_prov"
                      as="select"
                      disabled={
                        show !== "Edit" ||
                        organizationid_config[index].addr_cntr !== "Indonesia"
                      }
                      value={organizationid_config[index].addr_prov || ""}
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
                      id="addr_dist"
                      type="text"
                      placeholder="Please input District"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={organizationid_config[index].addr_dist}
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
                      id="addr_stat"
                      type="text"
                      placeholder="Please input State"
                      disabled={show === "Edit" ? false : true}
                      defaultValue={organizationid_config[index].addr_stat}
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
                        id="addr_zipc"
                        type="text"
                        placeholder="Please input Postal Code"
                        disabled={show === "Edit" ? false : true}
                        defaultValue={organizationid_config[index].addr_zipc}
                      />
                    </Col>
                  </div>

                  {/* // Country */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Country"
                    >
                      Country
                    </Form.Label>
                    <DataCountrySelection
                      id="addr_cntr"
                      isDisabled={show === "Edit" ? false : true}
                      className="react-select-custom"
                      defaultCountryName={
                        organizationid_config[index].addr_cntr
                      }
                      onChange={(selectedCountry) => {
                        // Add your state management for selected country here
                      }}
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
                    <div className=" flex items-center">
                      <PhoneInput
                        international
                        countryCallingCodeEditable={false}
                        id="date_time_regs"
                        defaultCountry={number}
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={setPhone}
                        disabled={show === "Edit" ? false : true}
                      />
                      <div class="input-group mb-3">
                      <span class={`input-group-text ${show === "Edit" ? "" : "!bg-[#f2f2f2]"}`}>
                          {phone === null && "+62"}
                        </span>
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
                      defaultValue={organizationid_config[index].addr_webs}
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
                    <Select
                      id="code_tzon"
                      options={selectTimeZone}
                      isSearchable={true}
                      isDisabled={show === "Edit" ? false : true}
                      className=" react-select-custom"
                      defaultValue={[
                        {
                          label: organizationid_config[index].code_tzon,
                        },
                      ]}
                    />
                  </div>
                </Col>

                {/* //Coumn 3 */}
                <Col></Col>
              </Row>
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
