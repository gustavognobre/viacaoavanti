// BackgroundSlider.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/backgroundslider/banner-avanti-1.png",
  "/backgroundslider/banner-avanti-2.png",
  "/backgroundslider/banner-avanti-3.png",
];

export default function BackgroundSlider() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[25vh] lg:h-[50vh] overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Imagem de fundo ${index}`}
            fill
            className="object-cover"
            priority={true}
          />
        </div>
      ))}
    </div>
  );
}
