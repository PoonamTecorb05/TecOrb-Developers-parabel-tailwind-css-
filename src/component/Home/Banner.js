import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
import { BannerData } from "../../Data/BannerData";
const Banner = () => {
    return (
        <div className="relative w-full">
            <Swiper
                direction="vertical"
                slidePreView={1}
                loop={true}
                autoplay={{ dalay: 4000, disableOnInteraction: false }}
                speed={1000}
                modules={[Autoplay]}
                className="w-full xl:h-96 lg:h-72 bg:dry h-48"
            >
                {BannerData.slice(0, 2).map((movie, index) => {
                    return (
                        <SwiperSlide key={index} className="relative rounded overflow-hidden">
                            <img src={`/images/${movie?.image}`}
                                alt=""
                                className="w-full h-full object-cover" />
                        </SwiperSlide>
                    )
                }
                )}
            </Swiper>

        </div>
    )
}
export default Banner