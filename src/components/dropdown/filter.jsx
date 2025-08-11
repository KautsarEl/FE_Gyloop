import React, { useState } from "react";
import { Button, Dropdown, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DropdownBasic from "./dropdown-basic";
import SelectWithFilter from "../form/select-with-filter";
import { FormProvider, useForm } from "react-hook-form";

export default function Filter({ button }) {
  const methods = useForm({ mode: "onChange" });
  const [value, setValue] = useState([
    { title: "Company", value: null },
    { title: "Organization", value: null },
  ]);
  const handleChange = (selected, index) => {
    setValue(
      value.map((item, i) =>
        i === index ? { ...item, value: selected } : item
      )
    );
  };
  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };
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
  const [filters, setFilters] = useState([
    { title: "Company", status: true },
    { title: "Organization", status: true },
    { title: "Period", status: false },
    { title: "Product Type", status: false },
    { title: "Product ID", status: false },
    { title: "Internal Code", status: false },
  ]);
  const handleCheck = (e, title) => {
    const updated = filters.map((item) =>
      item.title === title ? { ...item, status: e.target.checked } : item
    );
    setFilters(updated);
  };
  const menu = [
    {
      menu: (
        <>
          <Form.Check
            disabled
            checked
            type={"checkbox"}
            id={`1`}
            label={`Company`}
          />
        </>
      ),
    },
    {
      menu: (
        <>
          <Form.Check
            disabled
            checked
            type={"checkbox"}
            id={`2`}
            label={`Organization`}
          />
        </>
      ),
    },
    {
      menu: (
        <>
          <Form.Check
            onChange={(e) => handleCheck(e, "Period")}
            type={"checkbox"}
            id={`3`}
            label={`Period`}
          />
        </>
      ),
    },
    {
      menu: (
        <>
          <Form.Check
            onChange={(e) => handleCheck(e, "Product Type")}
            type={"checkbox"}
            id={`4`}
            label={`Product Type`}
          />
        </>
      ),
    },
    {
      menu: (
        <>
          <Form.Check
            onChange={(e) => handleCheck(e, "Product ID")}
            type={"checkbox"}
            id={`5`}
            label={`Product ID`}
          />
        </>
      ),
    },
    {
      menu: (
        <>
          <Form.Check
            onChange={(e) => handleCheck(e, "Internal Code")}
            type={"checkbox"}
            id={`1`}
            label={`Internal Code`}
          />
        </>
      ),
    },
  ];
  const option = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
  ];
  return (
    <Dropdown autoClose={"outside"}>
      <Dropdown.Toggle as={CustomToggle}>
        <div className="d-flex gap-2 mt-3 mt-md-0">
          <Button
            variant=""
            className="btn-white d-flex align-items-center gap-2"
          >
            <i className="fars-filter"></i>
          </Button>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className=" h-[400px] w-[600px] pt-[16px] px-[16px] pb-[8px] flex flex-col gap-[32px]">
          <FormProvider {...methods}>
            <Form
              onSubmit={methods.handleSubmit(onSubmit)}
              className=" flex flex-col gap-[25px] h-full"
            >
              <div className=" flex justify-end gap-[8px] pr-[8px]">
                <Button
                  onClick={() =>
                    setValue([
                      { title: "Company", value: null },
                      { title: "Organization", value: null },
                    ])
                  }
                  variant=""
                  className="btn-white d-flex align-items-center gap-2"
                >
                  <i className="fars-brush"></i>
                </Button>
                <DropdownBasic
                  button={<i className="fars-filter-list"></i>}
                  menu={menu}
                />
              </div>
              <div className=" flex flex-col justify-between h-full w-full scrollbar-custom gap-[30px]">
                <div className=" flex flex-col gap-[25px] overflow-y-scroll overflow-x-hidden h-full w-full pt-[2px] pr-[2px]">
                  {filters
                    .filter((item, i) => item.status === true)
                    .map((item, i) => (
                      <Form.Group as={Row}>
                        <SelectWithFilter
                          label={item.title}
                          id={item.title}
                          options={option}
                          disabled={false}
                          placeholder={`Please Select ${item.title}`}
                          value={
                            value[i].value === null
                              ? value[i].value
                              : option.find(
                                  (opt) => opt.value === value[i].value
                                )
                          }
                          onChange={(selected) => handleChange(selected, i)}
                        />
                      </Form.Group>
                    ))}
                </div>
                <div className=" flex gap-[8px] justify-end  pr-[8px]">
                  <Button
                    variant=""
                    className={`btn-primary text-white w-[100px] `}
                  >
                    Save
                  </Button>
                  <Button
                    variant=""
                    className={`btn-danger text-white w-[100px]`}
                  >
                    Discard
                  </Button>
                </div>
              </div>
            </Form>
          </FormProvider>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}
