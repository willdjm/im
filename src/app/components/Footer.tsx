export function Footer() {

return (

<footer className="flex justify-center items-center py-5 px-2">
    <div className='md:justify-between flex flex-col justify-items-center md:max-w-[110rem] w-full'>
        <div className='flex flex-col w-full items-center justify-center md:relative'>
            <span className="lg:text-lg text-gray-500 text-center w-full md:relative md:top-10">Imagine Que Tem - Todos
                os direitos
                reservados.</span>
            <div className='flex md:items-end items-center md:justify-end justify-center gap-5 opacity-50 m-4 w-full'>
                <a className='ml-2' href="https://sacorp.tec.br/" target='_blank' rel="noreferrer">
                    <picture>
                        <img src="/logo-sacorp.svg" alt="logo Sacorp" width={100} height={100} loading="lazy"
                            className='lg:w-16 w-14' />
                    </picture>
                </a>
                <a href="https://www.gukenz.com.br/" target='_blank' rel="noreferrer">
                    <picture>
                        <img src="/logo-gukenz.svg" alt="logo Gukenz" width={100} height={100}
                            className='lg:w-16 w-14' />
                    </picture>
                </a>
            </div>
        </div>
    </div>
</footer>
);
}