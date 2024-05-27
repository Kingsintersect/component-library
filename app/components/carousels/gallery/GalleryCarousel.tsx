'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface ISlideList {
    title?: string;
    url: string
}
interface ISlideProps {
    accentColor?: string;
    slideItems: ISlideList[];
}

const GalleryCarousel: React.FC<ISlideProps> = ({ accentColor, slideItems }) => {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: false,
                }}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
                style={{ width: `100%`, height: `500px` }}
            >
                {slideItems.map((item, index) => (
                    <SwiperSlide key={index} className='w-[37rem] h-[42rem] relative ' style={{ width: `32%` }}>
                        <Image src={`${item.url}`} width={500} height={500} className='rounded-3xl' alt='Slider image' />
                    </SwiperSlide>
                ))}
                <div className="slider-controller">
                    <div className="swiper-button-prev slider-arrow">
                        <ChevronLeftIcon />
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ChevronRightIcon />
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </>
    );

}

export default GalleryCarousel