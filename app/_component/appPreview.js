'use client'
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(Draggable, ScrollTrigger);

export default function AppPreview() {

    const appPreviewRef = useRef(null);
    const appPrevieContainerwRef = useRef(null);
    const mobileFrameRef = useRef(null);
    const mobileInnerRef = useRef(null);
    const mobileInnerContentRef = useRef(null);

    useLayoutEffect(() => {

        const ctx = gsap.context(() => {

            gsap.from(mobileInnerRef.current, {
                background: "red",
                scrollTrigger: {
                    trigger: appPreviewRef.current,
                    start: 'top -100',
                    end: '+=1200',
                    pin: true,
                    scrub: true,
                    markers: true,
                }
            })

        }, appPreviewRef)

        return () => ctx.revert()
    }, [])
    return (
        <>
            <section ref={appPreviewRef} id='appPreview'>
                <div ref={appPrevieContainerwRef} className='w-full h-screen flex justify-center items-center'>
                    {/* ===mobile== */}
                    <div ref={mobileFrameRef} className='w-full max-w-[400px] h-4/5 rounded-[70px] px-3 py-18 relative flex justify-center items-center '>
                    <img src='/mobileframe.png' alt='mobile frame' className='w-full h-full object-fill absolute top-0 left-0 z-20' />
                    {/* ====mobile inner===== */}
                        <div ref={mobileInnerRef} className='w-full h-full z-10 p-7 bg-amber-300'>
                            {/* ===app content=== */}
                            <div ref={mobileInnerContentRef} className='w-full h-full'></div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}
