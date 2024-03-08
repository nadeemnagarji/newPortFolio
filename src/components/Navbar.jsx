import { animate, motion, useAnimation } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

function Navbar() {
const services = ["Home","Projects","Skills","Contact"]
const [bg ,setBg] = useState("bg-transparent")
const[show,setShow] = useState(true)

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



  return (
    <div  className={ show ?  `fixed z-50 w-full px-5 py-5 font-neue flex justify-between rounded-lg    ${bg}`: 'hidden'}> 
        <a href='#' ><div className=' font-logo cursor-pointer flex items-center justify-center gap-2 text-[2vw] font-neue font-semibold'>
            <h3 className=''>Nadeem</h3>
            <p className=' mt-0'>Nagarji</p>
        </div> </a>
        <div className='links    flex gap-10 items-center'>
            {services.map((item,i)=> <motion.a key={i} 
            className='text-md font-regular cursor-pointer'>{item}

            </motion.a>)}



            <button className=' bg-[#004D43] text-[#f1f1f1] px-6 py-2 rounded-full  ml-32 text-md'>Resume</button>
        </div>
     
    
    </div>
  )
}

export default Navbar   