import React from 'react'
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdCode } from "react-icons/md";
const Home=()=>{

    return (
        <div id='home' className='w-full h-screen pt-28 bg-[#1a1a1a] text-white flex flex-col items-center justify-center gap-5 text-center -top-5'>
          <h3 className='text-[rgb(249,115,2)] text-lg md:text-xl lg:text-2xl'>Hello, I'm</h3>
          <h1 className='text-3xl md:text-5xl lg:text-8xl '>Ubaiyadhulla</h1>
          <p className='text-xl md:text-2xl lg:text-3xl text-white/60'>Full Stack Developer</p>
          <p className='text-xl md:text-2xl lg:text-3xl text-white/60'>Turning complex problems into simple,beautiful digital solutions.</p>
          <div className='flex flex-row gap-4 my-2'>
            <a href="mailto:ubaiyadhullaic@gmail.com">
            <button className='bg-[rgb(249,115,2)] text-white px-6 py-3 rounded-full hover:bg-[rgb(249,115,2)]/80  flex items-center gap-2 '> <MdOutlineMailOutline />Contact Me</button>
            </a>
            <a href="#projects">
            <button className='border-2 border-white/50 text-white px-6 py-3 rounded-full hover:border-[rgb(249,115,2)] flex items-center gap-2 hover:text-[rgb(249,115,2)]'> <MdCode />View Projects</button>
            </a>
          </div>
         
          <div className='flex gap-4 '>
            <FiGithub onClick={() => window.open(import.meta.env.VITE_GITHUB, "_blank")}  size={40} className='border-3  p-2 rounded-full border-white/50 hover:border-[rgb(249,115,2)]' />
            <LuLinkedin onClick={() => window.open(import.meta.env.VITE_LINKEDIN, "_blank")} size={40} className='border-3  p-2 rounded-full border-white/50 hover:border-[rgb(249,115,2)]' />
            <FaInstagram onClick={() => window.open(import.meta.env.VITE_INSTAGRAM, "_blank")} size={40} className='border-3  p-2 rounded-full border-white/50 hover:border-[rgb(249,115,2)]' />
          </div>
        </div>
    )
}

export default Home