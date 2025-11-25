import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-2 py-32'>
        <h3 className='text-center text-3xl font-bold'>Join Newsletter</h3>
        <p className='text-center'>Subscribe to get exclusive deals, new arrivals, and insider updates delivered straight to your inbox every week.</p>
        <div className='rounded-3xl bg-gray-300 py-2 flex justify-between w-[500px] px-6' >
            <input className='ouline-none border-none' type='text' placeholder='Enter Your Email Address' />
            <button className='bg-green-400 px-4 py-2 text-sm rounded-3xl'>Get Updates</button>
        </div>
    </div>
  )
}

export default NewsLetter