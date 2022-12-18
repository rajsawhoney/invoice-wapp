import { Outlet } from "react-router-dom";
import Sidebar from "./components/layout/sidebar";

function App() {
  return (
    <main className="h-full w-full items-stretch justify-between flex bg-white dark:bg-[#151625]">
      {/* Sidebar */}
      <div className="min-w-[60px] w-[8%] flex flex-col justify-center h-[100vh] bg-[#1f213a] rounded-r-lg">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="w-[70%] mt-10 mx-auto pb-[10%] overflow-x-hidden">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
