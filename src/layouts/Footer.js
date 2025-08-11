import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="main-footer">
      {/* <span>&copy; Gyloop Business S1.</span> */}
      <span>Gyloop Business R1.0</span>
      <span>Developed by: <Link to="http://www.gyloop.com" target="_blank">Gyloop</Link></span>
    </div>
  )
}