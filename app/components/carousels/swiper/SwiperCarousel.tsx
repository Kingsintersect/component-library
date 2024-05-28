'use client';
import React, { FC, HtmlHTMLAttributes, ReactNode, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, EffectFade, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { SwiperModule } from 'swiper/types';
import { VariantProps, cva } from 'class-variance-authority';

interface ISlideList {
    title: string;
    url: string;
}
interface ISwiperProps extends HtmlHTMLAttributes<HTMLDivElement>, VariantProps<typeof swiperVariants> {
    children?: ReactNode;
    swiperStyle?: {};
    pagination?: { clickable: boolean },
    navigation?: boolean;
    slidePerView?: number;
    speed?: number;
    loop?: boolean
    accentColor?: string;
    modules?: SwiperModule[];
    slideItems: ISlideList[];
}

interface myObject {
    [key: string]: string | number | boolean | object;
}

const SwiperCarousel: FC<ISwiperProps> = ({ children, className, variant, effect, swiperStyle, pagination, navigation, modules, slidePerView, speed, loop, accentColor, slideItems, ...props }) => {


    return (
        <>
            <Swiper
                spaceBetween={30}
                speed={300}
                autoplay={{ delay: 600, disableOnInteraction: false }}
                effect={'fade'}
                fadeEffect={{ crossFade: true }}
                modules={[Autoplay, EffectFade]}
                className="mySwiper"
                style={{ width: `100%`, height: `300px` }}
            >
                <SwiperSlide className='text-5xl'>Slide 1</SwiperSlide>
                <SwiperSlide className='text-5xl'>Slide 2</SwiperSlide>
                <SwiperSlide className='text-5xl'>Slide 3</SwiperSlide>
                <SwiperSlide className='text-5xl'>Slide 4</SwiperSlide>
                <SwiperSlide className='text-5xl'>Slide 5</SwiperSlide>
                <SwiperSlide className='text-5xl'>Slide 6</SwiperSlide>
                <SwiperSlide className='text-5xl'>Slide 7</SwiperSlide>
                <SwiperSlide className='text-5xl'>Slide 8</SwiperSlide>
                <SwiperSlide className='text-5xl'>Slide 9</SwiperSlide>
            </Swiper>
        </>
    );
}

export default SwiperCarousel

const swiperVariants = cva("", {
    variants: {
        variant: {
            simple: "",

            gallery: "",

            parallax: "",

            productImage: "",

            cubic: "",

            teamsection: "",
        },
        effect: {
            coverflow: "coverflow",
            fade: "fade",
            slide: "slide",
            cubic: "cube",
            flip: "flip",
            cards: "cards",
            creative: "creative",
        }
    },
    defaultVariants: {
        variant: "simple",
    }

})