import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'

const Country = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <article className='bg-red-200'>
        Country id: {id}
      </article>
    </Layout>
  )
}

export default Country