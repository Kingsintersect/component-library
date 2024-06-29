import React, { FC, HTMLAttributes, ReactNode } from 'react'

interface DeviceTypes {
    device: "mobile" | "iphone12" | "googlepixel" | "tablet" | "laptop" | "desktop" | "smartwatch"
}

export const MobileMockup: FC<DeviceTypes> = ({ device }) => {
    let content: JSX.Element;
    switch (device) {
        case "mobile":
            content = <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" className="dark:hidden w-[272px] h-[572px]" alt="" />
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" className="hidden dark:block w-[272px] h-[572px]" alt="" />
            </div>
            break;
        case "iphone12":
            content = <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png" className="dark:hidden w-[272px] h-[572px]" alt="" />
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png" className="hidden dark:block w-[272px] h-[572px]" alt="" />
            </div>
            break;
        case "googlepixel":
            content = <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" className="dark:hidden w-[272px] h-[572px]" alt="" />
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" className="hidden dark:block w-[272px] h-[572px]" alt="" />
            </div>
            break;
        case "tablet":
            content = <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png" className="dark:hidden h-[426px] md:h-[654px]" alt="" />
                <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png" className="hidden dark:block h-[426px] md:h-[654px]" alt="" />
            </div>
            break;
        default:
            break;
    }

    return (
        <div className="relative -z-10 mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
            <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            content
        </div>

    )
}



export const LaptopMockup = () => {
    return (
        <>
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                    <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png" className="dark:hidden h-[156px] md:h-[278px] w-full rounded-lg" alt="" />
                    <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png" className="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg" alt="" />
                </div>
            </div>
            <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
            </div>
        </>
    )
}

export const TabletMockup = () => {
    return (
        <>


            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]">
                <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                <div className="rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800">
                    <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png" className="dark:hidden h-[426px] md:h-[654px]" alt="" />
                    <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png" className="hidden dark:block h-[426px] md:h-[654px]" alt="" />
                </div>
            </div>

        </>
    )
}

export const DesktopMockup = () => {
    return (
        <>

            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                <div className="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
                    <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac.png" className="dark:hidden h-[140px] md:h-[262px] w-full rounded-xl" alt="" />
                    <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac-dark.png" className="hidden dark:block h-[140px] md:h-[262px] w-full rounded-xl" alt="" />
                </div>
            </div>
            <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
            <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>

        </>
    )
}

export const SmartwatchMockup = () => {
    return (
        <>
            <div className="relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-t-[2.5rem] h-[63px] max-w-[133px]"></div>
            <div className="relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]">
                <div className="h-[41px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -end-[16px] top-[40px] rounded-e-lg"></div>
                <div className="h-[32px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -end-[16px] top-[88px] rounded-e-lg"></div>
                <div className="rounded-[2rem] overflow-hidden h-[193px] w-[188px]">
                    <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image.png" className="dark:hidden h-[193px] w-[188px]" alt="" />
                    <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image-dark.png" className="hidden dark:block h-[193px] w-[188px]" alt="" />
                </div>
            </div>
            <div className="relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-b-[2.5rem] h-[63px] max-w-[133px]"></div>
        </>
    )
}
