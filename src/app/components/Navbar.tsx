"use client";

import React from "react";
import useThemePreference, { possibleThemes} from "../hooks/useThemePreference";
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import Link from "next/link";

export default function Navbar() {

  const [theme, changeTheme] = useThemePreference();
  
  return (
    <div className="relative w-full h-20 bg-light-elements dark:bg-dark-elements shadow-md shadow-box-shadow">
      <nav className="max-w-[1440px] px-4 sm:px-12 lg:px-20 h-full flex justify-between items-center mx-auto">
        <Link href="/"><h1 className="text-sm sm:text-2xl font-extrabold">Where in the world?</h1></Link>
        <button onClick={changeTheme as () => void} className="flex text-xs sm:text-base" >
          {theme === possibleThemes.light ?
            <MdOutlineDarkMode className="h-4 sm:h-5 w-5 sm:w-5 mr-1 sm:mr-2 sm:mt-[0.125rem]" /> :
            <MdDarkMode className="h-4 sm:h-5 w-5 sm:w-5 mr-1 sm:mr-2 sm:mt-[0.125rem]"/>}
            Dark Mode
        </button>
      </nav>
    </div>
  );
}
