import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import React, { useRef, useState } from 'react';
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        loop={true}
        coverflowEffect={{
          rotate: 20,
          stretch: 20,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-base-200 rounded-2xl w-full max-w-md">
            <div className="relative flex flex-col bg-clip-border rounded-xl text-gray-700 shadow-md bg-base-200 cursor-pointer">
              <div className="relative bg-clip-border mx-4 overflow-hidden bg-blue-500 text-white shadow-blue-500/40 shadow-lg -mt-6 flex h-80 align-middle justify-center items-center rounded-2xl"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold p-3 pl-8 text-accent">
                  One Voice Journal
                </h3>
                <p className="pl-8 text-base-content">
                  A journaling mobile application focused on personal and
                  spiritual reflection.
                </p>
              </div>
              <div className="border-t border-blue-gray-50 flex items-center justify-between p-3 pl-8 pb-6">
                <div className="mt-2 flex flex-wrap gap-2">
                  <p className="text-[14px] blue-text-gradient">
                    #react native
                  </p>
                  <p className="text-[14px] green-text-gradient">#supabase</p>
                  <p className="text-[14px] pink-text-gradient">
                    #watermelondb
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-base-200 rounded-2xl w-full max-w-md">
            <div className="relative flex flex-col bg-clip-border rounded-xl text-gray-700 shadow-md bg-base-200 cursor-pointer">
              <div className="relative bg-clip-border mx-4 overflow-hidden bg-blue-500 text-white shadow-blue-500/40 shadow-lg -mt-6 flex h-80 align-middle justify-center items-center rounded-2xl"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold p-3 pl-8 text-accent">
                  One Voice Journal
                </h3>
                <p className="pl-8 text-base-content">
                  A journaling mobile application focused on personal and
                  spiritual reflection.
                </p>
              </div>
              <div className="border-t border-blue-gray-50 flex items-center justify-between p-3 pl-8 pb-6">
                <div className="mt-2 flex flex-wrap gap-2">
                  <p className="text-[14px] blue-text-gradient">
                    #react native
                  </p>
                  <p className="text-[14px] green-text-gradient">#supabase</p>
                  <p className="text-[14px] pink-text-gradient">
                    #watermelondb
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-base-200 rounded-2xl w-full max-w-md">
            <div className="relative flex flex-col bg-clip-border rounded-xl text-gray-700 shadow-md bg-base-200 cursor-pointer">
              <div className="relative bg-clip-border mx-4 overflow-hidden bg-blue-500 text-white shadow-blue-500/40 shadow-lg -mt-6 flex h-80 align-middle justify-center items-center rounded-2xl"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold p-3 pl-8 text-accent">
                  One Voice Journal
                </h3>
                <p className="pl-8 text-base-content">
                  A journaling mobile application focused on personal and
                  spiritual reflection.
                </p>
              </div>
              <div className="border-t border-blue-gray-50 flex items-center justify-between p-3 pl-8 pb-6">
                <div className="mt-2 flex flex-wrap gap-2">
                  <p className="text-[14px] blue-text-gradient">
                    #react native
                  </p>
                  <p className="text-[14px] green-text-gradient">#supabase</p>
                  <p className="text-[14px] pink-text-gradient">
                    #watermelondb
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-base-200 rounded-2xl w-full max-w-md">
            <div className="relative flex flex-col bg-clip-border rounded-xl text-gray-700 shadow-md bg-base-200 cursor-pointer">
              <div className="relative bg-clip-border mx-4 overflow-hidden bg-blue-500 text-white shadow-blue-500/40 shadow-lg -mt-6 flex h-80 align-middle justify-center items-center rounded-2xl"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold p-3 pl-8 text-accent">
                  One Voice Journal
                </h3>
                <p className="pl-8 text-base-content">
                  A journaling mobile application focused on personal and
                  spiritual reflection.
                </p>
              </div>
              <div className="border-t border-blue-gray-50 flex items-center justify-between p-3 pl-8 pb-6">
                <div className="mt-2 flex flex-wrap gap-2">
                  <p className="text-[14px] blue-text-gradient">
                    #react native
                  </p>
                  <p className="text-[14px] green-text-gradient">#supabase</p>
                  <p className="text-[14px] pink-text-gradient">
                    #watermelondb
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-base-200 rounded-2xl w-full max-w-md">
            <div className="relative flex flex-col bg-clip-border rounded-xl text-gray-700 shadow-md bg-base-200 cursor-pointer">
              <div className="relative bg-clip-border mx-4 overflow-hidden bg-blue-500 text-white shadow-blue-500/40 shadow-lg -mt-6 flex h-80 align-middle justify-center items-center rounded-2xl"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold p-3 pl-8 text-accent">
                  One Voice Journal
                </h3>
                <p className="pl-8 text-base-content">
                  A journaling mobile application focused on personal and
                  spiritual reflection.
                </p>
              </div>
              <div className="border-t border-blue-gray-50 flex items-center justify-between p-3 pl-8 pb-6">
                <div className="mt-2 flex flex-wrap gap-2">
                  <p className="text-[14px] blue-text-gradient">
                    #react native
                  </p>
                  <p className="text-[14px] green-text-gradient">#supabase</p>
                  <p className="text-[14px] pink-text-gradient">
                    #watermelondb
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-base-200 rounded-2xl w-full max-w-md">
            <div className="relative flex flex-col bg-clip-border rounded-xl text-gray-700 shadow-md bg-base-200 cursor-pointer">
              <div className="relative bg-clip-border mx-4 overflow-hidden bg-blue-500 text-white shadow-blue-500/40 shadow-lg -mt-6 flex h-80 align-middle justify-center items-center rounded-2xl"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold p-3 pl-8 text-accent">
                  One Voice Journal
                </h3>
                <p className="pl-8 text-base-content">
                  A journaling mobile application focused on personal and
                  spiritual reflection.
                </p>
              </div>
              <div className="border-t border-blue-gray-50 flex items-center justify-between p-3 pl-8 pb-6">
                <div className="mt-2 flex flex-wrap gap-2">
                  <p className="text-[14px] blue-text-gradient">
                    #react native
                  </p>
                  <p className="text-[14px] green-text-gradient">#supabase</p>
                  <p className="text-[14px] pink-text-gradient">
                    #watermelondb
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
