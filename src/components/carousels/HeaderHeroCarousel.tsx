"use client";
import Header from '../headers/Header';
import Hero from '../headers/hero/Hero';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules'
import { data, navItems } from '@/app/lib/constants';

const HeaderHeroCarousel = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                speed={3000}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                effect={'fade'}
                fadeEffect={{ crossFade: true }}
                modules={[Autoplay, EffectFade]}
                className='headerHeroSwiper h-[600px]'
            >
                {data.map(({ colorDeep, colorLite, mainText, subText, shadow, mobileShadow, img }, index) => (
                    <SwiperSlide key={index} style={{ backgroundColor: `${colorLite}` }} className={`w-full h-screen flex flex-col md:gap-10 md:pt-8`} >
                        <Header accentColor={colorDeep} navItems={navItems} />
                        <Hero
                            accentColor={colorDeep}
                            mainText={mainText}
                            subText={subText}
                            shadow={shadow}
                            mobileShadow={mobileShadow}
                            img={img}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>

    )
}

export default HeaderHeroCarousel