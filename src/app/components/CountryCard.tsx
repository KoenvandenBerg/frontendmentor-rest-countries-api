/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { PropsWithChildren } from "react";

type countryCardProps = PropsWithChildren<{
  name: string;
  flag: string;
  population: string;
  region: string;
  capital: string;
}>;

export default function CountryCard({
  name,
  flag,
  population,
  region,
  capital,
}: countryCardProps) {
  return (
    <Link href={`/${name}`}>
      <div className="w-[16.5rem] h-[21rem] bg-light-elements dark:bg-dark-elements rounded-[0.3125rem]  shadow-md shadow-box-shadow hover:scale-105 transition-transform">
        <img
          src={flag}
          alt={`The flag of ${name}.`}
          className="h-1/2 w-full rounded-t-[0.3125rem]"
        />
        <div className="flex flex-col gap-1 pt-6 pl-6">
          <h2 className="text-lg font-extrabold pb-2">{name}</h2>
          <p className="text-sm">
            <span className="font-bold">Population:</span> {population}
          </p>
          <p className="text-sm">
            <span className="font-bold">Region:</span> {region}
          </p>
          <p className="text-sm">
            <span className="font-bold">Capital:</span> {capital}
          </p>
        </div>
      </div>
    </Link>
  );
}
