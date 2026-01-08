'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function SpecialEvent() {

  /* ---------- JSX ---------- */
  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-white select-none">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='w-full h-full flex justify-center p-7'><SlideContent/></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full flex justify-center p-7'><SlideContent1/></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full flex justify-center p-7'><SlideContent2/></div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}



function SlideContent() {
  return (
    <>
    <div className="w-full max-w-7xl h-full min-h-96 flex justify-center items-center">
      {/* Image */}
      <div className="w-1/2 h-full border border-amber-300">
        <div className="w-full h-[420px] bg-amber-500"></div>
      </div>

      {/* Text */}
      <div className="w-1/2 h-full border border-amber-300 px-6">
        <div className="text-center">
          <h3 className="text-3xl">title</h3>
          <h3 className="text-5xl">this is heading</h3>

          <div className="flex justify-center items-center gap-1 mt-2">
            <div className="w-1/4 h-[2px] bg-amber-600"></div>
            <div className="w-5 h-5 bg-amber-500 outline outline-amber-500"></div>
            <div className="w-1/4 h-[2px] bg-amber-600"></div>
          </div>
        </div>

        <ul className="flex justify-center gap-5 list-disc mt-4">
          <li>list</li>
          <li>items</li>
          <li>content</li>
        </ul>

        <p className="text-center mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="flex justify-center mt-4">
          <button className="px-5 py-2 text-xl bg-amber-500 text-white">
            button
          </button>
        </div>
      </div>
    </div>
    </>
  )
}
function SlideContent1() {
  return (
    <>

    <div className="w-full max-w-7xl h-full min-h-96 flex justify-center items-center">
      {/* Image */}
      <div className="w-1/2 h-full border border-amber-300">
        <div className="w-full h-[420px] bg-amber-300"></div>
      </div>

      {/* Text */}
      <div className="w-1/2 h-full border border-amber-300 px-6">
        <div className="text-center">
          <h3 className="text-3xl">title</h3>
          <h3 className="text-5xl">this is heading</h3>

          <div className="flex justify-center items-center gap-1 mt-2">
            <div className="w-1/4 h-[2px] bg-amber-600"></div>
            <div className="w-5 h-5 bg-amber-500 outline outline-amber-500"></div>
            <div className="w-1/4 h-[2px] bg-amber-600"></div>
          </div>
        </div>

        <ul className="flex justify-center gap-5 list-disc mt-4">
          <li>list</li>
          <li>items</li>
          <li>content</li>
        </ul>

        <p className="text-center mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="flex justify-center mt-4">
          <button className="px-5 py-2 text-xl bg-amber-500 text-white">
            button
          </button>
        </div>
      </div>
    </div>
    </>
  )
}
function SlideContent2() {
  return (
    <>

    <div className="w-full max-w-7xl h-full min-h-96 flex justify-center items-center">
      {/* Image */}
      <div className="w-1/2 h-full border border-amber-300">
        <div className="w-full h-[420px] bg-amber-700"></div>
      </div>

      {/* Text */}
      <div className="w-1/2 h-full border border-amber-300 px-6">
        <div className="text-center">
          <h3 className="text-3xl">title</h3>
          <h3 className="text-5xl">this is heading</h3>

          <div className="flex justify-center items-center gap-1 mt-2">
            <div className="w-1/4 h-[2px] bg-amber-600"></div>
            <div className="w-5 h-5 bg-amber-500 outline outline-amber-500"></div>
            <div className="w-1/4 h-[2px] bg-amber-600"></div>
          </div>
        </div>

        <ul className="flex justify-center gap-5 list-disc mt-4">
          <li>list</li>
          <li>items</li>
          <li>content</li>
        </ul>

        <p className="text-center mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="flex justify-center mt-4">
          <button className="px-5 py-2 text-xl bg-amber-500 text-white">
            button
          </button>
        </div>
      </div>
    </div>
    </>
  )
}