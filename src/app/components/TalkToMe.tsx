"use client"

export function TalkToMe() {

return (

<div id="TalkToMe" className=" flex flex-col justify-center items-center bg-Teal-600 py-10 md:py-0">
    <div className='md:justify-center flex flex-col justify-items-center md:max-w-6xl w-full gap-10'>
        <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full items-center justify-center h-[25rem]">
            {/* Primeira coluna */}
            <div className="text-center sm:text-left flex flex-col items-center justify-center gap-8">
                <p className="text-black">Acompanhe meu trabalho</p>
                <div className="flex justify-center sm:justify-start gap-5">
                    <a href="#" className="text-white hover:text-gray-200 mx-2">
                        <picture>
                            <img src="./facebook-brands.svg" alt="" className="" />
                        </picture>
                    </a>
                    <a href="#" className="text-white hover:text-gray-200 mx-2">
                        <picture>
                            <img src="./instagram-brands.svg" alt="" className="" />
                        </picture>
                    </a>
                    <a href="#" className="text-white hover:text-gray-200 mx-2">
                        <picture>
                            <img src="./linkedin-brands.svg" alt="" className="" />
                        </picture>
                    </a>
                    <a href="#" className="text-white hover:text-gray-200 mx-2">
                        <picture>
                            <img src="./pinterest-p-brands.svg" alt="" className="" />
                        </picture>
                    </a>
                    <a href="#" className="text-white hover:text-gray-200 mx-2">
                        <picture>
                            <img src="./youtube-brands.svg" alt="" className="" />
                        </picture>
                    </a>
                </div>
            </div>
            {/* Segunda coluna */}
            <div className="text-center sm:text-left flex flex-col items-center justify-center gap-8">
                <p className="text-black">Compartilhe</p>
                <a href="#" className="text-white hover:text-gray-200 mx-2">
                    <div className="flex justify-center sm:justify-start">
                        <picture>
                            <img src="./share-nodes-solid.svg" alt="" className="" />
                        </picture>
                    </div>
                </a>
            </div>
            {/* Terceira coluna */}
            <div className="text-center sm:text-left flex flex-col items-center justify-center gap-8">
                <p className="text-black">Fale comigo</p>
                <div className="flex justify-center sm:justify-start gap-5">
                    <a href="mailto:" className="text-white hover:text-gray-200 mx-2">
                        <picture>
                            <img src="./envelope-solid1.svg" alt="" className="" />
                        </picture>
                    </a>
                    <a href="https://wa.me/" className="text-white hover:text-gray-200 mx-2">
                        <picture>
                            <img src="./whatsapp-brands.svg" alt="" className="" />
                        </picture>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
);
}