import React, { useEffect, useState } from "react";
import Header from "../../../../layouts/Header";
import { Button, Dropdown, Form, Table } from "react-bootstrap";
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
import Filter from "../../../../components/dropdown/filter";
import {
  column_table_delivery_orders,
  data_table_delivery_orders,
} from "../../../../data/sales/delivery/deliveryorders/DataDeliveryOrdersCode";
import { data_status_table_delivery_orders } from "../../../../data/sales/delivery/deliveryorders/DataStatusTable";
import StatusTable from "../../../../components/dropdown/status-table";
import SliderStatusTable from "../../../../components/slider/slider-status-table";
import { delivery_orders_header_table } from "../../../../data/sales/delivery/deliveryorders/DataDeliveryOrdersTable";
import DeliveryTable from "./testing/delivery";

export default function Salesdeliveryorders() {
  const [show, setShow] = useState("Display");
  // Get the data from current system number
  const index = systemid_config.findIndex(
    (item) => item.idno_systm === currentIdno_Systm
  );

  const columns = column_table_delivery_orders.map((column) => column.title); // Use 'name' for column headers

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
  const [filteredData, setFilteredData] = useState(data_table_delivery_orders);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const filtered = data_table_delivery_orders.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(value)
      )
    );

    setFilteredData(filtered);
  };

  const [statusTable, setStatusTable] = useState(
    data_status_table_delivery_orders
  );

  const handleStatus = (data) => {
    const updated = statusTable.map((item, i) => {
      return i === data
        ? { ...item, status: true }
        : { ...item, status: false };
    });
    setStatusTable(updated);
  };
  const handleShow = (data, index) => {
    const updated = statusTable.map((item, i) => {
      return i === index ? { ...item, show: data } : { ...item };
    });
    setStatusTable(updated);
  };

  let menu = []

  delivery_orders_header_table.map((item)=> menu.push({menu:item.name_fild}))

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
                <Link to="#">Delivery</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Delivery Orders
              </li>
            </ol>
            <h4 className="main-title mb-0">Delivery Order Reports</h4>
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
                  {data_table_delivery_orders.length}{" "}
                </span>{" "}
                of{" "}
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  {data_table_delivery_orders.length}{" "}
                </span>{" "}
                results
              </h6>
              <div className=" container-action-table">
                <Link
                  to={
                    "/apps/sales/delivery/deliveryorders/salesdeliveryorderscreate"
                  }
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
            {/* <div className=" flex justify-end">
              
            </div> */}
            <SliderStatusTable data={statusTable} handleChange={handleStatus} child={<StatusTable data={statusTable} handleChange={handleShow} />} />
            <div className="scrollbar-custom">
              <Table responsive className="mb-0">
                <thead>
                  <tr>
                    {columns.map((item, i) =>
                      i === 0 ? (
                        <th key={i} scope="col" className=" !w-[30px]">
                          {item}
                        </th>
                      ) : (
                        <th key={i} scope="col" className="text-nowrap">
                          {item}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                      <tr key={index}>
                        {Object.values(item).map((value, index) =>
                          index === 0 ? (
                            <td>{value}</td>
                          ) : (
                            <td className=" w-fit text-nowrap">{value}</td>
                          )
                        )}
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
    // <DeliveryTable/>
  );
}
