import "../scss/home.scss"
import  Sshape from "../assets/logo-s.png"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>Hi, <br/> I'm
              <img src={Sshape} alt="seckin" />
                eckin
                <br />
                Web Developer
               </h1> 
               <h2>Front-End Developer / Photographer / Videographer </h2>
               <Link to="/contact" className="flat-button">CONTACT PAGE</Link>
        </div>
        
    </div>
  )
}

export default Home