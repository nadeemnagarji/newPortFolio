import React from 'react'
import heroImg from "../assets/hero.jpg"
import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {
  return (
    <div className='w-full h-screen pt-1 mt-10 text-[#212121] ' >


        <div className='textstructre mt-24 px-20'>
          {["A Frontend Developer","Embarking on","the Fullstack Journey"].map((item,index)=>{
            return(
              <div className="masker font-bold  font-main ">
                <div className='w-fit flex items-center '>
                  {index ===1 && <div className='w-[7vw] mt-[1vw] h-[5vw] bg-green-500 rounded-md mr-[1vw]'></div> }
                <h1 className='text-[6.5vw] leading-[7vw] tracking-tight'>{item}</h1> 
                </div> 
            </div>
            )
          })}
          
            
        </div>

        <div className=' border-t border-gray-500 mt-20 flex justify-between items-center py-5 px-20'>
              {["for public and private companies","from the first pitch to IPO"].map((item,index)=>{
                return <p className='text-md font-light tracking-tight' >{item}</p>
              })}
              <div className='start flex items-center gap-2'>
                  <div className='px-4 py-1 border-[1px]  rounded-full text-sm'>
                    Start the project
                  </div>
                  <div className='w-7 h-7 rotate-45 flex justify-center items-center rounded-full border-[1px]'>
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