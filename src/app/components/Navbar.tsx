"use client";

import React from "react";
import useThemePreference, { possibleThemes} from "../hooks/useThemePreference";
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';

export default function Navbar() {

  const [theme, changeTheme] = useThemePreference();
  
  return (
    <nav className="w-full h-20 px-20 flex justify-between bg-light-elements dark:bg-dark-elements shadow-md shadow-box-shadow">
      <h1 className="text-2xl">Where in the world?</h1>
      <button onClick={changeTheme as () => void} className="flex"> 
        {theme === possibleThemes.light ? 
          <MdOutlineDarkMode className="h-5 w-5"/> : 
          <MdDarkMode className="h-5 w-5"/>}
          Dark Mode
      </button>
    </nav>
  );
}
