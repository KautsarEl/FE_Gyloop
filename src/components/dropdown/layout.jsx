import React, { useEffect, useState } from "react";
import { Modal, Table, Button } from "react-bootstrap";
import ModalConfig from "../modal/modal-config";
import DropdownBasic from "./dropdown-basic";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchLayoutItems } from "../../data/sales/masterdata/products/DataSalesProducts";

function DraggableRow({ item, index, selected, toggleCheckbox, tableType }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: `${tableType}-${item.code_fild}` });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    backgroundColor: selected.includes(item.code_fild) ? "#f5f5f5" : undefined,
  };

  return (
    <tr ref={setNodeRef} style={style}>
      <td
        {...attributes}
        {...listeners}
        style={{ cursor: "grab", width: "40px" }}
      >
        ≡
      </td>
      <td>
        <input
          type="checkbox"
          checked={selected.includes(item.code_fild)}
          onChange={() => toggleCheckbox(item.code_fild)}
        />
      </td>
      <td>{item.desc_short}</td>
      <td>{index + 1}</td>
    </tr>
  );
}

export default function Layout() {
  const [show, setShow] = useState(false);
  const [showFields, setShowFields] = useState([]);
  const [hideFields, setHideFields] = useState([]);
  const [selected, setSelected] = useState([]);

  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.layoutItems);

  const menu = [
    { menu: "Edit Layout" },
    { menu: "Standard Layout" },
    { menu: "Delivery Manager" },
    { menu: "Field Supervisor" },
    { menu: "Delivery Analyst" },
    { menu: "Custom Layout 1" },
    { menu: "Custom Layout 2" },
  ];

  useEffect(() => {
    dispatch(fetchLayoutItems());
  }, [dispatch]);

  useEffect(() => {
    const show = items.filter((item) => item.is_show === true);
    const hide = items.filter((item) => item.is_show === false);
    setShowFields(show);
    setHideFields(hide);
  }, [items]);

  const sensors = useSensors(useSensor(PointerSensor));

  const toggleCheckbox = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleAll = (table) => {
    const fields = table === "show" ? showFields : hideFields;
    const allIds = fields.map((f) => f.code_fild);
    const isAllSelected = allIds.every((id) => selected.includes(id));
    if (isAllSelected) {
      setSelected((prev) => prev.filter((id) => !allIds.includes(id)));
    } else {
      setSelected((prev) => [...new Set([...prev, ...allIds])]);
    }
  };

  const handleOut = () => {
    const toMove = showFields
      .filter((f) => selected.includes(f.code_fild))
      .map((f) => ({ ...f, is_show: false }));

    setShowFields((prev) =>
      prev.filter((f) => !selected.includes(f.code_fild))
    );

    setHideFields((prev) => [...prev, ...toMove]);

    setSelected((prev) =>
      prev.filter((id) => !toMove.some((f) => f.code_fild === id))
    );
  };
  const handleIn = () => {
    const toMove = hideFields
      .filter((f) => selected.includes(f.code_fild))
      .map((f) => ({ ...f, is_show: true }));

    setHideFields((prev) =>
      prev.filter((f) => !selected.includes(f.code_fild))
    );

    setShowFields((prev) => [...prev, ...toMove]);

    setSelected((prev) =>
      prev.filter((id) => !toMove.some((f) => f.code_fild === id))
    );
  };

  const handleDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      const oldIndex = showFields.findIndex((i) => i.code_fild === active.id);
      const newIndex = showFields.findIndex((i) => i.code_fild === over.id);
      setShowFields(arrayMove(showFields, oldIndex, newIndex));
    }
  };

  const renderTable = (fields, isShowTable) => {
    const tableType = isShowTable ? "show" : "hide";

    const itemsWithPrefix = fields.map((f) => `${tableType}-${f.code_fild}`);

    return (
      <div className="mb-4 w-full">
        <h5 className=" p-0 mb-[15px] text-[14px] text-black font-normal">
          {isShowTable ? "Displayed Column Fields" : "Available Column Fields"}
        </h5>
        <Table responsive>
          <thead>
            <tr>
              <th style={{ width: "40px" }}></th>
              <th>
                <input
                  type="checkbox"
                  checked={
                    fields.length > 0 &&
                    fields.every((f) => selected.includes(f.code_fild))
                  }
                  onChange={() => toggleAll(isShowTable ? "show" : "hide")}
                />
              </th>
              <th>Column Name</th>
              <th>Index</th>
            </tr>
          </thead>
          <tbody>
            {fields.length === 0 ? (
              <tr>
                <td colSpan={4}>No Data Found</td>
              </tr>
            ) : (
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={isShowTable ? handleDragEndShow : handleDragEndHide}
              >
                <SortableContext
                  items={itemsWithPrefix}
                  strategy={verticalListSortingStrategy}
                >
                  {fields.map((item, i) => (
                    <DraggableRow
                      key={item.code_fild}
                      item={item}
                      index={i}
                      selected={selected}
                      toggleCheckbox={toggleCheckbox}
                      tableType={tableType}
                    />
                  ))}
                </SortableContext>
              </DndContext>
            )}
          </tbody>
        </Table>
      </div>
    );
  };

  const handleDragEndShow = ({ active, over }) => {
    if (active.id !== over?.id) {
      const activeId = active.id.replace("show-", "");
      const overId = over.id.replace("show-", "");
      const oldIndex = showFields.findIndex((i) => i.code_fild === activeId);
      const newIndex = showFields.findIndex((i) => i.code_fild === overId);
      setShowFields(arrayMove(showFields, oldIndex, newIndex));
    }
  };

  const handleDragEndHide = ({ active, over }) => {
    if (active.id !== over?.id) {
      const activeId = active.id.replace("hide-", "");
      const overId = over.id.replace("hide-", "");
      const oldIndex = hideFields.findIndex((i) => i.code_fild === activeId);
      const newIndex = hideFields.findIndex((i) => i.code_fild === overId);
      setHideFields(arrayMove(hideFields, oldIndex, newIndex));
    }
  };

  const BodyModal = () => {
    return (
      <>
        <h1 className=" p-3 mb-[10px] text-[16px] text-black font-normal">
          Please select the column fields to be displayed.
        </h1>
        <div className="p-3 flex justify-between w-full gap-[30px]">
          {renderTable(showFields, true)}
          <div className="flex flex-col gap-[16px] items-center justify-center">
            <Button
              className="w-[50px] p-[3px] h-fit cursor-pointer btn-primary"
              onClick={handleIn}
              disabled={showFields.some((f) => selected.includes(f.code_fild))}
            >
              In
            </Button>
            <Button
              className="w-[50px] p-[3px] h-fit cursor-pointer btn-danger text-white"
              onClick={handleOut}
              disabled={hideFields.some((f) => selected.includes(f.code_fild))}
            >
              Out
            </Button>
          </div>
          {renderTable(hideFields, false)}
        </div>
      </>
    );
  };
  const handleSaveOrder = async () => {
    const reorderedItems = [...showFields, ...hideFields].map((item, idx) => ({
      code_fild: item.code_fild,
      index: idx + 1,
      is_show: item.is_show,
    }));

    try {
      const response = await fetch("http://203.175.11.244:8080/items/reorder", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reorderedItems),
      });

      if (!response.ok) throw new Error("Failed to save layout order");

      dispatch(fetchLayoutItems());
      setShow(false);
      setSelected([]);
    } catch (err) {
      console.error(err);
    }
    
  };

  return (
    <>
      <DropdownBasic
        button={<i className="fars-color-palette"></i>}
        menu={menu}
        edit={true}
        onEditLayout={() => setShow(true)}
        selected={""}
      />
      <ModalConfig
        onSave={handleSaveOrder}
        onDiscard={() => setShow(false)}
        show={show}
        handleClose={() => setShow(false)}
        title={"Edit Layout"}
        guide={true}
        BodyModal={<BodyModal />}
      />
    </>
  );
}
