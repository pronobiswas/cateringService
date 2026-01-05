'use client'
import React, { useRef } from "react";
import { gsap } from "gsap";

export default function Banner() {
   const bannerRef = useRef(null);
 
   const handleMouseMove = (e) => {
  const banner = bannerRef.current;
  const flotingImages = banner.querySelectorAll('.flotingImage'); // ✅ fixed

  const rect = e.currentTarget.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const normX = (mouseX - rect.width / 2) / (rect.width / 2);
  const normY = (mouseY - rect.height / 2) / (rect.height / 2);

  const maxMove = 50;
  const targetX = normX * maxMove;
  const targetY = normY * maxMove;

  flotingImages.forEach((image, i) => { 
    gsap.to(image, { 
      x: targetX * (0.2 + i * 0.2),  
      y: targetY * (0.2 + i * 0.2), 
      duration: 0.6, ease: "power3.out", 
    }); 
  });
};


  return (
    <>
      <section id="banner" ref={bannerRef}>
        <div onMouseMove={handleMouseMove} className='w-full h-screen border-4 overflow-hidden'>
          {/* ===wrapper=== */}
          <div className='w-full h-full flex justify-between bg-[url("/slide01.jpg")] '>
            {/* ====aside==== */}
            <aside className='w-2/8 h-full relative'>
              <img
                src='/slide01-01.png'
                className='w-full h-full object-contain'
              />
              <img
                src='/slide01-02.png'
                className='flotingImage w-1/3  xl:w-1/4 h-full object-contain absolute -top-24 lg:-top-44 right-0'
                
              />
              <img
                src='/slide01-03.png'
                className='flotingImage w-1/3 h-full object-contain absolute top-24 lg:top-44 right-0'
              />
              <img
                src='/slide01-04.png'
                className='flotingImage w-1/3 lg:w-1/4 h-full object-contain absolute top-44 lg:top-80 right-0'
              />
              <img
                src='/slide01-05.png'
                className='flotingImage w-1/4 lg:w-1/7 h-full object-contain absolute top-[220px] lg:top-[400px] right-8 lg:right-20'
                
              />
            </aside>
            {/* ===centerdiv=== */}
            <div className='w-4/8 h-full flex items-center justify-center' >
              <div className='w-full h-96 absolute md:static text-white text-center z-50'>
                <h2 className='text-3xl'>Discover</h2>
                <h1 className='text-5xl'>Meal Deal</h1>
                {/* ----divider---- */}
                <div className='w-full max-w-xl mx-auto flex items-center justify-baseline mt-5 mb-8'>
                  <div className='w-full flex flex-col gap-2 items-end'>
                    <div className='w-4/5 h-[2px] bg-white'></div>
                    <div className='w-full h-[2px] bg-white'></div>
                  </div>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" x="0px" y="0px" viewBox="0 0 612 792" width="40"> <g> <path className="st0" d="M250.8,276.6c0.2-19.5,0.3-40.8-11.5-55.4C215.2,191.7,133.4,91.8,127,83.7c-1.8-2.3-4.5-0.4-3,2..." fill="white" /> <path className="st0" d="M455.3,96.5c56.5-21.4,91.5,3.1,90.7,63.5c-0.8,57.6-35.9,124-95.2,139.5..." fill="white" /> </g> </svg>
                  </div>
                  <div className='w-full flex flex-col gap-2'>
                    <div className='w-4/5 h-[2px] bg-white'></div>
                    <div className='w-full h-[2px] bg-white'></div>
                  </div>
                </div>
                <h5 className='text-2xl'>Opening Hour</h5>
                <p className='text-base md:text-xl'>
                  <strong> Monday - Friday: </strong>
                  08:00 A.M. - 23:00 P.M.
                </p>
                <p className='text-base md:text-xl'>
                  <strong>Weekends :</strong>
                  08:00 A.M. - 02:00 P.M.
                </p>
              </div>
              <img
                src='/slide01-11.png'
                className='w-full h-40 object-contain absolute bottom-0 left-0'
              />
            </div>
            {/* ====aside==== */}
            <aside className='w-2/8 h-full relative'>
              <img
                src='/slide01-06.png'
                className='w-full h-full object-contain'
              />
              <img
                src='/slide01-07.png'
                className='flotingImage w-1/2 h-2/5 object-contain absolute top-[10%] lg:top-[15%] -left-5 '
              />
              <img
                src='/slide01-08.png'
                className='flotingImage w-1/3 h-4/5 object-contain absolute top-24 lg:top-44 left-0'
              />
              <img
                src='/slide01-09.png'
                className='flotingImage w-72 h-72 object-contain absolute top-0 lg:top-44 -left-20'
              />
              <img
                src='/slide01-10.png'
                className='flotingImage w-1/2 h-4/5 object-contain absolute top-12 lg:top-44 -left-30'
              />
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
