// Tables: system.config

import React, { useEffect, useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../../../layouts/Header";

import { Button, Col, Dropdown, Nav, Row, Form, Table } from "react-bootstrap";
import Select from "react-select";
import "../../../../assets/css/react-datepicker.min.css";

import {
  systemid_config,
  currentIdno_Systm,
} from "../../../../data/administration/orgsystems/systemid/DataSystemid";

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
  selectPeriodBilling,
} from "../../../../data/general/DataGeneralSelection";

import {
  dataSelectionSector,
  dataSelectionIndustryGroup,
  dataSelectionIndustry,
  dataSelectionSubIndustry,
} from "../../../../data/industry/DataIndustryFocusSelection";

import { dataSelectionLicenseSKU } from "../../../../data/general/DataLicenseSKU";

import { subscriptionsHeader } from "../../../../data/administration/subscriptions/licensesubscriptions/DataSubscriptions";

export default function Subscriptionsdetail() {
  // Get the data from current system number
  const index = systemid_config.findIndex(
    (item) => item.idno_systm === currentIdno_Systm
  );
  
  const [show, setShow] = useState("Edit");

  // Map data for SKU
  const selectionSKU = dataSelectionLicenseSKU.map(item => ({
      label: `${item.idno_skus} - ${item.desc_shrt}`, // Concatenate idno_skus and desc_shrt
      value: item.idno_skus, // Use idno_skus as the value
  }));

  // Custom function to format the selected value in the input box
  const formatOptionLabel = ({ value, label }, { context }) => {
    // Only show the value (idno_skus) in the input box when an option is selected
    if (context === 'value') {
        return value;
    }
    // Show the full label (concatenated) in the dropdown options
    return label;
  };

  // 



  const mainRender = () => {
    document.body.classList.add("page-app");
    return () => {
      document.body.classList.remove("page-app");
    };
  };

  const [chatActive, setChatActive] = useState(1);
  const [msgShow, setMsgShow] = useState(false);

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
                <Link to="#">Subscriptions</Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                <Link to={"/apps/administration/subscriptions"}>
                  License Subscriptions
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Subscriptions Data
              </li>
            </ol>
            <h4 className="main-title mb-0">
              {/* {show === "Edit" ? "Edit" : "Display"} Add New Licenses */}
              Add New Subscriptions
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
                  {/* <div className="mb-4">
                    <Form.Label className="form-label-custom" htmlFor="SKU No.">
                      SKU No.
                    </Form.Label>
                    <Select
                      id="idno_skus"
                      options={selectionSKU}
                      isSearchable={true}
                      isDisabled={show === "Edit" ? false : true}
                      className=" react-select-custom"
                      //   defaultValue=""
                      defaultValue={[
                        {
                          label: subscriptionsHeader[index].idno_skus,
                        },
                      ]}
                    />
                  </div> */}
                  <div className="mb-4">
                    <Form.Label className="form-label-custom" htmlFor="SKU No.">
                        SKU No.
                    </Form.Label>
                    <Select
                        id="idno_skus"
                        options={selectionSKU} // Use the transformed options here
                        isSearchable={true}
                        isDisabled={show === "Edit" ? false : true}
                        className="react-select-custom"
                        formatOptionLabel={formatOptionLabel} // Add the custom format function
                        defaultValue={
                          subscriptionsHeader[index]?.idno_skus
                                ? {
                                      label: `${subscriptionsHeader[index].idno_skus} - ${subscriptionsHeader[index].desc_shrt}`,
                                      value: subscriptionsHeader[index].idno_skus,
                                  }
                                : undefined
                        }
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
                      defaultValue={subscriptionsHeader[index].desc_shrt}
                    />
                  </div>

                  {/* // Product No. */}
                  {/* <div className="mb-4">
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
                          label: subscriptionsHeader[index].numb_prod,
                        },
                      ]}
                    />
                  </div> */}

                  {/* // License No. */}
                  {/* <div className="mb-4">
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
                    //   defaultValue={subscriptionsHeader[index].desc_shrt}
                    />
                  </div> */}

                  {/* // License Tye */}
                  <div className="mb-4">
                    <Form.Label
                      className="form-label-custom"
                      htmlFor="License Tye"
                    >
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
                          label: subscriptionsHeader[index].type_lcsn,
                        },
                      ]}
                    />
                  </div>

                  {/* // Apps Type */}
                  {/* <div className="mb-4">
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
                          label: subscriptionsHeader[index].type_apps,
                        },
                      ]}
                    />
                  </div> */}

                  {/* // Apps Name */}
                  {/* <div className="mb-4">
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
                      defaultValue={subscriptionsHeader[index].name_apps}
                    />
                  </div> */}
                </Col>

                {/* //Coumn 2 */}
                <Col>
                  {/* // Order Quantity */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Order Quantity"
                    >
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
                      defaultValue={subscriptionsHeader[index].qnty_ordr}
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
                    <Form.Label className="f-1 form-label-custom" htmlFor="UoM">
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
                          label: subscriptionsHeader[index].uoms_ordr,
                        },
                      ]}
                    />
                  </div>
                </Col>

                {/* //Coumn 3 */}
                <Col>
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
                      placeholder="Please input Campaign Code (if any)"
                      //   disabled={show === "Edit" ? false : true}
                      // disabled="true"
                      defaultValue={subscriptionsHeader[index].code_cmpg}
                    />
                  </div>

                  {/* // Billing Period */}
                  <div className="mb-4">
                    <Form.Label
                      className="f-1 form-label-custom"
                      htmlFor="Billing Period"
                    >
                      Billing Period
                    </Form.Label>
                    <Select
                      id="perd_bill"
                      options={selectPeriodBilling}
                      isSearchable={true}
                      //   isDisabled={show === "Edit" ? false : true}
                      // isDisabled="true"
                      className=" react-select-custom"
                      defaultValue={[
                        {
                          label: subscriptionsHeader[index].perd_bill,
                        },
                      ]}
                    />
                  </div>
                </Col>
              </Row>

              <div className="divider" style={{ paddingBottom: 15 }}>
                <span>Pricing</span>
              </div>
              <Row></Row>

              {/* <div className="divider" style={{ paddingBottom: 15 }}></div>
              <Row className=" Row-SystemId">
                //Coumn 1
                <Col>
                

                  // Contract Number
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
                      defaultValue={subscriptionsHeader[index].numb_cntr}
                    />
                  </div>

                  // Contract Item
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
                        defaultValue={subscriptionsHeader[index].item_cntr}
                        />
                    </Col>
                  </div>

                  // Sales Order Number
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
                      defaultValue={subscriptionsHeader[index].numb_sord}
                    />
                  </div>

                  // Sales Order Item
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
                        defaultValue={subscriptionsHeader[index].item_sord}
                        />
                    </Col>
                  </div>
                </Col>

                //Coumn 2
                <Col>
                
                </Col>

                //Coumn 3
                <Col>
                
                </Col>
              </Row> */}
            </div>

            <div className="w-1/3">
              <Table responsive>
                <tbody>
                  <tr>
                    <td className="bg-transparent">
                      <p className="mb-0 font-bold px-[16px]">Currency</p>
                    </td>
                    <td className="bg-transparent">
                      <p className="mb-0">{subscriptionsHeader[0].code_curr}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-transparent">
                      <p className="mb-0 font-bold px-[16px]">Unit Price</p>
                    </td>
                    <td className="bg-transparent">
                      <p className="mb-0">{subscriptionsHeader[0].unit_pric}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-transparent">
                      <p className="mb-0 font-bold px-[16px]">Discount (%)</p>
                    </td>
                    <td className="bg-transparent">
                      <p className="mb-0">{subscriptionsHeader[0].dscp_pric}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-transparent">
                      <p className="mb-0 font-bold px-[16px]">Price Discount</p>
                    </td>
                    <td className="bg-transparent">
                      <p className="mb-0">{subscriptionsHeader[0].dscu_pric}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-transparent">
                      <p className="mb-0 font-bold px-[16px]">
                        Sub Total Price
                      </p>
                    </td>
                    <td className="bg-transparent">
                      <p className="mb-0">{subscriptionsHeader[0].stot_fprc}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-transparent">
                      <p className="mb-0 font-bold px-[16px]">
                        Sub Total Discount
                      </p>
                    </td>
                    <td className="bg-transparent">
                      <p className="mb-0">{subscriptionsHeader[0].stot_disc}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-transparent">
                      <p className="mb-0 font-bold px-[16px]">
                        Sub Total Final Price
                      </p>
                    </td>
                    <td className="bg-transparent">
                      <p className="mb-0">{subscriptionsHeader[0].stot_fprc}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-transparent">
                      <p className="mb-0 font-bold px-[16px]">Billing Period</p>
                    </td>
                    <td className="bg-transparent">
                      <p className="mb-0">{subscriptionsHeader[0].perd_bill}</p>
                    </td>
                  </tr>
                  <tr></tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div style={{ paddingBottom: 90 }}>{/* <Footer /> */}</div>
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
