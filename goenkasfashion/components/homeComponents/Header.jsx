import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation } from "swiper";


function Header() {
    return (
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    clickable:true,
                }}
                modules={[
                    Autoplay,
                    Navigation
                ]}
                className='w-full'
                loop={true}

            >
                <SwiperSlide>
                    <img className='w-[100%] h-[540px] absolute z-[-1]' src="http://goenkasfashion.com/wp-content/uploads/2022/12/mens.jpg" />
                    <div className='h-[540px] text-4xl text-white text-center grid justify-center items-center bg-black bg-opacity-50'>
                        <div className=''>

                            <h1 className='text-6xl font-bold'>Men's</h1>
                            <p className='text-2xl font-light my-8'>SPARKY,CAMRO,PARX,PEPE,PARKAVENUE,SIYARAM TURTLE,OXEMBERG,SERO,VANHUESEN,RAYMONDS OTTO,PAN AMERICA,JOCKEY,MINISTER WHITE SIN DENIM,KELYN,STRIDE,BEING HUMAN,LP</p>
                            <button className='border-4 p-3 hover:bg-blue-300 hover:text-black hover:border-blue-300 text-2xl transition-all ease-in duration-300'>View More</button>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[100%] h-[540px] absolute z-[-1]' src="http://goenkasfashion.com/wp-content/uploads/2022/12/westernslide.jpg" />
                    <div className='h-[540px] text-4xl text-white text-center grid justify-center items-center bg-black bg-opacity-50'>
                        <div className=''>

                            <h1 className='text-6xl font-bold'>Western</h1>
                            <p className='text-2xl font-light my-8'>PARI,ZOLA,JALARAM,MASTI MUMBAI,ZUNI & ZUNI, SIZZLER,ROYAL,WESTERN GIRL,D.MARK,LOTUS</p>
                            <button className='border-4 p-3 hover:bg-blue-300 hover:text-black hover:border-blue-300 text-2xl transition-all ease-in duration-300'>View Features</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[100%] h-[540px] absolute z-[-1]' src="http://goenkasfashion.com/wp-content/uploads/2022/12/kurti-slide.jpg" />
                    <div className='h-[540px] text-4xl text-white text-center grid justify-center items-center bg-black bg-opacity-50'>
                        <div className=''>

                            <h1 className='text-6xl font-bold'>Indian</h1>
                            <p className='text-2xl font-light my-8'>KURTI, READYMADE SUIT, SAREE,  GIRL’S</p>
                            <button className='border-4 p-3 hover:bg-blue-300 hover:text-black hover:border-blue-300 text-2xl transition-all ease-in duration-300'>Latest Designs</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
    )
}

export default Header