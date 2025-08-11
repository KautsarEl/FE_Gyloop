import React from "react";
import DropdownBasic from "./dropdown-basic";

export default function Donwload() {
  const menu = [
    {
      menu: (
        <>
          <i className="fars-file-pdf"></i> Save As PDF
        </>
      ),
    },
    {
      menu: (
        <>
          <i className="fars-file-spreadsheet"></i> Save As CSV
        </>
      ),
    },
    {
      menu: (
        <>
          <i className="fars-file-lines"></i> Save As TXT
        </>
      ),
    },
  ];
  return (
    <DropdownBasic
      button={<i className="fars-cloud-arrow-down"></i>}
      menu={menu}
    />
  );
}
