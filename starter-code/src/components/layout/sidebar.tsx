import React from "react";
import logo from "../../assets/logo.svg";
import sun from "../../assets/icon-sun.svg";
import moon from "../../assets/icon-moon.svg";

export default function Sidebar() {
  const [darkMode, setDarkMode] = React.useState<boolean>(false);

  React.useEffect(() => {
    setDarkMode(
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.theme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <>
      <div className="bg-[#7c5df9] py-8 rounded-r-lg flex justify-center">
        <img src={logo} alt="brand-logo" />
      </div>
      <div className="flex flex-col items-center mt-auto">
        <button className="mb-4 p-3" onClick={toggleDarkMode}>
          <img src={darkMode ? sun : moon} alt="dark-light-mode" />
        </button>
        <hr className="w-full bg-gray-400 dark:bg-gray-300 mt-3" />
        <img
          className="rounded-full w-14 my-3"
          src={
            "https://lh3.googleusercontent.com/ogw/AOh-ky0HyvfFbcWBjBaMl0wZ2Y4NqsI3pftgunXkNVHvzg=s64-c-mo"
          }
          alt="avatar"
        />
      </div>
    </>
  );
}
