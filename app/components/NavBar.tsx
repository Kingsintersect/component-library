'use client';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/Navbar.module.css'
import { BeakerIcon } from '@heroicons/react/24/outline';

type extended = {
    menuText: string;
    menuUrl: string;
    menuIcon?: string;
}
export type MenuItem = {
    menuText: string;
    menuUrl: string;
    menuIcon?: string | null;
    extended?: extended[] | null
};

type INavbarProps = {
    brandName: string;
    imageSrcPath: string;
    menuItems?: MenuItem[] | null
}







const createMenuItem = ({ menuText, menuUrl = "#", menuIcon = null, extended = null, }: Partial<MenuItem> & { menuText: string }): MenuItem => {
    return {
        menuText: menuText,
        menuUrl: menuUrl,
        menuIcon: menuIcon,
        extended: extended,
    };
};


const NavBar = ({ brandName, imageSrcPath, menuItems = [] }: INavbarProps) => {
    const [isMenuOpen, setisMenuOpen] = useState<boolean>(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [isSticky, setIsSticky] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const defaultMenuItems = (menuItems || []).map(item => createMenuItem(item));

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            }
        };

        window.addEventListener("scroll", handleScroll)
    }, [])

    const navList = (
        <>
            {defaultMenuItems && defaultMenuItems.map((item, index) => {
                if (item.extended) {
                    return (<div key={index}>
                        <div className={styles.navlist_container}>
                            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className={`${selectedIndex == index ? styles.active : ''} ${styles.navlist_dropDown_btn}`}>
                                {item.menuText}
                                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <div id="dropdownNavbar" className={`z-10 ${isDropdownOpen ? ' animate-fadeIn ' : ' animate-fadeOut hidden '} ${styles.navlist_dropdown_container}`}>
                                <ul className={styles.navlistSubMenu_ul} aria-labelledby="dropdownLargeButton">
                                    {item.extended.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                            <Link key={subIndex} href={subItem.menuUrl} className={`block hover:text-gray-400 py-2 px-4`} > {subItem.menuText}</Link>
                                        </li>
                                    ))}
                                </ul>
                                {/* <div className="py-1">
                                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
                                </div> */}
                            </div>
                        </div >
                    </div>)
                } else {
                    return <Link key={index} onClick={() => setSelectedIndex(index)} href={item.menuUrl} className={`${selectedIndex == index ? styles.active : ''} ${"block hover:text-gray-400 py-2 px-4"}`} > {item.menuText}</Link>
                }
            })}
        </>
    )
    return (
        <>
            <header className='w-full fixed top-0 left-0 right-0 border-2'>
                <nav className={`py-4 md:px-8 px-4 bg-white ${isSticky ? "sticky top-0 right-0 left-0 bg-white" : ""}`}>
                    <div className="flex items-center justify-between">
                        <div className="font-bold text-2xl cursor-pointer text-black">
                            <Link href={"/"} onClick={() => setSelectedIndex(1000000)} className={`${selectedIndex == 1000000 ? styles.active : ''}`}>
                                <div className={styles.logo_container}>
                                    <BeakerIcon className="size-8 text-blue-500" />
                                    {/* <img src={imageSrcPath} alt="c" className='w-36 h-fit' /> */}
                                    <span>{brandName}</span>
                                </div>
                            </Link>
                        </div>

                        {/* for large devices */}
                        <div className="lg:flex items-center gap-3 hidden text-stone-700">
                            {navList}
                        </div>

                        {/* mobile menu button */}
                        <button onClick={() => setisMenuOpen(!isMenuOpen)} className={styles.menu_btn} id='menu_btn'>
                            {!isMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${!isMenuOpen ? 'animate-fadeIn' : 'animate-fadeOut'}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${isMenuOpen ? 'animate-fadeIn' : 'animate-fadeOut'}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* mobile menu nav items */}
                    {isMenuOpen && (
                        <div className={`${isMenuOpen ? "animate-fadeIn" : "animate-fadeOut"} mt-4 bg-indigo-500 text-white rounded py-4  drop-shadow-md transition-all duration-500`}>
                            {navList}
                        </div>
                    )}
                </nav>
            </header>
        </>
    )
}

export default NavBar