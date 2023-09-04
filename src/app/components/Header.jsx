"use client"

import { useState } from 'react'
import { BsCart } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed left-0 top-0 w-full px-10 py-4">
      <div className='md:flex items-center justify-between'>

        {/* name / brand */}
        <div>
          <a className='text-3xl  text-blue-600 px-4 py-4 font-bold' href="#home">Shoppedia</a>
        </div>

        {/* search feature */}
        <div className="md:flex relative hidden">
          <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
           <BiSearch />
          </div>
          <input className="block w-[1200px] p-2 pl-10
          focus:outline-none
          focus:border-blue-500 focus:ring-blue-500 text-sm text-gray-900 border border-gray-300 rounded-lg" type="text" placeholder="cari di shoppedia" />
        </div>

        {/* link / navigation */}
        <div className='md:flex hidden'>
          <ul className="flex">
            <li className='px-2 py-2'>
              <BsCart className="w-[25px] h-[25px]" />
            </li>
            <li className='border  border-slate-200 md:ml-6'>
            </li>
            <li className='md:ml-6'>
              <button className='border  border-blue-600 py-2 px-4 text-sm text-blue-600 font-bold rounded-lg'>
                Masuk
              </button>
            </li>
            <li className='md:ml-2'>
              <button className='text-sm text-white bg-blue-600 font-bold px-4 py-2 rounded-lg'>
                Daftar
              </button>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default Header