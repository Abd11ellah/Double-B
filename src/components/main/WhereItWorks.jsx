import React from 'react'
import Image from 'next/image'

import p1 from "../../../public/recourses/Instagram.png"
import p2 from "../../../public/recourses/Snapchat.png"
import p3 from "../../../public/recourses/TikTok.png"
import p4 from "../../../public/recourses/Youtube.png"
import sc1 from "../../../public/recourses/Rectangle 17.png"
import sc2 from "../../../public/recourses/Rectangle 18.png"
import sc3 from "../../../public/recourses/Rectangle 19.png"
import sc4 from "../../../public/recourses/Rectangle 20.png"
import sc5 from "../../../public/recourses/Rectangle 100.png"

const WhereItWorks = () => {
  return (
    <div
    className='relative pt-16'
    >
      {/* Social media */}
      
      <Image 
          src={sc1}
          className='w-14 h-14 top-16 left-[950px] absolute'
      />      
      <Image 
          src={sc2}
          className='w-12 h-12 top-16 left-[550px] absolute '
      />      
      <Image 
          src={sc3}
          className='w-14 h-14 top-32 left-[350px] absolute'
      />      
      <Image 
          src={sc4}
          className='w-14 h-14 top-[210px] left-[1200px] absolute'
      />      
      <Image 
          src={sc5}
          className='w-14 h-14 top-[220px] left-[540px] absolute'
      />

      {/* Text content */}  
      <div
        className=' '
      >
        <div 
          className=' relative'
        >
          <p  
            className=' font-bold flex justify-center text-3xl  relative z-10 text-[#3A3A3A]'
            >
            Where it works?
          </p>
            
          <div
            className='absolute w-64 h-4 bg-[#FFDF40] top-5 right-[642px] z-0 '
          />
        </div>
        <p
          className='mt-8 flex justify-center font-bold text-2xl text-[#3A3A3A]'
        >
        Instagram - Youtube - Snapchat - tiktok - Facebook
        </p>
      </div>

      <div
      className='flex ml-24 w-[1300px] mt-[45px] h-[700px] '
      >
        <Image 
        src={p1}
        className='w-[300px] h-[625px] mr-4'
        />
        <Image 
        src={p2}
        className='w-[300px] h-[625px] mr-4 mt-20'
        />
        <Image 
        src={p3}
        className='w-[300px] h-[625px] mr-4'
        />
        <Image 
        src={p4}
        className='w-[300px] h-[625px] mt-20'
        />
      </div>

      
    </div>
  )
}

export default WhereItWorks