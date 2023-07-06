import React from "react";
import SearchFilter from "./SearchFilter";
import RegionFilter from "./RegionFilter";

export default function Filters() {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between">
      <SearchFilter />
      <RegionFilter />
    </div>
  );
}
