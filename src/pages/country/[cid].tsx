import React from 'react'
import { useRouter } from 'next/router'

const Country = () => {
  const router = useRouter();
  const { cid } = router.query;
  return (
    <div>Rendering Country: {cid}</div>
  )
}

export default Country