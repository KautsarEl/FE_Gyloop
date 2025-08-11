import React, { useEffect, useState } from "react";
import Header from "../../../../layouts/Header";
import {
  Accordion,
  Button,
  Form,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import BasicInfo from "./general/basic-info";
import Assignment from "./general/assignment";
import Tabs from "../../../../components/tabs";
import Guidiance from "../../../../components/dropdown/guidiance";
import Classification from "./classification";
import Status from "./general/status";
import UnitOfMeasure from "./measurement/uom";
import Weight from "./measurement/weight";
import Dimension from "./measurement/dimension";
import Packaging from "./measurement/packaging";
import CustomFields from "./attribute/custom-fields";
import Specification from "./attribute/specification";
import Variant from "./attribute/variant";
import Substitution from "./attribute/substitution";
import Sales from "./valuation/sales";
import Purchase from "./valuation/purchase";
import Warehouse from "./valuation/warehouse";
import SalesDelivery from "./delivery/sales";
import PurchaseDelivery from "./delivery/purchase";
import WarehouseDelivery from "./delivery/warehouse";
import {
  Attribute,
  Delivery,
  General,
  Measurement,
  Valuation,
} from "../../../../data/sales/masterdata/products/DataTabs";
import MaterialReqPlanning from "./material-req-planning";
import BatchManagement from "./batch-management";
import AlternateUnitOfMeasure from "./measurement/alternate-uom";
import { FormProvider, useForm } from "react-hook-form";

export default function Salesproductscreate() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(false);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  const mainRender = () => {
    document.body.classList.add("page-app");
    return () => {
      document.body.classList.remove("page-app");
    };
  };

  const methods = useForm({ mode: "onChange" });
  const onSubmit = () => {
    let data = methods.watch(); // seluruh data dari form
    console.log("data", data);
    // const formData = new FormData();
    // Object.entries(data).forEach(([key, value]) => {
    //   if (key === "fnam_imag" && value?.[0]) {
    //     formData.append(key, value[0]); // upload file
    //   } else if (Array.isArray(value)) {
    //     value.forEach((item) => {
    //       formData.append(key, item); // kirim array per elemen
    //     });
    //   } else {
    //     formData.append(key, value ?? "");
    //   }
    // });
    // for (let pair of formData.entries()) {
    //   console.log(pair[0]+ ': ' + pair[1]);
    // }
    // if (id) {
    //   axios
    //     .put(`http://203.175.11.244:8080/api/products/${id}`, formData, {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     })
    //     .then((res) => {
    //       navigate("/apps/sales/masterdata/products")
    //     })
    //     .catch((err) => {
    //       console.error("Upload failed", err);
    //     });
    // } else {
    //   axios
    //     .post("http://203.175.11.244:8080/api/products", formData, {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     })
    //     .then((res) => {
    //       navigate("/apps/sales/masterdata/products")
    //     })
    //     .catch((err) => {
    //       console.error("Upload failed", err);
    //     });
    // }
  };

  useEffect(() => {
    mainRender();
  }, []);

  return (
    <React.Fragment>
      <div className=" relative">
        <Header />
        <div className="main main-table p-3 p-lg-4 mb-[60px]">
          <div className="d-md-flex align-items-center justify-content-between mb-4">
            <div>
              <ol className="breadcrumb fs-sm mb-1">
                <li className="breadcrumb-item">
                  <Link to="#">Customers</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Master Data</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/apps/sales/masterdata/products">Products</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Products Detail
                </li>
              </ol>
              <h4 className="main-title mb-0">Create Product</h4>
            </div>
            <div className="d-flex gap-2 mt-3 mt-md-0">
              <Button
                variant=""
                className="btn-white d-flex align-items-center gap-2"
              >
                <i className="fars-receipt"></i>Logs
              </Button>
              <Guidiance />
            </div>
          </div>
          <FormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className={"chat-panel-detail"}>
                <Accordion
                  defaultActiveKey={["0", "1", "2", "3", "4", "5", "6", "7"]}
                  className=" accordion-custom flex flex-col gap-[16px]"
                  alwaysOpen
                >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>General</Accordion.Header>
                    <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                      <Tabs
                        data={General}
                        datTab={[
                          <BasicInfo disabled={isDisabled} />,
                          <Assignment disabled={isDisabled} />,
                          <Status disabled={isDisabled} />,
                        ]}
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className="no-tabs">
                    <Accordion.Header>Classification</Accordion.Header>
                    <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                      <Classification disabled={isDisabled} />
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Measurement</Accordion.Header>
                    <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                      <Tabs
                        data={Measurement}
                        datTab={[
                          <UnitOfMeasure disabled={isDisabled} />,
                          <AlternateUnitOfMeasure disabled={isDisabled} />,
                          <Weight disabled={isDisabled} />,
                          <Dimension disabled={isDisabled} />,
                          <Packaging disabled={isDisabled} />,
                        ]}
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3" className="">
                    <Accordion.Header>Attribute</Accordion.Header>
                    <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                      <Tabs
                        data={Attribute}
                        datTab={[
                          <CustomFields disabled={isDisabled} />,
                          <Specification disabled={isDisabled} />,
                          <Variant disabled={isDisabled} />,
                          <Substitution disabled={isDisabled} />,
                        ]}
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4" className="">
                    <Accordion.Header>Valuation</Accordion.Header>
                    <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                      <Tabs
                        data={Valuation}
                        datTab={[
                          <Sales disabled={isDisabled} />,
                          <Purchase disabled={isDisabled} />,
                          <Warehouse disabled={isDisabled} />,
                        ]}
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5" className="no-tabs">
                    <Accordion.Header>Batch Management</Accordion.Header>
                    <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                      <BatchManagement disabled={isDisabled} />
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="6" className="">
                    <Accordion.Header>Delivery</Accordion.Header>
                    <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                      <Tabs
                        data={Delivery}
                        datTab={[
                          <SalesDelivery disabled={isDisabled} />,
                          <PurchaseDelivery disabled={isDisabled} />,
                          <WarehouseDelivery disabled={isDisabled} />,
                        ]}
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="7" className="no-tabs">
                    <Accordion.Header>
                      Material Requirement Planning
                    </Accordion.Header>
                    <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                      <MaterialReqPlanning disabled={isDisabled} />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className=" button-action">
                {isDisabled ? (
                  <Button variant="" className={`btn-disable`}>
                    Save
                  </Button>
                ) : (
                  <Button
                    onClick={() => onSubmit()}
                    type="submit"
                    variant=""
                    className={`btn-primary`}
                  >
                    Save
                  </Button>
                )}
                <Button
                  variant=""
                  className={`${isDisabled ? "btn-disable" : "btn-danger"} `}
                >
                  Discard
                </Button>
              </div>
            </Form>
          </FormProvider>
        </div>
      </div>
    </React.Fragment>
  );
}
