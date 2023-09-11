"use client"

import {useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

const Carousel = () => {
  const slides = [
    {
       url: "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"     
    },
    {
       url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"     
    },
    {
       url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"     
    },
    {
       url: "https://images.unsplash.com/photo-1559163499-413811fb2344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"     
    },
    {
       url: "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"     
    },
  ]   

  const [currentIndex, setCurrentIndex] = useState(0)   
  
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = setFirstSlide ? slides.length - 1 : currentIndex - 1
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length -1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="max-w-[900px] h-[400px] w-full m-auto py-16 px-4 relative"> 
      <div style={{backgroundImage: `url(${slides[0].url})` }} className='w-full h-full rounded-md bg-center bg-cover duration-500' />  
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"> 
        <BsChevronCompactLeft size={30} />
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"> 
      <BsChevronCompactRight size={30} />
      </div>   

    </div>
  )
}

export default Carousel