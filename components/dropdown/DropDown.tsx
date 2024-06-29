'use client';
import React, { useEffect, useRef } from 'react'
import styles from './drop-down.module.css'
import cn from '@lib/cn';

type DropDownProps = {
    triggerClassName?: string;
    dropListClassName?: string;
    dropContainerClassName?: string;
}

const DropDown = ({ triggerClassName, dropListClassName, dropContainerClassName }: DropDownProps) => {
    const dropDownRef = useRef<HTMLDivElement>(null)
    const trigger = useRef<HTMLButtonElement>(null)

    const toggleDropDown = () => {
        dropDownRef.current?.classList.toggle(styles.show)
    }

    useEffect(() => {
        const clickListener = (event: MouseEvent | TouchEvent) => {
            if (event.target !== trigger.current) {
                var dropdowns = document.getElementsByClassName(dropDownRef.current?.className!);
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains(styles.show)) {
                        openDropdown.classList.remove(styles.show);
                    }
                }
            }
        }

        window.addEventListener("click", clickListener);

        return () => {
            window.removeEventListener('click', clickListener);
        };
    }, [])

    return (
        <div className={cn(styles.dropdown)}>
            <button ref={trigger} onClick={toggleDropDown} className={cn(styles.dropbtn, triggerClassName)}>Dropdown</button>
            <div ref={dropDownRef} id="myDropdown" className={cn(styles.dropdowncontent, dropContainerClassName)}>
                <a className={cn("", dropListClassName)} href="#home">Home</a>
                <a className={cn("", dropListClassName)} href="#about">About</a>
                <a className={cn("", dropListClassName)} href="#contact">Contact</a>
            </div>
        </div>
    )
}

export default DropDown
