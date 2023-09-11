"use client"

import React from 'react'
import { BsCart, BsSearch } from 'react-icons/bs';


const Header = () => {
  return (
    <div className='fixed left-0 top-0 w-full mt-[-5px]'>
      <div className="flex items-center justify-between md:px-10 px-7 py-4">
        <div>
          <a className="text-3xl font-bold text-blue-600" href="#">Shoppedia</a>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <BsSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input className='block w-full p-4 pl-10 focus:outline-none  focus:border-blue-600 focus:ring-1 focus:ring-blue-600 md:w-[1200px] py-1 rounded-lg text-gray-900 border border-gray-300' type="text" placeholder="cari di shoppedia" />
        </div>
        <ul className="flex items-center">
          <li className="md:ml-2"><a href="#"><BsCart className="w-5 h-5" /></a></li>
          <li className="md:ml-6"><a href="#" className="font-bold text-blue-600 text-sm border border-blue-600 px-4 py-2 rounded-lg">Masuk</a></li>
          <li className="md:ml-2"><a href="#" className="font-bold text-white text-sm bg-blue-600 px-4 py-2 rounded-lg">Daftar</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header