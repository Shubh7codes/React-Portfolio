import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {RiInstagramFill} from 'react-icons/ri';

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Shubhransu Boral</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Education</a></li>
        <li><a href="#contato">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/shubhransu-boral-473aba241/" target="_blank" rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com/shubh7codes" target="_blank" rel='noreferrer'><BsGithub /></a>
        <a href="https://www.instagram.com/shubh._.here_/" target="_blank" rel='noreferrer'><RiInstagramFill /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Shubhransu Boral. All rights reserved</small>
      </div>
    </footer>
  )
}

export default footer