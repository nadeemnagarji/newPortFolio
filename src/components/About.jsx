import { motion, useInView } from "framer-motion"
import { useRef } from "react";



export default function About(params) {

    const ref = useRef(null)
    const isInView = useInView(ref)

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.5,
            staggerChildren: 0.5,
            
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


    return(
        <div data-scroll  data-scroll-section data-scroll-speed="-0.1" className=" w-full z-20 py-20 bg-[#FAFAF9] rounded-tl-3xl  rounded-tr-3xl  px-10"> 
                <h1 className=" text-center  uppercase  text-[#8c8c73] font-main font-bold tracking-tight text-[10vw]">
                about  me
                </h1>
                   <p className="text-xl font-neue font-bold text-[#262626] p-3 tracking-normal" >Hey there! I'm an independent frontend developer based in the state of Maharashtra, India.<br></br>
I enjoy creating designs that are easy to use and look great.<br></br> I want to help businesses stand out online.When I'm not working, I'm learning about backend technologies to improve my skills. Let's work together to make your ideas a reality! </p> 
                <div className="mt-10 flex w-full border-t-[1px] border-[#a1b562]">
                    <div className=" w-1/2 mt-5 ">
                        <h1 className="text-5xl font-main tracking-wide  ">My Skills</h1>
                        <button className="px-6 py-3 bg-zinc-900 mt-10 rounded-full flex items-center justify-between gap-5 text-[#f1f1f1] uppercase"  >Read More
                        <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
                        </button>
                    </div>
                    <div ref={ref}  className="w-1/2 mt-5 font-main tracking-wider  rounded-3xl h-fit p-5 bg-[#004D43]  text-2xl flex   justify-around items-start">
                        <motion.div 
                        className="flex flex-col gap-5"
                        variants={container}
                        initial={isInView? "hidden" : "visible"}
                        animate={isInView? "visible" : "hidden"}
                        >
                          {  ["JavaScript","HTML","Tailwind","Java"].map((item,i)=>{
                                return   <motion.div variants={items} key={item} className=" w-fit px-4 py-1  flex  items-center justify-center gap-4  rounded-md  text-[#f1f1f1] "> 
                                <div className="w-2 h-2 rounded-full bg-zinc-100"></div>{item}</motion.div>
                          })}
                      
                        
                        </motion.div>

                        <motion.div className="flex flex-col gap-5"
                        className="flex flex-col gap-5"
                        variants={container}
                        initial={isInView? "hidden" : "visible"}
                        animate={isInView? "visible" : "hidden"}
                        >
                        {  ["React","CSS","Material UI","Git"].map((item,i)=>{
                                return   <motion.div variants={items} key={item} className=" w-fit px-4 py-1  flex  items-center justify-center gap-4  rounded-md  text-[#f1f1f1] ">  <div className="w-2 h-2 rounded-full bg-zinc-100"></div>{item}</motion.div>
                         })}
                        </motion.div>
                    </div>
                </div>
        </div>
    )
};
