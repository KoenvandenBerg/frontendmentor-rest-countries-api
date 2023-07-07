"use client";

import React, { useState } from "react";
import * as apiResponseTypes from "../libs/types/apiResponseTypes";
import CountryCard from "./CountryCard";
import Filters from "./Filters";

type countriesOverviewProps = {
  data: apiResponseTypes.Country[];
};

export default function CountriesOverview({ data }: countriesOverviewProps) {
  const [regionFilter, setRegionFilter] = useState("");
  const countriesFilteredByRegion = data.filter((country) =>
    country.region.includes(regionFilter)
  );

  const [searchFilter, setSearchFilter] = useState("");
  const countriesFilteredByRegionAndSearch = countriesFilteredByRegion.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const countriesToRender = countriesFilteredByRegionAndSearch;

  return (
    <div>
      <Filters
        setSearchFilter={setSearchFilter}
        setRegionFilter={setRegionFilter}
      />
      {countriesToRender?.length ? (
        <div className="my-6 sm:my-9 lg:my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {countriesToRender.map((country) => (
            <CountryCard
              key={country.name.official}
              name={country.name.common}
              flag={country.flags.png}
              population={country.population.toLocaleString("en-US")}
              region={country.region}
              capital={
                country?.capital === undefined ? "-" : country.capital[0]
              }
            />
          ))}
        </div>
      ) : (
        <p className="w-full my-6 sm:my-9 lg:my-12 text-center text-lg">
          {`No country with a name containing '${searchFilter}' was found${
            regionFilter === ""
              ? "."
              : regionFilter === "Americas" || regionFilter === "Antarctic"
              ? ` in the ${regionFilter}.`
              : ` in ${regionFilter}.`
          }`}
        </p>
      )}
    </div>
  );
}
