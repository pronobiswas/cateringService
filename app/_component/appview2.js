'use client'
import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Appview2() {
    const sectionRef = useRef(null)
    const containerRef = useRef(null)
    const imageRef = useRef(null)
    const titleRef = useRef(null)

    const states = [
        {
            image: '/gallery-1s.jpg',
            bg: '#FFFBEB',
            title: 'Easy to use',
            bgImage: 'slider1.jpg'
        },
        {
            image: '/gallery-2s.jpg',
            bg: '#EFF6FF',
            title: 'Fast ordering',
            bgImage: 'slider2.jpg'
        },
        {
            image: '/gallery-3s.jpg',
            bg: '#ECFDF5',
            title: 'Secure payment',
            bgImage: 'slider3.jpg'
        },
        {
            image: '/gallery-4s.jpg',
            bg: '#FDF2F8',
            title: 'Track your food',
            bgImage: 'slider2.jpg'
        },
    ]

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top -200',
                end: `+=${states.length * 400}`,
                pin: true,
                scrub: true,
                markers: true,

                onUpdate(self) {
                    const index = Math.round(
                        self.progress * (states.length - 1)
                    )

                    const state = states[index]

                    // ✅ IMAGE (deterministic)
                    if (imageRef.current.src !== state.image) {
                        imageRef.current.src = state.image
                    }

                    // ✅ BACKGROUND
                    gsap.to(containerRef.current, {
                        backgroundColor: state.bg,
                        // backgroundImage: `url(${state.bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        duration: 0.3,
                        overwrite: 'auto',
                    })

                    // ✅ TITLE
                    if (titleRef.current.textContent !== state.title) {
                        titleRef.current.textContent = state.title

                        gsap.fromTo(
                            titleRef.current,
                            { y: 20, opacity: 0 },
                            {
                                y: 0,
                                opacity: 1,
                                duration: 0.4,
                                ease: 'power2.out',
                                overwrite: 'auto',
                            }
                        )
                    }
                },
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} id="appPreview">
            <div
                ref={containerRef}
                className="w-full h-screen flex flex-col justify-center items-center bg-amber-50"
            >
                <h2 className="text-center text-4xl text-amber-600 font-tangerine mb-8">
                    <b ref={titleRef}>{states[0].title}</b>
                </h2>

                <div className="w-xs aspect-[1/2] rounded-[70px] px-2 py-12 relative flex justify-center items-center">
                    <img
                        src="/mobileframe.png"
                        className="absolute inset-0 w-full h-full z-20"
                        alt="frame"
                    />

                    <div className="w-full h-full z-10">
                        <img
                            ref={imageRef}
                            src={states[0].image}
                            className="w-full h-full object-cover"
                            alt="screen"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
