import { animate, motion, useAnimation } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { Element, Link, animateScroll as scroll, scroller } from 'react-scroll'

import file from '../resume.pdf'
import { useNavigate } from 'react-router-dom'
import { FiAlignJustify } from "react-icons/fi";

function Navbar({sections}) {
const services = ["Home","Projects","Skills","Contact"]
const [bg ,setBg] = useState("bg-transparent")
const[show,setShow] = useState(true)
const [activeLink, setActiveLink] = useState('');
const [sideNav,setSideNav] = useState(false)
const handleSetActive =(to)=>{
  setActiveLink(to)
}

let PrevScroll = useRef(0)

const controlNavbar =()=>{
  if(window.scrollY>=PrevScroll){
    setBg("bg-[#FFFFFF] ")
    setShow(false)
  }else{
    setShow(true)
  }
  const currnScroll = window.scrollY
  PrevScroll = currnScroll

}


useEffect(()=>{
window.addEventListener("scroll",controlNavbar)
  return()=>{
    window.removeEventListener("scroll",controlNavbar)
  }
}

,[])

// window.addEventListener("scroll",handleBg)
const navigate  = useNavigate()
const downloadFile = ()=>{
    navigate("/resume")
  


  
}


  return (
    <div    className={ show ?  `fixed z-50 w-full px-5 py-5 font-neue flex justify-between rounded-lg   ${bg}`: 'hidden'}> 
        <a href='#' ><div className=' font-logo cursor-pointer flex items-center justify-center gap-2 text-[2vw] font-neue font-semibold max-tablet:text-[5vw]'>
            <h3 className=''>Nadeem</h3>
            <p className=' mt-0'>Nagarji</p>
        </div> </a>
        <div className='links max-tablet:hidden    flex gap-10 items-center'>
            {services.map((item,i)=><Link
            activeClass='active'
            to={sections[i].title}
            spy={true}
            smooth={true}
            offset={0} // Adjust this offset if you have a fixed navbar
            duration={500}
            onSetActive={handleSetActive}
            
            >
            
            <motion.a key={i} 
            className='text-md font-regular cursor-pointer'
            
            

            >{item}

            </motion.a> </Link> )}



            <button 
            onClick={downloadFile}
            className=' bg-[#004D43] text-[#f1f1f1] px-6 py-2 rounded-full  ml-32 text-md'>Resume</button>
        </div>
          
          <Link
           className=' tablet:hidden'
          activeClass='active'
          to="contact"
          spy={true}
          smooth={true}
           offset={0} // Adjust this offset if you have a fixed navbar
          duration={500}
          > <button 
            
            className='bg-[#004D43] text-[#f1f1f1] px-6 py-2  rounded-full text-lg tablet:hidden'>
              Lets Talk
            </button>
            </Link>
      
    
    </div>


  )
}

export default Navbar   