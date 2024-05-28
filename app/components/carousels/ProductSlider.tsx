"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, EffectFlip, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './carousel.css';

interface IProductData {
    imgurl: string;
    title: string;
    price: string
}
interface IProductProps {
    accentColor?: string;
    productData: IProductData[];
}

const ProductSlider: React.FC<IProductProps> = ({ accentColor, productData }) => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                loop={true}
                modules={[Autoplay, Navigation, Pagination, A11y]}
                spaceBetween={50}
                speed={2000}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {productData.map(({ imgurl, title, price }, index) => (
                    <SwiperSlide key={index}>
                        {({ isActive }) => (
                            <div className={`w-full h-[250px] bg-gray-300 flex items-center justify-center text-white text-2xl capitalize ${isActive ? "font-bold text-green-500 scale-y-125" : ""}`}>{title}</div>
                        )}
                    </SwiperSlide>

                ))}
            </Swiper>
        </>
    )
}

export default ProductSlider