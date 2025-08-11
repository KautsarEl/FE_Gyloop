import React, { useEffect, useMemo, useState } from "react";
import Header from "../../../../layouts/Header";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  currentIdno_Systm,
  systemid_config,
} from "../../../../data/administration/orgsystems/systemid/DataSystemid";
import SearchTable from "../../../../components/form/search-table";

import DropdownTable from "../../../../components/dropdown/custom-popover";
import Guidiance from "../../../../components/dropdown/guidiance";
import Donwload from "../../../../components/dropdown/download";
import Layout from "../../../../components/dropdown/layout";
import Group from "../../../../components/dropdown/group";
import Sort from "../../../../components/dropdown/sort";
import { fetchLayoutItems } from "../../../../data/sales/masterdata/products/DataSalesProducts";
// import { product_data_table } from "../../../../data/sales/masterdata/products/DataSalesProductTable";
import Filter from "../../../../components/dropdown/filter";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../../../data/sales/masterdata/products/salesproducts/DataProducts";
import axios from "axios";
import ActionTableModal from "../../../../components/dropdown/action-table-modal";
// import { product_data_show } from "../../../../data/sales/masterdata/products/DataSalesProductTable";

export default function Salesproducts() {
  const [product_data_show, setProductDataShow] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [show, setShow] = useState("Display");
  const [direction, setDirection] = useState("asc");
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.products);
  const { items } = useSelector((state) => state.layoutItems);
  // Get the data from current system number
  const index = systemid_config.findIndex(
    (item) => item.idno_systm === currentIdno_Systm
  );
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });
  const columns = items.map((column) => column); // Use 'name' for column headers

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
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = product_data_show.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(value)
      )
    );

    setSearch(value);
    setFilteredData(filtered);
  };

  const handleDropdownSort = (key) => {
    let direction = "asc";
    if (filteredData.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sorted = [...filteredData].sort((a, b) => {
      const aValue = a[key] ?? ""; // null safety
      const bValue = b[key] ?? "";

      if (typeof aValue === "string") {
        return direction === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      } else {
        return direction === "asc" ? aValue - bValue : bValue - aValue;
      }
    });

    setFilteredData(sorted);
  };

  let menu = [];

  columns
    .filter(
      (item) => item.desc_short !== "Image" && item.desc_short !== "Index"
    )
    .map((item) => menu.push({ menu: item.desc_short, key: item.code_fild }));

  let group = [];
  const targetFields = ["Type", "Group", "Characteristic"];

  columns
    .filter((item) => targetFields.includes(item.desc_short))
    .map((item) =>
      group.push({
        menu: item.desc_short,
        key: item.code_fild,
      })
    );

  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchLayoutItems());
  }, [dispatch]);

  useEffect(() => {
    if (data && data.length > 0) {
      // Transform data to match product_data_show structure
      const transformedData = data.map((item) => ({
        idno_prod: item.idno_prod || "",
        numb_prod: item.numb_prod || "",
        fnam_imag: item.fnam_imag || "",
        desc_shrt: item.desc_shrt || "",
        idno_intr: item.idno_intr || "",
        type_prod: item.type_prod || "",
        grop_prod: item.grop_prod || "",
        char_prod: item.char_prod || "",
        prof_prod: item.prof_prod || "",
        prod_bran: item.prod_bran || "",
        idno_mpnn: item.idno_mpnn || "",
        idno_artc: item.idno_artc || "",
        code_xbar: item.code_xbar || "",
        prod_tags: item.prod_tags || "",
      }));
      setProductDataShow(transformedData);
      setFilteredData(transformedData);
    }
  }, [data]);

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;
    return [...filteredData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key])
        return sortConfig.direction === "asc" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key])
        return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortConfig]);

  //   const handleSort = (key, sort) => {
  //   let direction = "asc";
  //   if (sortConfig.key === key && sortConfig.direction === "asc") {
  //     direction = "desc";
  //   }
  //   setSortConfig({ key, direction });
  // };

  const [selectedField, setSelectedField] = useState(null);
  const [groupedArray, setGroupedArray] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const handleTypeChange = (data) => {
    if (selectedField === data) {
      setShowTable(false);
      setSelectedField(null);
      setGroupedArray([]);
      return;
    }
    // Simpan field yang dipilih
    setSelectedField(data);
    const groupedData = sortedData.reduce((acc, item) => {
      const key = item[data];
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {});

    const groupedArray = Object.entries(groupedData).map(([key, items]) => ({
      type: key,
      items: items,
    }));

    setGroupedArray(groupedArray);
    setShowTable(true);
  };
  const [visibleGroups, setVisibleGroups] = useState({});
  const toggleGroupVisibility = (type) => {
    setVisibleGroups((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const handleDelete = async (id) => {
    alert("hallo");
    try {
      const response = await axios.delete(`http://203.175.11.244:8080/api/products/${id}`);
      if (response.status === 200) {
        alert('Product berhasil dihapus');
        // contoh:
        dispatch(fetchProduct())
      }
    } catch (error) {
      console.error('Gagal menghapus product:', error);
      alert('Gagal menghapus product');
    }
  };

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
                Products
              </li>
            </ol>
            <h4 className="main-title mb-0">Products Report</h4>
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
                  {product_data_show.length}{" "}
                </span>{" "}
                of{" "}
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  {product_data_show.length}{" "}
                </span>{" "}
                results
              </h6>
              <div className=" container-action-table">
                <Link
                  to={"/apps/sales/masterdata/products/salesproductscreate"}
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
                <Sort
                  icon={
                    direction === "asc" ? (
                      <i className="fars-sort-amount-down"></i>
                    ) : (
                      <i className="fars-sort-amount-up"></i>
                    )
                  }
                  menu={menu}
                  onSortSelect={(key) =>
                    setSortConfig((prevConfig) => {
                      if (prevConfig.key === key) {
                        const newDirection =
                          prevConfig.direction === "asc" ? "desc" : "asc";
                        setDirection(newDirection);
                        return { key, direction: newDirection };
                      }
                      return { key, direction: "asc" };
                    })
                  }
                />
                <Group
                  menu={group}
                  onSelect={(key) => handleTypeChange(key)}
                  selected={selectedField}
                />
                <Layout />
                <Donwload />
                <SearchTable search={search} handleSearch={handleSearch} />
              </div>
            </div>
            <div className="scrollbar-custom">
              <Table responsive className="mb-0">
                <thead>
                  <tr>
                    {items
                      .filter((item, i) => item.is_show === true)
                      .map((item, i) => {
                        return i === 0 ? (
                          <th
                            key={i}
                            scope="col"
                            className=" sticky left-0 cursor-pointer"
                            onClick={() => {
                              setSortConfig((prevConfig) => {
                                if (prevConfig.key === item.code_fild) {
                                  const newDirection =
                                    prevConfig.direction === "asc"
                                      ? "desc"
                                      : "asc";
                                  setDirection(newDirection);
                                  return {
                                    key: item.code_fild,
                                    direction: newDirection,
                                  };
                                }
                                return {
                                  key: item.code_fild,
                                  direction: "asc",
                                };
                              });
                            }}
                          >
                            <p style={{ minWidth: "max-content", margin: 0 }}>
                              {item.desc_short}
                              {sortConfig.key === item.code_fild && (
                                <span className="ml-[10px] text-[#0070d0]">
                                  {sortConfig.direction === "asc" ? (
                                    <i className="fars-sort-amount-down"></i>
                                  ) : (
                                    <i className="fars-sort-amount-up"></i>
                                  )}
                                </span>
                              )}
                            </p>
                          </th>
                        ) : (
                          <>
                            {item.desc_short === "Image" ? (
                              <th key={i} scope="col">
                                <p
                                  style={{ minWidth: "max-content", margin: 0 }}
                                >
                                  {item.desc_short}
                                </p>
                              </th>
                            ) : (
                              <th
                                className=" cursor-pointer"
                                onClick={() => {
                                  setSortConfig((prevConfig) => {
                                    if (prevConfig.key === item.code_fild) {
                                      const newDirection =
                                        prevConfig.direction === "asc"
                                          ? "desc"
                                          : "asc";
                                      setDirection(newDirection);
                                      return {
                                        key: item.code_fild,
                                        direction: newDirection,
                                      };
                                    }
                                    return {
                                      key: item.code_fild,
                                      direction: "asc",
                                    };
                                  });
                                }}
                                key={i}
                                scope="col"
                              >
                                <p
                                  style={{ minWidth: "max-content", margin: 0 }}
                                >
                                  {item.desc_short}
                                  {sortConfig.key === item.code_fild && (
                                    <span className="ml-[10px] text-[#0070d0]">
                                      {sortConfig.direction === "asc" ? (
                                        <i className="fars-sort-amount-down"></i>
                                      ) : (
                                        <i className="fars-sort-amount-up"></i>
                                      )}
                                    </span>
                                  )}
                                </p>
                              </th>
                            )}
                          </>
                        );
                      })}

                    <th scope="col" className=" sticky w-[30px] right-[-2px]">
                      <center>
                        <i className=" fars-ellipsis-vertical"></i>
                      </center>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {showTable ? (
                    <>
                      {groupedArray.map((group, index) => (
                        <React.Fragment key={index}>
                          <tr className="font-bold bg-gray-100">
                            <td colSpan={columns.length}>
                              <span className="sticky left-[10px]">
                                <i
                                  onClick={() =>
                                    toggleGroupVisibility(group.type)
                                  }
                                  className={` transition-all duration-150 mr-[10px] text-[#0070d0] cursor-pointer ${
                                    visibleGroups[group.type]
                                      ? "fars-chevron-up"
                                      : "fars-chevron-down"
                                  }`}
                                ></i>
                                {group.type} ({group.items.length})
                              </span>
                            </td>
                          </tr>
                          {visibleGroups[group.type] &&
                            group.items.map((item, idx) => (
                              <tr key={`${group.type}-${idx}`}>
                                {Object.entries(item)
                                  .filter(([key]) => key !== "numb_prod")
                                  .sort(([keyA], [keyB]) => {
                                    const order = [
                                      "idno_prod",
                                      "fnam_imag",
                                      "desc_shrt",
                                      "idno_intr",
                                      "type_prod",
                                      "grop_prod",
                                      "char_prod",
                                      "prof_prod",
                                      "prod_bran",
                                      "idno_mpnn",
                                      "idno_artc",
                                      "code_xbar",
                                      "prod_tags",
                                    ];
                                    return (
                                      order.indexOf(keyA) - order.indexOf(keyB)
                                    );
                                  })
                                  .map(([key, value], idx) =>
                                    idx === 0 ? (
                                      <td
                                        key={idx}
                                        className=" sticky left-0 bg-white"
                                      >
                                        <div className=" flex justify-between pr-[4px] w-[200px]">
                                          <Link
                                            to={`/apps/sales/masterdata/products/salesproductsdetail/${item.numb_prod}`}
                                            className=" font-bold text-nowrap"
                                          >
                                            {value}
                                          </Link>
                                          <DropdownTable id={item.numb_prod} />
                                        </div>
                                      </td>
                                    ) : key === "fnam_imag" ? (
                                      <td key={idx}>
                                        <div className="flex w-[150px] items-center">
                                          <img
                                            src={`http://203.175.11.244:8080/${value}`}
                                            alt="Product"
                                            className="w-[70px] h-[70px] object-cover"
                                          />
                                        </div>
                                      </td>
                                    ) : key === "prod_tags" ? (
                                      <td key={idx}>
                                        <div className=" flex gap-[5px] flex-wrap w-[250px]">
                                          {item.prod_tags.map((item) => (
                                            <span className=" inline-flex items-center bg-[#c5c5c5] text-white py-[2px] px-[7px] text-[12px] rounded-[3px] gap-[10px]">
                                              {item}
                                              <i
                                                // onClick={() => handleClose(item)}
                                                className="fars-xmark text-[12px]"
                                              ></i>
                                            </span>
                                          ))}
                                        </div>
                                      </td>
                                    ) : (
                                      <td key={idx}>
                                        <p className="value-table text-nowrap">
                                          {value}
                                        </p>
                                      </td>
                                    )
                                  )}
                                <td
                                  className={`sticky right-[-2px] bg-white z-${
                                    sortedData.length - index
                                  }`}
                                >
                                  <div className=" w-[30px]">
                                    <ActionTableModal
                                      display={`/apps/sales/masterdata/products/salesproductsdetail/${item.numb_prod}`}
                                      change={`/apps/sales/masterdata/products/salesproductschange/${item.numb_prod}`}
                                      id={item.numb_prod}
                                      deleted={() =>
                                        handleDelete(item.numb_prod)
                                      }
                                    />
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </React.Fragment>
                      ))}
                    </>
                  ) : sortedData.length > 0 ? (
                    sortedData.map((item, index) => (
                      <tr key={index}>
                        {columns
                          .filter((col) => col.is_show === true)
                          .sort((a, b) => a.index - b.index) // urutkan berdasar index
                          .map((col, idx) => {
                            const key = col.code_fild;
                            const value = item[key];

                            // Kolom pertama (sticky + link)
                            if (idx === 0) {
                              return (
                                <td
                                  key={key}
                                  className="sticky left-0 bg-white"
                                >
                                  <div className="flex justify-between pr-[4px] w-[200px]">
                                    <Link
                                      to={`/apps/sales/masterdata/products/salesproductsdetail/${item.numb_prod}`}
                                      className="font-bold text-nowrap"
                                    >
                                      {value}
                                    </Link>
                                    <DropdownTable id={item.numb_prod} />
                                  </div>
                                </td>
                              );
                            }

                            // Kolom gambar
                            if (key === "fnam_imag") {
                              return (
                                <td key={key}>
                                  <div className="flex w-[150px] items-center">
                                    <img
                                      src={`http://203.175.11.244:8080/${value}`}
                                      alt="Product"
                                      className="w-[70px] h-[70px] object-cover"
                                    />
                                  </div>
                                </td>
                              );
                            }

                            // Kolom tags
                            if (key === "prod_tags") {
                              return (
                                <td key={key}>
                                  <div className="flex gap-[5px] flex-wrap w-[250px]">
                                    {Array.isArray(value) &&
                                      value.map((tag, i) => (
                                        <span
                                          key={i}
                                          className="inline-flex items-center bg-[#c5c5c5] text-white py-[2px] px-[7px] text-[12px] rounded-[3px] gap-[10px]"
                                        >
                                          {tag}
                                          <i className="fars-xmark text-[12px]"></i>
                                        </span>
                                      ))}
                                  </div>
                                </td>
                              );
                            }

                            // Default kolom
                            return (
                              <td key={key}>
                                <p className="value-table text-nowrap">
                                  {value}
                                </p>
                              </td>
                            );
                          })}

                        {/* Aksi */}
                        <td
                          className={`sticky right-[-2px] bg-white z-${
                            sortedData.length - index
                          }`}
                        >
                          <div className="w-[30px]">
                            <ActionTableModal
                              display={`/apps/sales/masterdata/products/salesproductsdetail/${item.numb_prod}`}
                              change={`/apps/sales/masterdata/products/salesproductschange/${item.numb_prod}`}
                              deleted={() => handleDelete(item.numb_prod)}
                            />
                          </div>
                        </td>
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
