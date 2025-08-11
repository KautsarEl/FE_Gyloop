import axios from "axios";
import React, { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ActionTableModal({
  display,
  change,
  deleted,
  modalBox,
  id,
}) {
  const [active, setActive] = useState(false);

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Link
      to=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className=" hover:text-[#41505f]"
    >
      {children}
    </Link>
  ));
  const menu = [
    {
      menu: modalBox ? (
        <button onClick={display}>
          <i className="fars-glasses "></i>Display
        </button>
      ) : (
        <Link to={display} className=" text-[#41505f]">
          <i className="fars-glasses "></i>Display
        </Link>
      ),
      divider: false,
    },
    {
      menu: modalBox ? (
        <button onClick={change}>
          <i className="fars-pen-to-square"></i>Change
        </button>
      ) : (
        <Link to={change} className=" text-[#41505f]">
          <i className="fars-pen-to-square"></i>Change
        </Link>
      ),
      divider: false,
    },
    {
      menu: (
        <span>
          <i className="fars-print"></i>Print
        </span>
      ),
      divider: false,
    },
    {
      menu: (
        <span>
          <i className="fars-share"></i>Share
        </span>
      ),
      divider: false,
    },
    {
      menu: (
        <span>
          <i className="fars-lock"></i>Lock
        </span>
      ),
      divider: false,
    },
    {
      menu: (
        <span onClick={deleted}>
          <i className="fars-trash"></i>Delete
        </span>
      ),
      divider: false,
    },
  ];
  return (
    <Dropdown container="body">
      <Dropdown.Toggle as={CustomToggle}>
        <div
          //   onClick={active ? () => setActive(false) : () => setActive(true)}
          className=" text-center"
        >
          <i
            className={` text-[#0070d0] ${
              active ? "fas-ellipsis" : "fas-ellipsis-vertical"
            } transition-all duration-150`}
          ></i>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu renderOnMount popperConfig={{ strategy: "fixed" }}>
        {menu.map((item, i) => (
          <>
            <Dropdown.Item href="##" id={i}>
              {item.menu}
            </Dropdown.Item>
            {item.divider && <Dropdown.Divider />}
          </>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
