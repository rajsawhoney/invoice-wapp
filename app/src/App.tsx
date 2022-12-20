import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/layout/sidebar";
import { collapse } from "./slices/apps";
import { populateEditData } from "./slices/invoice";
import { RootState } from "./store";
import { CreateInvoice } from "./views";

function App() {
  const expanded = useSelector((state: RootState) => state.apps.expanded);
  const dispatch = useDispatch();

  return (
    <main className="h-full w-full items-stretch justify-between flex bg-[#f8f7fb] dark:bg-[#151625]">
      {/* Sidebar */}
      <div className="z-10 fixed left-0 min-w-[100px] w-[8%] flex flex-col justify-center h-[100vh] bg-[#1f213a] rounded-r-lg">
        <Sidebar />
      </div>
      <div className="fixed left-0 z-[1]">
        <CreateInvoice />
      </div>
      {/* Main Content */}
      <div
        onClick={() => {
          if (expanded) {
            dispatch(collapse());
            dispatch(populateEditData({ data: null, status: false }));
          }
        }}
        className="ml-[17%] md:w-[75%] sm:w-[95%] mt-10 px-4 mx-auto pb-[10%] overflow-x-hidden"
      >
        <Outlet />
      </div>
    </main>
  );
}

export default App;
