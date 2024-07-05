"use client"

export function WhereDoISell() {

return (
      <section id="WhereDoISell"
            className="bg-[url('/bg-pedido-compra.webp')] bg-center bg-cover flex justify-center items-center py-10 h-[30rem] px-4">
            <div
                  className='md:justify-between grid md:flex justify-items-center md:max-w-6xl w-full relative gap-10 md:gap-0'>
                  <div className="flex-col md:flex items-center justify-center w-full">
                        <div
                              className="flex bg-white md:w-5/6 w-full rounded-3xl shadow-lg drop-shadow-lg items-center justify-center gap-1 py-5 px-4">
                              <a href="#" className="text-teal-600 hover:text-teal-700">
                                    <picture>
                                          <img src="./icon-pedido.svg" alt="" className="" />
                                    </picture>
                              </a>
                              <a href="#" className="text-teal-600 hover:text-teal-700">
                                    <h3 className="text-center text-2xl">
                                          <span className="underline">Faça seu pedido</span> exclusiva
                                    </h3>
                              </a>
                        </div>
                  </div>
                  <div className="flex-col md:flex items-center justify-center w-full">
                        <div
                              className="flex bg-white md:w-5/6 w-full rounded-3xl shadow-lg drop-shadow-lg items-center justify-center gap-1 py-5 px-4">
                              <a href="#" className="text-red-400 hover:text-red-500">
                                    <picture>
                                          <img src="./icon-comprar-loja.svg" alt="" className="" />
                                    </picture>
                              </a>
                              <a href="#" className="text-red-400 hover:text-red-500">
                                    <h3 className="text-center text-2xl">
                                          <span className="underline">Compre na loja</span> online
                                    </h3>
                              </a>
                        </div>
                  </div>
            </div>
      </section>
);
}