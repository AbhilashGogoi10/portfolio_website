import React from 'react'
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
    <a href="#" className='footer__logo'>ABHILASH PORTFOLIO</a>

    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Skills</a></li>
      {/* <li><a href="#services">Services</a></li> */}
      <li><a href="#portfolio">Projects</a></li>
      {/* <li><a href="#testimonials">Testimonials</a></li> */}
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://instagram.com"><BsInstagram/></a>
      <a href="https://www.linkedin.com/in/abhilash-gogoi-190328145/" target="_blank"><BsLinkedin/></a>
    <a href="https://github.com/AbhilashGogoi10" target="_blank"><FaGithub/></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; ABHILASH PORTFOLIO. All rights reserved.</small>
    </div>
    </footer>
  )
}

export default Footer;