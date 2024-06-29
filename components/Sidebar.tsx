'use client'
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpOnSquareIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import React, { ReactNode, createContext, useContext, useState } from 'react'

const SidebarContext = createContext({ expanded: false });
const Sidebar = ({ children }: { children: ReactNode }) => {
    const [expanded, setExpanded] = useState(true);
    const [menuExpanded, setMenuExpanded] = useState(true);

    return (
        <aside className={`h-screen`}>
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <img src="/" alt="Logo" className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`} />
                    <button onClick={() => setExpanded(curr => !curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all 2s ease-in-out">
                        {expanded ? <ArrowLeftIcon width={20} /> : <ArrowRightIcon width={20} />}
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SidebarContext.Provider>

                <div className="border-t flex p-3">
                    <img src="/" alt="avatar" className="w-10 h-10 rounded-md" />
                    <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? " w-40 ml-3" : "w-0"}`}>
                        <div className="leading-4">
                            <h4 className="font-semibold">John Doe</h4>
                            <span className="text-xs text-gray-600">johndoee@gmail.com</span>
                        </div>
                        <ArrowUpOnSquareIcon width={24} />
                    </div>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar


interface ISidebarItems {
    icon: ReactNode;
    text: string;
    url: string;
    submenu?: ISubmenu[];
    active?: boolean;
    alert?: boolean;
    children?: React.ReactNode
}

interface ISubmenu extends ISidebarItems {
}

export const SidebarItem = ({ icon, text, url, submenu, active, alert, children }: ISidebarItems) => {
    const { expanded } = useContext(SidebarContext);
    const [menuExpanded, setMenuExpanded] = useState(false);

    return (

        <li className='relative' onClick={() => setMenuExpanded(curr => !curr)}>
            <Link className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group 
                ${active
                    ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                    : "hover:bg-indigo-50 text-gray-500"
                }`} href={url}>
                {icon}
                <span className={`overflow-hidden transition-all ${expanded ? "w-40 ml-3" : "w-0"}`}>{text}</span>
                {alert && (
                    <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`} />
                )}

                {!expanded && (
                    <div className={`absolute z-50 left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>{text}</div>
                )}
            </Link>
            {children &&
                <ul className='relative top-1 left-3 text-sm'>{children}</ul>
            }
        </li>

    )
}