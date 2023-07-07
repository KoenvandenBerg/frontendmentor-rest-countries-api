import React, { Suspense } from "react";
import * as apiResponseTypes from "../libs/types/apiResponseTypes";
import CountryCard from "./CountryCard";

export default function CountriesOverview({
  data,
}: {
  data: apiResponseTypes.Country[];
}) {
  return (
    <div className="mt-6 sm:mt-9 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {data.map((country) => (
        <CountryCard
          key={country.name.official}
          name={country.name.common}
          flag={country.flags.png}
          population={country.population.toLocaleString("en-US")}
          region={country.region}
          capital={country?.capital === undefined ? "-" : country.capital[0]}
        />
      ))}
    </div>
  );
}
