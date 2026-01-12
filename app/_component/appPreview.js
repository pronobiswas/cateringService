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
    const imageRefs = useRef([]);

    useLayoutEffect(() => {

        const ctx = gsap.context(() => {

            // Background color animation
            gsap.from(mobileInnerRef.current, {
                background: "red",
                scrollTrigger: {
                    trigger: appPreviewRef.current,
                    start: 'top -100',
                    end: '+=1200',
                    pin: true,
                    scrub: true,
                }
            })

            // Slider animation - show one image at a time, fully visible
            const totalImages = imageRefs.current.filter(Boolean).length;
            
            imageRefs.current.forEach((img, index) => {
                if (!img) return;
                
                // Set initial opacity - only first image visible
                gsap.set(img, { 
                    opacity: index === 0 ? 1 : 0,
                    zIndex: index === 0 ? 2 : 1
                });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: appPreviewRef.current,
                        start: 'top -100',
                        end: '+=1200',
                        scrub: true,
                    }
                });

                // Calculate time segments for each image transition
                const segmentDuration = 1 / (totalImages - 1); // Divide scroll into segments
                const fadeStart = index * segmentDuration;
                const fadeEnd = fadeStart + segmentDuration * 0.3; // 30% of segment for fade

                if (index < totalImages - 1) {
                    // Fade out current image
                    tl.to(img, 
                        { 
                            opacity: 0,
                            zIndex: 1,
                            ease: 'power2.inOut' 
                        },
                        fadeStart
                    );
                }

                if (index > 0) {
                    // Fade in next image
                    tl.to(img, 
                        { 
                            opacity: 1,
                            zIndex: 2,
                            ease: 'power2.inOut' 
                        },
                        fadeStart - segmentDuration
                    );
                }
            });

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
                            <div ref={mobileInnerContentRef} className='w-full h-full overflow-hidden relative'>
                                {[
                                    { src: '/gallery-1s.jpg', alt: 'Image 1' },
                                    { src: '/gallery-2s.jpg', alt: 'Image 2' },
                                    { src: '/gallery-3s.jpg', alt: 'Image 3' },
                                    { src: '/gallery-4s.jpg', alt: 'Image 4' },
                                    { src: '/gallery-1s.jpg', alt: 'Image 5' }
                                ].map((image, index) => (
                                    <img 
                                        key={index}
                                        ref={(el) => imageRefs.current[index] = el}
                                        src={image.src} 
                                        alt={image.alt} 
                                        className='w-full h-full object-cover absolute top-0 left-0'
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}