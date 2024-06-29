import ProductSlider from "@components/carousels/ProductSlider"
import GalleryCarousel from "@components/carousels/gallery/GalleryCarousel"
import HeroCarousel from "@components/carousels/hero/HeroCarousel"
import ParallaxCarousel from "@components/carousels/parallax/ParallaxCarousel"
import ProductImageCarousel from "@components/carousels/producImage/ProductImageCarousel"
import TeamCarousel from "@components/carousels/team/TeamCarousel"
import { slideMenu, productDetailData, parallaxData, productCardData } from "@lib/constants"


const page = () => {
    return (
        <div className="grid grid-cols-1 space-y-12 pb-12">
            <div className="w-full h-screen">
                <HeroCarousel />
            </div>
            <div className="max-w-[124rem] py-4 px-1 my-0 mx-auto">
                <GalleryCarousel slideItems={slideMenu} />
            </div>
            <div className="w-full h-[600px] py-4 px-1 my-0 mx-auto  bg-navy">
                <ProductImageCarousel slideItems={productDetailData} />
            </div>
            <div className="w-full h-[500px] py-4 px-0 my-0 mx-auto">
                <ParallaxCarousel slideItems={parallaxData} />
            </div>
            <div className="w-full h-[500px] py-4 px-0 my-0 mx-auto">
                <TeamCarousel slideItems={slideMenu} />
            </div>
            <div className="w-full h-[500px] py-4 px-0 my-0 mx-auto">
                <ProductSlider productData={productCardData} />
            </div>
        </div>
    )
}

export default page