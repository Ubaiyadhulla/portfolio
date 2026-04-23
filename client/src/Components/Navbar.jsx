import React from 'react'
import { useState } from 'react'


const Navbar = () => {
  const [state,setState] = useState('home')
  
  return (
    <div className='bg-[#1a1a1a] text-white  flex justify-between text-xl px-5 py-5 items-center fixed w-full z-10'>
      <div>
      <h1 className='text-2xl border-2 border-[rgb(249,115,2)]  rounded-full px-6 py-4'>Ubai</h1>
     </div>

     <div className=' items-center justify-center gap-4 hidden md:flex '>
        <a href='#home' onClick={() => setState('home')} className={` cursor-pointer ${state === 'home' ? 'text-white' : 'text-white/50'}`} >Home</a>
        <a href='#about' onClick={() => setState('about')} className={` cursor-pointer ${state === 'about' ? 'text-white' : 'text-white/50'}`} >About</a>
        <a href='#projects' onClick={() => setState('projects')} className={` cursor-pointer ${state === 'projects' ? 'text-white' : 'text-white/50'}`} >Projects</a>
        <a href='#contact' onClick={() => setState('contact')} className={` cursor-pointer ${state === 'contact' ? 'text-white' : 'text-white/50'}`} >Contact</a>
     </div>

     <a href="#contact">

      <button className='px-4 py-3 rounded-md bg-[rgb(249,115,2)] hover:bg-[rgb(234,88,12)] translate-1' >Connect</button>
     </a>
     
    </div>
  )
}

export default Navbar
