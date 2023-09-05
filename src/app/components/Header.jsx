"use client"

import React from 'react'
import { BsCart, BsSearch } from 'react-icons/bs';

const Header = () => {
  return (
    <div className="fixed inset-x-0 top-0 w-full">
      <div className="box-between md:px-10 px-7 py-4">

          {/* name brand */}
        <div className="box-equal">
          <a className="font-bold text-5xl text-blue-600" href="#">Shoppedia</a>
        </div>

        {/* search feature */}
        <div className="box-equal relative">
          <div className='absolute inset-y-0 pl-3 box-equal pointer-events-none text-gray-500 dark:text-gray-400'>
            <BsSearch className="w-5 h-5" />
          </div>
          <input className='md:w-[1000px] rounded-lg p-2 pl-10 text-sm text-gray-900 border border-gray-300' type="text" placeholder='cari di shoppedia' />
        </div>

        {/* link navigation */}
        <div className="box-equal">
          <ul className='box-equal'>
            <li className="md:ml-4">
              <a href="#">
                <BsCart className="w-[25px] h-[25px]" />
              </a>
            </li>
            <li className="md:ml-8">
              <a className="font-bold text-blue-600 border border-blue-600 px-8 py-2 rounded-lg text-sm" href="#">
                Masuk
              </a>
            </li>
            <li className="md:ml-2">
              <a  className="font-bold text-white border bg-blue-600 px-8 py-2 rounded-lg text-sm" href="#">
                Daftar
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Header