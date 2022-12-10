import React from 'react'
import "./footer.scss"
import { BsTwitter, BsGithub } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='footer'>
      <footer>
        <a href="#" className='footer__logo'>Jay Prakash Sharma</a>
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className='footer__socials'>
          <a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
        </div>
      </footer>
    </div>
  )
}
