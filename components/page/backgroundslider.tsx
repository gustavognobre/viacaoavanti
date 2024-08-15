// BackgroundSlider.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/frota-completa - Copia (3).png",
  "/frota-completa - Copia (4).png",
  "/frota-completa - Copia (5).png",
];

export default function BackgroundSlider() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 5000); // Tempo de troca em milissegundos (5 segundos)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
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
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>
      ))}
    </div>
  );
}
