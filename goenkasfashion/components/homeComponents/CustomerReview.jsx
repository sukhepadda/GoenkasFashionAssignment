import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

function CustomerReview() {
  return (
    <div className='bg-gray-300 py-4 px-4'>
      <h1 className='mb-10 font-semibold text-3xl text-center'>CUSTOMER'S REVIEWS</h1>

      <Swiper
        watchSlidesProgress={true}
        slidesPerView={2}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
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

export default CustomerReview