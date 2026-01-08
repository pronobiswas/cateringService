'use client'
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

export default function Eventslider() {
  const sliderRef = useRef(null)
  const dragRef = useRef(null)
  const autoplayRef = useRef(null)
  const isAnimating = useRef(false)
  const isDragging = useRef(false)

  const [currentIndex, setCurrentIndex] = useState(0)

  /* ---------------- INIT ---------------- */
  useEffect(() => {
    const slides = sliderRef.current.querySelectorAll('.event-slide')
    gsap.set(slides, { opacity: 0, x: 0 })
    gsap.set(slides[0], { opacity: 1 })
  }, [])

  /* ---------------- SLIDE CHANGE ---------------- */
  const goToSlide = (index, direction = 1) => {
    if (isAnimating.current || index === currentIndex) return
    isAnimating.current = true

    const slides = sliderRef.current.querySelectorAll('.event-slide')
    const current = slides[currentIndex]
    const next = slides[index]

    const offset = direction * window.innerWidth

    gsap.timeline({
      onComplete: () => {
        setCurrentIndex(index)
        isAnimating.current = false
      },
    })
      .to(current, {
        x: -offset,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      })
      .fromTo(
        next,
        { x: offset, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        0
      )
  }

  const nextSlide = () => {
    const next = (currentIndex + 1) % sliderRef.current.children.length
    goToSlide(next, 1)
  }

  const prevSlide = () => {
    const prev =
      (currentIndex - 1 + sliderRef.current.children.length) %
      sliderRef.current.children.length
    goToSlide(prev, -1)
  }

  /* ---------------- AUTOPLAY ---------------- */
  useEffect(() => {
    autoplayRef.current = setInterval(nextSlide, 4500)
    return () => clearInterval(autoplayRef.current)
  }, [currentIndex])

  /* ---------------- DRAG / SWIPE ---------------- */
  useEffect(() => {
    let startX = 0
    let currentX = 0
    const threshold = 50

    const draggable = Draggable.create(dragRef.current, {
      type: 'x',
      bounds: { minX: -300, maxX: 300 },
      onDragStart() {
        isDragging.current = true
        clearInterval(autoplayRef.current)
        startX = this.x
      },
      onDrag() {
        if (isAnimating.current) return
        
        currentX = this.x
        const delta = currentX - startX
        const slides = sliderRef.current.querySelectorAll('.event-slide')
        const currentSlide = slides[currentIndex]
        
        // Move current slide with drag
        gsap.set(currentSlide, { 
          x: delta,
        })
      },
      onDragEnd() {
        if (isAnimating.current) {
          isDragging.current = false
          return
        }

        const delta = currentX - startX
        const slides = sliderRef.current.querySelectorAll('.event-slide')
        const currentSlide = slides[currentIndex]

        // Reset draggable immediately
        gsap.set(this.target, { x: 0 })

        if (Math.abs(delta) >= threshold) {
          // Trigger slide change
          if (delta < 0) {
            nextSlide()
          } else {
            prevSlide()
          }
        } else {
          // Smoothly return to position
          gsap.to(currentSlide, {
            x: 0,
            duration: 0.3,
            ease: 'power2.out',
            onComplete: () => {
              autoplayRef.current = setInterval(nextSlide, 4500)
            }
          })
        }
        
        isDragging.current = false
      },
    })

    return () => {
      if (draggable[0]) draggable[0].kill()
    }
  }, [currentIndex])

  /* ---------------- JSX ---------------- */
  return (
    <section 
    id="eventSlider" 
    className="relative w-full p-5 py-20 overflow-hidden bg-gray-50">
      <div
        ref={dragRef}
        className="relative w-full select-none touch-pan-y cursor-grab active:cursor-grabbing"
      >
        {/* SLIDER */}
        <div ref={sliderRef} className="relative w-full min-h-[450px]">
          {/* ===== SLIDE 1 ===== */}
          <div className="event-slide absolute inset-0 w-full flex justify-center">
            <SlideContent />
          </div>

          {/* ===== SLIDE 2 ===== */}
          <div className="event-slide absolute inset-0 w-full flex justify-center">
            <SlideContent1 />
          </div>

          {/* ===== SLIDE 3 ===== */}
          <div className="event-slide absolute inset-0 w-full flex justify-center">
            <SlideContent2 />
          </div>
        </div>
      </div>

      {/* PAGINATION */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {[0, 1, 2].map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i, i > currentIndex ? 1 : -1)}
            className={`h-3 rounded-full transition-all ${
              i === currentIndex
                ? 'w-8 bg-amber-500'
                : 'w-3 bg-amber-500/40'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

/* ---------------- SLIDE CONTENT (REUSED) ---------------- */
function SlideContent() {
  return (
    <div className="w-full max-w-7xl h-full min-h-96 flex justify-center items-center">
      {/* Image */}
      <div className="w-1/2 h-full order-1 lg:order-2">
        <div className="w-full h-full">
          <img src='/img-01.jpg' className='w-full h-full object-cover' />
        </div>
      </div>

      {/* Text */}
      <div className="w-1/2 h-full px-6 order-2 lg:order-1">
        <div className="text-center">
          <h3 className="text-3xl">Catering</h3>
          <h3 className="text-5xl">Special events</h3>

          <div className="flex justify-center items-center gap-1 mt-2">
            <div className="w-1/4 h-[2px] bg-amber-600"></div>
            <div className="w-5 h-5 bg-amber-500 outline outline-amber-500"></div>
            <div className="w-1/4 h-[2px] bg-amber-600"></div>
          </div>
        </div>

        <ul className="flex justify-center gap-5 list-disc mt-4">
          <li>Weddings</li>
          <li>Anniversaires</li>
          <li>Baby showers</li>
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
  )
}

function SlideContent1() {
  return (
    <div className="w-full max-w-7xl h-full min-h-96 flex justify-center items-center">
      {/* Image */}
      <div className="w-1/2 h-full order-1 lg:order-2">
        <div className="w-full h-full">
          <img src='/img-09.jpg' className='w-full h-full object-cover' />
        </div>
      </div>

      {/* Text */}
      <div className="w-1/2 h-full px-6 order-2 lg:order-1">
        <div className="text-center">
          <h3 className="text-3xl">Catering</h3>
          <h3 className="text-5xl">Corporate events</h3>

          <div className="flex justify-center items-center gap-1 mt-2">
            <div className="w-1/4 h-[2px] bg-amber-600"></div>
            <div className="w-5 h-5 bg-amber-500 outline outline-amber-500"></div>
            <div className="w-1/4 h-[2px] bg-amber-600"></div>
          </div>
        </div>

        <ul className="flex justify-center gap-5 list-disc mt-4">
          <li>Meetings,</li>
          <li>Team buildings,</li>
          <li>Corporate parties</li>
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
  )
}

function SlideContent2() {
  return (
    <div className="w-full max-w-7xl h-full min-h-96 flex justify-center items-center">
      {/* Image */}
      <div className="w-1/2 h-full order-1 lg:order-2">
        <div className="w-full h-full">
          <img src='/img-09.jpg' className='w-full h-full object-cover' />
        </div>
      </div>

      {/* Text */}
      <div className="w-1/2 h-full px-6 order-2 lg:order-1">
        <div className="text-center">
          <h3 className="text-3xl">Catering</h3>
          <h3 className="text-5xl">Social events</h3>

          <div className="flex justify-center items-center gap-1 mt-2">
            <div className="w-1/4 h-[2px] bg-amber-600"></div>
            <div className="w-5 h-5 bg-amber-500 outline outline-amber-500"></div>
            <div className="w-1/4 h-[2px] bg-amber-600"></div>
          </div>
        </div>

        <ul className="flex justify-center gap-5 list-disc mt-4">
          <li>Birthdays,</li>
          <li>Family reunion,</li>
          <li>Or just because</li>
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
  )
}