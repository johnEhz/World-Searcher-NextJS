import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Loading = () => {
  return (
    <div className='bg-black bg-opacity-30 fixed inset-0 h-screen flex flex-col gap-4 justify-center items-center text-neutral-300'>
        <AiOutlineLoading3Quarters size={100} className="animate-spin"/>
        <h2 className='font-semibold'>Requesting data...</h2>
    </div>
  )
}

export default Loading