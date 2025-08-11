import React, { useEffect, useState } from "react";
import Header from "../../../../layouts/Header";
import { Accordion, Button, Toast, ToastContainer } from "react-bootstrap";
import { Link } from "react-router-dom";
import BasicInfo from "./general/basic-info";
import Assignment from "./general/assignment";
import Tabs from "../../../../components/tabs";
import Guidiance from "../../../../components/dropdown/guidiance";
import Status from "./general/status";
import {
  Attribute,
  Delivery,
  General,
  Measurement,
  Valuation,
} from "../../../../data/sales/masterdata/products/DataTabs";
import BANTAnalysis from "./winning-keys/bant";
import CompetitionAnalysis from "./winning-keys/competition-analysis";
import Contacts from "./contacts";
import InitialDiscovery from "./discovery/initial-discovery";
import DiscoveryAttribute from "./discovery/discovery-attribute";
import Documents from "./documents";
import Activities from "./activities";
import OpportunityScore from "./winning-keys/opportunity-score";
import Tracker from "../../../../components/tracker";

export default function Opportunitieschange() {
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

  const [dataStatus, setDataStatus] = useState([
    {
      id: 1,
      title: "Qualification",
      status: "pending",
      statusLine: "not",
      dropdown: true,
      btnNext: true,
    },
    {
      id: 2,
      title: "Discovery",
      status: "not",
      statusLine: "not",
      dropdown: false,
      btnNext: true,
    },
    {
      id: 3,
      title: "Propositioning",
      status: "not",
      statusLine: "not",
      dropdown: false,
      btnNext: true,
    },
    {
      id: 4,
      title: "Proposal/Quote",
      status: "not",
      statusLine: "not",
      dropdown: false,
      btnNext: true,
    },
    {
      id: 5,
      title: "Negotiation",
      status: "not",
      statusLine: "not",
      dropdown: false,
      btnNext: true,
    },
    {
      id: 6,
      title: "Closed Won",
      status: "not",
      statusLine: "not",
      dropdown: false,
      btnNext: true,
    },
  ]);
  const items = ["Task 1", "Task 2", "Task 3"];

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
                  <Link to="#">Pre-Sales</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/apps/sales/presales/opportunities">
                    Opportunities
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Opportunity Detail
                </li>
              </ol>
              <h4 className="main-title mb-0">Display Opportunity</h4>
            </div>
            <div className="d-flex gap-2 mt-3 mt-md-0">
              <Link to={"/apps/sales/presales/opportunities/salesopportunitiesdetail"}>
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
            {/* <Tracker
              data={dataStatus}
              title={"Registration"}
              dataItems={items}
            /> */}
            <Accordion
              defaultActiveKey={["0", "1", "2", "3", "4", "5", "6", "7", "8"]}
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
                <Accordion.Header>Documents</Accordion.Header>
                <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                  <Documents />
                </Accordion.Body>
              </Accordion.Item>
              <Tabs
                data={[
                  {
                    title: "Winning Keys",
                    status: true,
                  },
                  {
                    title: "Highlights",
                    status: false,
                  },
                  {
                    title: "Additional",
                    status: false,
                  },
                  {
                    title: "Contacts",
                    status: false,
                  },
                  {
                    title: "Activity",
                    status: false,
                  },
                  {
                    title: "Discovery",
                    status: false,
                  },
                ]}
                datTab={[
                  <>
                    <Accordion.Item eventKey="2" className="no-tabs mt-[25px]">
                      <Accordion.Header>B.A.N.T Analysis</Accordion.Header>
                      <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                        <BANTAnalysis disabled={isDisabled} />
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className="no-tabs !mt-[25px]">
                      <Accordion.Header>Competition Analysis</Accordion.Header>
                      <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                        <CompetitionAnalysis disabled={isDisabled} />
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className="no-tabs !mt-[25px]">
                      <Accordion.Header>Opportunity Score</Accordion.Header>
                      <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                        <OpportunityScore />
                      </Accordion.Body>
                    </Accordion.Item>
                  </>,
                  <></>,
                  <></>,
                  <>
                    <Accordion.Item eventKey="5" className="no-tabs !mt-[25px]">
                      <Accordion.Header>Contacts</Accordion.Header>
                      <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                        <Contacts disabled={isDisabled} />
                      </Accordion.Body>
                    </Accordion.Item>
                  </>,
                  <>
                    <Accordion.Item eventKey="6" className="no-tabs !mt-[25px]">
                      <Accordion.Header>Activities</Accordion.Header>
                      <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                        <Activities />
                      </Accordion.Body>
                    </Accordion.Item>
                  </>,
                  <>
                    <Accordion.Item eventKey="7" className="no-tabs !mt-[25px]">
                      <Accordion.Header>Initial Discovery</Accordion.Header>
                      <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                        <InitialDiscovery disabled={isDisabled} />
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8" className="no-tabs !mt-[25px]">
                      <Accordion.Header>Discovery Attribute</Accordion.Header>
                      <Accordion.Body className=" visible pt-0 !px-[0px] !pb-[8px]">
                        <DiscoveryAttribute disabled={isDisabled} />
                      </Accordion.Body>
                    </Accordion.Item>
                  </>,
                ]}
              />
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
