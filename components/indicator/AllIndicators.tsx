
export const Indicators = () => {
    return (
        <>

            <span className="flex w-3 h-3 me-3 bg-gray-200 rounded-full"></span>
            <span className="flex w-3 h-3 me-3 bg-gray-900 rounded-full dark:bg-gray-700"></span>
            <span className="flex w-3 h-3 me-3 bg-blue-600 rounded-full"></span>
            <span className="flex w-3 h-3 me-3 bg-green-500 rounded-full"></span>
            <span className="flex w-3 h-3 me-3 bg-red-500 rounded-full"></span>
            <span className="flex w-3 h-3 me-3 bg-purple-500 rounded-full"></span>
            <span className="flex w-3 h-3 me-3 bg-indigo-500 rounded-full"></span>
            <span className="flex w-3 h-3 me-3 bg-yellow-300 rounded-full"></span>
            <span className="flex w-3 h-3 me-3 bg-teal-500 rounded-full"></span>
        </>
    )
}

export const LegendIndicators = () => {
    return (
        <>


            <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3"><span className="flex w-2.5 h-2.5 bg-blue-600 rounded-full me-1.5 flex-shrink-0"></span>Visitors</span>
            <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3"><span className="flex w-2.5 h-2.5 bg-purple-500 rounded-full me-1.5 flex-shrink-0"></span>Sessions</span>
            <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3"><span className="flex w-2.5 h-2.5 bg-indigo-500 rounded-full me-1.5 flex-shrink-0"></span>Customers</span>
            <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3"><span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full me-1.5 flex-shrink-0"></span>Revenue</span>

        </>
    )
}

export const CountIndicators = () => {
    return (
        <>


            <button type="button" className="relative inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
                <span className="sr-only">Notifications</span>
                Messages
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">8</div>
            </button>

        </>
    )
}

export const StatusIndicators = () => {
    return (
        <>



            <div className="relative me-4">
                <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="profile image" />
                <span className="top-0 start-7 absolute w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </div>
            <div className="relative">
                <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="profile image" />
                <span className="top-0 start-7 absolute w-3.5 h-3.5 bg-red-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </div>

        </>
    )
}

export const BadgeIndicators = () => {
    return (
        <>



            <ul role="list" className="max-w-sm divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className="flex-shrink-0">
                            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                email@flowbite.com
                            </p>
                        </div>
                        <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                            <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                            Available
                        </span>
                    </div>
                </li>
                <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className="flex-shrink-0">
                            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
                                Bonnie Green
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                email@flowbite.com
                            </p>
                        </div>
                        <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                            <span className="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
                            Unavailable
                        </span>
                    </div>
                </li>
            </ul>

        </>
    )
}

export const StepperIndicators = () => {
    return (
        <>



            <ol className="flex items-center">
                <li className="relative w-full mb-6">
                    <div className="flex items-center">
                        <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <svg className="w-2.5 h-2.5 text-blue-100 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                        </div>
                        <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3">
                        <h3 className="font-medium text-gray-900 dark:text-white">Step 1</h3>
                    </div>
                </li>
                <li className="relative w-full mb-6">
                    <div className="flex items-center">
                        <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <svg className="w-2.5 h-2.5 text-blue-100 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                        </div>
                        <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3">
                        <h3 className="font-medium text-gray-900 dark:text-white">Step 2</h3>
                    </div>
                </li>
                <li className="relative w-full mb-6">
                    <div className="flex items-center">
                        <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <svg className="w-2.5 h-2.5 text-blue-100 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                        </div>
                        <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3">
                        <h3 className="font-medium text-gray-900 dark:text-white">Step 2</h3>
                    </div>
                </li>
                <li className="relative w-full mb-6">
                    <div className="flex items-center">
                        <div className="z-10 flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full ring-0 ring-white dark:bg-gray-700 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <svg className="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h3 className="font-medium text-gray-900 dark:text-white">Step 3</h3>
                    </div>
                </li>
            </ol>
            <ol className="flex items-center">
                <li className="relative w-full mb-6">
                    <div className="flex items-center">
                        <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <span className="flex w-3 h-3 bg-blue-600 rounded-full"></span>
                        </div>
                        <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3">
                        <h3 className="font-medium text-gray-900 dark:text-white">Step 1</h3>
                    </div>
                </li>
                <li className="relative w-full mb-6">
                    <div className="flex items-center">
                        <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <span className="flex w-3 h-3 bg-blue-600 rounded-full"></span>
                        </div>
                        <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3">
                        <h3 className="font-medium text-gray-900 dark:text-white">Step 2</h3>
                    </div>
                </li>
                <li className="relative w-full mb-6">
                    <div className="flex items-center">
                        <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <span className="flex w-3 h-3 bg-blue-600 rounded-full"></span>
                        </div>
                        <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3">
                        <h3 className="font-medium text-gray-900 dark:text-white">Step 2</h3>
                    </div>
                </li>
                <li className="relative w-full mb-6">
                    <div className="flex items-center">
                        <div className="z-10 flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full ring-0 ring-white dark:bg-gray-700 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <span className="flex w-3 h-3 bg-gray-900 rounded-full dark:bg-gray-300"></span>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h3 className="font-medium text-gray-900 dark:text-white">Step 3</h3>
                    </div>
                </li>
            </ol>

        </>
    )
}
