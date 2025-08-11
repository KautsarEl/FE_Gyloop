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
import ActionTableModal from "../../../../components/dropdown/action-table-modal";
import {
  addProductTag,
  editProductTag,
  getProductTagById,
  getProductTags,
  removeProductTag,
} from "../../../../data/configuration/masterdata/products/DataConfigProductTags";
import { getTypeTags } from "../../../../data/configuration/masterdata/products/DataConfigTypeTags";

export default function ProductTags() {
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
    "Product Tags",
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
      prod_tags: "1010",
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
      prod_tags: "1120",
      shrt_desc: "Semi-Finished Product (Manufactured Internally)",
      status: "Published",
    },
  ];
  const methods = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  const dispatch = useDispatch();
  const { product_tags, loading } = useSelector(
    (state) => state.configProductTags
  );
  const { selectedProductTags } = useSelector(
    (state) => state.configProductTags
  );
  const { type_tags } = useSelector((state) => state.configTypeTags);
  useEffect(() => {
    dispatch(getProductTags());
    dispatch(getTypeTags());
  }, [dispatch]);

  const handleSubmit = async (data) => {
    const form = {
      idno_systm: "SYS001",
      idno_tent: "TENANT001",
      prod_tags: data.prod_tags,
      desc_shrt: data.desc_shrt,
      type_objc: data.type_objc,
      crdt_by: "admin",
      updt_by: "admin",
    };
    await dispatch(addProductTag(form));
    alert("Data successfully added");
    handleClose(); // Close modal after submit
    dispatch(getProductTags()); // Refresh data setelah tambah
  };
  const handleUpdated = async (data) => {
    const updatedData = {
      prod_tags: data.prod_tags,
      desc_shrt: data.desc_shrt,
      type_objc: data.type_objc,
    };

    await dispatch(
      editProductTag({
        id: selectedId,
        updatedData,
      })
    );

    alert("Data successfully Updated");
    setShowChange(false); // Close modal after submit
    dispatch(getProductTags()); // Refresh data
  };
  const handleDelete = async (indx) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const result = await dispatch(removeProductTag(indx));
      if (removeProductTag.fulfilled.match(result)) {
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
      prod_tags: "",
      desc_shrt: "",
      type_objc:""
    });
    setShow(true);
  };

  const handleShowChange = async (indx) => {
    setModalMode("change");
    await dispatch(getProductTagById(indx));
    setSelectedId(indx);
    setShowChange(true);
  };

  const handleShowDisplay = async (indx) => {
    setModalMode("display");
    await dispatch(getProductTagById(indx));
    setSelectedId(indx);
    setShowDisplay(true);
  };

  useEffect(() => {
    if (
      (modalMode === "change" || modalMode === "display") &&
      selectedProductTags
    ) {
      reset({
        prod_tags: selectedProductTags.prod_tags || "",
        desc_shrt: selectedProductTags.desc_shrt || "",
        type_objc: selectedProductTags.type_objc || "",
      });
    }
  }, [selectedProductTags, reset, modalMode]);

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
          <span style={{ fontWeight: "bold" }}> {product_tags.length} </span> of{" "}
          <span style={{ fontWeight: "bold" }}> {product_tags.length} </span>{" "}
          results
        </h6>
        <Button onClick={handleShowCreate}>Add</Button>
      </div>
      <div className="custom-table">
        <div className="scrollbar-custom">
          <Table responsive className="mb-0">
            <thead>
              <tr>
                <th scope="col">Product Tag</th>
                <th scope="col">Description</th>
                <th scope="col">Object Type</th>
                <th scope="col" className=" sticky w-[30px] right-[-2px]">
                  <center>
                    <i className=" fars-ellipsis-vertical"></i>
                  </center>
                </th>
              </tr>
            </thead>
            <tbody>
              {product_tags.map((item, i) => (
                <tr key={i}>
                  <td>{item.prod_tags}</td>
                  <td>{item.desc_shrt}</td>
                  <td>{item.type_objc}</td>
                  <td
                    className={`sticky right-[-2px] bg-white z-${
                      product_tags.length - (i + 1)
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
          title={"Create Product Tags"}
          BodyModal={
            <FormProvider {...methods}>
              <Form onSubmit={methods.handleSubmit(handleSubmit)}>
                <Row className=" flex flex-col gap-[25px] mb-[25px] px-[30px]">
                  <Col>
                    <div className=" w-full border-b border-[#e2e5ec] py-[20px]">
                      <InputText
                        as={true}
                        label="Product Tags"
                        id="prod_tags"
                        type="text"
                        disabled={false}
                        placeholder="Please Input Product Tags"
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
                    <div className=" w-full border-b border-[#e2e5ec] py-[20px]">
                      <SelectBasic
                        as={true}
                        label="Obect Type"
                        id="type_objc"
                        options={type_tags.map((item, i) => ({
                          value: { value: item.type_tags, label: item.desc_shrt },
                          label: (
                            <div className=" truncate ...">
                              {item.type_tags}
                            </div>
                          ),
                        }))}
                        disabled={false}
                        placeholder="Select Status"
                        required={true}
                        rules={{ required: "This field is required" }}
                        widthstyles={"w-1/2"}
                      />
                    </div>
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
          title={"Display Product Tags"}
          BodyModal={
            <FormProvider {...methods}>
              <Form onSubmit={methods.handleSubmit(handleSubmit)}>
                <Row className=" flex flex-col gap-[25px] mb-[25px] px-[30px]">
                  <Col>
                    <div className=" w-full border-b border-[#e2e5ec] py-[20px]">
                      <InputText
                        as={true}
                        label="Product Tags"
                        id="prod_tags"
                        type="text"
                        placeholder="Please Input Product Tags"
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
                    <div className=" w-full border-b border-[#e2e5ec] py-[20px]">
                      <SelectBasic
                        as={true}
                        label="Object Type"
                        id="type_objc"
                        options={type_tags.map((item, i) => ({
                          value: { value: item.type_tags, label: item.desc_shrt },
                          label: (
                            <div className=" truncate ...">
                              {item.type_tags}
                            </div>
                          ),
                        }))}
                        disabled={true}
                        placeholder="Select Status"
                        required={true}
                        rules={{ required: "This field is required" }}
                        widthstyles={"w-1/2"}
                      />
                    </div>
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
          title={"Change Product Tags"}
          BodyModal={
            <FormProvider {...methods}>
              <Form onSubmit={methods.handleSubmit(handleUpdated)}>
                <Row className=" flex flex-col gap-[25px] mb-[25px] px-[30px]">
                  <Col>
                    <div className=" w-full border-b border-[#e2e5ec] py-[20px]">
                      <InputText
                        as={true}
                        label="Product Tags"
                        id="prod_tags"
                        type="text"
                        placeholder="Please Input Product Tags"
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
                    <div className=" w-full border-b border-[#e2e5ec] py-[20px]">
                      <SelectBasic
                        as={true}
                        label="Object Type"
                        id="type_objc"
                        options={type_tags.map((item, i) => ({
                          value: { value: item.type_tags, label: item.desc_shrt },
                          label: (
                            <div className=" truncate ...">
                              {item.type_tags}
                            </div>
                          ),
                        }))}
                        disabled={false}
                        placeholder="Select Status"
                        required={true}
                        rules={{ required: "This field is required" }}
                        widthstyles={"w-1/2"}
                      />
                    </div>
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
