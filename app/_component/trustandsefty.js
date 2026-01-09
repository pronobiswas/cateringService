'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import { FcPrivacy } from 'react-icons/fc';
import { RiCustomerService2Line } from 'react-icons/ri';
import { MdOutlinePayment } from 'react-icons/md';
gsap.registerPlugin(ScrollTrigger,SplitText);

export default function Trustandsefty() {
  const trustAndSeftyRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
   useEffect(() => {
    if (!headingRef.current || !subHeadingRef.current) return
    const trustAndSeftyList =trustAndSeftyRef.current.querySelector('.trustAndSeftyList');
    const trustAndSeftyListItem =trustAndSeftyRef.current.querySelectorAll('.trustAndSeftyListItem');

    const ctx = gsap.context(() => {
      const splitHeading = new SplitText(headingRef.current, {
        type: 'chars,words,lines',
        linesClass: 'line ',
        mask:'lines'
      })

      const splitSubHeading = new SplitText(subHeadingRef.current, {
        type: 'chars,words,lines',
        linesClass: 'line',
        mask:'lines'
      })

      gsap.from(splitHeading.lines, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.03,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 70%',
          end:'+=100',
          scrub:true,
        },
      })

      gsap.from(splitSubHeading.lines, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.02,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: subHeadingRef.current,
          start: 'top 75%',
          end:'+=100',
          scrub:true,
        },
      })
      gsap.from('.trustAndSeftyListItem', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.02,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.trustAndSeftyList',
          start: 'top 75%',
          end:'+=250',
          scrub:true,
        },
      })

    }, trustAndSeftyRef)

    return () => ctx.revert()
  }, [])


  return (
    <>
      <section id='trustAndSefty' ref={trustAndSeftyRef}>
        <div className='w-full h-full max-w-7xl mx-auto text-center py-12 lg:py-40'>
          <h2 ref={headingRef} className='fromDown text-4xl'>Trust & Safety</h2>
          <p ref={subHeadingRef} className='fromDown text-3xl'>Your security is our priority</p>
          <ul className='trustAndSeftyList w-full h-full flex flex-wrap md:flex-nowrap py-12 items-start justify-center gap-5 lg:gap-8 [&>li]:border-2 [&>li]:border-amber-100 [&>li]:p-5'>
            <li className='trustAndSeftyListItem w-1/2 md:w-1/5 h-auto'>
              <div className='w-fit h-fit p-5  bg-gradient-to-b from-orange-500 to-amber-400 rounded-3xl mx-auto mb-5'>
                <IoShieldCheckmarkOutline className='text-5xl text-white'/>
              </div>
              <h5><strong>Verified chefs</strong></h5>
              <p>Background checked</p>
            </li>

            <li className='trustAndSeftyListItem w-1/2 md:w-1/5 h-auto'>
              <div className='w-fit h-fit p-5  bg-gradient-to-b from-orange-500 to-amber-400 rounded-3xl mx-auto mb-5'>
                <MdOutlinePayment className='text-5xl text-white'/>
              </div>
              <h5><strong>Secure payments</strong></h5>
              <p>Encrypted transactions</p>
            </li>
            <li className='trustAndSeftyListItem w-1/2 md:w-1/5 h-auto'>
              <div className='w-fit h-fit p-5  bg-gradient-to-b from-orange-500 to-amber-400 rounded-3xl mx-auto mb-5'><FcPrivacy className='text-5xl text-white'/></div>
              <h5> <strong>Privacy protected</strong></h5>
              <p>Your data is safe</p>
            </li>
            <li className='trustAndSeftyListItem w-1/2 md:w-1/5 h-auto'>
              <div className='w-fit h-fit p-5  bg-gradient-to-b from-orange-500 to-amber-400 rounded-3xl mx-auto mb-5'><RiCustomerService2Line className='text-5xl text-white'/></div>
              <h5><strong>Customer support</strong></h5>
              <p>Available 24/7</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
