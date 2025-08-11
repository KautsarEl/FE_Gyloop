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
import Filter from "../../../../components/dropdown/filter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardStatusTable from "../../../../components/card/card-status-table";
import {
  column_table_opportunity,
  data_table_opportunity,
} from "../../../../data/sales/presales/opportunities/DataSalesCode";
import { sales_opportunities_header_table } from "../../../../data/sales/presales/opportunities/DataSalesOpportunitiesTable";

export default function Salesopportunities() {
  const [show, setShow] = useState("Display");
  // Get the data from current system number
  const index = systemid_config.findIndex(
    (item) => item.idno_systm === currentIdno_Systm
  );

  const columns = column_table_opportunity.map((column) => column.title); // Use 'name' for column headers

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
  const [filteredData, setFilteredData] = useState(data_table_opportunity);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const filtered = data_table_opportunity.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(value)
      )
    );

    setFilteredData(filtered);
  };

  const [statusTable, setStatusTable] = useState([
    {
      title: "Drafted",
      items: "$ 350 K",
      icon: "circle-check",
      status: true,
    },
    {
      title: "Submit",
      items: "$ 350 K",
      icon: "file-invoice-dollar",
      status: false,
    },
    {
      title: "Negotiation",
      items: "$ 350 K",
      icon: "bell",
      status: false,
    },
    {
      title: "Win",
      items: "$ 350 K",
      icon: "clipboard-list-check",
      status: false,
    },
    {
      title: "Lost",
      items: "$ 350 K",
      icon: "clipboard-list-check",
      status: false,
    },
  ]);

  const handleStatus = (data) => {
    const updated = statusTable.map((item, i) => {
      return i === data
        ? { ...item, status: true }
        : { ...item, status: false };
    });
    setStatusTable(updated);
  };
  let menu = [];

  sales_opportunities_header_table.map((item) =>
    menu.push({ menu: item.name_fild })
  );
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
                <Link to="#">Pre Sales</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Opportunities
              </li>
            </ol>
            <h4 className="main-title mb-0">Opportunities Report</h4>
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
                  {data_table_opportunity.length}{" "}
                </span>{" "}
                of{" "}
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  {data_table_opportunity.length}{" "}
                </span>{" "}
                results
              </h6>
              <div className=" container-action-table">
                <Link
                  to={
                    "/apps/sales/presales/opportunities/salesopportunitiescreate"
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
            <div className=" flex justify-between items-center pb-[24px]">
              {/* <Button
                variant=""
                className=" imgPrev btn-white d-flex align-items-center gap-2 w-fit"
              >
                <i className="fas-chevron-left text-[10px]"></i>
              </Button> */}
              <div className="w-full overflow-hidden relative">
                <>
                  <Swiper
                    slidesPerView={"auto"}
                    navigation={{ nextEl: ".imgNext", prevEl: ".imgPrev" }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper pt-[10px] px-[10px]"
                    onSlideChange={(x) => handleStatus(x.activeIndex)}
                    spaceBetween={50}
                  >
                    {statusTable.map((item, i) => (
                      <SwiperSlide
                        onClick={() => handleStatus(i)}
                        className=" cursor-pointer bg-white !h-fit !w-fit relative pb-[10px] px-[12px]"
                      >
                        <CardStatusTable
                          title={item.title}
                          status={item.status}
                          items={item.items}
                          icon={item.icon}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <span className=" absolute bottom-[8px] h-[1px] bg-[#e2e5ec] w-full"></span>
                </>
              </div>
              {/* <Button
                variant=""
                className=" imgNext btn-white d-flex align-items-center gap-2 w-fit"
              >
                <i className="fas-chevron-right text-[10px]"></i>
              </Button> */}
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
                          <td>
                            {index === 0 ? (
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
