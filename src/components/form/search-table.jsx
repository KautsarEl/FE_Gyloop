import React from "react";

export default function SearchTable(props) {
  return (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        className="search-action-table"
        placeholder="Search data..."
        value={props.search}
        onChange={props.handleSearch}
      />
      <i className="ri-search-line icon-search-table-action"></i>
    </div>
  );
}
