import React, { useEffect, useState } from "react";
import Header from "../../../../layouts/Header";
import { Accordion, Button, Toast, ToastContainer } from "react-bootstrap";
import { Link } from "react-router-dom";
import BasicInfo from "./general/basic-info";
import Assignment from "./general/assignment";
import Tabs from "../../../../components/tabs";
import Guidiance from "../../../../components/dropdown/guidiance";
import Classification from "./classification";
import Status from "./general/status";
import {
  General,
  Item,
} from "../../../../data/sales/masterdata/catalogs/DataTabs";
import BomItems from "./item/bom-items";
import ImageTag from "./item/image-tags";

export default function Salescatalogsdetail() {
  const [isDisabled, setIsDisabled] = useState(true);
  const toggleDisabled = () => {
    setIsDisabled(isDisabled ? false : true);
  };
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
                  <Link to="#">Master Data</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/apps/sales/masterdata/billofmaterials/salesbom">
                    Bill of Materials
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  BoM Detail
                </li>
              </ol>
              <h4 className="main-title mb-0">Display BoM</h4>
            </div>
            <div className="d-flex gap-2 mt-3 mt-md-0">
              <Link to={'/apps/sales/masterdata/billofmaterials/salesbomchange'}>
                <Button
                  onClick={toggleDisabled}
                  variant=""
                  className="btn-white d-flex align-items-center gap-2"
                >
                  <i
                    className={` fars-pen-to-square`}
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
              defaultActiveKey={["0", "1"]}
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
              <Accordion.Item eventKey="1">
                <Accordion.Header>Item</Accordion.Header>
                <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                  <Tabs data={Item} datTab={[<BomItems />, <ImageTag />]} />
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
