"use client";

import React from "react";
import useThemePreference from "../hooks/useThemePreference";

export default function Navbar() {

  const changeTheme = useThemePreference();
  
  return (
    <nav className="w-full h-20 flex justify-between bg-light-elements dark:bg-dark-elements shadow-md shadow-box-shadow">
      <h1 className="">Where in the world?</h1>
      <div>
        <button onClick={changeTheme}>Dark Mode</button>
      </div>
    </nav>
  );
}
