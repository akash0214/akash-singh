import React from 'react';
import photo from '../assets/photo.webp';

function Intro() {
  return (
    <div className=''>
      <div className='max-w-[100vw] h-[100vh] flex'>
        <div className='w-1/2 h-full flex items-center justify-center'>
          <div>
            <p className='text-2xl text-center'>Hello, This is <span className='animate-pulse'>AKASH SINGH</span></p>
            <p className='uppercase text-center animate-pulse'>full stack developer</p>
          </div>

        </div>
        <div className='w-1/2 h-full bg-black flex items-center'>
          <img src={photo} alt="AKASH SINGH" className='mx-auto rounded-full hover:scale-105 transition-all duration-500' />
        </div>
      </div>
    </div>
  )
}

export default Intro