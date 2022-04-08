import React from "react";
import { createRoot } from "react-dom/client";
import MainPage from "./components/MainPage";
import "./css/common.css";
import { BrowserRouter } from "react-router-dom";

const ntnoop = document.getElementById("ntnoop");
const root = createRoot(ntnoop);

root.render(
  <>
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  </>
);
