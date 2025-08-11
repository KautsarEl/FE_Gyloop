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

import { userLicensesHeader } from "../../../../data/administration/subscriptions/licenses/DataLicenses";
import { licenses_table } from "../../../../data/administration/subscriptions/licenses/DataLicensesTable";

import { organizationid_config } from "../../../../data/administration/orgsystems/organizationid/DataOrganizationid";
import { organizationid_table } from "../../../../data/administration/orgsystems/organizationid/DataOrganizationidTable";

export default function Licensesdetail() {
  // Get the data from current system number
  const index = systemid_config.findIndex(
    (item) => item.idno_systm === currentIdno_Systm
  );

  const columns = organizationid_table.map((column) => column.name_fild); // Use 'name' for column headers
  const data = organizationid_config.map(
    (row) => organizationid_table.map((column) => row[column.vlue_fild]) // Map data to match columns
  );

  const [startDate, setStartDate] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
  const [show, setShow] = useState("Edit");

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
                <Link to="#">Subscription</Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
               <Link to={'/apps/administration/licenses'} >Licenses</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
              Licenses Data
              </li>
            </ol>
            <h4 className="main-title mb-0">
              {/* {show === "Edit" ? "Edit" : "Display"} Add New Licenses */}
               Add New Licenses
            </h4>
          </div>

          <div className="d-flex gap-2 mt-3 mt-md-0">
            {/*Remarks Button for Change/Display & Logs*/}
            {/* <Button
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
            </Button> */}
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
                  Created On: {tenantid_config[index].date_updt},{" "}
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
                  {/* // SKU No. */}
                  <div className="mb-4">
                    <Form.Label className="form-label-custom" htmlFor="SKU No.">
                      SKU No.
                    </Form.Label>
                    <Select
                      id="idno_skus"
                      options={selectOrganizationType}
                      isSearchable={true}
                      isDisabled={show === "Edit" ? false : true}
                      className=" react-select-custom"
                    //   defaultValue=""
                      defaultValue={[
                        {
                          label: userLicensesHeader[index].idno_skus,
                        },
                      ]}
                    />
                  </div>

                  {/* // Description */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Description"
                    >
                      Description
                    </Form.Label>
                    <Form.Control
                      required
                      id="desc_shrt"
                      type="text"
                      placeholder="Please input Short Description"
                    //   disabled={show === "Edit" ? false : true}
                      disabled="true"
                      defaultValue={userLicensesHeader[index].desc_shrt}
                    />
                  </div>

                  {/* // Product No. */}
                  <div className="mb-4">
                    <Form.Label className="form-label-custom" htmlFor="Product No.">
                      Product No.
                    </Form.Label>
                    <Select
                      id="numb_prod"
                      options={selectOrganizationType}
                      isSearchable={true}
                    //   isDisabled={show === "Edit" ? false : true}
                      isDisabled="true"
                      className=" react-select-custom"
                    //   defaultValue=""
                      defaultValue={[
                        {
                          label: userLicensesHeader[index].numb_prod,
                        },
                      ]}
                    />
                  </div>

                  {/* // License No. */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="License No."
                    >
                      License No.
                    </Form.Label>
                    <Form.Control
                      required
                      id="idno_lcsn"
                      type="text"
                      placeholder="License No. will be generated after successfully saving..."
                    //   disabled={show === "Edit" ? false : true}
                      disabled="true"
                    //   defaultValue={userLicensesHeader[index].desc_shrt}
                    />
                  </div>

                  {/* // License Tye */}
                  <div className="mb-4">
                    <Form.Label className="form-label-custom" htmlFor="License Tye">
                    License Tye
                    </Form.Label>
                    <Select
                      id="type_lcsn"
                      options={selectOrganizationType}
                      isSearchable={true}
                    //   isDisabled={show === "Edit" ? false : true}
                      isDisabled="true"
                      className=" react-select-custom"
                    //   defaultValue=""
                      defaultValue={[
                        {
                          label: userLicensesHeader[index].type_lcsn,
                        },
                      ]}
                    />
                  </div>

                  {/* // Apps Type */}
                  <div className="mb-4">
                    <Form.Label className="form-label-custom" htmlFor="Apps Type">
                     Apps Type
                    </Form.Label>
                    <Select
                      id="type_apps"
                      options={selectOrganizationType}
                      isSearchable={true}
                    //   isDisabled={show === "Edit" ? false : true}
                      isDisabled="true"
                      className=" react-select-custom"
                    //   defaultValue=""
                      defaultValue={[
                        {
                          label: userLicensesHeader[index].type_apps,
                        },
                      ]}
                    />
                  </div>

                  {/* // Apps Name */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Apps Name"
                    >
                      Apps Name
                    </Form.Label>
                    <Form.Control
                      required
                      id="idno_lcsn"
                      type="text"
                      placeholder="Apps Name from SKU"
                    //   disabled={show === "Edit" ? false : true}
                      disabled="true"
                      defaultValue={userLicensesHeader[index].name_apps}
                    />
                  </div>

                </Col>

                {/* //Coumn 2 */}
                <Col>
                
                {/* // Order Quantity */}
                <div className="mb-4">
                <Form.Label className="f-1 form-label-custom" htmlFor="Order Quantity">
                    Order Quantity
                </Form.Label>
                    <Form.Control
                        required
                        id="qnty_ordr"
                        type="number"
                        step="1"
                        min="1"
                        placeholder="Please Input Order Qty."
                        disabled={show === "Edit" ? false : true}
                        defaultValue={userLicensesHeader[index].qnty_ordr}
                        
                        // onChange={(e) => {
                        // if (e.target.value < 1) {
                        //     e.target.value = 1;
                        // }
                        // }}
                        onWheel={(e) => e.target.blur()} // Prevents scroll from changing value
                    />
                </div>

                {/* // UoM */}
                <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="UoM"
                    >
                      UoM
                    </Form.Label>
                    <Select
                      id="uoms_ordr"
                      options={selectOrganizationType}
                      isSearchable={true}
                    //   isDisabled={show === "Edit" ? false : true}
                      isDisabled="true"
                      className=" react-select-custom"
                    //   defaultValue=""
                      defaultValue={[
                        {
                          label: userLicensesHeader[index].uoms_ordr,
                        },
                      ]}
                    />
                  </div>

                  {/* // Campaign Code */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Campaign Code"
                    >
                      Campaign Code
                    </Form.Label>
                    <Form.Control
                      required
                      id="code_cmpg"
                      type="text"
                      placeholder="Please input Campaign Code"
                    //   disabled={show === "Edit" ? false : true}
                      disabled="true"
                      defaultValue={userLicensesHeader[index].code_cmpg}
                    />
                  </div>

                  {/* // Contract Number */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Contract Number"
                    >
                      Contract Number
                    </Form.Label>
                    <Form.Control
                      required
                      id="numb_cntr"
                      type="text"
                      placeholder="Contract No. will be generated after successfully saving..."
                    //   disabled={show === "Edit" ? false : true}
                      disabled="true"
                      defaultValue={userLicensesHeader[index].numb_cntr}
                    />
                  </div>

                  {/* // Contract Item */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Contract Item"
                    >
                      Contract Item
                    </Form.Label>
                    <Col className=" custom-form-control">
                        <Form.Control
                        required
                        id="item_cntr"
                        type="text"
                        placeholder="Contract Item will be generated after successfully saving..."
                        //   disabled={show === "Edit" ? false : true}
                        disabled="true"
                        defaultValue={userLicensesHeader[index].item_cntr}
                        />
                    </Col>
                  </div>

                  {/* // Sales Order Number */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Sales Order Number"
                    >
                      Sales Order Number
                    </Form.Label>
                    <Form.Control
                      required
                      id="numb_sord"
                      type="text"
                      placeholder="Sales Order No. will be generated after successfully saving..."
                    //   disabled={show === "Edit" ? false : true}
                      disabled="true"
                      defaultValue={userLicensesHeader[index].numb_sord}
                    />
                  </div>

                  {/* // Sales Order Item */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Sales Order Item"
                    >
                      Sales Order Item
                    </Form.Label>
                    <Col className=" custom-form-control">
                        <Form.Control
                        required
                        id="item_sord"
                        type="text"
                        placeholder="Sales Order Item will be generated after successfully saving..."
                        //   disabled={show === "Edit" ? false : true}
                        disabled="true"
                        defaultValue={userLicensesHeader[index].item_sord}
                        />
                    </Col>
                  </div>
                  
                </Col>

                {/* //Coumn 3 */}
                <Col>
                  
                </Col>
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
