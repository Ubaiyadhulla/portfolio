import React from 'react'
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <div id='contact' className='w-full h-screen bg-[#1a1a1a] items-center  flex flex-col gap-4' >
      <div className='flex flex-col items-center py-4 pt-16 gap-2'>
      <h1  className='text-white md:text-3xl text-xl lg:text-5xl font-semibold '>Get In Touch</h1>
        <div  className='bg-[rgb(249,115,2)] w-28 h-2 mt-2 rounded-2xl'> </div>
      </div>

      <p className='text-white text-lg md:text-xl flex text-center justify-center max-w-2xl px-4'>
        I’m passionate about building and collaborating on impactful projects. If you have an idea, question, or opportunity, I’d love to connect with you. Let’s create something amazing together. Reach out anytime. I’ll respond as soon as possible.
      </p>

       <div className='flex flex-row gap-4 my-2'>
         <a href="mailto:ubaiyadhullaic@gmail.com">

         <button className='bg-[rgb(249,115,2)] text-white px-6 py-3 rounded-full hover:bg-[rgb(249,115,2)]/80  flex items-center gap-2 '> <MdMailOutline />Contact Me</button>
         </a>
      
        </div>

         <div className='flex gap-4 text-white '>
           <FiGithub onClick={() => window.open(import.meta.env.VITE_GITHUB, "_blank")}  size={40} className='border-3  p-2 rounded-full border-white/50 hover:border-[rgb(249,115,2)]' />
           <LuLinkedin onClick={() => window.open(import.meta.env.VITE_LINKEDIN, "_blank")} size={40} className='border-3  p-2 rounded-full border-white/50 hover:border-[rgb(249,115,2)]' />
           <FaInstagram onClick={() => window.open(import.meta.env.VITE_INSTAGRAM, "_blank")} size={40} className='border-3  p-2 rounded-full border-white/50 hover:border-[rgb(249,115,2)]' />
      </div>
    </div>
  )
}

export default Contact
