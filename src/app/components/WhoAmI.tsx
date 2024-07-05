"use client"

import { Sacramento } from "next/font/google";

// Importe a fonte Sacramento conforme necessário
const sacramento = Sacramento({ weight: '400', subsets: ['latin'] })

export function WhoAmI() {

return (
<div id="WhoAmI" className="relative h-screen">
  <div className="absolute inset-0 flex flex-col justify-center items-center md:mt-24 mt-36 z-20">
<div>
<h1 className={`${sacramento.className} md:text-[10.9rem] text-5xl text-white text-center relative`}>
      Andréa Nogueira
    </h1>
    <h2 className="md:text-2xl text-xl font-extralight md:-mt-8 text-white ">
    Artesã
    </h2>
</div>
  </div>
  <div className="flex flex-col lg:flex-row-reverse justify-center items-center h-full">
    <div className="w-full lg:w-1/2 h-1/2 lg:h-full bg-[url('/quemsoueu.webp')] bg-cover"></div>
    <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
        <source src="/video-quemsoueu.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
      <div className="absolute inset-0 bg-teal-600 opacity-80"></div>
      <div
        className="relative z-10 flex w-full md:pl-[25rem] md:pr-6.5 md:px-0 px-3 pt-20 justify-end md:items-start items-center h-full">
        <h1 className="md:text-2xl font-normal text-lg md:text-left text-center text-white md:mr-20 md:leading-relaxed">“Quero tornar
          material aquilo que as clientes imaginaram. Criando assim peças únicas, com grande variedade e com uma fonte
          inesgotável de criação - sem jamais renunciar ao espírito artesanal daqueles que trabalham por prazer.”</h1>
      </div>
    </div>
  </div>
</div>
);
}