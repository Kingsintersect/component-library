import HeaderHeroCarousel from "@components/carousels/HeaderHeroCarousel"
import CubicCarousel from "@components/carousels/cubic/CubicCarousel"
import ZoomableImage from "@components/imagezoom/ZoomableImage"
import { slideMenu } from "@lib/constants"

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
            <div className="grid grid-cols-1 space-y-12 py-12">
                <div className="">
                    <ZoomableImage />
                </div>
            </div>
        </>
    )
}

export default About