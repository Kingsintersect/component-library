'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './product_image_carousel.module.css';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';

interface ISlideList {
    title: string;
    description: string;
    price: string;
    imageUrl: string[]
}
interface ISlideProps {
    accentColor?: string;
    slideItems: ISlideList;
}

const ProductImageCarousel: React.FC<ISlideProps> = ({ accentColor, slideItems }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { title, description, price, imageUrl } = slideItems;

    useEffect(() => {
        console.log(thumbsSwiper)
    }, [thumbsSwiper])

    return (
        <>
            <Swiper
                rewind={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mainSwipper"
                style={{ width: `100%`, height: `80%` }}
            >
                {imageUrl.map((item, index) => (
                    <SwiperSlide key={index} className='text-center text-lg bg-white flex justify-center items-center group'>
                        <Image src={item} alt='Product Image' width={1000} height={1000} className='block object-cover' style={{ width: `100%`, height: `100%` }} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={() => setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="subSwiper box-border py-3 px-0"
                style={{ width: `100%`, height: `20%`, margin: ` 0 auto`, padding: `7px 0` }}
            >
                {imageUrl.map((item, index) => (
                    <SwiperSlide key={index} className='bg-cover bg-center w-[25%] h-full opacity-40 group-active:opacity-100'>
                        <Image src={item} alt='Product Image' className='block object-cover' width={1000} height={1000} style={{ width: `100%`, height: `100%` }} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default ProductImageCarousel