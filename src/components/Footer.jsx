import { useRef, useState } from "react"

import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SlSocialGithub } from "react-icons/sl";
import { motion, useInView } from "framer-motion";

export default function Footer(params) {


    const [name,setname] = useState(null)
    const [email,setEmail] = useState(null)
    const [message,setMessage] = useState(null)
    const [data,setdata] = useState({
        name:"",
        email:"",
        message:""
    })


    const ref = useRef()
    const isInView = useInView(ref)

        const handlefocus = (e)=>{
            if(e.target.name==="name"){
                setname("your Name")
                e.target.placeholder= ""
                console.log(e.target.placeholder);
            }else if(e.target.name ==="email"){
                setEmail("your Email")
                e.target.placeholder= ""
            }else{
                setMessage("your Message")
                e.target.placeholder= ""
            }
         
        }

        const handleBlur=(e)=>{
            if(e.target.name==="name"){
                setname(null)
                e.target.placeholder="Your name"
            }else if( e.target.name ==="email"){
                setEmail(null)
            e.target.placeholder="Your Email"
            }else{
                setMessage(null)
                e.target.placeholder="Your Message"
            }
           
        }

        const handleChange = (e)=>{
            const {value,name} = e.target
            setdata({...data,[name]:value})
        }


        const handleSubmit = () =>{
            console.log(data);
            setdata({
                name:"",
                email:"",
                message:""
            })
        }

   
    return(
        <div ref={ref} data-scroll  data-scroll-section data-scroll-speed="-0.2"   className="w-full z-40  bg-[#fafaf9] text-center max-laptop:p-5   px-20 pb-10  ">
            <motion.h1 
             initial={ isInView? {opacity:"0",y:20}: {opacity:"100%",y:0}} 
             animate={isInView?  {opacity:"100%",y:0}:{opacity:"0",y:50} }  
             transition={{ease:[0.33, 1, 0.68, 1],duration:0.5,delay:0.5}}
            className="text-[10vw] font-main  text-[#8c8c73] font-black tracking-widest">.CONTACT.</motion.h1>
            <div className="w-full mt-20 flex  max-tablet:flex-col max-tablet:items-center laptop:gap-40 max-laptop:gap-20 ">
                <div className="w-3/5 max-laptop:w-full  ">
                    <motion.h1
                    initial={ isInView? {opacity:"0",y:20}: {opacity:"100%",y:0}} 
                    animate={isInView?  {opacity:"100%",y:0}:{opacity:"0",y:20} }  
                    transition={{ease:[0.76, 0, 0.24, 1],duration:1,delay:0.3}}
                    className=" font-neue text-4xl font-bold">
                        Let's make your vision a reality. Reach out anytime! 
                        </motion.h1>
                <div className="flex flex-col justify-between  h-50 mt-20">

                    <div className="flex  w-full justify-between gap-20">
                        <div   className="border-b-[1px] w-full flex flex-col items-start justify-end border-[#8c8c73] h-10" >
                        {name && <label className="text-[#8c8c73] text-[10px]">Your name</label>}
                        <input  name="name" onFocus={(e)=>handlefocus(e)} onBlur={(e)=>handleBlur(e)} value={data.name} onChange={(e)=>handleChange(e)} className="w-full  outline-none border-none bg-transparent" placeholder="Your Name" type="text"  />
                        </div>
                    <div className=" border-b-[1px] w-full  flex flex-col items-start  justify-end border-[#8c8c73] h-10" >
                    {email && <label className="text-[#8c8c73] text-[10px]">Your Email</label>}
                        <input name="email" placeholder="Your Email" value={data.email} onChange={(e)=>handleChange(e)} className="w-full  outline-none border-none bg-transparent" type="email" onFocus={(e)=>handlefocus(e)} onBlur={(e)=>handleBlur(e)}  />
                    </div>
                    

                    </div>

                    <div className=" mt-20 py-2 border-b-[1px] w-full  flex flex-col items-start  justify-end border-[#8c8c73] h-10" >
                    {message && <label className="text-[#8c8c73] text-[10px]">Your Message</label>}
                        <input name="message" placeholder="Your Message" value={data.message} onChange={(e)=>handleChange(e)} className="w-full outline-none border-none bg-transparent" type="email" onFocus={(e)=>handlefocus(e)} onBlur={(e)=>handleBlur(e)}  />
                    </div>

                    <motion.button
                    initial={ isInView? {opacity:"0",y:20}: {opacity:"100%",y:0}} 
                    animate={isInView?  {opacity:"100%",y:0}:{opacity:"0",y:20} }  
                    transition={{ease:[0.76, 0, 0.24, 1],duration:1,delay:1}}
                    onClick={handleSubmit} className=" self-start mt-10 px-8 py-4 rounded-full font-neue font-medium text-[#f1f1f1] bg-[#262626] max-lg-phone:self-center " >SEND MESSAGE</motion.button>
                </div>
                </div>





                <div className="w-2/5 max-laptop:w-full    flex  max-tablet:flex-row  flex-col items-start  tablet:gap-36  max-lg-phone:flex-col max-lg-phone:items-center flex max-lg-phone:gap-10">
                <div className="flex flex-col max-tablet:w-1/2 max-lg-phone:w-full max-lg-phone:items-center items-start" >
                    <motion.h1
                     initial={ isInView? {opacity:"0",y:20}: {opacity:"100%",y:0}} 
                     animate={isInView?  {opacity:"100%",y:0}:{opacity:"0",y:20} }  
                     transition={{ease:[0.76, 0, 0.24, 1],duration:1,delay:0.3}}
                    className=" text-3xl font-main font-bold mb-4">Contact Details</motion.h1>
                    <motion.h3
                     initial={ isInView? {opacity:"0",y:20}: {opacity:"100%",y:0}} 
                     animate={isInView?  {opacity:"100%",y:0}:{opacity:"0",y:20} }  
                     transition={{ease:[0.76, 0, 0.24, 1],duration:1,delay:0.5}}
                    >nadeemnagarji@gmail.com</motion.h3>
                </div>
                <div className="  flex-col max-tablet:w-1/2 justify-between max-lg-phone:w-full max-lg-phone:items-center">
                    <motion.h1
                     initial={ isInView? {opacity:"0",y:20}: {opacity:"100%",y:0}} 
                     animate={isInView?  {opacity:"100%",y:0}:{opacity:"0",y:20} }  
                     transition={{ease:[0.76, 0, 0.24, 1],duration:1,delay:0.3}}
                    className=" text-3xl   font-main font-bold mb-4">My Digital Spaces</motion.h1>
                   <div className="flex max-lg-phone:w-full w-1/2 h-10 gap-2 items-center text-[#8c8c73] max-lg-phone:justify-center"><TiSocialLinkedinCircular /> <motion.h3
                        initial={ isInView? {opacity:"0",y:20}: {opacity:"100%",y:0}} 
                        animate={isInView?  {opacity:"100%",y:0}:{opacity:"0",y:20} }  
                        transition={{ease:[0.76, 0, 0.24, 1],duration:1,delay:0.5}}
                   className=" text-lg ">LinkedIn</motion.h3> </div> 
                   <div  className="flex w-1/2 max-lg-phone:w-full max-lg-phone:justify-center h-10 gap-2 items-center text-[#8c8c73]" > <  SlSocialGithub /> < motion.h3
                        initial={ isInView? {opacity:"0",y:20}: {opacity:"100%",y:0}} 
                        animate={isInView?  {opacity:"100%",y:0}:{opacity:"0",y:20} }  
                        transition={{ease:[0.76, 0, 0.24, 1],duration:1,delay:1}}
                   className="text-lg"> Github</motion.h3> </div> 
                </div>
                </div>
                
                
            </div>
            
        </div>

    )
};
