import React from 'react'
import Image from 'next/image'
import Frame29 from '../../../public/recourses/Frame 29.png' 

const Forth = () => {
  return (
    <div
      className=' flex w-full mt-20'
    > 
      {/* photo */}
      <div
      className='ml-[112px]'
      >
        <Image
          src={Frame29}
          alt="s"
          className='w-[448px] h-[308px]  '
        />
      </div>


      {/* content */}
      <div
        className='mr-[92px]  '
      >
        <div 
          className='mb-[60px] relative'
        >
          <p  
            className=' font-bold flex justify-center text-3xl  relative z-10 text-[#3A3A3A]'
            >
            What is UGC?
          </p>
              {/* Rectangle */}
          <div
            className='absolute w-64 h-4 bg-[#FFDF40] top-5 right-[262px] z-0 '
          />
          
        </div>
        <p
          className='ml-[48px] font-bold w-[739px] h-[136px] text-2xl text-[#3A3A3A]'
        >
        User-Generated Content (UGC) videos are created and
        produced by the audience or customers, rather than by 
        companies or professionals. These videos are often 
        spontaneous, making them more authentic and relatable.
        </p>
      </div>
    </div>
  )
}

export default Forth