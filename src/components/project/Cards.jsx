import { delay, motion, useInView } from "framer-motion"
import { useRef, useState } from "react"




export default function Cards({name,img,extraClasses,links}) {
  
    const [ishovering,setHovering] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref)

    return(
            <a ref={ref} href={links}  target="_blank">
        <motion.div   className="relative cardcontainer w-full   h-[70vh] rounded-lg bg-[#CDCDCE]" 
        whileHover={{scale:0.95}} 
        transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}}
        onMouseEnter={()=>setHovering(true)}
        initial={isInView? {opacity:"0"}:{opacity:"100"}}
        animate={isInView? {opacity:"100"}:{opacity:"0"}}
        onMouseLeave={()=>setHovering(false)}>
    <h1  className= {` flex  headings absolute   top-1/2 z-[9] font-main  text-5xl text-[#004D43]  font-bold tracking-wider  ${extraClasses}`}>{name.split("").map(((item,index)=>{
        return <motion.span 
        className=" inline-block"
        initial={{y:"100%" , opacity:"0"}} 
        animate={  ishovering? {y:"0" ,opacity:"100%"} : {y:"100%" ,opacity:"0"}  } 
          >
            {item}
            </motion.span>
    }))}</h1>
        <div 
         className=" rounded-lg  card flex items-center justify-center w-full h-full  bg-[#CDCDCE]">  
        <motion.img
        
        className="  bg-cover w-2/3 h-2/3 rounded-md " src={img} alt="" />
        </div>
    </motion.div> </a>
    )
};
