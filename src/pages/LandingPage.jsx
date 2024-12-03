import React, { useEffect, useRef } from 'react'
import heroImg from "../assets/hero.jpg"
import { FaArrowUpLong } from "react-icons/fa6";
import {  motion, useInView } from 'framer-motion';

import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SlSocialGithub } from "react-icons/sl";
import { Element, Link, animateScroll as scroll, scroller } from 'react-scroll'
import axios from 'axios';
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
  
  const startBackend = async()=>{
    const res = await axios.get("https://backend.nadeemnagarji.workers.dev/")
   console.log(res.data)
  }
  useEffect(()=>{
    startBackend()
  },[])

  return (
    <div name="home"  data-scroll data-scroll-section data-scroll-speed="-.5"  className='w-full h-[90vh] pt-1 mt-10 text-[#212121]    max-laptop:h-[70vh] max-lg-phone:h-[50vh]' >


        <motion.div className='textstructre mt-24 px-20 max-tablet:px-5 '
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {["A Frontend Developer","Embarking on","the Fullstack Journey"].map((item,index)=>{
            return(
              <div className="masker font-bold    font-main  ">
                <div  className='w-fit flex items-center max-tablet:w-full max-tablet:justify-center  '>
                  {index ===1 && <motion.div 
                  initial={{width: 0}} 
                  animate={{width :"7vw"}}  
                  transition={{ease:[0.76, 0, 0.24, 1],duration:1,delay:0.5}}
                  className='w-[7vw]  mt-[1vw] h-[5vw]  bg-[#004D43]  rounded-md mr-[1vw] 
                    max-tablet:bg-transparent max-tablet:mr-0
                  '> 
                  
                  </motion.div> 
                  }
                <motion.h1 variants={items} className='text-[6.5vw]   leading-[7vw] tracking-tight max-tablet:text-[10vw] max-tablet:leading-none'>{item}</motion.h1>  {/*animation is given in this line */}
                </div> 
            </div>
            )
          })}
          
            
        </motion.div>

        <div  className=' border-t border-gray-500 mt-20 flex justify-between items-center py-5 px-20 max-tablet:px-5'>
              {[{icon:<TiSocialLinkedinCircular/>,name:"linkedIn",link:"https://www.linkedin.com/in/nadeem-nagarji"}
              ,{icon:<SlSocialGithub/>,name:"Github",link:"https://github.com/nadeemnagarji"}].map((item,index)=>{
                return <a href={item.link} target="_blank"  ><motion.div 
                initial={  {opacity:"0",y:20}} 
                    animate={  {opacity:"100%",y:0} }  
                    transition={{ease:[0.76, 0, 0.24, 1],duration:1,delay:1}}
                className='rounded-full cursor-pointer h-full text-md font-normal flex items-center gap-2 tracking-tight' > <span className='text-xl'>{item.icon}</span> {item.name}</motion.div></a>
              })}
              <div className='start flex items-center gap-2 '>
                  <Link
                   to="contact"
                   spy={true}
                   smooth={true}
                   offset={0} 
                   duration={500}
                  ><div className='  px-4 py-1 border-[1px]  border-[#8c8c73] cursor-pointer rounded-full text-sm'>
                    Start the project
                  </div></Link> 
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