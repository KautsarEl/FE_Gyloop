import React from "react";
import { Button, Dropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function StatusTable({data, handleChange}) {
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
            <i className=" fars-grip"></i>
          </Button>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu className=" h-[400px] overflow-y-auto">
        {data.map((item, i) => (
          <>
            <Dropdown.Item href="##" id={i}>
              <Form.Check
                disabled={item.status}
                type={"checkbox"}
                id={item.menu}
                label={item.menu}
                checked={item.show}
                onChange={(e) => handleChange(e.target.checked, i)}
              />
            </Dropdown.Item>
          </>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
