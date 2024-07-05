"use client"

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Sacramento } from "next/font/google";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Importe a fonte Sacramento conforme necessário
const sacramento = Sacramento({ weight: '400', subsets: ['latin'] })

export function CreationAndCustomization() {

// Array de objetos com os dados das imagens
const images = [
{ src: "./criacao1.webp", alt: "Criacao 1" },
{ src: "./criacao2.webp", alt: "Criacao 2" },
{ src: "./criacao3.webp", alt: "Criacao 3" },
{ src: "./criacao4.webp", alt: "Criacao 4" },
{ src: "./criacao5.webp", alt: "Criacao 5" },
];

return (

<section id="CreationAndCustomization" className=" flex justify-center items-center md:py-20 py-10 px-4">
  <div className=' flex flex-col items-center justify-center gap-16 r md:max-w-6xl w-full'>
    <h3 className="lg:text-center text-center text-2xl text-teal-600">
      Criação <span className={`${sacramento.className} text-red-500 text-5xl`}> e </span> personalização</h3>
    <div className="hidden md:block">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="flex flex-col gap-5 items-center justify-center">
          <picture>
            <img src="./criacao1.webp" alt="" className="w-72 h-72 rounded-full" />
          </picture>
          <p className="lg:text-center text-center text-xl text-red-400">
            Capas Bordadas</p>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center">
          <picture>
            <img src="./criacao2.webp" alt="" className="w-72 h-72 rounded-full" />
          </picture>
          <p className="lg:text-center text-center text-xl text-red-400">
            Álbuns, Cadernos <span className="text-teal-600"> e</span> Diários</p>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center">
          <picture>
            <img src="./criacao3.webp" alt="" className="w-72 h-72 rounded-full" />
          </picture>
          <p className="lg:text-center text-center text-xl text-red-400">
            Marcadores</p>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center">
          <picture>
            <img src="./criacao4.webp" alt="" className="w-72 h-72 rounded-full" />
          </picture>
          <p className="lg:text-center text-center text-xl text-red-400">
            Opções de Fechos</p>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center">
          <picture>
            <img src="./criacao5.webp" alt="" className="w-72 h-72 rounded-full" />
          </picture>
          <p className="lg:text-center text-center text-xl text-red-400">
            Planner <span className="text-teal-600"> e</span> Bullet Journal</p>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center ">
          <div className="relative bg-white border-2 border-red-500 rounded-full p-4 max-w-xs w-72 h-72">
            <div
              className="absolute w-4 h-4 bg-white border-2 border-red-500 transform rotate-45 -bottom-5 -left-5 rounded-full">
            </div>
            <div
              className="absolute w-5 h-5 bg-white border-2 border-red-500 transform rotate-45 -bottom-0 -left-0 rounded-full">
            </div>
            <div
              className="absolute w-10 h-10 bg-white border-2 border-red-500 transform rotate-45 bottom-5 left-5 rounded-full">
            </div>
            <p
              className="text-teal-600 text-2xl text-center font-medium flex flex-col items-center justify-center w-full h-full">
              <span>ou,</span>
              <span>o que você</span>
              <span>imaginar...</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* Renderização para Mobile */}
    <div className="block md:hidden">
      <div className="mb-5">
      <Carousel
              showStatus={false}
              showThumbs={false}
              infiniteLoop
              showArrows={true}
              autoPlay
              renderArrowPrev={(onClickHandler, hasPrev) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    className="absolute top-1/2 transform -translate-y-1/2 left-2 z-10 bg-transparent border-none cursor-pointer text-teal-600"
                  >
                    <FaChevronLeft size={30} />
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    className="absolute top-1/2 transform -translate-y-1/2 right-2 z-10 bg-transparent border-none cursor-pointer text-teal-600"
                  >
                    <FaChevronRight size={30} />
                  </button>
                )
              }
            >
              {images.map((image, index) => (
                <div key={index}>
                  <picture>
                    <img src={image.src} alt={image.alt} />
                  </picture>
                </div>
              ))}
            </Carousel>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center ">
        <div className="relative bg-white border-2 border-red-500 rounded-full p-4 max-w-xs w-72 h-72">
          <div
            className="absolute w-4 h-4 bg-white border-2 border-red-500 transform rotate-45 -bottom-5 -left-5 rounded-full">
          </div>
          <div
            className="absolute w-5 h-5 bg-white border-2 border-red-500 transform rotate-45 -bottom-0 -left-0 rounded-full">
          </div>
          <div
            className="absolute w-10 h-10 bg-white border-2 border-red-500 transform rotate-45 bottom-5 left-5 rounded-full">
          </div>
          <p
            className="text-teal-600 text-2xl text-center font-medium flex flex-col items-center justify-center w-full h-full">
            <span>ou,</span>
            <span>o que você</span>
            <span>imaginar...</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
);
}