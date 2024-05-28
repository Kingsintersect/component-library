"use client";
import React from 'react'

const Button = ({ className, onClick, type, text, style }: { className?: string, onClick?: any, type: any, text: string, style?: any }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            style={style}
            className={`${className} text-white transform transition hover:scale-110 duration-300 ease-in-out z-50`}
        >
            {text}
        </button>
    )
}

export default Button