import Titles from "../Titles"
import { Movies } from "../../Data/MovieData"
import Movie from "../Movie"
import { Navigation} from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from "react"
import ViewAll from "./ViewAll";
const AudioBook = () => {
    const [nextEl, setNextEl] = useState(null);
    const [prevEl, setPrevEl] = useState(null);
    const classNames=" border border-gray hover:border-white rounded-full transition text-sm  w-8 h-8 mx-3 flex-colo   text-white"
   
    return (
        <div className="mt-8 relative mx-5">
            <Titles title="Audio Book"/> 
            <div className="w-full mt-6 ">
                <Swiper
                    direction="horizontal"
                    loop={true}
                    // autoplay={{ dalay: 4000, disableOnInteraction: false }}
                    speed={1000}
                    // modules={[Autoplay ,Scrollbar]}
                    className="w-full xl:h-64 lg:h-64 bg:dry h-60"
                    slidesPerView={6}
                    spaceBetween={20}
                    // scrollbar={{ draggable: true }}
                    modules={[Navigation]}
                    navigation={{ nextEl, prevEl }}
                    breakpoints={{
                        2100: {
                            width: 2100,
                            slidesPerView: 5,
                          },
                        1366: {
                            width: 1366,
                            slidesPerView: 5,
                          },
                          768: {
                            width: 768,
                            slidesPerView: 3,
                          },
                        640: {
                          width: 640,
                          slidesPerView: 3,
                        },
                        480: {
                          width: 480,
                          slidesPerView: 2,
                        },
                        375: {
                            width: 375,
                            slidesPerView: 1,
                          },
                          320: {
                            width: 375,
                            slidesPerView: 1,
                          },
                      }}
                >
                    {Movies.slice(0, 8).map((movie, index) => {
                        return (
                            <SwiperSlide key={index} className="relative rounded overflow-hidden">
                                <Movie key={index} movie={movie} />
                            </SwiperSlide>
                        )

                    }
                    )}
                </Swiper>
                <div className=" px-1 flex-rows  absolute   top-0 right-0">
                    <button className={classNames} ref={(node)=> setPrevEl(node)}>
                       <img src="/images/back_grey.svg" alt="" />
                    </button>
                    <button className={classNames} ref={(node)=> setNextEl(node)}>
                    <img src="/images/next_grey.svg" alt="" />
                    </button>
                </div>
            </div>

            <ViewAll anchorName="Show All Audio Books" />
        </div>
    )
}
export default AudioBook