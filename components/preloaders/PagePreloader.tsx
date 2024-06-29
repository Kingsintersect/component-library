"use client";
import React, { FC, useEffect } from 'react'
import "./page_preloader.module.css";
import { preloaderAnimation } from '@/app/animations';

const PagePreloader: FC = () => {

    useEffect(() => {
        preloaderAnimation();
    }, [])


    return (
        <div className="preloader h-[100vh] w-full bg-[#000] text-[#fff] fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center overflow-hidden">
            <div className="texts-container flex items-center justify-between h-auto w-[280px] overflow-hidden text-xl font-extrabold text-white">
                <span className="">Developer,</span>
                <span className="">Curator,</span>
                <span className="">Vibe.</span>
            </div>
        </div>
    )
}

export default PagePreloader