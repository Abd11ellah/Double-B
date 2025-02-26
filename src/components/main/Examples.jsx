'use client'
import { motion } from "motion/react"
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import img from '../../../public/recourses/Rectangle 21.png'
import { ImgsExamples } from "@/utils/ExamplesIMGs"
const Examples = () => {
  return (
    <div className=" h-screen">
    
      <div className=" w-full  flex justify-center">

        <div className="relative w-fit">
         <h1 className=" font-bold text-4xl z-[3] relative ">Examples to spark ideas for your User-Generated Content</h1>
      
         <motion.div className=" bg-[#FFDF40] z-[2] w-full h-[10px] absolute bottom-1 left-0"

            initial={{width:"0%"}}
            whileInView={{width:"100%"}}
            transition={{
              duration: 1.5, 
              ease: "easeInOut",
            }}
            viewport={{ once: true }}

         />

        </div>

      </div>

      <div className="w-full mt-10">
          <Carousel
              opts={{
                align: "start",
              }}
              className="w-full "
            >
              <CarouselContent>
                {ImgsExamples.map((Img, index) => (
                  <CarouselItem key={index} className="basis-1/6">
                    <div className="h-[400px] w-[100%] ">
                      <div className="rounded-[24px] shadow-inner shadow-black/25 overflow-hidden">
                      <Image 
                        className="object-cover w-full h-full "
                        src={Img.src}
                        alt="img"
                        width={1000}
                        height={1000}
                      />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
        </div>
    
    </div>
  )
}

export default Examples