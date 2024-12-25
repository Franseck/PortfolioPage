import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../components/Layout"


const AppRoute = () => {
  return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>} />

    
    </Routes>
    </BrowserRouter>
    

  )
}

export default AppRoute