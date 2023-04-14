import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

function CustomerReview() {
  const reviewData = [
    {
      id: 1,
      review: "Nicest Collection of Women's Wear",
      name: "Saumya Pitroda",
      designation: "Designer",
    },
    {
      id: 2,
      review: "Best Place for Shopping in Andaman and Nicobar Islands",
      name: "Devika Rasaily",
      designation: "Seo",
    },
    {
      id: 3,
      review: "It was Great moment when first time i had visited to Goenka's Fashion. Best Service ever",
      name: "Manya Anderson",
      designation: "Actess",
    },
    {
      id: 4,
      review: "Exclusive and Superb Collection of Kurti's",
      name: "Seema Saman",
      designation: "Dancer",
    },
  ]
  return (
    <div className='bg-gray-300 py-4 px-4'>
      <h1 className='mb-10 font-semibold text-3xl text-center'>CUSTOMER'S REVIEWS</h1>

      <Swiper
        watchSlidesProgress={true}
        slidesPerView={2}
        //   autoplay={{
        //     delay: 3000,
        //     disableOnInteraction: false,
        // }}
        modules={[Navigation, Autoplay]}
        navigation={{
          clickable: true,
        }}
        breakpoints={{
          1229: { slidesPerView: 2 },
          279: {slidesPerView: 1}
        }}
        className=""
      >
        {
          reviewData.map(i => (
            <SwiperSlide key={i.id}>
              <div className='grid justify-center'>
                <div className='bg-white md:w-[520px] p-4 text-center self-center'>
                  <p className='flex item-center text-lg'><span className=' text-blue-700 mx-2 text-2xl '><ion-icon name="arrow-forward"></ion-icon></span>{i.review}</p>
                </div>
                <div className='flex my-8'>
                  <div className='text-9xl'>
                    <ion-icon name="person-circle"></ion-icon>
                  </div>
                  <div className='flex flex-col mx-2 my-4'>
                    <h2 className='text-2xl'>{i.name}</h2>
                    <p className='text-base'>{i.designation}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default CustomerReview