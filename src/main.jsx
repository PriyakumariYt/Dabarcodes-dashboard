import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "keen-slider/keen-slider.min.css";
import { DataProvider } from "./ContextApi/DataContext";
import { ModalProvider } from "./ContextApi/ModalContext";
import { AdminModalProvider } from "./ContextApi/AdminContextModal";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { UserProvider } from "./ContextApi/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    {/* // <UserProvider> */}
    <AdminModalProvider>
      <ModalProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </ModalProvider>
    </AdminModalProvider>
    {/* </UserProvider> */}
  </React.StrictMode>
);
