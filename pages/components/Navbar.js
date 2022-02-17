import Link from 'next/link';
import React from 'react';

export default function Navbar() {
    return (
        <div>
            <nav className="fixed border-b-2 bg-white top-0 left-0 px-20 w-full md:px-24 lg:px-36 shadow z-10">
                <div className='container flex justify-between items-center font-display'>
                    {/* Brand */}
                    <img src='/logo-abc.png' className='-ml-8 mt-2' />
                    <ul className='hidden md:flex md:ml-12 md:text-sxs lg:flex lg:ml-12 lg:text-sm font-bold items-center cursor-pointer'>
                        <li className='py-4 px-6'>Tentang Kami</li>
                        <select className='mx-6 md:text-sxs lg:text-sm font-bold p-1 m-1'>
                            <option>Solusi Kami</option>
                            <option>Satu</option>
                            <option>DUa</option>
                        </select>
                        <li className='py-4 px-6'>Cara Kerja</li>
                        <li className='py-4 px-6'>Karya Kami</li>
                        <Link href="/hubungi">
                            <button className="border border-main-color md:text-sxs lg:text-sm font-bold text-main-color hover:text-white hover:bg-main-color rounded-lg p-2 ml-4 mb-2 m-1">Hubungi Kami</button>
                        </Link>
                    </ul>

                    {/* Mobile menu */}
                    <button className='block md:hidden -mr-7 rounded-lg focus:outline-none hover:bg-gray-200 group'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <div className='absolute mt-5 -right-full opacity-0 w-full bg-white border transform group-focus:right-0 group-focus:opacity-100 transition-all duration-300'>
                            <ul className='flex flex-col items-center w-full text-lg font-bold pt-10 cursor-pointer'>
                                <li className='py-4 px-6 w-full'>Tentang Kami</li>
                                <li className='py-4 px-6 w-full'>
                                    <select className='px-1 text-lg font-bold p-2 mx-4'>
                                        <option selected>Solusi Kami</option>
                                        <option>r</option>
                                    </select>
                                </li>
                                <li className='py-4 px-6 w-full'>Cara Kerja</li>
                                <li className='py-4 px-6 w-full'>Karya Kami</li>
                                <Link href="/hubungi">
                                    <button className="w-screen border font-bold rounded-lg p-4 bg-main-color text-white hover:bg-main-hover">Hubungi Kami</button>
                                </Link>
                            </ul>
                        </div>
                    </button>
                </div>
            </nav>
        </div>
    )
}
