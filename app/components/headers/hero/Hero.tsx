"use client";
import React, { useEffect, useState } from 'react'
import Button from '../../buttons/Button';
import Image from 'next/image';

interface IHeroData {
    accentColor: string;
    mainText: string;
    subText: string;
    shadow: string;
    mobileShadow: string;
    img?: string;
}

const Hero: React.FC<IHeroData> = ({ accentColor, mainText, shadow, mobileShadow, subText, img }) => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("reset", handleResize);
        }
    }, [])
    return (
        <main className={`flex lg:flex-row lg:items-center flex-col items-start px-4 py-4 z-10 relative overflow-hidden md:px-16`}>
            <div className="flex flex-col gap-4 lg:w-1/2 justify-center lg:items-start lg:text-left w-full items-center text-center mb-5 md:mb-0">
                <h1 className="md:text-5xl text-3xl mx-auto lg:mx-0 font-bold leading-tight text-navy">
                    We&apos;re about <span style={{ color: `${accentColor}` }}>{mainText}!</span>
                </h1>
                <p className="leading-normal md:text-2xl text-md text-navy">{subText}</p>
                <Button
                    type={`button`}
                    text='Get Started'
                    className={`mt-3 lg:mt-8 text-md mdtext-xl font-bold py-2 md:py-4 px-4 focus:outline-none md:w-2/5 lg:w-1/2 2xl:w-2/5`}
                    style={windowWidth > 767 ? { backgroundColor: `${accentColor}`, boxShadow: `${shadow}` } : { backgroundColor: `${accentColor}`, boxShadow: `${mobileShadow}` }}
                />
            </div>
            {img && <div className="lg:w-3/5 w-full lg:mt-6 relative">
                <Image src={img} alt="Hero Image" loading='eager' className='w-3/5 mx-auto' width={500} height={300} />
            </div>}
        </main>
    )
}

export default Hero