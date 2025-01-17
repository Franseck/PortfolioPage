import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../components/Layout"
import Home from "../components/Home"
import About from "../components/About"
import Contact from "../components/Contact"
import Portfolio from "../pages/Portfolio"


const AppRoute = () => {
  return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>} />
        <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        
          <Route path="/portfolio" element={<Portfolio />} />

     
    
    </Routes>
    </BrowserRouter>
    

  )
}

export default AppRoute