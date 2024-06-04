import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { AmericanExpressIcon, AppleIcon, BitCoinIcon, EthereumIcon, MasterCardIcons, MetaMaskIcon, OpraWalletIcon, PayPalIcon, VisaIcon } from '@/app/components/icons/Icons';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    to?: string;
    isLoading?: boolean;
    disabled?: boolean;
}

export const MetaMaskPaymentButtons: FC<ButtonProps> = ({ to, children, className, isLoading, ...props }) => {
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
        <div className="">
            <button
                type="button"
                className={`text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2  ${className} `}
                {...props}
                disabled={isLoading || props.disabled}
            >
                <MetaMaskIcon />
                Connect with MetaMask
            </button>
        </div>
    )
}

export const OpraPayPaymentButtons: FC<ButtonProps> = ({ to, children, className, isLoading, ...props }) => {
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
        <div className="">
            <button
                type="button"
                className={`text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2  ${className} `}
                {...props}
                disabled={isLoading || props.disabled}
            >
                <OpraWalletIcon />
                Connect with Opera Wallet
            </button>
        </div>
    )
}

export const BitCoinPaymentButtons: FC<ButtonProps> = ({ to, children, className, isLoading, ...props }) => {
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
        <div className="">
            <button
                type="button"
                className={`text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2  ${className} `}
                {...props}
                disabled={isLoading || props.disabled}
            >
                <BitCoinIcon />
                Pay with Bitcoin
            </button>
        </div>
    )
}

export const PaypalPaymentButtons: FC<ButtonProps> = ({ to, children, className, isLoading, ...props }) => {
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
        <div className="">
            <button
                type="button"
                className={`text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2  ${className} `}
                {...props}
                disabled={isLoading || props.disabled}
            >
                <PayPalIcon />
                Check out with PayPal
            </button>
        </div>
    )
}

export const ApplePayPaymentButtons: FC<ButtonProps> = ({ to, children, className, isLoading, ...props }) => {
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
        <div className="">
            <button
                type="button"
                className={`text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2  ${className} `}
                {...props}
                disabled={isLoading || props.disabled}
            >
                <AppleIcon />
                Check out with Apple Pay
            </button>
        </div>
    )
}

export const AmericanExpressPaymentButtons: FC<ButtonProps> = ({ to, children, className, isLoading, ...props }) => {
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
        <div className="">
            <button
                type="button"
                className={`text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2  ${className} `}
                {...props}
                disabled={isLoading || props.disabled}
            >
                <AmericanExpressIcon />
                Pay with American Express
            </button>
        </div>
    )
}

export const VisaPaymentButtons: FC<ButtonProps> = ({ to, children, className, isLoading, ...props }) => {
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
        <div className="">
            <button
                type="button"
                className={`text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2  ${className} `}
                {...props}
                disabled={isLoading || props.disabled}
            >
                <VisaIcon />
                Pay with Visa
            </button>
        </div>
    )
}

export const MasterCardPaymentButtons: FC<ButtonProps> = ({ to, children, className, isLoading, ...props }) => {
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
        <div className="">
            <button
                type="button"
                className={`text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2  ${className} `}
                {...props}
                disabled={isLoading || props.disabled}
            >
                <MasterCardIcons />
                Pay with MasterCard
            </button>
        </div>
    )
}

export const EthereumPaymentButtons: FC<ButtonProps> = ({ to, children, className, isLoading, ...props }) => {
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
                className={`text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2  ${className} `}
                {...props}
                disabled={isLoading || props.disabled}
            >
                <EthereumIcon />
                Pay with Ethereum
            </button>

        </>
    )
}
