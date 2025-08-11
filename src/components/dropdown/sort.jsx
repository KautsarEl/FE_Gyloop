import React from "react";
import DropdownBasic from "./dropdown-basic";

export default function Sort({ menu, onSortSelect, icon }) {
  const defaultMenu = [
    { menu: "Field Name" },
    { menu: "Type" },
    { menu: "Group" },
    { menu: "Characteristic" },
    { menu: "UoM" },
    { menu: "Delivery" },
    { menu: "Product Profile" },
    { menu: "Brand" },
    { menu: "MPN" },
    { menu: "Article Number" },
    { menu: "Barcode" },
    { menu: "Tags" },
  ];
  return (
    <DropdownBasic
      button={icon ? icon : <i className="fars-sort-amount-down"></i>}
      menu={menu ? menu : defaultMenu}
      onSelect={(key) => onSortSelect(key)}
    />
  );
}
