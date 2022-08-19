import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

function Home() {

  return (
    <div className='relative min-h-screen'>
      <div className="absolute -right-14 top-36">
        <a href="" className='flex flex-row items-end rotate-90 '>
          <span className="text-3xl font-bold text-slate-300">LEARN MORE</span>
        </a>
      </div>
      
      <div className="absolute top-0 rounded-full opacity-75 min-height-75 w-28 h-14 right-14 bg-first">
      </div>
      <h1 className="absolute flex flex-col font-semibold left-4 top-14 text-slate-700">
        <span className="text-2xl font-pops">REALTIME</span>
        <span className="text-5xl font-pops">STUDENT</span>
        <span className="text-6xl font-pops">LEARNING</span>
        <div className="flex flex-row justify-between">
        <i class="uil uil-angle-double-down text-5xl font-bold font-pops"></i>
        <span className="flex justify-end text-4xl font-pops">OUTCOME</span> 
        </div>      
      </h1>
      <Player className='relative top-64 right-1'
        autoplay
        loop
        src="https://assets10.lottiefiles.com/packages/lf20_yjrdpceb.json"
        style={{ height: '360px', width: '360px' }}
>
</Player>

    </div>
  )
}

export default Home