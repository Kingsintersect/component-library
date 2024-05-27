'use client';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, } from '@heroicons/react/24/outline'
import { StopIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'

const FullWidthCarousel = () => {
    const slides = [
        {
            url: '/slide1.jpg',
        },
        {
            url: '/slide2.jpg',
        },
        {
            url: '/slide3.jpg',
        },
        {
            url: '/slide4.jpg',
        },
        {
            url: '/slide5.jpg',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className=' max-w-[1400px] h-full w-full m-auto py-16 px-4 relative group '>
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-full h-full rounded-xl bg-center bg-cover transition-all ease-in-out duration-500"></div>

            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <ChevronDoubleLeftIcon onClick={prevSlide} width={30} />
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <ChevronDoubleRightIcon onClick={nextSlide} width={30} />
            </div>
            <div className="flex gap-2 top-6 mt-6 items-center justify-center py-2">
                {slides.map((slide, index) => (
                    <div key={index} onClick={() => goToSlide(index)} className={`text-2xl cursor-pointer`}>
                        <StopIcon width={`${currentIndex === index ? "20" : "10"}`} className='transition-all ease-in-out duration-500' color='gray' />
                    </div>
                ))}
            </div>
        </div >
    )
}

export default FullWidthCarousel