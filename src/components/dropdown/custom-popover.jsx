import React, { use, useEffect, useRef, useState } from "react";
import { Dropdown, Overlay } from "react-bootstrap";
import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import PeekDetail from "../../data/sales/peek-detail";
import axios from "axios";

export default function CustomPopover(props) {
  const [data, setData] = useState([]);
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Link
      to=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="dropdown-link"
    >
      {children}
    </Link>
  ));
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
  };

  const popover = (
    <Popover id="popover-basic" className=" popover-custom">
      <Popover.Body className=" p-0 h-[700px] overflow-y-scroll">
        {props.value}
      </Popover.Body>
    </Popover>
  );
  const fetchData = async (id) => {
    try {
      const response = await axios.get(
        `http://203.175.11.244:8080/api/products/${props.id}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (!show) {
      fetchData();
    }
  }, []);

  return (
    <div className=" scrollbar-custom">
      <button ref={target} onClick={handleClick} className=" relative w-fit">
        <i className=" far-circle-info" style={{ color: "#0070d0" }}></i>
      </button>
      <Overlay
        show={show}
        target={target.current}
        placement="right"
        rootClose
        onHide={() => setShow(false)}
      >
        <Popover id="popover-basic" className=" popover-custom">
          <Popover.Body className=" p-0 h-[700px] overflow-y-scroll">
            <PeekDetail closePopover={(data) => setShow(data)} data={data} />
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}
