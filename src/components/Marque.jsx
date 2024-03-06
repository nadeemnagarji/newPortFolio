import { motion } from 'framer-motion';
import React from 'react';
motion
export default function Marque(params) {
    return(
        <div className='w-full py-14 rounded-tl-2xl rounded-tr-2xl  bg-[#004D43] -mb-5'>
            <div className='text border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap overflow-hidden gap-20  uppercase'>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}}  className='text-[15vw]  font-main tracking-tight text-[#F1F1F1] font-bold leading-none pt-10'>Hi Iam Nadeem</motion.h1>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}}  className='text-[15vw]  font-main tracking-tight text-[#F1F1F1] font-bold leading-none pt-10'>Hi Iam Nadeem</motion.h1>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}}  className='text-[15vw]  font-main tracking-tight text-[#F1F1F1] font-bold leading-none pt-10'>Hi Iam Nadeem</motion.h1>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}}  className='text-[15vw]  font-main tracking-tight text-[#F1F1F1] font-bold leading-none pt-10'>Hi Iam Nadeem</motion.h1>
            </div>
        </div>
    )
};
