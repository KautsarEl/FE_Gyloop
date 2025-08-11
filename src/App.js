import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './layouts/Main.js';
import Myview from "./apps/home/myview/Myview.js";
import NotFound from "./pages/NotFound.js";

import publicRoutes from "./routes/PublicRoutes.js";
import protectedRoutes from "./routes/ProtectedRoutes.js";

// import css
import "./assets/css/remixicon.css";
import "./assets/css/fontawesome.css";

// import scss
import "./scss/style.scss";


// set skin on load
window.addEventListener("load", function () {
  let skinMode = localStorage.getItem("skin-mode");
  let HTMLTag = document.querySelector("html");

  if (skinMode) {
    HTMLTag.setAttribute("data-skin", skinMode);
  }
});

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            {protectedRoutes.map((route, index) => {
              return (
                <Route
                  path={route.path}
                  element={route.element}
                  key={index}
                />
              )
            })}
          </Route>
          {publicRoutes.map((route, index) => {
            return (
              <Route
                path={route.path}
                element={route.element}
                key={index}
              />
            )
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
    
  );
}