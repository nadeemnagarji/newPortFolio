


import Navbar from "../components/Navbar"
import LandingPage from './LandingPage'
import Marque from '../components/Marque'
import About from '../components/About'
import Projects from '../components/project/Projects'
import Footer from '../components/Footer'
import LastFooter from '../components/LastFooter'






export default function MainPage(params) {


    const sections = [
        {id:"home",title:"home"},
        {id:"Projects",title:"Projects"},
        {id:"skills",title:"skills"},
        {id:"contact",title:"contact"},
      
      ]
    return(
      <div className=" w-screen  overflow-x-hidden flex items-center flex-col  bg-white">
          <Navbar  sections={sections}/>
          <LandingPage />
          <Marque />
          
          <About />
          <Projects />
          <Footer />
          <LastFooter />
        </div>
    )
};
