import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/layout/sidebar";
import { collapse } from "./slices/apps";
import { RootState } from "./store";
import { CreateInvoice } from "./views";

function App() {
  const createInvoiceRef = React.useRef<HTMLDivElement>(null);
  const expanded = useSelector((state: RootState) => state.apps.expanded);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (expanded) {
      createInvoiceRef.current?.style.setProperty(
        "transform",
        "translateX(590px)"
      );
    } else {
      createInvoiceRef.current?.style.setProperty(
        "transform",
        "translateX(-500px)"
      );
    }
  }, [expanded]);

  return (
    <main className="h-full w-full items-stretch justify-between flex bg-[#f8f7fb] dark:bg-[#151625]">
      {/* Sidebar */}
      <div className="fixed left-0 min-w-[80px] w-[8%] flex flex-col justify-center h-[100vh] bg-[#1f213a] rounded-r-lg">
        <Sidebar />
      </div>
      <div
        style={{
          left: "-500px",
          transition: "all 1.2s",
        }}
        className="fixed"
        ref={createInvoiceRef}
      >
        <CreateInvoice />
      </div>
      {/* Main Content */}
      <div
        onClick={() => {
          if (expanded) dispatch(collapse());
        }}
        className="w-[70%] mt-10 mx-auto pb-[10%] overflow-x-hidden"
      >
        <Outlet />
      </div>
    </main>
  );
}

export default App;
