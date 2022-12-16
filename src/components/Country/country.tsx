import React from "react";
import Image from "next/image";
import { useRouter } from 'next/router'
import { Country } from "../../types";


interface CountryProps {
  country: Country;
}

const Country = ({ country }: CountryProps) => {
  const router = useRouter();

  return (
    <article
      onClick={() => router.push({
        pathname: `/country/[name]`,
        query: {name: country.name.common}
      })}
      className="rounded-md shadow-lg shadow-neutral-300 dark:shadow-neutral-800 bg-white dark:bg-[#1d272f] flex flex-col cursor-pointer hover:scale-[1.02] transition-transform text-black dark:text-neutral-200">
      <header className="h-60 border-b dark:border-neutral-600">
        <Image
          className="w-full h-full rounded-t-md"
          src={country.flags.png}
          alt={country.name.official}
          width={400}
          height={300}
        />
      </header>
      <main className="px-6 py-6">
        <h1 className="font-bold text-xl mb-6">{country.name.common}</h1>
        <div className="flex flex-col gap-1">
          <h2>
            <span className="font-semibold">Population:</span>{" "}
            {country.population}
          </h2>
          <h2>
            <span className="font-semibold">Region:</span> {country.region}
          </h2>
          <h2 className="flex flex-row gap-1">
            <span className="font-semibold">Capital:</span>
            <ul className="flex flex-row gap-2">
              {country.capital.map((cap) => (
                <li key={`${country.name.common}-{${cap}}`}>
                  {cap}
                </li>
              ))}
            </ul>
          </h2>
        </div>
      </main>
      <footer></footer>
    </article>
  );
};

export default Country;
