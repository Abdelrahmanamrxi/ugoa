
import './App.css'
import Layout from './layout/Layout'
import { useEffect, useRef,Suspense } from 'react'
import React from 'react'
import Loading from './components/Loading'
const Home =React.lazy(() => import('./components/Home'))
const Contact =React.lazy(()=>import('./components/Contact')) 
const Services =React.lazy(()=>import('./components/Services')) 
const About=React.lazy(()=>import('./components/About'))
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
    <Route path="/" element={
      <Suspense fallback={<Loading/>}>
      <Home/>
      </Suspense>
      }/>
    <Route path="/contact" element={
      <Suspense fallback={<Loading/>}>
      <Contact/>
      </Suspense>
      }/>
    <Route path="/services" element={
      <Suspense fallback={<Loading/>}>
    <Services
    refProp={serviceRef}
    scrollToServices={scrollToServices}/>
    </Suspense>
    }/>
    <Route path="/about_us" element={
      <Suspense fallback={<Loading/>}>
      <About/>
      </Suspense>
      }/>

     </Route>
    
   </Routes>

   </BrowserRouter>
   
  )
}

export default App
