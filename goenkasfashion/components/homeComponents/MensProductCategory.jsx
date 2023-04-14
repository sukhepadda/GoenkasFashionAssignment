import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation } from "swiper";

function MensProductCategory() {
  const imgs = [{
    id: 1,
    img1: "http://goenkasfashion.com/wp-content/uploads/2022/12/formal2.jpg",
    img2: "http://goenkasfashion.com/wp-content/uploads/2022/12/formal1.jpg",
    btn1: "FORMAL",
    btn2: "FORMAL",
  },
  {
    id: 2,
    img1: "http://goenkasfashion.com/wp-content/uploads/2022/12/jeans2-.jpg",
    img2: "http://goenkasfashion.com/wp-content/uploads/2022/12/jeans3.jpg",
    btn1: "CASUAL",
    btn2: "CASUAL",
  },
  {
    id: 3,
    img1: "http://goenkasfashion.com/wp-content/uploads/2022/12/partymen-2-copy.jpg",
    img2: "http://goenkasfashion.com/wp-content/uploads/2022/12/partymen-3-copy.jpg",
    btn1: "PARTY WEAR",
    btn2: "PARTY WEAR",
  },
  ]
  return (
    <div className='py-8 bg-[url(http://goenkasfashion.com/wp-content/uploads/2022/12/1000_F_224080425_mjQqXBnMYPLVNWCItHqifSz5FGRPbyuD.jpg)]'>
      <div className='grid justify-center items-center text-center mb-9'>
        <h1 className='text-4xl text-white font-semibold '>Men's Product Category</h1>
        <p className='text-base text-white mt-1'>Find best quality products at Goenkas Fashion Stores</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
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
              className='md:w-[356px] sm:w-[456px] w-full m-4'
              loop={true}
              key={i.id}
            >
              <SwiperSlide>
                <img className='h-[550px] md:w-[356px] sm:w-[456px] w-full absolute z-[-1]' src={i.img1} />
                <div className='h-[550px] md:w-[356px] sm:w-[456px] w-full text-4xl text-white text-center grid justify-center items-center bg-black bg-opacity-50'>
                  <div className=''>
                    <button className='border-2 px-3 py-1 hover:bg-blue-300 hover:text-black hover:border-blue-300 text-xl transition-all ease-in duration-300'>{i.btn1}</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className='h-[550px] md:w-[356px] sm:w-[456px] w-full absolute z-[-1]' src={i.img2} />
                <div className='h-[550px] md:w-[356px] sm:w-[456px] w-full text-4xl text-white text-center grid justify-center items-center bg-black bg-opacity-50'>
                  <div className=''>
                    <button className='border-2 px-3 py-1 hover:bg-blue-300 hover:text-black hover:border-blue-300 text-xl transition-all ease-in duration-300'> {i.btn2} </button>
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

export default MensProductCategory