'use client';
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { PiPlus } from 'react-icons/pi';
import { Scale } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Foodmenu() {
    const formTheMenuRef = useRef(null);
    const formTheMenuGalaryRef = useRef(null);
    const menuListRef = useRef(null);
    useLayoutEffect(() => {
        let splitHeading = SplitText.create('.menuHeading', {
            type: "chars, words, lines",
            mask: "lines",
            linesClass: "line++",
        });
        const ctx = gsap.context(() => {
            gsap.from(splitHeading.lines, {
                y: '80',
                duration: 1,
                scrollTrigger: {
                    trigger: menuListRef.current,
                    start: 'top 65%',
                    end: '+=100',
                    scrub: true,
                }
            })
            gsap.from('.galaryItem', {
                filter: 'blur(5px)',
                scale:1.1,
                duration: 0.5,
                stagger:0.5,
                scrollTrigger: {
                    trigger: formTheMenuGalaryRef.current,
                    start: 'top 70%',
                    end: '+=400',
                    scrub: true,
                }
            })

        }, formTheMenuRef)

        return () => ctx.revert()
    }, [])
    return (
        <>
            <section ref={formTheMenuRef} id='foodMenu'>
                {/* =====wrapper===== */}
                <div className='w-full h-full flex justify-center items-center p-5 py-12 lg:py-40' >
                    <div className='w-full max-w-7xl h-full flex flex-col justify-center items-center gap-12 lg:flex-row'>
                        {/* ---ptoto galary---- */}
                        <div ref={formTheMenuGalaryRef} className='w-full lg:w-1/2 max-w-3xl h-full flex flex-wrap'>
                            <div className='galaryItem w-1/2 aspect-square relative group overflow-hidden'>
                                <img
                                    src='gallery-1s.jpg'
                                    alt='glaryImage'
                                    className='w-full h-full object-cover group-hover:scale-125 transition-all transition-'
                                />
                                {/* --image overlay-- */}
                                <div className='absolute w-full h-full bg-black/10 top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 ease-in-out'>
                                    <span className='text-7xl text-amber-400'><PiPlus /></span>
                                </div>
                            </div>

                            <div className='galaryItem w-1/2 aspect-square relative group overflow-hidden'>
                                <img
                                    src='gallery-2s.jpg'
                                    alt='glaryImage'
                                    className='w-full h-full object-cover group-hover:scale-125 transition-all transition-'
                                />
                                {/* --image overlay-- */}
                                <div className='absolute w-full h-full bg-black/10 top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 ease-in-out'>
                                    <span className='text-7xl text-amber-400'><PiPlus /></span>
                                </div>
                            </div>

                            <div className='galaryItem w-1/2 aspect-square relative group overflow-hidden'>
                                <img
                                    src='gallery-3s.jpg'
                                    alt='glaryImage'
                                    className='w-full h-full object-cover group-hover:scale-125 transition-all transition-'
                                />
                                {/* --image overlay-- */}
                                <div className='absolute w-full h-full bg-black/10 top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 ease-in-out'>
                                    <span className='text-7xl text-amber-400'><PiPlus /></span>
                                </div>
                            </div>

                            <div className='galaryItem w-1/2 aspect-square relative group overflow-hidden'>
                                <img
                                    src='gallery-4s.jpg'
                                    alt='glaryImage'
                                    className='w-full h-full object-cover group-hover:scale-125 transition-all transition-'
                                />
                                {/* --image overlay-- */}
                                <div className='absolute w-full h-full bg-black/10 top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 ease-in-out'>
                                    <span className='text-7xl text-amber-400'><PiPlus /></span>
                                </div>
                            </div>
                        </div>
                        {/* ---==from the menu==---- */}
                        <div ref={menuListRef} className='w-full lg:w-1/2 max-w-3xl h-full'>
                            {/* ----heading---- */}
                            <div>
                                <h3 className='menuHeading text-6xl font-tangerine text-amber-600'><b>From the menu</b></h3>
                                <h2 className='menuHeading text-4xl'>Special offers</h2>
                            </div>
                            {/* ----menu list---- */}
                            <ul className='pt-8 w-full flex flex-col gap-5'>
                                <li className='flex justify-between gap-8 items-center'>
                                    <div className='flex items-center gap-5'>
                                        <div className='w-24 h-24 bg-amber-600 rounded-full shrink-0 flex justify-center items-center overflow-hidden p-1'>
                                            <img src='/breakfast.jpg' alt='breakfast' className='w-full h-full object-cover rounded-full' />

                                        </div>
                                        <div>
                                            <h4 className='text-xl mb-2'>Royal breakfast</h4>
                                            <p>Fried eggs, fried bacon, toast, fresh tomato salad, cup of coffee or tea</p>
                                        </div>
                                    </div>
                                    <div className='border-y-2 border-y-amber-600 py-5'>
                                        <span className='text-5xl text-amber-600 font-tangerine'>$15</span>
                                    </div>
                                </li>
                                <li className='flex justify-between gap-8 items-center'>
                                    <div className='flex items-center gap-5'>
                                        <div className='w-24 h-24 bg-amber-600 rounded-full shrink-0'>

                                        </div>
                                        <div>
                                            <h4 className='text-xl mb-2'>Royal lunch</h4>
                                            <p>Fried eggs, fried bacon, toast, fresh tomato salad, cup of coffee or tea</p>
                                        </div>
                                    </div>
                                    <div className='border-y-2 border-y-amber-600 py-5'>
                                        <span className='text-5xl text-amber-600 font-tangerine'>$27</span>
                                    </div>
                                </li>
                                <li className='flex justify-between gap-8 items-center'>
                                    <div className='flex items-center gap-5'>
                                        <div className='w-24 h-24 bg-amber-600 rounded-full shrink-0'></div>
                                        <div>
                                            <h4 className='text-xl mb-2'>Royal dinner</h4>
                                            <p>Fried eggs, fried bacon, toast, fresh tomato salad, cup of coffee or tea</p>
                                        </div>
                                    </div>
                                    <div className='border-y-2 border-y-amber-600 py-5'>
                                        <span className='text-5xl text-amber-600 font-tangerine'>$32</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
