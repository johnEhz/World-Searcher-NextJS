import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'

import { getCountryByName } from '../../services/getCountryByName'

const Country = () => {
  const [country, setCountry] = useState<string | string[] | undefined>('')
  const router = useRouter();

  const loadCountry = async (countryName:string | string[] | undefined) => {
    await getCountryByName(countryName).then(res => console.log(res))
  }

  useEffect(() => {
    const { name } = router.query
    setCountry(name);
    country ? loadCountry(country) : null
  }, [router.query])

  return (
    <Layout>
      <article>
        Country id: {country}
      </article>
    </Layout>
  )
}

export default Country