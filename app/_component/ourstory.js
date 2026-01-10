'use client'

import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Ourstory() {
    const storyMainRef = useRef(null);
    const boxRef = useRef(null);
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
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.03,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 90%',
                    end: '+=100',
                    scrub: true,
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
                    start: 'top 85%',
                    end: '+=100',
                    scrub: true,
                },
            })
            gsap.from(boxRef.current, {
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.02,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: boxRef.current,
                    start: 'top 95%',
                    end: '+=100',
                    scrub: true,
                },
            })
            gsap.from(splitParagraph.words, {
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.02,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: paragraphRef.current,
                    start: 'top 85%',
                    end: '+=200',
                    scrub: true,
                },
            })
            gsap.from('.horizontalLine', {
                width:'0',
                duration: 0.8,
                stagger: 0.02,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: boxRef.current,
                    start: 'top 75%',
                    end: '+=100',
                    scrub: true,
                },
            })



        }, storyMainRef)

        return () => ctx.revert()
    }, [])
    return (
        <>
            <section ref={storyMainRef} id='ourStory'>
                <div className='w-full h-screen bg-[url("/bkg-img1.jpg")] flex items-center justify-center py-40'>
                    <div className='w-full h-full flex flex-col gap-8 md:flex-row md:gap-1 justify-center items-center'>
                        {/* -------------------- */}
                        <div className='w-full block md:hidden'>
                            <img
                                className='w-full h-full max-w-80 mx-auto object-cover'
                                src='/spices-top.png' />
                        </div>
                        {/* -------------------- */}
                        <div className='w-1/4 hidden md:flex justify-end'>
                            <img
                                className='aspect-157/332'
                                src='/spices-left.png' />
                        </div>
                        {/* ============================ */}
                        <div ref={boxRef} className='w-full h-full flex flex-col justify-center items-center max-w-xl bg-[url("/bkg-img2.png")] bg-cover bg-center border-[20px] text-center'>
                            <h3 ref={headingRef} className='text-3xl'>Our story</h3>
                            <h2 ref={subHeadingRef} className='text-5xl' >Love for food</h2>
                            <div className='w-full p-5 flex items-center justify-center'>
                                <div className='horizontalLine w-36 h-[2px] bg-amber-600'></div>
                                <div className='w-5 h-5 rounded-full border border-amber-600 shrink-0 flex justify-center items-center'>
                                    <div className='w-2 h-2 bg-amber-600 rounded-full' ></div>
                                </div>
                                <div className='horizontalLine w-36 h-[2px] bg-amber-600'></div>
                            </div>
                            <p ref={paragraphRef} className='text-gray-600 w-full max-w-96'>A home-cooked food marketplace where passionate chefs share their meals and food lovers discover authentic flavors, made with care and love.Connect with local chefs, order freshly cooked meals, and enjoy safe, home-style food—made by people who truly love cooking.A trusted platform where chefs cook, customers enjoy, and everyone connects through the joy of real, homemade food.</p>
                        </div>
                        <div className='w-1/4 hidden md:block'>
                            <img src='/spices-right.png' />
                        </div>
                        {/* -------------------- */}
                        <div className='w-full block md:hidden'>
                            <img
                                className='w-full h-full max-w-80 mx-auto object-cover'
                                src='/spices-bottom.png' />
                        </div>
                        {/* -------------------- */}
                    </div>
                </div>
            </section>
        </>
    )
}
