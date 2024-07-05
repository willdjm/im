"use client"

export function Banner() {

return (
<>
  <section className=" flex justify-center items-center py-10 h-[25rem] px-4">
    <div className='md:justify-between flex flex-col justify-items-center md:max-w-6xl w-full relative'>
      <div className="flex flex-col items-center justify-center md:relative gap-5 md:gap-0">
        <picture>
        <img src="./banner.webp" alt="" className="relative md:-top-24 -top-14" />
        </picture>
        <h3 className="lg:text-center text-center text-2xl text-teal-600">
          Acessórios artesanais exclusivos, <span className="text-red-400">feitos à mão</span> com dedicação e muito
          carinho.
        </h3>
      </div>
    </div>
  </section>
</>
);
}