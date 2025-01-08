
import { useState } from 'react'
import "../scss/contact.scss"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from './AnimatedLetters'


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()
  const position = [51.505, -0.09];
  


  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious or large projects. 
            <br /> <br />
            However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
</div>

<div className='alt'>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
                      
                  <input placeholder="Name" type="text" name="name" required />
                     <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
               
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
        
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
           <div></div>
                  <input type="submit" className="flat-button" value="SEND" />
          
            </form>
          </div>
          <div className="map-wrap">

          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d46190.559230312574!2d-79.3916043!3d43.6500418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1736302950074!5m2!1sen!2sca"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     
</div>
    </div>
         
                   



        </div>
   
    </>
  )
}

export default Contact
