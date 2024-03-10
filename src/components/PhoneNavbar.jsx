import { useRef } from "react"
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
export default function PhoneNavbar(params) {

    const navRef = useRef()
    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav")
    }

    return(
        <div>
            <a href='#' >
            <div className=' font-logo cursor-pointer flex items-center justify-center gap-2 text-[2vw] font-neue font-semibold'>
            <h3 className=''>Nadeem</h3>
            <p className=' mt-0'>Nagarji</p>
            </div> 
            </a>

            <button c className=" nav-btn" onClick={showNavbar}>
                <FiAlignJustify />
            </button>

            <nav ref={navRef} >
                <a href="">Home</a>
                <a href="">Projects</a>
                <a href="">Skills</a>
                <a href="">Contact</a>
                <button>
                Resume
                </button>
                <button className=" nav-btn nav-close-btn" onClick={showNavbar}>
                <RxCross2 />
                </button>
            </nav>
            


        </div>
    )
};
