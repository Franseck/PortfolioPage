import "../scss/home.scss"
import  Sshape from "../assets/logo-s.png"
import { Link } from "react-router-dom"
import { useState } from "react"
import AnimatedLetters from "./AnimatedLetters"
import Logo from "./Logo"

const Home = () => {

  const [letterClass, setLetterClass] = useState("text-animate")
const nameArray = ["e", "c", "k", "i", "n"]
const jobArray = [ 'W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l','o', 'p', 'e','r','.',]




  return (
    <div className='container home-page'>
      <div className="fleks">
        <div className='text-zone'>
        <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
              <img src={Sshape} alt="seckin" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
               </h1> 
               <h2>Front-End Developer / Photographer / Videographer </h2>
               <Link to="/contact" className="flat-button">CONTACT PAGE</Link>
        </div>
        <div className="logos">
           <Logo/>
        </div>
       </div>
    </div>
  )
}

export default Home