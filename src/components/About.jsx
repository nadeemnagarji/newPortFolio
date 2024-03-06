export default function About(params) {
    return(
        <div className="w-full py-20 bg-[#CDEA68] rounded-tl-3xl  rounded-tr-3xl  px-20"> 
                <h1 className=" font-neue tracking-tight text-[4vw]">Ochi is a strategic partner for  
                tech businesses that need to raise funds, sell ,   ideas, 
                and hire great .</h1>
                <div className="mt-10 flex w-full border-t-[1px] border-[#a1b562]">
                    <div className=" w-1/2 mt-5 ">
                        <h1 className="text-5xl font-main tracking-wide  ">My Skills</h1>
                        <button className="px-6 py-3 bg-zinc-900 mt-10 rounded-full flex items-center justify-between gap-5 text-[#f1f1f1] uppercase"  >Read More
                        <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
                        </button>
                    </div>
                    <div className="w-1/2 mt-5 font-main tracking-wider  rounded-3xl h-fit p-5 bg-[#004D43]  text-2xl flex  flex justify-around items-start">
                        <div>
                        <div className=" w-fit px-4 py-1  flex  items-center justify-center gap-4  rounded-md  text-[#f1f1f1] ">  <div className="w-2 h-2 rounded-full bg-zinc-100"></div>JavaScript</div>
                        <div className=" w-fit px-4 py-1  flex  items-center justify-center gap-4 mt-10 rounded-md  text-[#f1f1f1] ">  <div className="w-2 h-2 rounded-full bg-zinc-100"></div>HTML</div>
                        <div className=" w-fit px-4 py-1  flex  items-center justify-center gap-4 mt-10 rounded-md  text-[#f1f1f1] ">  <div className="w-2 h-2 rounded-full bg-zinc-100"></div>Tailwind</div>
                        <div className=" w-fit px-4 py-1  flex  items-center justify-center gap-4 mt-10 rounded-md  text-[#f1f1f1] ">  <div className="w-2 h-2 rounded-full bg-zinc-100"></div>Java</div>
                        
                        </div>
                        <div>
                        <div className=" w-fit px-4 py-1  flex  items-center justify-center gap-4  rounded-md  text-[#f1f1f1] ">  <div className="w-2 h-2 rounded-full bg-zinc-100"></div>React</div>
                        <div className=" w-fit px-4 py-1  flex  items-center justify-center gap-4 mt-10 rounded-md  text-[#f1f1f1] ">  <div className="w-2 h-2 rounded-full bg-zinc-100"></div>CSS</div>
                        <div className=" w-fit px-4 py-1  flex  items-center justify-center gap-4 mt-10 rounded-md  text-[#f1f1f1] ">  <div className="w-2 h-2 rounded-full bg-zinc-100"></div> Material UI</div>
                        <div className=" w-fit px-4 py-1  flex  items-center justify-center gap-4 mt-10 rounded-md  text-[#f1f1f1] ">  <div className="w-2 h-2 rounded-full bg-zinc-100"></div>Git</div>
                        
                        </div>
                    </div>
                </div>
        </div>
    )
};
