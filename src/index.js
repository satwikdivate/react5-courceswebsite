import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import toast
import { ToastContainer } from "react-toastify";
// also import their css configuration
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <div className="">
  <App/>
  {/* it is important to add other wise toast not run */}
  <ToastContainer/>
 </div>
);
