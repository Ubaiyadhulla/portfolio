import React from 'react'
import { ProjectData} from '../assets/assets.js'
import { LiaHandPointRight } from "react-icons/lia";
import { MdArrowOutward } from "react-icons/md";


const Projects = () => {
  return (
    <div id='projects' className='w-full bg-[#1a1a1a] item-center' >

    <div className=' flex flex-col items-center py-5 pt-16'>
       <h1 className='text-white md:text-3xl text-xl lg:text-5xl font-semibold '>Projects</h1>
         <div className='bg-[rgb(249,115,2)] w-28 h-2 mt-2 rounded-2xl'></div>
    </div>

    <div>
      {ProjectData.map((project,index)=>(
         <div key={index} className={`w-full flex flex-col items-center   gap-5 text-white p-5 ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} `} >
          <div className='group relative w-full'>
          <img src={project.image} alt={project.name} className='w-full rounded-2xl  h-80 object-fit rounded-2x group-hover:brightness-50 group-hover:scale-105 transition duration-1000'  />
          <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200'>
            <button onClick={() => window.open(project.sitelink, "_blank")} className="bg-orange-500 hover:bg-orange-600  text-white px-6 py-2 rounded-xl shadow-lg flex items-center gap-4">view Project <MdArrowOutward /></button>
          </div>
          </div>
          <div className='bg-[#222222] w-full p-4 rounded-2xl flex flex-col gap-3'>
            <h1 className='text-xl md:text-2xl lg:text-3xl'>{project.title}</h1>
            <p>{project.description}</p>
            <div className='flex flex-wrap gap-3'>

           { project.stacks.map((stack,index)=>(
              <span key={index} className='border-2 flex  border-white/70 hover:border-[rgb(249,115,2)] p-3 rounded-2xl'>
                {stack}
              </span>
            ))}
            </div>


            <div  className='flex flex-col'>
            {project.features.map((feature,index)=>(
              <ul key={index} className='flex gap-3 p-2 items-center'> <LiaHandPointRight /> {feature}</ul>
            ))}
            </div>

          </div>
         </div>
      ))}
    </div>

    </div>
  )
}

export default Projects
