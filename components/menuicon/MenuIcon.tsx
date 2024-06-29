'use client';
import React, { useRef } from 'react';
import styles from './menu-icon.module.css';

const MenuIcon = ({ bgColor }: { bgColor?: string }) => {
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenuBar = () => [
        menuRef.current?.classList.toggle(styles.change)
    ]
    return (
        <div ref={menuRef} className={styles.container} onClick={toggleMenuBar}>
            <div className={`${styles.bar1} `} style={{ backgroundColor: bgColor }}></div>
            <div className={`${styles.bar2} `} style={{ backgroundColor: bgColor }}></div>
            <div className={`${styles.bar3} `} style={{ backgroundColor: bgColor }}></div>
        </div>
    )
}

export default MenuIcon

