'use client'
import Image from 'next/image'
import FisrtScreen from '@/components/fisrtScreen/FisrtScreen'
import { useState, useEffect } from 'react'

export default function Home() {
  const [backgroundState, setBackgroundState] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setBackgroundState(true)
    }, 800)
  }, [])

  return (
    <div className=' '>
      <div className='flex flex-row'>
        <div className='w-[100px] h-screen ' />
        <div>
          <FisrtScreen backgroundState={backgroundState} />
        </div>
      </div>
      <div
        className={`fixed bg-gif-background  w-[100%] top-0 left-0 right-0 bottom-0 z-10    ${
          backgroundState ? '' : 'clip-path-custom bg-slide-in '
        }`}
      >
        <div
          className={`${
            backgroundState
              ? 'opacity-5'
              : ' w-screen h-screen bg-black opacity-90'
          }`}
        ></div>
      </div>
    </div>
  )
}
