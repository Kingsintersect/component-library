"use client";
// components/Navbar.tsx
import React, { useEffect, useRef, useState } from 'react';
import styles from './NavigationBar.module.css';

const Navbar: React.FC = () => {
    const [isSticky, setIsSticky] = useState(false);
    const navbarLayerRef = useRef<HTMLDivElement>(null);
    const placeholderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!navbarLayerRef.current || !placeholderRef.current) return;

            const secondLayerTop = navbarLayerRef.current.getBoundingClientRect().top;
            const placeholderTop = placeholderRef.current.getBoundingClientRect().top;

            if (secondLayerTop <= 0 && !isSticky) {
                setIsSticky(true);
            } else if (placeholderTop >= 0 && isSticky) {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isSticky]);

    return (
        <div className={styles.header}>
            <div className={styles.taskbar}>First Layer</div>
            <div ref={placeholderRef} className={isSticky ? styles.placeholder : ''} />
            <div className={`${styles.navbar} ${isSticky ? styles.sticky : ''}`}
                ref={navbarLayerRef}>
                Second Layer
            </div>
            <div className={styles.notification}>Third Layer</div>
        </div>
    );
};

export default Navbar;

export const handleScroll = (callbacks: (() => void)[]) => {
    callbacks.forEach(callback => callback());
};