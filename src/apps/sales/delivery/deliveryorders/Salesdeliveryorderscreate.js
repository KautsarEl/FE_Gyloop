import React, { useEffect, useState } from "react";
import Header from "../../../../layouts/Header";
import { Accordion, Button, Toast, ToastContainer } from "react-bootstrap";
import { Link } from "react-router-dom";
import BasicInfo from "./general/basic-info";
import Assignment from "./general/assignment";
import Tabs from "../../../../components/tabs";
import Guidiance from "../../../../components/dropdown/guidiance";
import References from "./references";
import Status from "./general/status";
import { General } from "../../../../data/sales/masterdata/catalogs/DataTabs";
import Items from "./items";
import Measurement from "./measurement";
import Packaging from "./packaging";
import Shipments from "./shipments";

export default function Salesdeliveryorderscreate() {
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
                  <Link to="#">Delivery</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/apps/sales/delivery/deliveryorders">
                    Delivery Orders
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Delivery order Detail
                </li>
              </ol>
              <h4 className="main-title mb-0">Create Delivery Order</h4>
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
          <div className={"chat-panel-detail"}>
            <Accordion
              defaultActiveKey={["0", "1", "2", "3", "4", "5", "6"]}
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
                <Accordion.Header>References</Accordion.Header>
                <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                  <References disabled={isDisabled} />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="no-tabs">
                <Accordion.Header>Items</Accordion.Header>
                <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                  <Items />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Measurement</Accordion.Header>
                <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                  <Measurement disabled={isDisabled} />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className=" no-tabs">
                <Accordion.Header>Packaging</Accordion.Header>
                <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                  <Packaging disabled={isDisabled} />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5" className="no-tabs">
                <Accordion.Header>Shipments</Accordion.Header>
                <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                  <Shipments disabled={isDisabled} />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className=" button-action">
          {isDisabled ? (
            <Button onClick={toggleShowB} variant="" className={`btn-disable`}>
              Save
            </Button>
          ) : (
            <Button variant="" className={`btn-primary`}>
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
        <ToastContainer
          className="p-3"
          position={"top-center"}
          style={{ zIndex: 900 }}
        >
          <Toast
            className=" !bg-green-700"
            delay={3000}
            autohide={true}
            onClose={toggleShowB}
            show={showB}
            animation={false}
          >
            <Toast.Header
              closeVariant="white"
              className=" !bg-transparent  !border-b-0"
            >
              <strong className="me-auto text-[20px] text-white">
                Succeed
              </strong>
            </Toast.Header>
            <Toast.Body className=" text-white">Data has been added</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </React.Fragment>
  );
}
