import { useInView } from "framer-motion";
import cryptoImg from "../../../crypto.png";
import AirbnbImg from "../../../Airbnb.png";
import BlinkitImg from "../../../Blinkit.png";
import MusicImg from "../../../Music.png";
import { useRef, useState } from "react";
import Cards from "./Cards";
import praccel from "../../../public/Praccel.png"
export default function Projects(params) {
  const [ishovering, setHovering] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const items = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div
      name="Projects"
      data-scroll-section
      className="w-full py-10 z-30 bg-[#F1f1f1] "
    >
      <div className="w-full px-20  border-b-[1px] border-zinc-700 pb-20 max-lg-phone:px-5 max-tablet:px-5">
        <div className="border-b-[1px] border-zinc-700 ">
          <h1 className=" font-main text-5xl pb-10 ">My Projects</h1>
        </div>

        <div className="px-10  max-lg-phone:px-0">
          <div className="cards w-full laptop:grid flex flex-wrap items-center justify-center   laptop:grid-cols-2 gap-4 mt-16 ">
            <Cards
              name="Crypto Tracker"
              img={cryptoImg}
              extraClasses="left-full -translate-x-1/2"
              links="http://crypto-tracker-eight-psi.vercel.app/"
            />
            <Cards
              name="Music  Academy"
              img={MusicImg}
              extraClasses="right-full translate-x-1/3"
              links="https://music-maestro.vercel.app/"
            />
            <Cards
            name="Praccel"
            img={praccel}
              extraClasses="left-full -translate-x-1/2"
            />
            <Cards
              name="AirBnB"
              img={AirbnbImg}
              extraClasses="right-full translate-x-1/3"
              links="https://nadeemnagarji.github.io/Airbnb-Clone/"
            />
            <Cards
              name="Blinkit-UI"
              img={BlinkitImg}
                 extraClasses="left-full -translate-x-1/2"
              links="https://nadeemnagarji.github.io/Blinkit-clone/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/*

INDIVIDUAL CARD CODE


  { <div className="relative cardcontainer w-1/2   h-[70vh] rounded-lg bg-[#CDCDCE]"  
                        onMouseEnter={()=>setHovering(true)}
                        onMouseLeave={()=>setHovering(false)}>
                    <h1 className=" flex  headings absolute left-full -translate-x-1/4 top-1/2 z-[9] font-main  text-5xl text-[#acca41]  font-bold tracking-wider top-">{"CRYPTO".split("").map(((item,index)=>{
                        return <motion.span 
                        className=" inline-block"
                        initial={{y:"100%" , opacity:"0"}} 
                        animate={ ishovering? {y:"0" ,opacity:"100%"} : {y:"100%" ,opacity:"0"}  } 
                        transition={{ease:easeInOut,delay:index*.06}}  >
                            {item}
                            </motion.span>
                    }))}</h1>
                        <div className="   card flex items-center justify-center w-full h-full  bg-[#CDCDCE]">  
                        <img className="  bg-cover w-2/3 h-2/3 rounded-md " src={cryptoImg} alt="" />
                        </div>
                    </div> }


*/
