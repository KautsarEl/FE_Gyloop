import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Dropdown, Toast } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Action({ display, change, id }) {
  const [active, setActive] = useState(false);
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowA(!showB);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://203.175.11.244:8080/api/products/${id}`);
      // if (response.status === 200) {
      //   alert("Product berhasil dihapus");
      //   // Refresh data atau update state setelah penghapusan
      //   // contoh:
      //   // fetchProducts();
      // }
    } catch (error) {
      console.error("Gagal menghapus product:", error);
      alert("Gagal menghapus product");
    }

    toggleShowA();
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
  const menu = [
    {
      menu: (
        <Link to={display} className=" text-[#41505f]">
          <i className="fars-glasses "></i>Display
        </Link>
      ),
      divider: false,
    },
    {
      menu: (
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
        <span onClick={() => setShowA(true)}>
          <i className="fars-trash"></i>Delete
        </span>
      ),
      divider: false,
    },
  ];

  return (
    <>
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
      <div className="custom-toast">
        <Toast id="0" show={showA} onClose={() => setShowA(false)}>
          <Toast.Header>
            <h1 className="me-auto text-black text-[24px] m-0 p-0">
              Confirmation
            </h1>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body className="h-full pt-[10px]">
            <div className="flex flex-col justify-between h-[83%]">
              <div>
                <strong className="me-auto text-[#41505FBF]">
                  Message C110992
                </strong>
                <p className="mt-[10px]">
                  Are you sure you want to delete this item?
                </p>
              </div>
              <div className=" flex justify-end p-2">
                <Button
                  className=" text-white"
                  variant="danger"
                  onClick={() => {
                    handleDelete(id);
                    setShowB(true);
                    setTimeout(() => {
                      window.location.reload();
                    }, 5000);
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
          </Toast.Body>
        </Toast>
      </div>
      <div className="custom-toast-deleted">
        <Toast
          id="1"
          show={showB}
          onClose={() => setShowB(false)}
          delay={4000}
          autohide={true}
        >
          <Toast.Body>The item has been successfully deleted</Toast.Body>
        </Toast>
      </div>
    </>
  );
}
