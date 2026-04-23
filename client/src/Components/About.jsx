import React from 'react'
import { ImLocation } from "react-icons/im";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiBriefcase4Line } from "react-icons/ri";

const About = () => {
  return (
    <div id='about' className=' w-full bg-[#222222]'>


   {/* -----------title------------- */}
       <div className='flex flex-col items-center py-4 pt-16 gap-2'>
         <h1 className='text-white md:text-3xl text-xl lg:text-5xl font-semibold '>About Me</h1>
         <div className='bg-[rgb(249,115,2)] w-28 h-2 mt-2 rounded-2xl'></div>
       </div>

{/* -----------content------------- */}
      <div className='flex flex-col md:flex-row w-full px-3 gap-4'>
        {/*---------------left content------------ */}
        <div className='text-white w-full'>
            <h1 className=' md:text-2xl text-xl lg:text-3xl'>Who Am I?</h1>
            <p className='text-lg text-white/70 mt-4 '>I'm a passionate full-stack developer focused on building modern, scalable, and user-friendly web applications using technologies like React, Express, and MongoDB. My journey into development started with a curiosity for how digital products work, which quickly evolved into creating real-world applications.</p>
            
            <p className='text-lg text-white/70 mt-4 '>I specialize in developing responsive frontends and efficient backend systems, ensuring seamless user experiences and clean architecture. I enjoy turning ideas into functional products and continuously improving my skills in modern web technologies.</p>

            <p className='text-lg text-white/70 mt-4 '>I believe in writing clean, maintainable code and delivering high-quality solutions. When I'm not coding, I'm exploring new tools, refining my development skills, and working on innovative projects.</p>
            
            <span className='flex gap-3 items-center m-3 text-white/70'><ImLocation size={20} /> <p>Tamil Nadu, India</p> </span>
            <span className='flex gap-3 items-center m-3 text-white/70'><MdOutlineMailOutline size={20} /> <p>ubaiyadhullaic@email.com</p></span>
            <span className='flex gap-3 items-center m-3 text-white/70'><RiBriefcase4Line size={20} /> <p>Available for freelance projects and collaborations</p></span>
        </div>
        {/* ---------------right content-------------- */}
        <div className='text-white w-full px-4 flex flex-col justify-around'>
          <div>
              <h1 className=' md:text-2xl text-xl lg:text-3xl my-3'>Technical Skills</h1>

              <div className='flex flex-col gap-2 mb-3'>
              <label  className='text-white/70'>Frontend</label>
              <progress value="90" max="100" className='w-full h-2 progress-bar'></progress>
              </div>

              
              <div>
              <label className='text-white/70'>Backend</label>
              <progress value="85" max="100" className='w-full h-2 progress-bar'></progress>
              </div>

              
              <div>
              <label className='text-white/70'>Databae</label>
              <progress value="90" max="100" className='w-full h-2 progress-bar'></progress>
              </div>

         </div>
         {/* ---------Tecnology------------ */}
         <div className='my-4'>
          <h1 className='md:text-2xl text-xl lg:text-3xl my-3'>Technologies</h1>
          <div className='flex flex-wrap gap-4 '>
            <span className='border-2 border-white/70 hover:border-[rgb(249,115,2)] p-3 rounded-2xl'>React</span>
            <span className='border-2 border-white/70 hover:border-[rgb(249,115,2)] p-3 rounded-2xl'>Node.js</span>
            <span className='border-2 border-white/70 hover:border-[rgb(249,115,2)] p-3 rounded-2xl'>MongoDB</span>
            <span className='border-2 border-white/70 hover:border-[rgb(249,115,2)] p-3 rounded-2xl'>Express</span>
            <span className='border-2 border-white/70 hover:border-[rgb(249,115,2)] p-3 rounded-2xl'>Tailwind Css</span>
            <span className='border-2 border-white/70 hover:border-[rgb(249,115,2)] p-3 rounded-2xl'>Git</span>
            <span className='border-2 border-white/70 hover:border-[rgb(249,115,2)] p-3 rounded-2xl'>Javascript</span>
            <span className='border-2 border-white/70 hover:border-[rgb(249,115,2)] p-3 rounded-2xl'>HTML</span>
            <span className='border-2 border-white/70 hover:border-[rgb(249,115,2)] p-3 rounded-2xl'>Css</span>
          
          </div>
         </div>
        </div>   
      </div>
    </div>
  )
}

export default About
