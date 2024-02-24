// carousel.tsx
"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const CarouselApp = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    
const Data = [
    {
      image: "/images/1.jpg"
    },
    {
      image: "/images/2.jpg"
    },
    {
      image: "/images/3.jpg"
    },
    {
      image: "/images/4.jpg"
    },
  
    {
      image: "/images/5.jpg"
    },
    {
      image: "/images/6.jpg"
    },
  ]
    return (
        <div className='w-full max-w-7xl mx-auto h-full'>
            {/* Carousel container */}
            <Carousel responsive={responsive} ssr={true}  autoPlay={true} itemClass="px-4"   >
                {Data.map(data=>
               
                   <div key={data.image}  className="flex items-center max-h-[70vh] w-full justify-center">
                    <Image
                      unoptimized
                      alt={""}
                      height={1920}
                      width={1280}
                      className="align-middle drop-shadow-lg object-contain"
                      src={data.image || ""}
                    />
                  </div>
              
                )}
            </Carousel>;


        </div>
    )
}

export default CarouselApp
