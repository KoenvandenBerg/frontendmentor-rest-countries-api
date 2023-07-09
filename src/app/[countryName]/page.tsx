/* eslint-disable @next/next/no-img-element */
import React from "react";
import getData from "../libs/getData";
import { Country } from "../libs/types/apiResponseTypes";
import Link from "next/link";
import BackButton from "../components/BackButton";

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

  function getNativeName(country: Country): string {
    if (country.name?.nativeName) {
      const nativeNameKey = Object.keys(country.name.nativeName)[0];
      return country.name.nativeName[nativeNameKey].common;
    }
    return "-";
  }

  function getCurrencies(country: Country): string {
    if (country.currencies) {
      const currencies: string[] = [];

      Object.keys(country.currencies).forEach((key) => {
        currencies.unshift(country.currencies[key].name);
      });
      return currencies.join(", ");
    }
    return "-";
  }

  async function getBorderingCountries(country: Country): Promise<string[]> {
    if (country?.borders !== undefined && country.borders[0] !== "-") {
      const borderingCountriesCodes = country.borders;
      const fullNamesBorderingCountries: string[] = [];

      for (let borderingCountryCode of borderingCountriesCodes) {
        const borderingCountry: Country[] = await getData(
          `https://restcountries.com/v3.1/alpha/${borderingCountryCode}`
        );
        const borderingCountryName = borderingCountry[0].name?.common;
        fullNamesBorderingCountries.unshift(borderingCountryName);
      }

      return fullNamesBorderingCountries;
    }
    return ["-"];
  }

  return (
    <>
      <BackButton />
      <div className="w-full flex flex-col sm:flex-row my-6 sm:my-9 lg:my-12">
        <img
          src={country.flags.svg}
          alt={`The flag of ${country.name.common}.`}
          className="w-full sm:w-1/2 rounded-[0.3125rem] shadow-md shadow-box-shadow"
        />
        <div className="pl-12">
          <h2 className="text-[2rem] font-extrabold">
            {country.name.official}
          </h2>
          <div className="flex flex-col lg:flex-row">
            <div>
              <p>
                <span className="font-bold">Native name:</span>{" "}
                {getNativeName(country)}
              </p>
              <p>
                <span className="font-bold">Population:</span>{" "}
                {country.population.toLocaleString("en-US")}
              </p>
              <p>
                <span className="font-bold">Region:</span> {country.region}
              </p>
              <p>
                <span className="font-bold">Sub Region:</span>{" "}
                {country.subregion}
              </p>
              <p>
                <span className="font-bold">Capital:</span> {country.capital}
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold">Top Level Domain:</span>{" "}
                {country.tld}
              </p>
              <p>
                <span className="font-bold">Currencies:</span>{" "}
                {getCurrencies(country)}
              </p>
            </div>
          </div>
          <div className="mt-10 flex">
            <p className="font-bold flex-shrink-0">Border Countries:</p>{" "}
            <div className="flex flex-wrap gap-4">
              {(await getBorderingCountries(country)).map((name) => {
                return (
                  <Link key={name} href={`/${name}`}>
                    <button className="w-[10rem] h-10 px-[1.6rem] py-[0.3rem] flex justify-center items-center bg-light-elements dark:bg-dark-elements rounded-[0.3125rem] shadow-md shadow-box-shadow hover:scale-105 transition-transform">
                      <p className="truncate">{name}</p>
                    </button>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
