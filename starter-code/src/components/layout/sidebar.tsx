import logo from "../../assets/logo.svg";
import sun from "../../assets/icon-sun.svg";
import moon from "../../assets/icon-moon.svg";
import avatar from "../../assets/image-avatar.jpg";
import { ChangeEvent } from "react";

export default function Sidebar() {
  const handleDarkLightMode = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.theme = e.target.value;
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <>
      <div className="bg-[#7c5df9] py-8 rounded-r-lg flex justify-center">
        <img src={logo} alt="brand-logo" />
      </div>
      <div className="flex flex-col items-center mt-auto">
        <select
          className="bg-gray-800 text-white outline-none cursor-pointer"
          defaultValue={localStorage.theme}
          onChange={handleDarkLightMode}
        >
          <option value={"light"}>🔆 Light</option>
          <option value={"dark"}>🌙 Dark</option>
        </select>
        <hr className="w-full bg-gray-400 dark:bg-gray-300 mt-3" />
        <img className="rounded-full w-14 my-3" src={avatar} alt="avatar" />
      </div>
    </>
  );
}
