import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../error-page";
import InvoiceMain from "./invoice-main";
import Plaid from "./plaid";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <InvoiceMain />,
      },
      {
        path: "/plaid/",
        element: <Plaid />,
      },
    ],
  },
]);
