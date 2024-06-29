"use client";
import React, { FC, HTMLAttributes, useEffect, useRef, useState } from 'react';
import styles from './NavigationBar.module.css';
import { VariantProps, cva } from 'class-variance-authority';
import cn from '@lib/cn';
import Link from 'next/link';
import { BeakerIcon } from '@heroicons/react/24/outline';
type menuProp = {
    menuText: string;
    menuUrl: string;
    menuIcon?: string;
}
interface INavBarProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof navVariants> {
    withStatus?: boolean;
    withNotification?: boolean;
    navItems: menuProp[];
    statusBarItems?: any;
    notificationBarItems?: any;
}
const Navbar: FC<INavBarProps> = ({ navItems, withStatus, withNotification, statusBarItems, notificationBarItems, variant, className, ...props }) => {
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
        <div className={`${styles.header}`}>
            {withStatus && <StatusBar data={statusBarItems} />}
            <div ref={placeholderRef} className={isSticky ? styles.placeholder : ''} />
            <Navigation items={navItems} state={isSticky} refObj={navbarLayerRef} />
            {withNotification && <NotificationBar data={notificationBarItems} />}
        </div>
    );
};

export default Navbar;

interface NavProp {
    items: menuProp[]
    state: boolean;
    refObj: any
}
const Navigation: FC<NavProp> = ({ items, state, refObj }) => {

    return (
        <div className={`${styles.navbar} ${state ? styles.sticky : ''} border-b`} ref={refObj}>
            <div className="flex items-center justify-between">
                <div className="">
                    <div className="font-bold text-2xl cursor-pointer text-black">
                        <Link href={"/"}>
                            <div className={"flex items-center gap-3 text-white"}>
                                <BeakerIcon className="size-8 text-blue-500" />
                                {/* <img src={imageSrcPath} alt="c" className='w-36 h-fit' /> */}
                                <span>{"Logo"}</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="lg:flex items-center gap-3 hidden text-white">
                    {items.map((item, index) => {
                        return <Link key={index} href={item.menuUrl} className={`block hover:text-gray-400 py-2 px-4`} > {item.menuText}</Link>
                    })}
                </div>
            </div>
        </div>
    )
}
const StatusBar = ({ data }: { data?: any }) => {
    return (
        <div className={styles.taskbar}>
            <div className="w-full">
                <ul className="lg:flex items-center justify-center gap-4 hidden text-white">
                    <li className="cursor-pointer">one</li>
                    <li className="cursor-pointer">two</li>
                    <li className="cursor-pointer">three</li>
                    <li className="cursor-pointer">four</li>
                    <li className="cursor-pointer">five</li>
                </ul>
            </div>
        </div>
    )
}
const NotificationBar = ({ data }: { data?: any }) => {
    return (
        <div className={`${styles.notification} text-center`}>Now send and receive money with Apple Cash right in Wallet. Learn more</div>
    )
}

export const handleScroll = (callbacks: (() => void)[]) => {
    callbacks.forEach(callback => callback());
};


const navVariants = cva(``, {
    variants: {
        variant: {

            primary: " ",

            secondary: "",

            success: "",

            danger: "",

            info: "",

            warning: "",
        },
        font: {
            bold: "font-bold",
            medium: "font-medium",
        },
    },
    defaultVariants: {
        variant: "primary",
        font: "medium",
    }
})