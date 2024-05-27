'use client';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

interface ITeamType {
    header: string;
    content: string;
    url: string;
}

interface ITeamProps {
    slides: ITeamType[];
    autoSlide?: boolean;
    autoSlideInterval?: number;
}

const TeamSectionSlider: React.FC<ITeamProps> = ({ slides, autoSlide = false, autoSlideInterval = 3000 }) => {
    const [curr, setCurr] = useState(0);
    const prev = () => setCurr((curr) => curr === 0 ? slides.length - 1 : curr - 1);
    const next = () => setCurr((curr) => curr === slides.length - 1 ? 0 : curr + 1);

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    });

    return (
        <div className='overflow-hidden relative bg-blue-950 text-white h-[400px]' >
            <div className="flex items-center gap-32 self-center h-full transition-transform ease-out duration-500 m-5" style={{ transform: `translateX(-${curr * 89}%)` }}>
                {slides.map((slide, index) => (
                    <div key={`team${index}`} className="w-3/4 h-full image-container flex flex-row gap-2 justify-between items-center">
                        <div className="image w-[30vw]">
                            <Image src={slide.url} width={800} height={800} alt="User"></Image>
                        </div>
                        <div className="details space-y-5 ml-10 w-[25vw]">
                            <h1 className="text-2xl font-extralight">{slide.header}</h1>
                            <p className='text-sm'>{slide.content}</p>
                            <p className="text-sm uppercase cursor-pointer">Read More</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="controls flex flex-row p-6 justify-between items-center w-[120px] h-[100px] absolute bottom-11 right-32">
                <ArrowLeftIcon onClick={prev} width={20} className=' cursor-pointer transition-all ease-in-out hover:scale-150 hover:text-yellow-400' />
                <ArrowRightIcon onClick={next} width={20} className=' cursor-pointer transition-all ease-in-out hover:scale-150 hover:text-yellow-400' />
            </div>
        </div >
    )
}

export default TeamSectionSlider