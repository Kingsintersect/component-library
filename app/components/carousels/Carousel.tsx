'use client';
import { ChevronLeftIcon, ChevronRightIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

interface ISlideType {
    type: string;
    url: string;
    autoplay?: boolean;
    loop?: boolean;
}

const Carousel = ({ slides, autoSlide = false, autoSlideInterval = 3000 }: { slides: ISlideType[], autoSlide: boolean, autoSlideInterval: number }) => {
    const [curr, setCurr] = useState(0);
    const prev = () => setCurr((curr) => curr === 0 ? slides.length - 1 : curr - 1);
    const next = () => setCurr((curr) => curr === slides.length - 1 ? 0 : curr + 1);
    const goToSlide = (slideIndex: number) => {
        setCurr(slideIndex)
    }

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    });

    return (
        <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides.map((slide, index) => {
                    if (slide.type === "image") {
                        return <Image key={index} src={slide.url} width={1000} height={1000} alt='Slider image'></Image>
                    } else if (slide.type === "video") return <video key={slide.url} src={slide.url} autoPlay={slide.autoplay} width={1000} style={{ height: "250px" }}></video>
                })}
            </div>
            <div className="controls absolute inset-0 flex items-center justify-between p-4">
                <button className='p-1 rounded-full shadow bg-white/70 text-gray-800 hover:bg-white' onClick={prev}>
                    <ChevronLeftIcon width={40} />
                </button>
                <button className='p-1 rounded-full shadow bg-white/70 text-gray-800 hover:bg-white' onClick={next}>
                    <ChevronRightIcon width={40} />
                </button>
            </div>

            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-4">
                    {slides.map((_, i) => (
                        <div onClick={() => goToSlide(i)} key={i} className={`cursor-pointer transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-2" : "bg-opacity-50"}`}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel