'use client';
import { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react'
import PagePreloader from './components/preloaders/PagePreloader';
import './styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [])

    return (
        <>
            {loading
                ? (
                    <PagePreloader />
                ) : (
                    <div className="transition-opacity duration-500 opacity-100">
                        <Component {...pageProps} />
                    </div>
                )}
        </>
    );
}

export default MyApp