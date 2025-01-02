import "../scss/about.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from "react-loaders"


import { useEffect, useState } from "react"
import AnimatedLetters from "../components/AnimatedLetters"

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
<h1>
  <AnimatedLetters/>
</h1>
      </div>

    </div>
  )
}

export default About