import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <div className="page-container w-full bg-white dark:bg-[#222E37]">
      <Head>
        <title>World country searcher</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="World country searcher - World country searcher application!. Find any country filtering by continent or just type the name." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className="p-4">
          Main content
        </main>
      </Layout>
    </div>
  );
}
