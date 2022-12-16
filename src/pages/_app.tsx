import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Interface } from "readline";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      console.log(`App is changing to ${url}`)
    }

    router.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])
  return <Component {...pageProps} />;
}
