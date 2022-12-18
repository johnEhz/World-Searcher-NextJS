import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import Loading from "../../components/loading";

//Service
import { getCountryByName } from "../../services/getCountryByName";
import { getCountryByCode } from "../../services/getCountryByCode";
import { Country } from "../../types";

const Country = () => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [country, setCountry] = useState<Country>();
  const [currentCountryName, setCurrentCountryName] = useState<
    string | undefined
  >("");
  const router = useRouter();

  const loadCountry = async (countryName: string | string[]) => {
    setLoading(true);
    await getCountryByName(countryName)
      .then((res) => {
        setCountry(res.data[0]);
      })
      .catch((err) => setError(true));
    setLoading(false);
  };

  useEffect(() => {
    const { name } = router.query;
    name ? loadCountry(name) : null;
    setCurrentCountryName(name?.toString());
  }, [router]);

  const handleNavigateBorders = async (border: string) => {
    await getCountryByCode(border)
      .then((res) => {
        const country = res.data.name;
        router.push(`/country/${country}`);
      })
      .catch((err) => console.error("Border not founded..."));
  };

  return (
    <Layout>
      <article className="px-4 text-black dark:text-neutral-200 py-6 min-h-[600px] h-screen">
        <div className="mt-10">
          <Link
            href="/"
            className="bg-neutral-200 dark:bg-[#222E37] p-2 rounded-sm font-semibold flex max-w-[100px] justify-center hover:bg-neutral-300 dark:hover:bg-[#192229] transition-colors"
          >
            ← Back
          </Link>
        </div>
        {loading ? (
          <Loading />
        ) : error ? (
          <div className="text-center">
            <h1 className="text-center mt-20 text-xl">
              Country with name{" "}
              <span className="font-bold tracking-wider italic">
                {currentCountryName?.toUpperCase()}
              </span>{" "}
              was not founded...
            </h1>
            <small className="italic">
              Try typing the name in English or only the shortly name.
            </small>
          </div>
        ) : country ? (
          <div className="h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-16">
              <div className="w-full flex justify-center mt-6 md:mt-0">
                <Image
                  className="w-full rounded-t-md max-w-xl"
                  src={country.flags.png}
                  alt={country.name.official}
                  width={400}
                  height={300}
                />
              </div>
              <div className="flex flex-col gap-6">
                <h1 className="font-bold text-lg">{country.name.official}</h1>
                <div className="flex flex-col gap-3">
                  <h2>
                    <span className="font-semibold">Native Name:</span>{" "}
                    {country.name.common}
                  </h2>
                  <h2>
                    <span className="font-semibold">Population:</span>{" "}
                    {country.population}
                  </h2>
                  <h2>
                    <span className="font-semibold">Region:</span>{" "}
                    {country.region}
                  </h2>
                  <h2>
                    <span className="font-semibold">Sub Region:</span>{" "}
                    {country.subregion}
                  </h2>
                  <h2 className="flex gap-1">
                    <span className="font-semibold">Capital/s:</span>
                    <ul className="flex gap-3">
                      {country.capital.map((cap, index) => (
                        <li key={`${cap}-${index}`}>{cap}</li>
                      ))}
                    </ul>
                  </h2>
                </div>
                <div className="flex flex-col gap-5 justify-center items-center">
                  <h1 className="w-full text-center font-bold">Fronteras</h1>
                  <ul className="grid grid-cols-5 max-w-3xl w-full gap-3">
                    {country.borders.map((border) => (
                      <li
                        key={border}
                        className="flex justify-center items-center"
                      >
                        <button
                          onClick={() => handleNavigateBorders(border)}
                          className="bg-neutral-200 dark:bg-[#222E37] py-2 px-4 rounded-md font-semibold flex max-w-[100px] justify-center hover:bg-neutral-300 dark:hover:bg-[#192229] transition-colors"
                          value={border}
                        >
                          {border}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </article>
    </Layout>
  );
};

export default Country;
