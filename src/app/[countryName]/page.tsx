import React from "react";
import getData from "../libs/getData";
import { Country } from "../libs/types/apiResponseTypes";

type countryProps = {
  params: {
    countryName: string;
  };
};

export default async function Country({ params }: countryProps) {
  const data: Country[] = await getData(
    `https://restcountries.com/v3.1/name/${params.countryName}`
  );

  const country = data[0];

  return <div>{country.name.official}</div>;
}
