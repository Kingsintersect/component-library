import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { AppleIcon, FacebookIcon, GithubIcon, GoogleIcon, TwitterIcon } from '@/app/components/icons/Icons';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    to?: string;
    isLoading?: boolean;
    disabled?: boolean;
}

export const FacebookSignInButton: FC<ButtonProps> = ({ to, children, className, isLoading, ...props }) => {
    const history = [];

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!props.disabled) {
            if (to) {
                history.push(to); console.log(1)
            } else {
                props.onClick && props.onClick(e);
            }
        }
    };

    return (
        <>
            <button
                type="button"
                className={`text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2  ${className} `}
                {...props}
                disabled={isLoading || props.disabled}
            >
                <FacebookIcon />
                Sign in with Facebook
            </button>
        </>
    )
}
export const TwitterSignInButtons: FC<ButtonProps> = ({ to, children, className, isLoading, ...props }) => {
    const history = [];

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!props.disabled) {
            if (to) {
                history.push(to); console.log(1)
            } else {
                props.onClick && props.onClick(e);
            }
        }
    };

    return (
        <>
            <button
                type="button"
                className={`text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2  ${className} `}
                {...props}
                disabled={isLoading || props.disabled}
            >
                <TwitterIcon />
                Sign in with Twitter
            </button>
        </>
    )
}
export const GithubSignInButtons: FC<ButtonProps> = ({ to, children, className, isLoading, ...props }) => {
    const history = [];

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!props.disabled) {
            if (to) {
                history.push(to); console.log(1)
            } else {
                props.onClick && props.onClick(e);
            }
        }
    };
    return (
        <>
            <button
                type="button"
                className={`text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2  ${className} `}
                {...props}
                disabled={isLoading || props.disabled}
            >
                <GithubIcon />
                Sign in with Github
            </button>
        </>
    )
}
export const GoogleSignInButtons: FC<ButtonProps> = ({ to, children, className, isLoading, ...props }) => {
    const history = [];

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!props.disabled) {
            if (to) {
                history.push(to); console.log(1)
            } else {
                props.onClick && props.onClick(e);
            }
        }
    };
    return (
        <>
            <button
                type="button"
                className={`text-white bg-[#f44242] hover:bg-[#b84a4a]/90 focus:ring-4 focus:outline-none focus:ring-[#782020]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#782020]/55 me-2 mb-2  ${className} `}
                {...props}
                disabled={isLoading || props.disabled}
            >
                <GoogleIcon />
                Sign in with Google
            </button>
        </>
    )
}
export const AppleSignInButtons: FC<ButtonProps> = ({ to, children, className, isLoading, ...props }) => {
    const history = [];

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!props.disabled) {
            if (to) {
                history.push(to); console.log(1)
            } else {
                props.onClick && props.onClick(e);
            }
        }
    };
    return (
        <div className='grid grid-cols-1'>
            <button
                type="button"
                className={`text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2  ${className} `}
                {...props}
                disabled={isLoading || props.disabled}
            >
                <AppleIcon />
                Sign in with Apple
            </button>

        </div>
    )
}
