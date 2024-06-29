import Button from '@components/buttons/Button';
import React, { FC, useEffect, useState } from 'react'

interface IHeroData {
    accentColor: string;
    mainText: string;
    subText: string;
    buttonText: string;
    shadow?: string;
    mobileShadow?: string;
}

const HeroCenter: FC<IHeroData> = ({ mainText, subText, accentColor, shadow, mobileShadow, buttonText }) => {
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
        <section className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 `} >
            <div className="flex items-center flex-col  justify-center text-center w-2/3">
                <h1 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold mb-4">{mainText}</h1>
                <p className="text-gray-300 text-sm md:text-lg lg:text-2xl">{subText}</p>

                <Button
                    type={`button`}
                    className={`mt-7 lg:mt-8 text-md md:text-xl font-bold py-2 md:py-3 px-4 focus:outline-none md:w-2/6 lg:w-1/4 2xl:w-2/5`}
                    style={windowWidth > 767 ? { backgroundColor: `${accentColor}`, boxShadow: `${shadow}` } : { backgroundColor: `${accentColor}`, boxShadow: `${mobileShadow}` }}
                >Getting started</Button>
            </div>
        </section>
    )
}

export default HeroCenter