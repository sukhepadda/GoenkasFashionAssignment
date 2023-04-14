import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation } from "swiper";


function LadiesProductCategory() {
  const imgs = [{
    id: 1,
    img1: "http://goenkasfashion.com/wp-content/uploads/2022/12/western-copy.jpg",
    img2: "http://goenkasfashion.com/wp-content/uploads/2022/12/ug14.jpg",
    btn1: "Western",
    btn2: "Western",
  },
  {
    id: 2,
    img1: "http://goenkasfashion.com/wp-content/uploads/2022/12/kurta-.jpg",
    img2: "http://goenkasfashion.com/wp-content/uploads/2022/12/kurtaSUIT.jpg",
    btn1: "INDIAN",
    btn2: "INDIAN",
  },
  {
    id: 3,
    img1: "http://goenkasfashion.com/wp-content/uploads/2022/12/girls.jpg",
    img2: "http://goenkasfashion.com/wp-content/uploads/2022/12/girls21-copy.jpg",
    btn1: "Girls",
    btn2: "Girls",
  },
  {
    id: 4,
    img1: "http://goenkasfashion.com/wp-content/uploads/2022/12/lanj.jpg",
    img2: "http://goenkasfashion.com/wp-content/uploads/2022/12/ug13.jpg",
    btn1: "Under Garments",
    btn2: "Under Garments",
  },

  ]
  return (
    <div className='py-8 bg-[url(https://i.pinimg.com/originals/f2/04/0e/f2040e0d96f811e2b2b1c17893c68d85.jpg)]'>
      <div className='grid justify-center items-center text-center mb-9'>
        <h1 className='text-4xl font-semibold '>Ladies Product Category</h1>
        <p className='text-base mt-1'>Find best quality products at Goenkas Fashion Stores</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
          imgs.map(i => (


            <Swiper
              spaceBetween={0}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                clickable: true,
              }}
              modules={[
                Autoplay,
                Navigation
              ]}
              className='w-[260px] m-4'
              loop={true}
              key={i.id}
            >
              <SwiperSlide>
                <img className='h-[370px] w-[280px] absolute z-[-1]' src={i.img1} />
                <div className='h-[370px] w-[280px] text-4xl text-white text-center grid justify-center items-center bg-black bg-opacity-50'>
                  <div className=''>
                    <button className='border-2 px-2 py-1 hover:bg-blue-300 hover:text-black hover:border-blue-300 text-xl transition-all ease-in duration-300'> {i.btn1} </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className='h-[370px] w-[280px] absolute z-[-1]' src={i.img2} />
                <div className='h-[370px] w-[280px] text-4xl text-white text-center grid justify-center items-center bg-black bg-opacity-50'>
                  <div className=''>
                    <button className='border-2 px-2 py-1 hover:bg-blue-300 hover:text-black hover:border-blue-300 text-xl transition-all ease-in duration-300'>{i.btn2} </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          ))
        }

      </div >
    </div>
  )
}

export default LadiesProductCategory