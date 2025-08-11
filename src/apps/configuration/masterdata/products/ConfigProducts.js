import React, { useEffect, useState } from "react";
import Header from "../../../../layouts/Header";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  currentIdno_Systm,
  systemid_config,
} from "../../../../data/administration/orgsystems/systemid/DataSystemid";
import { fetchLayoutItems } from "../../../../data/sales/masterdata/products/DataSalesProducts";
import { product_data_table } from "../../../../data/sales/masterdata/products/DataSalesProductTable";
import ProductType from "./product-type";
import TabsSlider from "../../../../components/tabs/tabs-slider";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ProductBrand from "./product-brand";
import ProductCharacteristic from "./product-characteristic";
import ProductCategory from "./product-category";
import ProductTags from "./product-tags";
import ProductGroup from "./product-group";
import ProductClass from "./product-class";
import ProductModel from "./product-model";
import ProductSeries from "./product-series";
import SpecialIndicator from "./special-indicator";
import InternalProductType from "./internal-product-type";
import InternalProductGroup from "./internal-product-group";
import CustomFieldProfile from "./custom-field-profile";
import SpecificationProfile from "./specification-profile";
import VariantProfileItem from "./variant-profile-item";
import VariantProfile from "./variant-profile";

export default function Configproducts() {
  const [show, setShow] = useState("Display");
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.layoutItems);
  // Get the data from current system number
  const index = systemid_config.findIndex(
    (item) => item.idno_systm === currentIdno_Systm
  );

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
  const [filteredData, setFilteredData] = useState(product_data_table);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const filtered = product_data_table.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(value)
      )
    );

    setFilteredData(filtered);
  };

  let menu = [];

  const columns = items.map((column) => column.code_fild); // Use 'name' for column headers

  columns.map((item) => menu.push({ menu: item }));

  const [isDisabled, setIsDisabled] = useState(true);
  const toggleDisabled = () => {
    setIsDisabled(isDisabled ? false : true);
  };
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(false);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  const tab = [
    // { title: "Product ID", status: true },
    { title: "Product Type", status: true, component: <ProductType /> },
    { title: "Product Brand", status: false, component: <ProductBrand /> },
    { title: "Tags", status: false, component: <ProductTags /> },
    { title: "Assignment Tags", status: false, component: <></> },
    {
      title: "Custom Field Profile",
      status: false,
      component: <CustomFieldProfile />,
    },
    {
      title: "Specification Profile",
      status: false,
      component: <SpecificationProfile />,
    },
    { title: "Variant Profile", status: false, component: <VariantProfile /> },
    {
      title: "Variant Profile Item",
      status: false,
      component: <VariantProfileItem />,
    },
    {
      title: "Administration Organization ID",
      status: false,
      component: <></>,
    },
    { title: "Internal Status Profile", status: false, component: <></> },
    { title: "External Status Profile", status: false, component: <></> },
    { title: "Version List", status: false, component: <></> },
    {
      title: "Product Characteristic",
      status: false,
      component: <ProductCharacteristic />,
    },
    { title: "Product Profile", status: false, component: <></> },
    {
      title: "Product Category",
      status: false,
      component: <ProductCategory />,
    },
    {
      title: "Internal Product Type",
      status: false,
      component: <InternalProductType />,
    },
    { title: "Product Group", status: false, component: <ProductGroup /> },
    {
      title: "Internal Product Group",
      status: false,
      component: <InternalProductGroup />,
    },
    { title: "Product Class", status: false, component: <ProductClass /> },
    { title: "Product Model", status: false, component: <ProductModel /> },
    { title: "Product Series", status: false, component: <ProductSeries /> },
    {
      title: "Special Indicator",
      status: false,
      component: <SpecialIndicator />,
    },
    { title: "Measurement Unit", status: false, component: <></> },
    { title: "Shape List", status: false, component: <></> },
    {
      title: "Specification Group Assignment",
      status: false,
      component: <></>,
    },
    { title: "Variant Parameter Assignment", status: false, component: <></> },
    { title: "Currency", status: false, component: <></> },
    { title: "Master Data Price List", status: false, component: <></> },
    { title: "Surcharge Type", status: false, component: <></> },
    { title: "Batch Profile", status: false, component: <></> },
    { title: "Serial Number Profile", status: false, component: <></> },
    { title: "Delivery Routing Profile", status: false, component: <></> },
    { title: "Warehouse Storage Type", status: false, component: <></> },
  ];

  const [active, setActive] = useState(0);

  const handleActive = (data) => {
    setActive(data);
  };
  useEffect(() => {
    dispatch(fetchLayoutItems());
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className=" relative">
        <Header />
        <div className="main main-table p-3 p-lg-4">
          <div className="d-md-flex align-items-center justify-content-between mb-4">
            <div>
              <ol className="breadcrumb fs-sm mb-1">
                <li className="breadcrumb-item">
                  <Link to="#">Configurations</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Master Data</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Products</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {tab[active].title}
                </li>
              </ol>
              <h4 className="main-title mb-0">
                {tab[active].title} Configuration Display
              </h4>
            </div>
          </div>
          <div className={"chat-panel-detail"}>
            <TabsSlider data={tab} actived={(data) => handleActive(data)} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
