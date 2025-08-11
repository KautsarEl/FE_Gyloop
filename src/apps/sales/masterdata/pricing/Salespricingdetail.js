import React, { useEffect, useState } from "react";
import Header from "../../../../layouts/Header";
import { Accordion, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
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
} from "../../../../data/sales/masterdata/pricing/DataTabs";
import MaterialReqPlanning from "./material-req-planning";
import BatchManagement from "./batch-management";
import AlternateUnitOfMeasure from "./measurement/alternate-uom";
import BasicInfo from "./general/basic-info";
import Assignment from "./general/assignment";

export default function Salespricingdetail() {
  const [isDisabled, setIsDisabled] = useState(true);

  const mainRender = () => {
    document.body.classList.add("page-app");
    return () => {
      document.body.classList.remove("page-app");
    };
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
                  <Link to="/apps/sales/masterdata/pricing">
                    Pricing
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Pricing Detail
                </li>
              </ol>
              <h4 className="main-title mb-0">Pricing Detail</h4>
            </div>
            <div className="d-flex gap-2 mt-3 mt-md-0">
              <Link to={"/apps/sales/masterdata/pricing/salespricingchange"}>
                <Button
                  variant=""
                  className="btn-white d-flex align-items-center gap-2"
                >
                  <i className={` fars-pen`} style={{ fontSize: 14 }}></i>
                  Change
                </Button>
              </Link>
              <Button
                variant=""
                className="btn-white d-flex align-items-center gap-2"
              >
                <i className="fars-receipt"></i>Logs
              </Button>
              <Guidiance />
            </div>
          </div>
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
                <Accordion.Header>Material Requirement Planning</Accordion.Header>
                <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                  <MaterialReqPlanning disabled={isDisabled} />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
} 