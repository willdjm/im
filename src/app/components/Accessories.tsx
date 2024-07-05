"use client"

import Link from "next/link";

export function Accessories() {

return (

<section className="flex justify-center items-center py-10 px-4">
  <div className=' flex flex-col items-center justify-center gap-10 r md:max-w-6xl w-full'>

  <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-5 items-center justify-center">
  <div className="bg-teal-400 flex items-center justify-center md:h-96 md:w-96 h-80 w-80">
    <picture>
      <img src="./acessorio1.webp" alt="" className="p-5 max-h-full max-w-full" />
    </picture>
  </div>
  <div className="bg-Amber-500 flex items-center justify-center md:h-96 md:w-96 h-80 w-80">
    <picture>
      <img src="./acessorio2.webp" alt="" className="p-5 max-h-full max-w-full" />
    </picture>
  </div>
  <div className="bg-pink-500 flex items-center justify-center md:h-96 md:w-96 h-80 w-80">
    <picture>
      <img src="./acessorio3.webp" alt="" className="p-5 max-h-full max-w-full" />
    </picture>
  </div>
  <div className="bg-purple-600 flex items-center justify-center md:h-96 md:w-96 h-80 w-80">
    <picture>
      <img src="./acessorio4.webp" alt="" className="p-5 max-h-full max-w-full" />
    </picture>
  </div>
  <div className="bg-teal-400 flex items-center justify-center md:h-96 md:w-96 h-80 w-80">
    <div className="relative w-full h-full">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
        <source src="/video-acessorios.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
    </div>
  </div>
  <div className="bg-teal-400 flex items-center justify-center md:h-96 md:w-96 h-80 w-80">
    <picture>
      <img src="./acessorio6.webp" alt="" className="p-5 max-h-full max-w-full" />
    </picture>
  </div>
</div>


    <div
      className="border border-red-400 py-3 px-5 rounded-full">
      <a href="#" className="text-red-400 underline">Ver mais trabalhos</a>
    </div>

  </div>
</section>

);
}