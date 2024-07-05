"use client"

import { Sacramento } from "next/font/google";

// Importe a fonte Sacramento conforme necessário
const sacramento = Sacramento({ weight: '400', subsets: ['latin'] })

import React, { useState } from 'react';
import { FcNext, FcPrevious } from "react-icons/fc";

const images = [
'/estampas1.webp',
'/estampas1.webp',
'/estampas1.webp',
'/estampas1.webp',
];

export const FabricsAndCoatings: React.FC = () => {
const [currentImage, setCurrentImage] = useState(0);

const nextSlide = () => {
setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
};

const prevSlide = () => {
setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
};

return (

<section className=" flex justify-center items-center py-32 px-4">
  <div className=' flex flex-col items-center justify-center gap-10 r md:max-w-6xl w-full'>
    <h3 className="lg:text-center text-center text-2xl text-teal-600">
      Tecidos <span className={`${sacramento.className} text-red-500 text-5xl`}> e </span> revestimentos</h3>
    <div className="relative w-full h-80">
      <button className="absolute top-1/2 md:-left-20 transform -translate-y-1/2 text-red-400 p-2 rounded-full"
        onClick={prevSlide}>
        <FcPrevious size={45} />
      </button>
      <button className="absolute top-1/2 md:-right-20 right-2 transform -translate-y-1/2 text-red-400 p-2 rounded-full"
        onClick={nextSlide}>
        <FcNext size={45} />
      </button>
      <picture>
        <img className="object-cover w-full h-full" src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
      </picture>
    </div>
  </div>
</section>
);
};