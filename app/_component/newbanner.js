"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";

export default function Banner() {
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    // Mouse position relative to div
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalize to -1 … +1 range
    const normX = (mouseX - rect.width / 2) / (rect.width / 2);
    const normY = (mouseY - rect.height / 2) / (rect.height / 2);

    // Scale to max 100px
    const maxMove = 50;
    const targetX = normX * maxMove;
    const targetY = normY * maxMove;

    // Animate with GSAP
    gsap.to(imgRef.current, {
      x: targetX,
      y: targetY,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <section id="banner">
      <div
        onMouseMove={handleMouseMove}
        className="w-full h-screen border-4 border-red-500 overflow-hidden"
      >
        <div className="w-full h-full flex justify-between bg-[url('/slide01.jpg')]">
          <aside className="w-2/8 h-full relative">
            <img
              src="/slide01-01.png"
              className="w-full h-full object-contain"
            />
            <img
              ref={imgRef}
              src="/slide01-02.png"
              className="w-1/2 h-full object-contain absolute -top-24 lg:-top-44 right-0"
            />
          </aside>
        </div>
      </div>
    </section>
  );
}
