import "../scss/sidebar.scss"
import { Link, NavLink } from "react-router-dom"
import logo from "../assets/Logo.png"
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faHome, faUser } from "@fortawesome/fontawesome-free-solid"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Sidebar = () => {
  return (
    <div className="nav-bar">
        <Link className="logo" to="/">
        <img src={logo} alt="logo" />
        </Link>
<nav>
<NavLink exact="true" activeclassname="active" to="/">
<FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
</NavLink>
<NavLink exact="true" activeclassname="active"  className="about-link" to="/about" >
<FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
</NavLink>
<NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
<FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
</NavLink>
</nav>
<ul>
    <li>
        <a target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/seckin-ozturk/">
        <FontAwesomeIcon icon={faLinkedin} />
        </a>
    </li>
    <li>
        <a target="_blank"
        rel="noreferrer"
        href="https://github.com/Franseck">
        <FontAwesomeIcon icon={faGithub} />
        </a>
    </li>
    <li>
        <a target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/Franseck_/">
        <FontAwesomeIcon icon={faInstagram} />
        </a>
    </li>
</ul>

    </div>
  )
}

export default Sidebar