import Head from "next/head";
import Layout from "../components/layout";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Country } from "../types";

//Services
import { getAllCountries } from "../services/getAllCountryes";

//List of countryes
import Countries from "../components/Country/countries";

export default function Home() {
  const [countries, setCountries] = useState<Country[]>();
  const [region, setRegion] = useState<string>();
  const [searchCountry, setSearchCountry] = useState<string>('')

  const loadCountries = async () => {
    await getAllCountries().then((res) => {
      setCountries(res.data);
    });
  };

  useEffect(() => {
    loadCountries();
    setRegion("all");
    console.log("Running code")
  }, []);

  const handleChangeSearchCuntry = (e:ChangeEvent<HTMLInputElement>) => {
    setSearchCountry(e.target.value)
    console.log(searchCountry)
  }

  return (
    <div className="page-container w-full bg-gray-100 dark:bg-[#283641]">
      <Head>
        <title>World country searcher</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="World country searcher - World country searcher application!. Find any country filtering by continent or just type the name."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section className="w-full h-full lg:px-16 lg:py-10 p-4 flex flex-col md:gap-10 gap-4">
          <div className="flex md:flex-row flex-col md:justify-between gap-4">
            <div className="flex flex-row items-center md:max-w-md w-full bg-white gap-3 pl-6 pr-1 rounded-md shadow-md h-14 text-neutral-600">
              <button onClick={() => console.log("Search for country...")}>
                <AiOutlineSearch size={30} className="text-neutral-500" />
              </button>
              <input
                type="text"
                placeholder="Search for a country..."
                className="py-4 px-3 w-full outline-none"
                onChange={handleChangeSearchCuntry}
                value={searchCountry}
              />
            </div>
            <select
              name="region"
              id="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="rounded-md px-6 max-w-[250px] w-full h-14 cursor-pointer outline-none shadow-md text-neutral-500"
            >
              <option value="all">All</option>
              <option value="africa">Africa</option>
              <option value="america">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </div>
          <Countries countries={countries} />
        </section>
      </Layout>
    </div>
  );
}
