import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


function Header() {
    return (
        <div className='h-[170px]'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                // autoplay={{
                //     delay: 5000,
                //     disableOnInteraction: false,
                // }}
                pagination={{
                    clickable: true,
                }}
                modules={[
                    // Autoplay,
                    Pagination,
                    Navigation
                ]}
                className='w-full'
                loop={true}

            >
                <SwiperSlide>
                    <img className='w-[100%] h-[570px] absolute z-[-1]' src="http://goenkasfashion.com/wp-content/uploads/2022/12/mens.jpg" />
                    <div className='text-4xl text-white text-center h-[870px] grid justify-center items-center bg-black bg-opacity-50'>
                        <div className=''>

                            <h1 className='text-6xl font-bold'>Men's</h1>
                            <p className='text2xl font-light my-12'>SPARKY,CAMRO,PARX,PEPE,PARKAVENUE,SIYARAM TURTLE,OXEMBERG,SERO,VANHUESEN,RAYMONDS OTTO,PAN AMERICA,JOCKEY,MINISTER WHITE SIN DENIM,KELYN,STRIDE,BEING HUMAN,LP</p>
                            <button className='border-4 p-3 hover:bg-blue-300 hover:text-black hover:border-blue-300 text-3xl transition-all ease-in duration-300'>View More</button>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[100%] h-[570px] absolute z-[-1]' src="http://goenkasfashion.com/wp-content/uploads/2022/12/westernslide.jpg" />
                    <div className='text-4xl text-white text-center h-[870px] grid justify-center items-center bg-black bg-opacity-50'>
                        <div className=''>

                            <h1 className='text-7xl font-bold'>Western</h1>
                            <p className='text-4xl my-12'>PARI,ZOLA,JALARAM,MASTI MUMBAI,ZUNI & ZUNI, SIZZLER,ROYAL,WESTERN GIRL,D.MARK,LOTUS</p>
                            <button className='border-8 p-4 hover:bg-blue-300 hover:text-black hover:border-blue-300 text-3xl transition-all ease-in duration-300'>View Features</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[100%] h-[570px] absolute z-[-1]' src="http://goenkasfashion.com/wp-content/uploads/2022/12/kurti-slide.jpg" />
                    <div className='text-4xl text-white text-center h-[870px] grid justify-center items-center bg-black bg-opacity-50'>
                        <div className=''>

                            <h1 className='text-7xl font-bold'>Indian</h1>
                            <p className='text-4xl my-12'>KURTI, READYMADE SUIT, SAREE,  GIRL’S</p>
                            <button className='border-8 p-4 hover:bg-blue-300 hover:text-black hover:border-blue-300 text-3xl transition-all ease-in duration-300'>Latest Designs</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Header