import React, { useRef } from 'react'
import heroImg from "../assets/hero.jpg"
import { FaArrowUpLong } from "react-icons/fa6";
import {  motion, useInView } from 'framer-motion';

import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SlSocialGithub } from "react-icons/sl";

function LandingPage() {


 
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        
      }
    }
  };
  
  const items = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  
  return (
    <div  data-scroll data-scroll-section data-scroll-speed="-.9" className='w-full h-screen pt-1 mt-10 text-[#212121] ' >


        <motion.div className='textstructre mt-24 px-20'
           variants={container}
           initial="hidden"
           animate="visible"
        >
          {["A Frontend Developer","Embarking on","the Fullstack Journey"].map((item,index)=>{
            return(
              <div className="masker font-bold  font-main ">
                <div  className='w-fit flex items-center '>
                  {index ===1 && <motion.div 
                  initial={{width: 0}} 
                  animate={{width :"7vw"}}  
                  transition={{ease:[0.76, 0, 0.24, 1],duration:1,delay:0.5}}
                  className='w-[7vw] mt-[1vw] h-[5vw] flex items-center justify-center bg-green-500 rounded-md mr-[1vw]'> 
                  
                  </motion.div> 
                  }
                <motion.h1 variants={items} className='text-[6.5vw] leading-[7vw] tracking-tight'>{item}</motion.h1>  {/*animation is given in this line */}
                </div> 
            </div>
            )
          })}
          
            
        </motion.div>

        <div  className=' border-t border-gray-500 mt-20 flex justify-between items-center py-5 px-20'>
              {[{icon:<TiSocialLinkedinCircular/>,name:"linkedIn"},{icon:<SlSocialGithub/>,name:"Github"}].map((item,index)=>{
                return <motion.div 
                initial={  {opacity:"0",y:20}} 
                     animate={  {opacity:"100%",y:0} }  
                     transition={{ease:[0.76, 0, 0.24, 1],duration:1,delay:1}}
                className='rounded-full cursor-pointer h-full text-md font-normal flex items-center gap-2 tracking-tight' > <span className='text-xl'>{item.icon}</span> {item.name}</motion.div>
              })}
              <div className='start flex items-center gap-2 '>
                  <div className='  px-4 py-1 border-[1px]  border-[#8c8c73] cursor-pointer rounded-full text-sm'>
                    Start the project
                  </div>
                  <div className='hover:bg-[#212121] hover:text-[#f1f1f1]  w-7 h-7 rotate-45 flex justify-center items-center rounded-full border-[1px]'>
                  <FaArrowUpLong />
                  </div>
              </div>
            </div>

        <div>

        </div>
    </div>
  )
}

export default LandingPage


/*
<h1>Embarking on</h1>
<h1>the Fullstack Journey</h1> */