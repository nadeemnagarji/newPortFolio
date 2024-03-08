import { delay, motion, useInView } from "framer-motion"
import { useRef, useState } from "react"




export default function Cards({name,img,extraClasses,links}) {
  
    const [ishovering,setHovering] = useState(false)
    const ref = useRef(null)
    const [zIndex,setZIndex] = useState(1)
    const isInView = useInView(ref)

    return(
            <a className=" max-laptop:w-full "   ref={ref} href={links}  target="_blank">
        <motion.div   className="relative cardcontainer max-laptop:w-full   h-[70vh] rounded-lg bg-[#CDCDCE]" 
      
         style={{ zIndex: zIndex }} // Set dynamic z-index
        whileHover={{scale:0.95}} 
        transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}}
        onMouseEnter={()=>
                        {setHovering(true)
                        setZIndex(2)}
                    }
        initial={isInView? {opacity:"0"}:{opacity:"100"}}
        animate={isInView? {opacity:"100"}:{opacity:"0"}}
        onMouseLeave={()=>{setHovering(false)
                            setZIndex(1)}
                    }>
    <h1  className= {` flex  headings absolute   top-1/2 z-[9] font-main  text-5xl text-[#004D43] 
         font-bold tracking-wider  ${extraClasses}`}>{name.split("").map(((item,index)=>{
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
        
        className="  bg-cover w-2/3 h-2/3 rounded-md  max-lg-phone:w-3/4 max-lg-phone:h-3/4 " src={img} alt="" />
        </div>
    </motion.div> </a>
    )
};
