import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
 import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { router } from "./routes/root";
import { store } from "./store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
