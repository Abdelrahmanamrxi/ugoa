
import './App.css'
import Layout from './layout/Layout'
import Home from './components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {


  return (
   <BrowserRouter>
   <Routes>
    <Route element={<Layout/>}>
    <Route path="/" element={<Home/>}/>

     </Route>
    
   </Routes>

   </BrowserRouter>
   
  )
}

export default App
