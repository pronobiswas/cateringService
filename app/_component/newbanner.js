"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";

export default function Banner() {
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();


    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const normX = (mouseX - rect.width / 2) / (rect.width / 2);
    const normY = (mouseY - rect.height / 2) / (rect.height / 2);


    const maxMove = 50;
    const targetX = normX * maxMove;
    const targetY = normY * maxMove;


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
        
      </div>
    </section>
  );
}
