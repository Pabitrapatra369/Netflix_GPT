import React from 'react'

const VideoTitle = ({title,overview}) => {


  return (
    <div className='w-full aspect-video pt-[20%] px-24  absolute bg-gradient-to-r from-black flex flex-col gap-6  z-9'>
        <h1 className=' font-bold text-4xl text-white'>{title}</h1>
        <p className='  font-semibold text-white w-1/2'>{overview}</p>
        <div className='flex gap-2'>
            <button className='  bg-white p-4 px-10  text-2xl cursor-pointer  font-semibold rounded-lg opacity-75 hover:opacity-90'>▶️Play</button>
            <button  className=' bg-gray-600 p-4 px-6  text-2xl cursor-pointer text-white rounded-lg  font-semibold opacity-70 '>ℹ️More Info </button>
        </div>
    </div>
  )
}

export default VideoTitle