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
import Pricing from "./pricing";
import SellingItems from "./items/selling-items";
import SurchargeItems from "./items/surcharge-items";
import StockItems from "./items/stock-items";
import Profitability from "./items/profitability";
import Schedule from "./delivery/schedule";
import DeliveryServices from "./delivery/delivery-services";
import TermsofPayment from "./payment-terms/terms-of-payment";
import PaymentGroup from "./payment-terms/payment-group";
import SupportingDocuments from "./supporting-document";

export default function Salesquotationsdetail() {
  const [isDisabled, setIsDisabled] = useState(true);
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
                  <Link to="#">Pre Sales</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/apps/sales/presales/quotations">Quotations</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Quotation Detail
                </li>
              </ol>
              <h4 className="main-title mb-0">Display Quotation</h4>
            </div>
            <div className="d-flex gap-2 mt-3 mt-md-0">
              <Link
                to={
                  "/apps/sales/presales/quotations/salesquotationschange"
                }
              >
                <Button
                  variant=""
                  className="btn-white d-flex align-items-center gap-2"
                >
                  <i
                    className={"fars-pen-to-square"}
                    style={{ fontSize: 14 }}
                  ></i>
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
                <Accordion.Header>Pricing</Accordion.Header>
                <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                  <Pricing disabled={isDisabled} />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Items</Accordion.Header>
                <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                  <Tabs
                    data={[
                      { title: "Selling Items", status: true },
                      { title: "Surcharge Items", status: false },
                      { title: "Stock Items", status: false },
                      { title: "Profitability", status: false },
                    ]}
                    datTab={[
                      <SellingItems />,
                      <SurchargeItems disabled={isDisabled} />,
                      <StockItems />,
                      <Profitability />,
                    ]}
                  />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Delivery</Accordion.Header>
                <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                  <Tabs
                    data={[
                      { title: "Schedule", status: true },
                      { title: "Delivery Services", status: false },
                    ]}
                    datTab={[
                      <Schedule disabled={isDisabled} />,
                      <DeliveryServices disabled={isDisabled} />,
                    ]}
                  />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Payment Terms</Accordion.Header>
                <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                  <Tabs
                    data={[
                      { title: "Terms of Payment", status: true },
                      { title: "Payment Group", status: false },
                    ]}
                    datTab={[
                      <TermsofPayment disabled={isDisabled} />,
                      <PaymentGroup disabled={isDisabled} />,
                    ]}
                  />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6" className="no-tabs">
                <Accordion.Header>Supporting Documents</Accordion.Header>
                <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                  <SupportingDocuments disabled={isDisabled} />
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
