import { Outlet } from "react-router-dom";
import Sidebar from "./components/layout/sidebar";
import { CreateInvoice } from "./views";

function App() {
  return (
    <main className="h-full w-full items-stretch justify-between flex bg-[#f8f7fb] dark:bg-[#151625]">
      {/* Sidebar */}
      <div className="fixed left-0 min-w-[80px] w-[8%] flex flex-col justify-center h-[100vh] bg-[#1f213a] rounded-r-lg">
        <Sidebar />
      </div>
      <div className="fixed left-[8%]" id="create-invoice-id">
        <CreateInvoice />
      </div>
      {/* Main Content */}
      <div className="w-[70%] mt-10 mx-auto pb-[10%] overflow-x-hidden">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
