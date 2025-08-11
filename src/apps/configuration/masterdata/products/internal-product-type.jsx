import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row, Table } from "react-bootstrap";
import Action from "../../../../components/dropdown/action";
import Guidiance from "../../../../components/dropdown/guidiance";
import { FormProvider, useForm } from "react-hook-form";
import SelectBasic from "../../../../components/form/select-basic";
import InputText from "../../../../components/form/input-text";
import ModalConfig from "../../../../components/modal/modal-config";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addInternalProductType,
  editInternalProductType,
  getInternalProductTypeById,
  getInternalProductTypes,
  removeInternalProductType,
} from "../../../../data/configuration/masterdata/products/DataConfigInternalProductType";
import ActionTableModal from "../../../../components/dropdown/action-table-modal";

export default function InternalProductType() {
  const [selectedId, setSelectedId] = useState(null);
  const [show, setShow] = useState(false);
  const [showDisplay, setShowDisplay] = useState(false);
  const [showChange, setShowChange] = useState(false);
  const handleClose = () => setShow(false);
  const [modalMode, setModalMode] = useState("create");

  const columns = [
    <center>
      {" "}
      <i className=" fars-ellipsis-vertical"></i>
    </center>,
    "Internal Product Type",
    "Description",
    "Status",
  ];
  const filteredData = [
    {
      action: (
        <center>
          {" "}
          <Action />
        </center>
      ),
      type_prod_in: "1010",
      shrt_desc: "Raw Material (Externally Procured, without Sales)",
      status: "Drafted",
    },
    {
      action: (
        <center>
          {" "}
          <Action />
        </center>
      ),
      type_prod_in: "1120",
      shrt_desc: "Semi-Finished Product (Manufactured Internally)",
      status: "Published",
    },
  ];
  const methods = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  const dispatch = useDispatch();
  const { internal_product_type, loading } = useSelector(
    (state) => state.configInternalProductType
  );
  const { selectedInternalProductType } = useSelector(
    (state) => state.configInternalProductType
  );

  useEffect(() => {
    dispatch(getInternalProductTypes());
  }, [dispatch]);

  const handleSubmit = async (data) => {
    const form = {
      idno_systm: "SYS001",
      idno_tent: "TENANT001",
      type_prod_in: data.type_prod_in,
      desc_shrt: data.desc_shrt,
      crdt_by: "admin",
      updt_by: "admin",
    };
    await dispatch(addInternalProductType(form));
    alert("Data successfully added");
    handleClose(); // Close modal after submit
    dispatch(getInternalProductTypes()); // Refresh data setelah tambah
  };
  const handleUpdated = async (data) => {
    const updatedData = {
      type_prod_in: data.type_prod_in,
      desc_shrt: data.desc_shrt,
    };

    await dispatch(
      editInternalProductType({
        id: selectedId,
        updatedData,
      })
    );

    alert("Data successfully Updated");
    setShowChange(false); // Close modal after submit
    dispatch(getInternalProductTypes()); // Refresh data
  };
  const handleDelete = async (indx) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const result = await dispatch(removeInternalProductType(indx));
      if (removeInternalProductType.fulfilled.match(result)) {
        alert("Data successfully deleted");
      } else {
        alert("Failed to delete data");
      }
    }
  };

  const { reset } = methods;
  const handleShowCreate = () => {
    setModalMode("create");
    reset({
      type_prod_in: "",
      desc_shrt: "",
    });
    setShow(true);
  };

  const handleShowChange = async (indx) => {
    setModalMode("change");
    await dispatch(getInternalProductTypeById(indx));
    setSelectedId(indx);
    setShowChange(true);
  };

  const handleShowDisplay = async (indx) => {
    setModalMode("display");
    await dispatch(getInternalProductTypeById(indx));
    setSelectedId(indx);
    setShowDisplay(true);
  };

  useEffect(() => {
    if (
      (modalMode === "change" || modalMode === "display") &&
      selectedInternalProductType
    ) {
      reset({
        type_prod_in: selectedInternalProductType.type_prod_in || "",
        desc_shrt: selectedInternalProductType.desc_shrt || "",
      });
    }
  }, [selectedInternalProductType, reset, modalMode]);

  return (
    <div className=" w-full bg-white rounded-[4px] mt-[20px] height-custom-fixed shadow-custom">
      <div
        className="header-table-custom px-[30px] pt-[30px]"
        style={{ width: "100%" }}
      >
        <h6
          style={{
            fontWeight: "500",
            fontSize: "16px",
            margin: 0,
            width: "100%",
          }}
        >
           Showing <span style={{ fontWeight: "bold" }}>1</span> to{" "}
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  {internal_product_type.length}{" "}
                </span>{" "}
                of{" "}
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  {internal_product_type.length}{" "}
                </span>{" "}
                results
        </h6>
        <Button onClick={handleShowCreate}>Add</Button>
      </div>
      <div className="custom-table">
        <div className="scrollbar-custom">
          <Table responsive className="mb-0">
            <thead>
              <tr>
                <th scope="col">Internal Product Type</th>
                <th scope="col">Description</th>
                <th scope="col" className=" sticky w-[30px] right-[-2px]">
                  <center>
                    <i className=" fars-ellipsis-vertical"></i>
                  </center>
                </th>
              </tr>
            </thead>
            <tbody>
              {internal_product_type.map((item, i) => (
                <tr key={i}>
                  <td>{item.type_prod_in}</td>
                  <td>{item.desc_shrt}</td>
                  <td
                    className={`sticky right-[-2px] bg-white z-${
                      internal_product_type.length - (i + 1)
                    }`}
                  >
                    <center>
                      <ActionTableModal
                        modalBox={true}
                        change={() => handleShowChange(item.indx)}
                        display={() => handleShowDisplay(item.indx)}
                        deleted={() => handleDelete(item.indx)}
                      />
                    </center>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        {/* Modal Create */}
        <ModalConfig
          onSave={methods.handleSubmit(handleSubmit)}
          onDiscard={handleClose}
          show={show}
          handleClose={handleClose}
          title={"Create Internal Product Type"}
          BodyModal={
            <FormProvider {...methods}>
              <Form onSubmit={methods.handleSubmit(handleSubmit)}>
                <Row className=" flex flex-col gap-[25px] mb-[25px] px-[30px]">
                  <Col>
                    <div className=" w-full border-b border-[#e2e5ec] py-[20px]">
                      <InputText
                        as={true}
                        label="Internal Product Type"
                        id="type_prod_in"
                        type="text"
                        disabled={false}
                        placeholder="Please Input Internal Product Type"
                        required={true}
                        rules={{ required: "This field is required" }}
                        styles={" !w-1/2"}
                      />
                    </div>
                    <div className=" w-full border-b border-[#e2e5ec] py-[20px]">
                      <InputText
                        as={true}
                        label="Description"
                        id="desc_shrt"
                        type="text"
                        disabled={false}
                        placeholder="Please Input description"
                        required={true}
                        rules={{ required: "This field is required" }}
                        styles={" !w-1/2"}
                      />
                    </div>
                    {/* <div className=" w-full border-b border-[#e2e5ec] py-[20px]">
                    <SelectBasic
                      as={true}
                      label="Status"
                      id="name_cusf"
                      options={[
                        { value: "Draft", label: "Draft" },
                        { value: "Publish", label: "Publish" },
                      ]}
                      disabled={false}
                      placeholder="Select Status"
                      required={true}
                      rules={{ required: "This field is required" }}
                      widthstyles={"w-1/2"}
                    />
                  </div> */}
                  </Col>
                </Row>
              </Form>
            </FormProvider>
          }
        />

        {/* Modal Display */}
        <ModalConfig
          disabled={true}
          show={showDisplay}
          handleClose={() => {
            setShowDisplay(false);
            reset();
          }}
          title={"Display Internal Product Type"}
          BodyModal={
            <FormProvider {...methods}>
              <Form onSubmit={methods.handleSubmit(handleSubmit)}>
                <Row className=" flex flex-col gap-[25px] mb-[25px] px-[30px]">
                  <Col>
                    <div className=" w-full border-b border-[#e2e5ec] py-[20px]">
                      <InputText
                        as={true}
                        label="Internal Product Type"
                        id="type_prod_in"
                        type="text"
                        placeholder="Please Input Internal Product Type"
                        required={true}
                        rules={{ required: "This field is required" }}
                        styles={" !w-1/2"}
                        disabled={true}
                      />
                    </div>
                    <div className=" w-full border-b border-[#e2e5ec] py-[20px]">
                      <InputText
                        as={true}
                        label="Description"
                        id="desc_shrt"
                        type="text"
                        placeholder="Please Input description"
                        required={true}
                        rules={{ required: "This field is required" }}
                        styles={" !w-1/2"}
                        disabled={true}
                      />
                    </div>
                    {/* <div className=" w-full border-b border-[#e2e5ec] py-[20px]">
                    <SelectBasic
                      as={true}
                      label="Status"
                      id="name_cusf"
                      options={[
                        { value: "Draft", label: "Draft" },
                        { value: "Publish", label: "Publish" },
                      ]}
                      disabled={false}
                      placeholder="Select Status"
                      required={true}
                      rules={{ required: "This field is required" }}
                      widthstyles={"w-1/2"}
                    />
                  </div> */}
                  </Col>
                </Row>
              </Form>
            </FormProvider>
          }
        />
        {/* Modal Change */}
        <ModalConfig
          disabled={false}
          onSave={methods.handleSubmit(handleUpdated)}
          onDiscard={() => {
            setShowChange(false);
            reset();
          }}
          show={showChange}
          handleClose={() => setShowChange(false)}
          title={"Change Internal Product Type"}
          BodyModal={
            <FormProvider {...methods}>
              <Form onSubmit={methods.handleSubmit(handleUpdated)}>
                <Row className=" flex flex-col gap-[25px] mb-[25px] px-[30px]">
                  <Col>
                    <div className=" w-full border-b border-[#e2e5ec] py-[20px]">
                      <InputText
                        as={true}
                        label="Internal Product Type"
                        id="type_prod_in"
                        type="text"
                        placeholder="Please Input Internal Product Type"
                        required={true}
                        rules={{ required: "This field is required" }}
                        styles={" !w-1/2"}
                        disabled={false}
                      />
                    </div>
                    <div className=" w-full border-b border-[#e2e5ec] py-[20px]">
                      <InputText
                        as={true}
                        label="Description"
                        id="desc_shrt"
                        type="text"
                        placeholder="Please Input description"
                        required={true}
                        rules={{ required: "This field is required" }}
                        styles={" !w-1/2"}
                        disabled={false}
                      />
                    </div>
                    {/* <div className=" w-full border-b border-[#e2e5ec] py-[20px]">
                    <SelectBasic
                      as={true}
                      label="Status"
                      id="name_cusf"
                      options={[
                        { value: "Draft", label: "Draft" },
                        { value: "Publish", label: "Publish" },
                      ]}
                      disabled={false}
                      placeholder="Select Status"
                      required={true}
                      rules={{ required: "This field is required" }}
                      widthstyles={"w-1/2"}
                    />
                  </div> */}
                  </Col>
                </Row>
              </Form>
            </FormProvider>
          }
        />
      </div>
    </div>
  );
}
