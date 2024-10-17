import { useState } from 'react'


import LocomotiveScroll from 'locomotive-scroll';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ResumePDF from './pages/Resume';




function App() {
  const [count, setCount] = useState(0)
  const locomotiveScroll = new LocomotiveScroll({
    mobile:{
      smooth:true
    }
  });





  return (

    <Router>
      <Routes>
        

        <Route path="/" element={<MainPage />} />
        <Route path="/resume" element={<ResumePDF/>} />
        
   
      </Routes>
      </Router>
    
  )
}

export default App
