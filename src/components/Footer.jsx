import { useRef, useState } from "react"

import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SlSocialGithub } from "react-icons/sl";

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
        <div className="w-full h-screen bg-[#fafaf9] text-center px-20  py-10 ">
            <h1 className="text-[10vw] font-main  text-[#8c8c73] font-black tracking-widest">.CONTACT.</h1>
            <div className="w-full h-[90vh] mt-20 flex gap-40">
                <div className="w-3/5  ">
                    <h1 className=" font-neue text-4xl font-bold">Let's make your vision a reality. Reach out anytime! </h1>
                   <div className="flex flex-col justify-between h-50 mt-20">

                    <div className="flex w-full justify-between gap-20">
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
                    {message && <label className="text-[#8c8c73] text-[10px]">Your Email</label>}
                        <input name="message" placeholder="Your Message" value={data.message} onChange={(e)=>handleChange(e)} className="w-full outline-none border-none bg-transparent" type="email" onFocus={(e)=>handlefocus(e)} onBlur={(e)=>handleBlur(e)}  />
                    </div>

                    <button onClick={handleSubmit} className=" self-start mt-10 px-8 py-4 rounded-full font-neue font-medium text-[#f1f1f1] bg-[#262626]" >SEND MESSAGE</button>
                   </div>
                </div>





                <div className="w-2/5 flex  flex-col items-start gap-20">
                <div className="flex flex-col items-start" >
                    <h1 className=" text-3xl font-main font-bold mb-4">Contact Details</h1>
                    <h3>nadeemnagarji@gmail.com</h3>
                </div>
                <div>
                    <h1 className=" text-3xl font-main font-bold mb-4">My Digital Spaces</h1>
                   <div className="flex w-1/2 h-10 gap-2 items-center text-[#8c8c73]"><TiSocialLinkedinCircular /> <h3 className=" text-lg ">LinkedIn</h3> </div> 
                   <div  className="flex w-1/2 h-10 gap-2 items-center text-[#8c8c73]" > <  SlSocialGithub /> < h3 className="text-lg"> Github</h3> </div> 
                </div>
                </div>
                
                
            </div>
        </div>
    )
};
