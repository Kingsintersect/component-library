'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './prallaxcarousel.module.css';

import { Parallax, Pagination, Navigation } from 'swiper/modules';

interface ISlideList {
    title: string;
    subTitle: string;
    content: string;
}
interface ISlideProps {
    accentColor?: string;
    slideItems: ISlideList[];
}

const ParallaxCarousel: React.FC<ISlideProps> = ({ accentColor, slideItems }) => {
    return (
        <>
            <Swiper
                rewind={true}
                style={{}}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="parallaxSwiper w-full h-full bg-[#000]"
            >
                <div
                    slot="container-start"
                    className="parallax-bg w-[130%] h-full absolute left-0 top-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(pictures/nature-1.jpg)', }}
                    data-swiper-parallax="-23%"
                ></div>
                {slideItems.map((item, index) => (
                    <SwiperSlide key={index} className='text-2xl text-white box-border py-10 px-32'>
                        <div className="title font-light text-5xl mb-3" data-swiper-parallax="-300">
                            {item.title}
                        </div>
                        <div className="subtitle text-xl mb-6" data-swiper-parallax="-200">
                            {item.subTitle}
                        </div>
                        <div className="text text-lg max-w-md" data-swiper-parallax="-100">
                            <p>{item.content}</p>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );

}

export default ParallaxCarousel