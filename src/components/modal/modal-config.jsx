import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Guidiance from "../dropdown/guidiance";

export default function ModalConfig({
  title,
  BodyModal,
  show,
  handleClose,
  guide,
  onSave,
  onDiscard,
  disabled,
}) {
  //   const [show, setShow] = useState(false);
  //   const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} size="xl">
      <Modal.Header closeButton className=" flex justify-between">
        <Modal.Title className="main-title m-0 w-full">{title}</Modal.Title>
        {!guide && (
          <div className=" mr-[10px]">
            <Guidiance />
          </div>
        )}
      </Modal.Header>
      <Modal.Body>{BodyModal}</Modal.Body>
      <Modal.Footer>
        <Button
          onClick={onSave}
          variant=""
          className={` ${
            disabled ? " cursor-not-allowed btn-disable" : "btn-primary"
          }`}
        >
          Save
        </Button>
        <Button
          onClick={onDiscard}
          variant=""
          className={`${
            disabled
              ? " cursor-not-allowed btn-disable"
              : "btn-danger text-white"
          }`}
        >
          Discard
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
