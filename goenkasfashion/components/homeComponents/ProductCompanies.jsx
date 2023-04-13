import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";


function ProductCompanies() {
  return (
    <div className=" bg-white py-4 px-4">

      <Swiper
        watchSlidesProgress={true}
        slidesPerView={4}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[ Autoplay ]}
        className=""
        loop={true}
      >
        <SwiperSlide>
          <img src='http://goenkasfashion.com/wp-content/uploads/2022/12/logo2.png' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='http://goenkasfashion.com/wp-content/uploads/2022/12/logo4.png' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='http://goenkasfashion.com/wp-content/uploads/2022/12/logo1.png' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='http://goenkasfashion.com/wp-content/uploads/2022/12/logo5.png' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='http://goenkasfashion.com/wp-content/uploads/2022/12/logo6.png' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ProductCompanies