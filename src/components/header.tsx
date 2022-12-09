import React, { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { BiWorld } from "react-icons/bi";

const Header = () => {
  const [theme, setTheme] = useState<string>('');
  useEffect(() => {
    const storageTheme = localStorage.getItem("theme");
    storageTheme ? setTheme(storageTheme) : setTheme("light");
    console.log("Code running")
  }, []);

  useEffect(() => {
    theme === 'dark' ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
  }, [theme])

  const toggleTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem("theme", e.target.value);
    setTheme(e.target.value);
  };

  return (
    <header className="sticky top-0 w-full bg-transparent h-14 flex justify-center shadow-md shadow-b dark:bg-[#222E37] text-black dark:text-gray-100">
      <div className="w-full max-w-6xl flex px-4 justify-between">
        <h1 className="flex items-center font-semibold text-md tracking-wider gap-2">
          <BiWorld size={25}/>
          World country searcher
        </h1>
        <div className="flex flex-row items-center gap-2">
          <select
            name="theme"
            id="theme"
            className="bg-transparent cursor-pointer px-2 py-1 rounded-sm border border-gray-300 text-sm"
            onChange={toggleTheme}
            value={theme}
          >
            <option value="light" className="text-black">Light Mode</option>
            <option value="dark"  className="text-black">Dark Mode</option>
          </select>
          <div className="flex items-center gap-2 font-semibold text-neutral-600 dark:text-neutral-300 text-lg">
            {theme === "light" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
