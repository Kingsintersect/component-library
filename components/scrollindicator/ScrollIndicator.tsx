"use client";
import React, { useEffect, useRef } from 'react';
import styles from './scroll-indicator.module.css';

const ScrollIndicator = () => {
    const scrollIndicatorBar = useRef<HTMLDivElement>(null)
    const handleIndicator = () => {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        if (scrollIndicatorBar.current) {
            scrollIndicatorBar.current.style.width = scrolled + "%";
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleIndicator);
        return () => {
            window.removeEventListener('scroll', handleIndicator);
        };
    }, []);

    return (
        <div className={styles.header}>
            <div className={styles.progressContainer}>
                <div ref={scrollIndicatorBar} className={styles.progressBar} id="myBar"></div>
            </div>
        </div>
    )
}

export default ScrollIndicator