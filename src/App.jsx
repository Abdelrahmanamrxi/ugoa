
import './App.css'
import Layout from './layout/Layout'
import Home from './components/Home'
import Contact from './components/Contact'
import Services from './components/Services'
import About from './components/About'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {


  return (
   <BrowserRouter>
   <Routes>
    <Route element={<Layout/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/about_us" element={<About/>}/>

     </Route>
    
   </Routes>

   </BrowserRouter>
   
  )
}

export default App
