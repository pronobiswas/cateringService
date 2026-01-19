'use client'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin( SplitText);

export default function Banner() {
  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const paragraphRef = useRef(null);
   useEffect(() => {
          if (!headingRef.current || !subHeadingRef.current) return
  
          const ctx = gsap.context(() => {
              const splitHeading = new SplitText(headingRef.current, {
                  type: 'chars,words,lines',
                  linesClass: 'line ',
                  mask: 'lines'
              })
  
              const splitSubHeading = new SplitText(subHeadingRef.current, {
                  type: 'chars,words,lines',
                  linesClass: 'line',
                  mask: 'lines'
              })
              const splitParagraph = new SplitText(paragraphRef.current, {
                  type: 'chars,words,lines',
                  linesClass: 'line',
                  mask: 'lines'
              })
  
  
              gsap.from(splitHeading.lines, {
                  y: 180,
                  opacity: 0,
                  duration: 1,
                  stagger: 1,
                  ease: 'power3.out',
              })
  
              gsap.from(splitSubHeading.lines, {
                  y: 60,
                  opacity: 0,
                  duration: 0.8,
                  stagger: 0.02,
                  ease: 'power3.out',
              })
              gsap.from(splitParagraph.words, {
                  y: 60,
                  opacity: 0,
                  duration: 0.8,
                  stagger: 0.02,
                  ease: 'power3.out',
              })
              gsap.from('.bannerhorizontalLine', {
                  width:'0',
                  duration: 0.8,
                  stagger: 0.02,
                  ease: 'power3.out',
              })
              gsap.from('.bottomImage', {
                  y: 360,
                  duration:1.5,
                  ease: 'power3.out',
              })
  
  
  
          }, bannerRef)
  
          return () => ctx.revert()
      }, [])

  const handleMouseMove = (e) => {
    const banner = bannerRef.current;
    const flotingImages = banner.querySelectorAll('.flotingImage');
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const normX = (mouseX - rect.width / 2) / (rect.width / 2);
    const normY = (mouseY - rect.height / 2) / (rect.height / 2);

    const maxMove = 50;
    const targetX = normX * maxMove;
    const targetY = normY * maxMove;

    // flotingImages.forEach((image, i) => {
    //   gsap.to(image, {
    //     x: targetX * 1.1,
    //     y: targetY * 1.1,
    //     duration: 0.6, ease: "power3.out",
    //   });
    // });
    gsap.to(flotingImages[0], {
        x: targetX * 0.2,
        y: targetY * 0.2,
        duration: 0.6, ease: "power3.out",
      });
      gsap.to(flotingImages[1], {
        x: targetX * 0.4,
        y: targetY * 0.4,
        duration: 0.6, ease: "power3.out",
      });
      gsap.to(flotingImages[2], {
        x: targetX * 0.1,
        y: targetY * 0.1,
        duration: 0.6, ease: "power3.out",
      });
      gsap.to(flotingImages[3], {
        x: targetX * 0.5,
        y: targetY * 0.5,
        duration: 0.6, ease: "power3.out",
      });
      gsap.to(flotingImages[4], {
        x: targetX * 0.5,
        y: targetY * 0.5,
        duration: 0.6, ease: "power3.out",
      });
      gsap.to(flotingImages[5], {
        x: -targetX * 0.2,
        y: -targetY * 0.2,
        duration: 0.6, ease: "power3.out",
      });
      gsap.to(flotingImages[6], {
        x: targetX * 0.2,
        y: targetY * 0.2,
        duration: 0.6, ease: "power3.out",
      });
      gsap.to(flotingImages[7], {
        x: targetX * 0.9,
        y: targetY * 0.9,
        duration: 0.6, ease: "power3.out",
      });

  };


  return (
    <>
      <section id="banner" ref={bannerRef}>
        <div onMouseMove={handleMouseMove} className='w-full h-screen border-4 overflow-hidden'>
          {/* ===wrapper=== */}
          <div
            style={{
              backgroundImage: `
              linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.1)
              ),
              url("/slide01.jpg")
            `,
              backgroundSize: '100% 100%',
              backgroundPosition: 'enter center'
            }}
            className='w-full h-full flex justify-between '>
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
            <div className='w-full lg:w-4/8 h-full flex items-center justify-center relative' >
              <div className='w-full max-w-xl h-96 absolute md:static text-white text-center z-50'>
                <h2 ref={titleRef} className='text-5xl text-amber-500 font-tangerine'> <b>Discover</b></h2>
                <h1 ref={headingRef} className='text-7xl font-tangerine'>Meal Deal</h1>
                {/* ----divider---- */}
                <div className='w-full max-w-xl mx-auto flex items-center justify-baseline mt-5 mb-8'>
                  <div className='w-full flex flex-col gap-2 items-end'>
                    <div className='bannerhorizontalLine w-4/5 h-[2px] bg-amber-600'></div>
                    <div className='bannerhorizontalLine w-full h-[2px] bg-amber-600'></div>
                  </div>
                  <div>
                    <svg width="48" height="48" viewBox="0 0 482 646" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="482" height="646" fill="transparent" />
                      <path d="M362.599 7.98871C418.425 -14.4622 453.007 11.241 452.216 74.6071C451.426 135.036 416.745 204.697 358.153 220.958C340.269 225.889 323.274 226.413 306.576 233.547C295.608 238.163 286.32 245.612 279.503 255.893C206.188 365.735 157.575 479.144 89.9918 593.287C31.6959 691.693 -39.7412 638.503 27.3484 546.706C105.307 440.222 188.996 352.936 261.223 242.15C267.942 231.764 271.4 220.014 271.697 207.529C272.29 188.541 266.855 171.335 265.176 151.822C259.544 87.9308 309.342 29.3906 362.599 7.98871Z" fill="#CC7007" />
                      <path d="M193.996 198.195C194.204 178.267 194.308 156.5 182.049 141.579C157.012 111.432 72.0328 9.33957 65.3841 1.06182C63.5141 -1.28865 60.7092 0.653047 62.2675 3.10571C84.3953 37.3408 116.081 83.6349 138.209 117.87C142.572 124.615 136.858 127.068 132.495 121.753C105.692 90.8907 71.6173 46.0273 44.8145 15.0624C42.8406 12.8142 40.3473 14.7559 41.9056 17.1063C64.4491 51.0349 93.849 99.1684 116.289 133.301C120.029 139.024 113.588 143.419 109.432 138.002C84.6031 105.607 48.6583 61.9697 23.9332 29.4719C22.1672 27.2236 19.4661 28.8587 20.9205 31.4135C41.2823 66.7728 72.4484 113.578 92.8102 148.937C96.4462 154.762 92.083 159.157 87.0964 152.923C61.9558 120.731 28.6081 75.6637 3.46752 43.4725C1.70145 41.2242 -1.1035 43.0637 0.4548 45.6186C6.06469 54.6117 74.5261 168.15 94.784 201.567C104.757 218.021 125.639 225.379 144.754 232.021C170.933 241.014 184.231 255.832 199.814 278.213C270.665 380.203 320.115 485.157 387.641 590.724C448.83 686.48 524.044 634.667 453.505 545.349C375.694 446.834 292.481 365.283 219.241 264.826C203.138 242.854 193.684 225.481 193.996 198.195Z" fill="#CC7007" />
                    </svg>

                  </div>
                  <div className='w-full flex flex-col gap-2'>
                    <div className='bannerhorizontalLine w-4/5 h-[2px] bg-amber-600'></div>
                    <div className='bannerhorizontalLine w-full h-[2px] bg-amber-600'></div>
                  </div>
                </div>
                <h5 ref={subHeadingRef} className='text-2xl'>Order Fresh Food or Sell Your Dishes — All in One App</h5>
                <p ref={paragraphRef} className='text-base md:text-xl'>
                  <strong> A food service platform where customers order delicious meals and chefs earn by cooking. </strong>
                </p>
              </div>
              <img
                src='/slide01-11.png'
                className='bottomImage w-full h-40 object-contain absolute bottom-0 left-0 z-50'
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
                className='flotingImage w-1/3 h-4/5 object-contain absolute top-24 lg:top-64 left-0'
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
