import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./Routes/App";
import it from "react-dom/client";


const root = it.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,

);
