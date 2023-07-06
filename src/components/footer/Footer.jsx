import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Mayuresh Lohani</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100075318804727"><FaFacebook /></a>
        {/* <a href="https://instagram.com"><FiInstagram /></a> */}
        <a href="www.linkedin.com/in/mayuresh-lohani-87b28922a"><FaLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mayuresh Lohani. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer