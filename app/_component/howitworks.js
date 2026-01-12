'use client'
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BiDish } from 'react-icons/bi';
import { GiHotMeal, GiReceiveMoney } from 'react-icons/gi';
import { IoFastFoodOutline } from 'react-icons/io5';
import { PiChefHatLight } from 'react-icons/pi';
import { TbShoppingBagCheck } from 'react-icons/tb';
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Howitworks() {
  const howItsWorkRef = useRef(null);
  const headingRef = useRef(null);
  // useLayoutEffect(() => {
  //   let splitHeading = SplitText.create(headingRef.current, {
  //     type: "chars, words, lines",
  //     mask: "lines",
  //     linesClass: "line++",
  //   });
  //   const ctx = gsap.context(() => {
  //     gsap.from(splitHeading.lines, {
  //       y: '80',
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: howItsWorkRef.current,
  //         start: 'top 70%',
  //         end: '+=100',
  //         scrub: true,
  //         markers: true,
  //       }
  //     })
  //     gsap.from('.workLine', {
  //       width: '0',
  //       duration: 0.5,
  //       scrollTrigger: {
  //         trigger: howItsWorkRef.current,
  //         start: 'top 70%',
  //         end: '+=200',
  //         scrub: true,
  //         markers: true,
  //       }
  //     })
  //     gsap.from('.title', {
  //       filter: 'blur(5px)',
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: howItsWorkRef.current,
  //         start: 'top 80%',
  //         end: '+=200',
  //         scrub: true,
  //       }
  //     })
  //     gsap.from('.centerLine', {
  //       height: '200px',
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: howItsWorkRef.current,
  //         start: 'top 55%',
  //         end: '+=200',
  //         scrub: true,
  //       }
  //     })
  //   }, howItsWorkRef)

  //   return () => ctx.revert()
  // }, [])
  useLayoutEffect(() => {
    let split

    const ctx = gsap.context(() => {
      // Split heading text
      split = new SplitText(headingRef.current, {
        type: 'lines',
        linesClass: 'line',
        mask: "lines",
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: howItsWorkRef.current,
          start: 'top 80%',
          end: '+=400',
          scrub: true,
        },
      })
      tl.from(split.lines, {
        y: 80,
        stagger: 0.15,
        duration:1,
        ease: 'power2.out',
      })
      .from('.workLine',{
          width:'0',
          duration:1
        })
      .from('.title',{
          filter: 'blur(5px)',
          opacity: 0,
          duration: 1,
        })
        .from('.centerLine',{
          opacity: 0,
          ease: 'none',
          duration: 1,
        })
        .from('.centerLine',{
          height: '200px',
          ease: 'none',
          duration: 1,
        })
    }, howItsWorkRef)

    return () => {
      ctx.revert()
      split?.revert()
    }
  }, [])
  return (
    <>
      <section ref={howItsWorkRef} id='howItWorks' className='w-full h-full bg-amber-50/20 py-12'>
        <h2 ref={headingRef} className='heading text-4xl text-center py-5 text-amber-600'>How its work</h2>
        <div className='w-full h-fit flex flex-col justify-center items-center'>
          <div className='w-xs flex justify-center items-center gap-1'>
            <div className='workLine w-1/3 h-[2px] bg-amber-600'></div>
            <div className='w-2 h-2 bg-amber-600 outline-2 outline-amber-600 outline-offset-2'></div>
            <div className='workLine w-1/3 h-[2px] bg-amber-600'></div>
          </div>
        </div>
        <div className='w-full h-full max-w-7xl mx-auto flex'>
          {/* ====For Customers===== */}
          <div className='w-1/2 h-full p-5'>
            {/* ------customer------ */}
            <h3 className='title text-xl text-center w-fit h-fit mx-auto border-2 border-amber-500 px-4 py-2 rounded-xl  bg-gradient-to-t from-orange-500 to-amber-400'>For Customer</h3>

            <div className='centerLine w-full h-[400px] relative flex items-center justify-center '>
              <div className='w-[2px] h-full bg-amber-500 relative'>
                {/* ---circle1--- */}
                <div className='iconCircle w-12 h-12 bg-amber-50 border-2 border-amber-500 rounded-full absolute top-1/5 left-1/2 -translate-x-1/2 flex justify-center items-center'>
                  <IoFastFoodOutline className='text-3xl  text-amber-600' />
                  <div className='circelText w-[100px] h-fit px-2 py-1 text-center bg-gradient-to-b from-orange-500 to-amber-400 border-2 border-amber-500 absolute top-1/5 left-14 -translate-y-1/3 rounded-2xl  '>Browse food</div>
                </div>
                {/* ---circle2--- */}
                <div className='iconCircle w-12 h-12 bg-amber-50 border-2 border-amber-500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 flex justify-center items-center'>
                  <TbShoppingBagCheck className='text-4xl  rounded-full text-amber-600' />
                  <div className='circelText w-[100px] h-fit px-2 py-1 text-center bg-gradient-to-b from-orange-500 to-amber-400 border-2 border-amber-500 absolute top-1/5 right-14 -translate-y-1/3 rounded-2xl '>Place order</div>
                </div>
                {/* ---circle3--- */}
                <div className='iconCircle w-12 h-12 bg-amber-50 border-2 border-amber-500 rounded-full absolute   top-4/5 left-1/2 -translate-x-1/2 flex justify-center items-center '>
                  <GiHotMeal className='text-3xl  text-amber-600' />
                  <div className='circelText w-[100px] h-fit px-2 py-1 text-center bg-gradient-to-b from-orange-500 to-amber-400 border-2 border-amber-500 absolute top-1/5 left-14 -translate-y-1/3 rounded-2xl'>Get fresh meals</div>
                </div>
              </div>

            </div>
          </div>
          {/* ====For Chefs===== */}
          <div className='w-1/2 h-full p-5'>
            {/* ------chef---- */}
            <h3 className='title text-xl text-center w-fit h-fit mx-auto border-2 border-amber-500 px-4 py-2 rounded-xl  bg-gradient-to-t from-orange-500 to-amber-400'>For Chef</h3>
            <div className='centerLine w-full h-[400px] relative flex items-center justify-center '>
              <div className='w-[2px] h-full bg-amber-500 relative'>
                {/* ---circle1--- */}
                <div className='w-12 h-12 bg-amber-50 border-2 border-amber-500 rounded-full absolute top-1/5 left-1/2 -translate-x-1/2 flex justify-center items-center'>
                  <PiChefHatLight className='text-3xl text-amber-600' />
                  <div className='w-[100px] h-fit px-2 py-1 text-center bg-gradient-to-b from-orange-500 to-amber-400 border-2 border-amber-500 absolute top-1/5 right-14 -translate-y-1/3 rounded-2xl '>Register as a chef</div>
                </div>
                {/* ---circle2--- */}
                <div className='w-12 h-12 bg-amber-50 border-2 border-amber-500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 flex justify-center items-center'>
                  <BiDish className='text-3xl text-amber-600' />
                  <div className='w-[100px] h-fit px-2 py-1 text-center bg-gradient-to-b from-orange-500 to-amber-400 border-2 border-amber-500 absolute top-1/5 left-14 -translate-y-1/3 rounded-2xl '>Upload dishes</div>
                </div>
                {/* ---circle3--- */}
                <div className='w-12 h-12 bg-amber-50 border-2 border-amber-500 rounded-full absolute top-4/5 left-1/2 -translate-x-1/2 flex justify-center items-center'>
                  <GiReceiveMoney className='text-3xl text-amber-600' />
                  <div className='w-[130px] h-fit px-2 py-1 text-center bg-gradient-to-b from-orange-500 to-amber-400 border-2 border-amber-500 absolute top-1/5 right-14 -translate-y-1/3 rounded-2xl '>Receive orders & earn</div></div>
                <div></div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
