import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import Marque from './components/Marque'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div className=" w-full  flex items-center flex-col  bg-white">
       
          <Navbar />
          <LandingPage />
          <Marque />
          
          <About />
          <Projects />
          <Footer />
      </div>
    
  )
}

export default App
