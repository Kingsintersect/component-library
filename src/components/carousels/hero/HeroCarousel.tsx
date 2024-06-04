'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import HeroCenter from "../../headers/hero/HeroCenter";
import { heroCarouselData } from "@/app/lib/constants";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const HeroCarousel = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                speed={2000}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                effect={'fade'}
                fadeEffect={{ crossFade: true }}
                navigation={true}
                modules={[Autoplay, EffectFade, Navigation]}
                className='headerHeroSwiper h-[600px]'
            >
                {heroCarouselData.map(({ colorDeep, colorLite, mainText, subText, buttonText, shadow, mobileShadow, img }, index) => (
                    <SwiperSlide key={index} style={{ backgroundColor: `${colorLite}`, backgroundImage: `url("${img}")` }} className={`relative w-full h-screen flex flex-col object-cover bg-cover`} >
                        <HeroCenter
                            mainText={mainText}
                            subText={subText}
                            buttonText={buttonText}
                            accentColor={colorDeep}
                            shadow={shadow}
                            mobileShadow={mobileShadow}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default HeroCarousel