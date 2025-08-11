import React from "react";
import DropdownBasic from "./dropdown-basic";

export default function Guidiance() {
  const menu = [
    { menu: "Standard Guidiance", divider:true },
    { menu: "Settings & Configuration", divider:true },
    { menu: "Internal User Manual", divider:false },
    { menu: "Internal User Video", divider:true },
    { menu: "FAQ", divider:false },
    { menu: "Support", divider:false },
  ];
  return (
    <DropdownBasic
      button={
        <>
          <i className="fars-lightbulb-on"></i>Documentation
        </>
      }
      menu={menu}
    />
  );
}
