"use client";
import FlipBox, { BackChild, FrontChild } from '@components/flipbox/FlipBox';
import Navbar from '@components/headers/NavigationBar';
import React, { useRef, useEffect } from 'react';

const Adapta: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const childRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
    let originalBackgroundColor = '#d9d6cc';

    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            let isAnyElementInView = false;
            entries.forEach(entry => {
                // const target = entry.target.children[0];
                const targetcolor = entry.target as HTMLElement;
                // console.log(targetcolor.getAttribute('data-color'))
                if (entry.isIntersecting) {
                    isAnyElementInView = true;
                    if (containerRef.current) {
                        containerRef.current.style.backgroundColor = targetcolor.getAttribute('data-color') || '';
                        originalBackgroundColor = targetcolor.getAttribute('data-color') || "#d9d6cc"
                        // containerRef.current.style.backgroundColor = getComputedStyle(target).backgroundColor || '';
                        // originalBackgroundColor = getComputedStyle(target).backgroundColor
                    }
                }
            });
            if (!isAnyElementInView && containerRef.current) {
                containerRef.current.style.backgroundColor = originalBackgroundColor;
            }
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null, // Use the viewport as the root
            threshold: 0.1, // Trigger when 50% of the child element is visible
        });

        childRefs.forEach(ref => {
            // console.log(typeof ref.current, ref.current)
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        // Clean up the observer on component unmount
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="container">
            <div className='bg-[#d9d6cc] p-12' ref={containerRef} style={{ transition: 'background-color 1s ease' }}>
                <div className={"rounded-3xl"} data-color="#d9d6cc" ref={childRefs[0]} style={{ marginBottom: '50px' }}>
                    <div className="min-h-[100vh] text-center rounded-3xl w-full py-20">
                        <h1 className='text-6xl text-black'>Wallet</h1>
                        <h2 className='text-8xl text-black font-bold'>Carry one thing. Everything.</h2>
                        <div className="flex flex-col space-y-10 items-center justify-center my-10">
                            <div className="rounded-3xl h-[90vh] w-[300px] border-2 border-yellow-400 bg-black/75"></div>

                            <div className="text-3xl font-bold px-40 mx-auto text-center">
                                The Wallet app lives right on your iPhone. It’s where you securely keep your credit and debit cards, driver’s license or state ID, transit cards, event tickets, keys, and more — all in one place. And it all works with iPhone or Apple Watch, so you can take less with you but always bring more.
                            </div>
                            <FlipBox>
                                {/* <> */}
                                <FrontChild className={''}>
                                    <h1 className="header">front</h1>
                                </FrontChild>
                                <BackChild className={'!bg-red-500'}>
                                    <h1 className="header">Back</h1>
                                </BackChild>
                                {/* </> */}

                            </FlipBox>
                        </div>
                    </div>
                </div>

                <div className={"rounded-3xl"} data-color="#3295c9" ref={childRefs[1]} style={{ marginBottom: '50px' }}>
                    <div className="min-h-[100vh] bg-[#3295c9] text-left rounded-3xl w-full p-20">
                        <h1 className='text-8xl text-white font-bold'>Payments<br /> and Rewards</h1>
                        <h2 className='text-8xl text-black/60 font-bold'>Start here.<br />Pay anywhere.</h2>

                        <div className="flex flex-col space-y-10 items-center justify-center my-10">
                            <div className="rounded-3xl h-[110vh] w-full flex items-end justify-center flex-col bg-white text-right p-20">
                                <div className="text-black text-7xl font-bold">Add a credit <br /> or debit card. </div>
                                <div className="text-[#3295c9] text-7xl font-bold">With no <br /> added effort. </div>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[100vh] rounded-3xl w-full p-20">
                        <div className="text-3xl font-bold w-full flex justify-between">
                            <div className="rounded-3xl h-[90vh] w-[300px] border-2 border-yellow-400 bg-black/75"></div>
                            <div className="rounded-3xl h-[90vh] w-[300px] border-2 border-yellow-400 bg-black/75"></div>
                        </div>
                    </div>
                </div>

                <div className={"rounded-3xl"} data-color="#fcad00" ref={childRefs[2]} style={{ marginBottom: '50px' }}>
                    <div className="min-h-[100vh] bg-[#fcad00] text-left rounded-3xl w-full p-20">
                        <h1 className='text-8xl text-white font-bold'>Identity Cards</h1>
                        <h2 className='text-8xl text-black/40 font-bold'>Always on hand.<br />Or wrist. </h2>

                        <div className="flex flex-col space-y-10 items-center justify-center my-10">
                            <div className="rounded-3xl h-[120vh] w-full flex items-center justify-between bg-white p-20">
                                <div className="flex flex-col">
                                    <div className="text-black text-7xl font-bold">Add a credit <br /> or debit card. </div>
                                    <div className="text-[#3295c9] text-7xl font-bold">With no <br /> added effort. </div>
                                </div>
                                <div className="">
                                    <div className="rounded-3xl h-[90vh] w-[300px] border-2 border-yellow-400 bg-white/75"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[100vh] rounded-3xl w-full p-20">
                        <div className="font-bold w-full grid sm:grid-cols-2 gap-14">
                            <div className="rounded-[7%] h-[120vh] w-full border-2 border-yellow-400 bg-black"></div>
                            <div className="rounded-[7%] h-[120vh] w-full border-2 border-yellow-400 bg-black"></div>
                        </div>
                    </div>
                </div>

                <div className={"rounded-3xl"} data-color="#50be3d" ref={childRefs[3]} style={{ marginBottom: '50px' }}>
                    <div className="min-h-[100vh] bg-[#50be3d] text-left rounded-3xl w-full p-20">
                        <h1 className='text-8xl text-white font-bold'>Identity Cards</h1>
                        <h2 className='text-8xl text-black/40 font-bold'>Always on hand.<br />Or wrist. </h2>

                        <div className="flex flex-col space-y-10 items-center justify-center my-10">
                            <div className="rounded-3xl h-[120vh] w-full flex items-center justify-between bg-white p-20">
                                <div className="flex flex-col">
                                    <div className="text-black text-7xl font-bold">Add a credit <br /> or debit card. </div>
                                    <div className="text-[#3295c9] text-7xl font-bold">With no <br /> added effort. </div>
                                </div>
                                <div className="">
                                    <div className="rounded-3xl h-[90vh] w-[300px] border-2 border-yellow-400 bg-white/75"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[100vh] rounded-3xl w-full p-20">
                        <div className="font-bold w-full grid sm:grid-cols-2 gap-14">
                            <div className="rounded-[7%] h-[120vh] w-full border-2 border-yellow-400 bg-black"></div>
                            <div className="rounded-[7%] h-[120vh] w-full border-2 border-yellow-400 bg-black"></div>
                        </div>
                    </div>
                </div>

                <div className={"rounded-3xl"} data-color="#f26d5f" ref={childRefs[4]} style={{ marginBottom: '50px' }}>
                    <div className="min-h-[100vh] bg-[#f26d5f] text-left rounded-3xl w-full p-20">
                        <h1 className='text-8xl text-white font-bold'>Identity Cards</h1>
                        <h2 className='text-8xl text-black/40 font-bold'>Always on hand.<br />Or wrist. </h2>

                        <div className="flex flex-col space-y-10 items-center justify-center my-10">
                            <div className="rounded-3xl h-[120vh] w-full flex items-center justify-between bg-white p-20">
                                <div className="flex flex-col">
                                    <div className="text-black text-7xl font-bold">Add a credit <br /> or debit card. </div>
                                    <div className="text-[#3295c9] text-7xl font-bold">With no <br /> added effort. </div>
                                </div>
                                <div className="">
                                    <div className="rounded-3xl h-[90vh] w-[300px] border-2 border-yellow-400 bg-white/75"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[100vh] rounded-3xl w-full p-20">
                        <div className="font-bold w-full grid sm:grid-cols-2 gap-14">
                            <div className="rounded-[7%] h-[120vh] w-full border-2 border-yellow-400 bg-black"></div>
                            <div className="rounded-[7%] h-[120vh] w-full border-2 border-yellow-400 bg-black"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adapta;
