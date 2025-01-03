import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../components/Layout"
import Home from "../components/Home"
import About from "../components/About"
import Contact from "../components/Contact"
import Dashboard from "../pages/Dashboard"
import Portfolio from "../pages/Portfolio"


const AppRoute = () => {
  return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>} />
        </Route>
        <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} />
     
    
    </Routes>
    </BrowserRouter>
    

  )
}

export default AppRoute