import React from "react";
import { Country } from "../../types";
import CountryC from "../Country/country";

interface CountriesProps {
  countries: Country[] | undefined;
}

const Countries = ({ countries }: CountriesProps) => {
  return (
    <ul className="w-full h-full grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 2xl:grid-cols-4 2xl:gap-16 items-center">
      {countries?.map((country) => (
        <li key={country.name.official}>
          <CountryC country={country} />
        </li>
      ))}
    </ul>
  );
};

export default Countries;
