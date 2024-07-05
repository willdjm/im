"use client"

import { Sacramento } from "next/font/google";

// Importe a fonte Sacramento conforme necessário
const sacramento = Sacramento({ weight: '400', subsets: ['latin'] })

export function CustomerReviews() {

return (
<>
      <section id="CustomerReviews" className=" flex justify-center items-center py-10 h-[30rem] px-4">
            <div className='md:justify-between flex flex-col justify-items-center md:max-w-6xl w-full relative'>
                  <div className="flex flex-col items-center justify-center gap-5">
                        <h3 className="lg:text-center text-center text-2xl text-teal-600">
                              Mais do que clientes, <span className={`${sacramento.className} text-red-500 md:text-6xl text-5xl`}> amigos!</span>
                        </h3>
                        <picture className="pt-10">
                              <img src="./comentariosinstagram.webp" alt="" className="" />
                        </picture>
                  </div>
            </div>
      </section>
</>
);
}