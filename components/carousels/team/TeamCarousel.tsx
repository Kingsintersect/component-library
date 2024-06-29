'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './teamcarousel.module.css';

import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

interface ISlideList {
    title: string;
    url: string;
}
interface ISlideProps {
    accentColor?: string;
    slideItems: ISlideList[];
}

const TeamCarousel: React.FC<ISlideProps> = ({ accentColor, slideItems }) => {
    return (
        <>
            <Swiper
                loop={true}
                style={{}}
                speed={600}
                slidesPerView={'auto'}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper w-full h-full"
            >
                {slideItems.map((item, index) => (
                    <SwiperSlide key={index} className='relative text-center text-lg bg-white flex item-center justify-center' style={{ width: "80%" }}>
                        <div
                            slot="container-start"
                            className="w-full h-full absolute left-0 top-0 bg-cover bg-center flex items-center justify-center text-white"
                            style={{ backgroundImage: `url(${item.url})`, }}
                        >
                            <p className="text-5xl">{item.title}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default TeamCarousel