import React from "react";
import { render } from "react-dom";
import App from "./Container/App";
import "react-toastify/dist/ReactToastify.css";
import GlobalState from "./Container/GlobalState";

render(
  <GlobalState>
    <App />
  </GlobalState>,
  document.getElementById("root")
);
