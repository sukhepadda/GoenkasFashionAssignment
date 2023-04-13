import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation } from "swiper";

function Awards() {
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
        <img className='w-[100%] h-[540px] absolute z-[-1]' src="http://goenkasfashion.com/wp-content/uploads/2022/12/award1.png" />
        <div className='h-[540px] text-4xl text-white text-center grid justify-center items-center bg-black bg-opacity-50'>
            <div className=''>
                <h1 className='text-4xl font-bold'>14th GARMENT FAIR</h1>
            </div>
        </div>

    </SwiperSlide>
    <SwiperSlide>
        <img className='w-[100%] h-[540px] absolute z-[-1]' src="http://goenkasfashion.com/wp-content/uploads/2022/12/award2.png" />
        <div className='h-[540px] text-4xl text-white text-center grid justify-center items-center bg-black bg-opacity-50'>
            <div className=''>

                <h1 className='text-4xl font-bold'>GARMENT FAIR</h1>
                <h1 className='text-xl font-bold'>2022/23</h1>

            </div>
        </div>
    </SwiperSlide>

</Swiper>
  )
}

export default Awards