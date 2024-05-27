import React from 'react'
import HeaderHeroCarousel from '@/app/components/carousels/HeaderHeroCarousel'
import CubicCarousel from '@/app/components/carousels/cubic/CubicCarousel'
import { slideMenu } from '@/app/lib/constants'


const About = () => {
    return (
        <>
            <div className='w-full h-auto font-poppins'>
                <HeaderHeroCarousel />
            </div>
            <div className="grid grid-cols-1 space-y-12 py-12">
                <div className="">
                    <CubicCarousel slideItems={slideMenu} />
                </div>
            </div>
        </>
    )
}

export default About