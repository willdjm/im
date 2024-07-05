import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export function Accessories() {
  // Array de objetos com os dados das imagens
  const images = [
    { src: "./acessorio1.webp", alt: "Acessório 1" },
    { src: "./acessorio2.webp", alt: "Acessório 2" },
    { src: "./acessorio3.webp", alt: "Acessório 3" },
    { src: "./acessorio4.webp", alt: "Acessório 4" },
    { src: "./acessorio6.webp", alt: "Acessório 6" },
  ];

  return (
    <section className="flex justify-center items-center py-10 px-4">
      <div className='flex flex-col items-center justify-center gap-10 md:max-w-6xl w-full'>

        {/* Renderização para Desktop */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-5 items-center justify-center">
            <div className="bg-teal-400 flex items-center justify-center md:h-96 md:w-96 h-80 w-80">
              <picture>
                <img src="./acessorio1.webp" alt="Acessório 1" className="p-5 max-h-full max-w-full" />
              </picture>
            </div>
            <div className="bg-Amber-500 flex items-center justify-center md:h-96 md:w-96 h-80 w-80">
              <picture>
                <img src="./acessorio2.webp" alt="Acessório 2" className="p-5 max-h-full max-w-full" />
              </picture>
            </div>
            <div className="bg-pink-500 flex items-center justify-center md:h-96 md:w-96 h-80 w-80">
              <picture>
                <img src="./acessorio3.webp" alt="Acessório 3" className="p-5 max-h-full max-w-full" />
              </picture>
            </div>
            <div className="bg-purple-600 flex items-center justify-center md:h-96 md:w-96 h-80 w-80">
              <picture>
                <img src="./acessorio4.webp" alt="Acessório 4" className="p-5 max-h-full max-w-full" />
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
                <img src="./acessorio6.webp" alt="Acessório 6" className="p-5 max-h-full max-w-full" />
              </picture>
            </div>
          </div>

<div className='flex items-center justify-center'>
<div className="border border-red-400 py-3 px-5 rounded-full mt-5">
            <a href="#" className="text-red-400 underline">Ver mais trabalhos</a>
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
          
          <div className="bg-teal-400 flex items-center justify-center md:h-96 md:w-96 h-80 w-80 mt-5">
            <div className="relative w-full h-full">
              <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
                <source src="/video-acessorios.mp4" type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
          </div>
          <div className='flex items-center justify-center'>
<div className="border border-red-400 py-3 px-5 rounded-full mt-5">
            <a href="#" className="text-red-400 underline">Ver mais trabalhos</a>
          </div>
</div>
          
        </div>

      </div>
    </section>
  );
}
