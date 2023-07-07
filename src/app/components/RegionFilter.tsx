"use client";

import React, { useState } from "react";
import { MdClose, MdArrowDropDown } from "react-icons/md";

export default function RegionFilter() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [selectedRegion, setSelectedRegion] = useState("");

  return (
    <div className="relative h-12 sm:h-[3.5rem] w-full sm:w-[12.5rem] flex justify-between items-center bg-light-elements dark:bg-dark-elements shadow-md shadow-box-shadow rounded-[0.3125rem] px-6 sm:px-6 text-xs sm:text-sm text-light-text dark:text-dark-input">
      <p>{selectedRegion !== "" ? selectedRegion : "Filter by Region"}</p>
      {selectedRegion !== "" ? (
        <MdClose
          onClick={() => setSelectedRegion("")}
          className="absolute h-4 sm:h-5 w-4 sm:w-5 text-light-input dark:text-dark-input right-4 top-4 sm:top-[1.15rem] hover:text-red-700 dark:hover:text-red-700 hover:scale-150 cursor-pointer transition-transform"
        />
      ) : (
        <button onClick={toggleMenu}>
          <MdArrowDropDown
            className={`h-6 w-6 mr-[-0.3rem] ${
              menuOpen && "rotate-180"
            } transition-all hover:scale-125`}
          />
        </button>
      )}
    </div>
  );
}
