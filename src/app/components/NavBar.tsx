"use client"

import { useState } from 'react';
import Image from 'next/image';
import { BiMenu } from 'react-icons/bi';
import { IoCloseSharp } from 'react-icons/io5';
import sombradivisao from "../../../public/sombra.webp";
import Link from 'next/link';

const Navbar: React.FC = () => {
const [isOpen, setIsOpen] = useState(false);

return (
<nav className="bg-white shadow-lg">
  <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      {/* Mobile menu button */}
      <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
        <button onClick={()=> setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white
          focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
          <IoCloseSharp className="block h-8 w-8 text-teal-600" aria-hidden="true" />
          ) : (
          <BiMenu className="block h-8 w-8 text-red-400" aria-hidden="true" />
          )}
        </button>
      </div>
      {/* Logo (visible only on mobile) */}
      <div className="flex-shrink-0 sm:hidden">
      </div>
      {/* Desktop menu */}
      <div className="hidden w-full sm:flex sm:items-center sm:justify-between flex-grow">
        {/* Links on the left */}
        <div className="flex items-center justify-start w-1/2 gap-10">
          <Link href='/'>
          Home
          </Link>
          <Link href='#CreationAndCustomization'>
          O que eu faço
          </Link>
          <Link href='#WhoAmI'>
          Quem sou eu
          </Link>
        </div>
        {/* Links on the right */}
        <div className="flex items-center justify-end w-1/2 gap-10">
          <Link href='#WhereDoISell'>
          Onde eu vendo
          </Link>
          <Link href='#CustomerReviews'>
          O que dizem
          </Link>
          <Link href='#TalkToMe'>
          Fale comigo
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* Mobile menu */}
  {isOpen && (
  <div className="sm:hidden bg-white">
    <div
      className="px-2 pt-2 pb-3 space-y-7 text-center flex flex-col items-center justify-center text-teal-600 text-base">
      <Link href='/' className='border border-b-red-400'>
      Home
      </Link>
      <Link href='#CreationAndCustomization' className='border border-b-red-400'>
      O que eu faço
      </Link>
      <Link href='#WhoAmI' className='border border-b-red-400'>
      Quem sou eu
      </Link>
      <Link href='#WhereDoISell' className='border border-b-red-400'>
      Onde eu vendo
      </Link>
      <Link href='#CustomerReviews' className='border border-b-red-400'>
      O que dizem
      </Link>
      <Link href='#TalkToMe' className='border border-b-red-400'>
      Fale comigo
      </Link>
    </div>
  </div>
  )}
  <div className='hidden md:flex items-end justify-center relative'>
    <Image src={sombradivisao} alt="sombra" className='absolute bottom-0' />
  </div>
</nav>
);
};
export default Navbar;