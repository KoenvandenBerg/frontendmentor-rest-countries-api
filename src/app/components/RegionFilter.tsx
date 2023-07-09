"use client";

import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { MdClose, MdArrowDropDown } from "react-icons/md";
import * as apiResponseTypes from "../libs/types/apiResponseTypes";

const allRegions = Object.keys(apiResponseTypes.Region);

type regionFilterProps = {
  setRegionFilter: Dispatch<SetStateAction<string>>;
};

export default function RegionFilter(props: regionFilterProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuRef = useRef<any>();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current !== null && !menuRef.current.contains(e.target)) {
        e.stopPropagation();
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  const [selectedRegion, setSelectedRegion] = useState("");

  const selectRegion = (region: string) => {
    setSelectedRegion(region);
    setMenuOpen(false);
  };

  useEffect(() => props.setRegionFilter(selectedRegion), [selectedRegion]);

  return (
    <div className="relative" ref={menuRef}>
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
      {menuOpen && (
        <div className="absolute top-[3.3rem] sm:top-[3.8rem] w-full sm:w-[12.5rem] py-4 bg-light-elements dark:bg-dark-elements shadow-md shadow-box-shadow rounded-[0.3125rem] px-6 sm:px-6 text-xs sm:text-sm text-light-text dark:text-dark-input z-10">
          <ul className="flex flex-col gap-2">
            {allRegions.map((region) => {
              return (
                <li
                  className="cursor-pointer hover:underline underline-offset-4"
                  key={region}
                  onClick={() => selectRegion(region)}
                >
                  {region}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
