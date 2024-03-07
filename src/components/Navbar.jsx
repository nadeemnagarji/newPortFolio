import React from 'react'

function Navbar() {
const services = ["Home","Projects","Skills","Contact"]

  return (
    <div className="fixed z-50 w-full px-5 py-5 font-neue flex justify-between bg-[#f1f1f1]"> 
        <div className='flex items-center justify-center gap-2 text-[2vw] font-neue font-semibold'>
            <h3 className=''>Nadeem</h3>
            <p className='mt-0'>Nagarji</p>
        </div>
        <div className='links flex gap-10 items-center'>
            {services.map((item,i)=> <a key={i} className='text-md font-regular cursor-pointer'>{item}</a>)}
            <button className=' ml-32 text-md'>Resume</button>
        </div>
     
    
    </div>
  )
}

export default Navbar   