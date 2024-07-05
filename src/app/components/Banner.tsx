import { Sacramento } from "next/font/google";

// Importe a fonte Sacramento conforme necessário
const sacramento = Sacramento({ weight: '400', subsets: ['latin'] })

export function Banner() {
  return (
    <>
      <section className="flex justify-center items-center py-10 h-[25rem] px-4">
        <div className='md:justify-between flex flex-col justify-items-center md:max-w-6xl w-full relative'>
          <div className="flex flex-col items-center justify-center md:relative gap-5 md:gap-0">
            <picture>
              <img src="./banner.webp" alt="" className="relative md:-top-24 -top-10" />
            </picture>
            <h3 className="lg:text-center text-center text-2xl text-teal-600">
              Acessórios artesanais exclusivos, <span className={`${sacramento.className} text-red-500 md:text-7xl text-5xl`}>feitos à mão </span> com dedicação e muito carinho.
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}
