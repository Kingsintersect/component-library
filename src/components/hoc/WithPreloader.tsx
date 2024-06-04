'use client';
import React, { FC, useEffect, useState } from 'react'
import PagePreloader from '../preloaders/PagePreloader';

const WithPreloader = (WrappedComponent: FC) => {
    const WPreload: FC = () => {
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
                            <WrappedComponent />
                        </div>
                    )}
            </>
        );
    }

    return WPreload;
}

export default WithPreloader








// return () => {
//     const [loading, setLoading] = useState(true);
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setLoading(false);
//         }, 3000);

//         return () => clearTimeout(timer);
//     }, []);

//     return (
//         <>
//             {loading
//                 ? (
//                     <PagePreloader />
//                 ) : (
//                     <div className="transition-opacity duration-500 opacity-100">
//                         <WrappedComponent />
//                     </div>
//                 )}
//         </>
//     )
// }