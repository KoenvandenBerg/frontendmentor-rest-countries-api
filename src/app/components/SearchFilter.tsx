"use client";

import React, { useState } from "react";
import { MdClose, MdSearch } from "react-icons/md";

export default function SearchFilter() {
  const [filterText, setFilterText] = useState("");

  const handleChange = (text: string) => {
    setFilterText(text);
  };

  return (
    <div className="relative">
      <MdSearch className="absolute h-4 w-4 text-light-input dark:text-dark-input top-4 left-4" />
      <input
        type="text"
        placeholder="Search for a country..."
        value={filterText}
        onChange={(e) => handleChange(e.target.value)}
        className="h-12 w-full bg-light-elements dark:bg-dark-elements shadow-md shadow-box-shadow rounded-[0.3125rem] px-11 text-light-input dark:text-dark-input placeholder:dark:text-dark-input"
      />
      {filterText !== "" && (
        <MdClose
          onClick={() => setFilterText("")}
          className="absolute h-4 w-4 text-light-input dark:text-dark-input right-4 top-4 hover:text-red-700 dark:hover:text-red-700 hover:scale-150 cursor-pointer transition-transform"
        />
      )}
    </div>
  );
}
