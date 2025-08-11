import React, { useState } from "react";
import DropdownBasic from "./dropdown-basic";

export default function Group({ menu, onSelect,selected }) {
  const baseMenu = [
    { menu: "Type" },
    { menu: "Group" },
    { menu: "Characteristic" },
  ];
  return (
    <DropdownBasic
      button={<i className="fars-layer-group"></i>}
      menu={menu ? menu : baseMenu}
      onSelect={(key)=>{onSelect(key)}}
      selected={selected}
    />
  );
}
