import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import cn from '../lib/cn';
import { UserCircleIcon, UserIcon } from '@heroicons/react/24/outline';
import { VariantProps, cva } from 'class-variance-authority';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    children: ReactNode;
    isLoading?: boolean;
    icon?: React.ReactElement;
}

const Button: FC<ButtonProps> = ({ children, className, isLoading, icon, variant, size, iconPosition, ...props }) => {
    return (
        <button className={cn(buttonVariants({ variant, size, iconPosition, className }))} {...props}>
            {children}
            {isLoading &&
                <IconContainer>
                    <UserIcon />
                </IconContainer>
            }
            {!isLoading && icon}
        </button>
    )
}

const IconContainer = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
    return <div className="w-6 ml-4">{children}</div>
}

export default Button

const buttonVariants = cva("flex items-center gap-3 rounded-md transition-all duration-500 ease-in-out last:mr-0 mr-4", {
    variants: {
        variant: {
            primary: "border-2 border-black text-black bg-white hover:bg-neutral-200",
            secondary: "border-2 border-white text-white bg-black hover:bg-neutral-800",
            danger: "border-none text-white bg-red-500 hover:bg-red-600",
        },
        size: {
            sm: "text-sm px-1 py-0",
            md: "text-base px-2 py-1",
            lg: "text-xl px-4 py-2",
            full: "text-base px-4 flex items-center justify-center py-1 w-[100%]"
        },
        font: {
            bold: "font-bold",
            medium: "font-medium",
        },
        iconPosition: {
            left: "flex-row-reverse",
            right: "flex-row"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
        font: "medium",
        iconPosition: "right",
    }
})


