import React, { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { set } from "react-hook-form";
import { Link } from "react-router-dom";

export default function DropdownBasic({
  button,
  menu,
  onSelect,
  selected,
  onEditLayout,
  edit,
}) {
  const [select, setSelect] = useState(null);
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
  return (
    <Dropdown autoClose={"outside"}>
      <Dropdown.Toggle as={CustomToggle}>
        <div className="d-flex gap-2 mt-3 mt-md-0">
          <Button
            variant=""
            className="btn-white d-flex align-items-center gap-2"
          >
            {button}
          </Button>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {menu.map((item, i) => (
          <>
            {edit ? (
              <Dropdown.Item
                href="##"
                id={i}
                onClick={() => {
                  i === 0 && onEditLayout();
                }}
              >
                <div className=" w-full flex justify-between items-center">
                  {item.menu}{" "}
                  {item.key === selected && (
                    <i className=" fars-check text-[#0070d0]"></i>
                  )}
                </div>
              </Dropdown.Item>
            ) : (
              <Dropdown.Item
                href="##"
                id={i}
                onClick={() => {
                  onSelect(item.key);
                }}
              >
                <div className=" w-full flex justify-between items-center">
                  {item.menu}{" "}
                  {item.key === selected && (
                    <i className=" fars-check text-[#0070d0]"></i>
                  )}
                </div>
              </Dropdown.Item>
            )}
            {item.divider && <Dropdown.Divider />}
          </>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
