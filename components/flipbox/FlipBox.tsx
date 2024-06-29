// "use client";
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import styles from './flip-box.module.css';
import cn from '@lib/cn';
import { $ } from '@lib/jslib';

const FlipBox = ({ children }: { children: ReactNode }) => {
    "use client";
    const flipRef = useRef<HTMLDivElement>(null);
    const [fliped, setfliped] = useState(false);

    const toggleFlip = () => {
        if (flipRef.current) {
            flipRef.current.classList.toggle(styles.flip);
        }
    }
    // useEffect(() => {
    //     console.log($("#home"))
    // }, [])


    return (
        <div id='home' onClick={toggleFlip} className={`${styles.flipBox}`}>
            <div ref={flipRef} className={`${styles.flipBoxInner} relative w-full h-full text-center transform transition-transform 0.8s ease-in-out`}>
                {children}
            </div>
        </div>
    )
}

export default FlipBox


export const FrontChild = ({ children, className }: { children: ReactNode, className: string }) => {
    return (
        <div className={cn(styles.flipBoxFront, className)}>
            {children}
        </div>
    )
}

export const BackChild = ({ children, className }: { children: ReactNode, className: string }) => {
    return (
        <div className={cn(styles.flipBoxBack, className)}>
            {children}

            <div className="rounded-full w-[50px] h-[50px] bg-black text-white font-bold text-xl absolute bottom-2 right-2 shadow-lg flex items-center justify-center cursor-pointer m-0 p-0">x</div>
        </div>
    )
}