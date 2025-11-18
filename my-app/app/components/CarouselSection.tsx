// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// import Image from "next/image";
// import { useEffect, useRef } from "react";

// const images = [
//   "/assets/img/hero1.jpg",
//   "/assets/img/hero2.jpg",
//   "/assets/img/hero1.jpg",
//   "/assets/img/hero2.jpg",
//   "/assets/img/hero1.jpg",
// ];

// export function CarouselSection() {
//   const carouselRef = useRef<any>(null);

//   // // Auto scroll every 2 seconds
//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     carouselRef.current?.scrollNext();
//   //   }, 2000);

//   //   return () => clearInterval(interval);
//   // }, []);

//   return (
//     <Carousel className="w-full max-w-5xl mx-auto" ref={carouselRef}>
//       {/* <CarouselPrevious className="absolute left-4 top-1/2 z-20 bg-white/70 rounded-full" />
//       <CarouselNext className="absolute right-4 top-1/2 z-20 bg-white/70 rounded-full" /> */}

//       <CarouselContent>
//         {images.map((img, index) => (
//           <CarouselItem key={index} className="basis-1/1">
//             <div className="p-2">
//               <Card className="w-full">
//                 <CardContent className="flex h-90 items-center justify-center ">
//                   <Image
//                     src={img}
//                     alt=""
//                     width={200}
//                     height={48}
//                     className="w-full object-cover"
//                   />
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const images = [
  "/assets/img/hero1.jpg",
  "/assets/img/hero2.jpg",
  "/assets/img/hero1.jpg",
  "/assets/img/hero2.jpg",
  "/assets/img/hero1.jpg",
  "/assets/img/hero1.jpg",
];

export default function CarouselSection() {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const intervalRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const autoplayMs = 3000;

  // advance to next slide
  const next = () => setCurrent((c) => (c + 1) % length);
  const prev = () => setCurrent((c) => (c - 1 + length) % length);

  // start autoplay
  useEffect(() => {
    start();
    return stop;
  }, []);

  function start() {
    stop();
    intervalRef.current = window.setInterval(() => {
      setCurrent((c) => (c + 1) % length);
    }, autoplayMs);
  }

  function stop() {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  // pause when user hovers
  const handleMouseEnter = () => stop();
  const handleMouseLeave = () => start();

  return (
    <div
      className="relative w-full max-w-5xl mx-auto"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        aria-label="Previous"
        onClick={prev}
        className="hidden sm:flex absolute z-30 left-3 top-1/2 -translate-y-1/2 
        rounded-full bg-white/80 p-2 shadow hover:bg-white
        sm:left-4 cursor-pointer"
      >
        ‹
      </button>

      <button
        aria-label="Next"
        onClick={next}
        className="hidden sm:flex absolute z-30 right-3 top-1/2 -translate-y-1/2 
        rounded-full bg-white/80 p-2 shadow hover:bg-white 
        sm:right-4 cursor-pointer"
      >
        ›
      </button>

      {/* slides wrapper */}
      <div className="px-4 sm:px-6 lg:px-0">
        <div className="overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((src, idx) => (
              <div
                key={idx}
                className="shrink-0 w-full"
                style={{ width: "100%" }}
                aria-hidden={current !== idx}
              >
                <Card className="overflow-hidden border-0 shadow-none">
                  <CardContent className="p-0">
                    <div
                      className="relative w-full h-[250px] md:h-[400px] 
                  lg:h-[500px] xl:h-[550px] "
                    >
                      <Image
                        src={src}
                        alt={`Slide ${idx + 1}`}
                        fill
                        className="object-cover rounded-2xl"
                        priority={idx === 0}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* optional indicators */}
      <div className="flex justify-center gap-2 mt-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-8 rounded-full transition-all ${
              i === current ? "bg-fuchsia-600" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
