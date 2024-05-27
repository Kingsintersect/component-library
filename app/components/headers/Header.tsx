"use client";
import { BeakerIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../buttons/Button';
import Image from 'next/image';

interface INavItems {
    label: string;
    url: string;
}
interface IHeader {
    accentColor: string;
    navItems: INavItems[];
    logo?: any;
}

const Header: React.FC<IHeader> = ({ accentColor, navItems, logo }) => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header className='flex lg:items-center lg:justify-between lg:flex-row lg:gap-0 w-full md:px-16 flex-col gap-4 px-4 py-4 md:py-0'>
            <div className="flex flex-row items-center justify-between lg:w-auto">
                <div className={`flex justify-center items-center border-2 h-18 w-18 rounded-lg p-1`} style={{ borderColor: `${accentColor}` }}>
                    {(logo)
                        ? <Image src={logo} alt="Logo Text" className={`w-full h-auto max-w-[60px]`} width={50} height={80} />
                        : <BeakerIcon className={`w-full h-auto max-w-[60px]`} width="50px" height="80px" />
                    }
                </div>
                <button onClick={() => setOpenMenu(!openMenu)} className='lg:hidden focus:outline-none focus:shadow-outline' >
                    {!openMenu ? (

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-7 h-7 ${!openMenu ? 'animate-fadeIn' : 'animate-fadeOut'}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-7 h-7 ${openMenu ? 'animate-fadeIn' : 'animate-fadeOut'}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    )}
                </button>
            </div>
            <nav className={`flex lg:items-center lg:justify-end lg:flex-row pb-4 flex-col lg:pb-0 gap-4 origin-top duration-300 ${openMenu ? 'h-full scale-y-1' : 'h-0 transform lg:transform-none scale-y-0'} px-6`}>
                <ul className="flex lg:flex-row lg:items-center lg:gap-0 flex-col justify-center gap-4 list-none px-6">
                    {navItems.map((item, index) => (
                        <li className="" key={index}>
                            <Link
                                href={item.url}
                                onClick={() => setOpenMenu(false)}
                                className={`lg:px-4 py-2 lg:mt-8 md:text-base bg-transparent lg:ml-4 mt-2 text-sm hover:text-gray-900 focuse:outline-none focus:shadow-outline text-[${accentColor}]`}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Button
                    className={`px-10 py-3 md:text-base text-center text-sm`}
                    type={`button`}
                    text='Get Started'
                    style={{ backgroundColor: `${accentColor}` }}
                />
            </nav>
        </header>
    )
}

export default Header