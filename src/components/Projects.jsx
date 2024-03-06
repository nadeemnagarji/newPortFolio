
import cryptoImg from "../../crypto.png"

export default function Projects(params) {

    return(
       <div className="w-full py-10 bg-[#F1f1f1] ">
            <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
                <div className="border-b-[1px] border-zinc-700 ">
                <h1 className=" font-main text-5xl pb-10" >My Projects</h1>
                </div>
             
                <div className="px-10">



                <div className="cards w-full flex gap-10 mt-16">

                  

                    <div className="relative cardcontainer w-1/2   h-[70vh] rounded-lg bg-[#CDCDCE]">
                    <h1 className="  headings absolute left-full -translate-x-1/4 top-1/2 z-[9] font-main  text-5xl text-[#acca41]  font-bold tracking-wider top-">CRYPTO</h1>
                        <div className="   card flex items-center justify-center w-full h-full  bg-[#CDCDCE]">  
                        <img className="  bg-cover w-2/3 h-2/3 rounded-md " src={cryptoImg} alt="" />
                        </div>
                    </div>


                    <div className=" relative cardcontainer card w-1/2    h-[70vh] rounded-lg bg-[#19181E]">
                    <h1 className="  headings absolute right-full translate-x-20 top-1/2 z-[9] font-main  text-5xl text-[#acca41]  font-bold tracking-wider top-">CRYPTO</h1>
                    <div className="  card w-full h-full flex items-center justify-center  bg-[#19181E]">  
                    <img className="  bg-cover w-2/3 h-2/3 rounded-md " src={cryptoImg} alt="" />
                        </div>
                    </div>
                </div>



                </div>
               
            </div>
       </div>
    )
};
