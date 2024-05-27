'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './cubic_carousel.module.css';

import { EffectCube, Pagination } from 'swiper/modules';

interface ISlideList {
    title?: string;
    url: string
}
interface ISlideProps {
    accentColor?: string;
    slideItems: ISlideList[];
}

const CubicCarousel: React.FC<ISlideProps> = ({ accentColor, slideItems }) => {
    return (
        <>
            <div className="relative w-[400px] mx-auto">
                <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination]}
                    className="cubicSwiper"
                >
                    {slideItems.map((item, index) => (
                        <SwiperSlide key={index} className='shadow-lg'>
                            <Image src={`${item.url}`} width={1000} height={1000} alt='Slider image' />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default CubicCarousel