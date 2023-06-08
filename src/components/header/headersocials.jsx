import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri';


const headersocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/shubhransu-boral-473aba241/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/shubh7codes" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/shubh._.here_/" target="_blank"><RiInstagramFill/></a>
    </div>
  )
}

export default headersocials