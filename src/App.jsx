import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import Marque from './components/Marque'
import About from './components/About'
import Projects from './components/project/Projects'
import Footer from './components/Footer'
import LastFooter from './components/LastFooter'

import LocomotiveScroll from 'locomotive-scroll';




function App() {
  const [count, setCount] = useState(0)
  const locomotiveScroll = new LocomotiveScroll();


  return (
      <div className=" w-full  flex items-center flex-col  bg-white">
       
          <Navbar />
          <LandingPage />
          <Marque />
          
          <About />
          <Projects />
          <Footer />
          <LastFooter />
      </div>
    
  )
}

export default App
