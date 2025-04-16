
import './App.css'
import Layout from './layout/Layout'
import { useRef } from 'react'
import Home from './components/Home'
import Contact from './components/Contact'
import Services from './components/Services'
import About from './components/About'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
   const serviceRef=useRef(null)
   const scrollToServices = () => {
    if (serviceRef.current) {
      serviceRef.current.scrollIntoView({ behavior: "smooth" });
      
    }
  }
  return (
   <BrowserRouter>
   <Routes>
    <Route element={<Layout
     scrollToServices={scrollToServices}
    />}>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/services" element={
    <Services
    refProp={serviceRef}
    />}/>
    <Route path="/about_us" element={<About/>}/>

     </Route>
    
   </Routes>

   </BrowserRouter>
   
  )
}

export default App
