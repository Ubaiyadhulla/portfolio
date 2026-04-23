import uplinkImage from './Screenshot 2026-04-13 102656.png'
import PrescriptorImage from './Screenshot 2026-04-13 103029.png'

export const ProjectData = [
     {
        title: "Prescriptor",
        description: "A full-stack web application that enables users to book doctor appointments, manage schedules, and enhance patient-doctor communication efficiently.",
        image: PrescriptorImage,
        stacks:["React", "Node.js", "Express", "MongoDB", "Tailwind CSS","axios"],
        features:["Secure user authentication", "appointment booking and management", "appointment history tracking.",  "handle appointment requests, while admins can manage users, doctors, and monitor overall system activity."],
        sitelink: "https://prescriptor.netlify.app/"
    },
    {
        title: "Uplink",
        description: "A modern web application for managing day to day tasks.",
        image: uplinkImage,
        stacks:["React", "Node.js", "Express", "MongoDB", "Tailwind CSS",],
        features:["user authentication and authorization","task management with CRUD operations"],
      sitelink: "https://quickchat-ashen.vercel.app/"
    },
   
]