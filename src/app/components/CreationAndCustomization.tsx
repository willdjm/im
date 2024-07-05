"use client"

export function CreationAndCustomization() {

return (

<section id="CreationAndCustomization" className=" flex justify-center items-center md:py-20 py-10 px-4">
  <div className=' flex flex-col items-center justify-center gap-16 r md:max-w-6xl w-full'>
    <h3 className="lg:text-center text-center text-2xl text-teal-600">
      Criação <span className="text-red-400"> e</span> personalização</h3>
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
</section>
);
}