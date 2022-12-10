import "./nav.scss"
import { BiHomeAlt, BiUser, BiBook, BiMessageSquareDetail } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"
import React, { useState } from 'react'


export default function Nav() {

  const [ActiveNav, SetActiveNav] = useState("#")
  return (
    <div className='nav'>
      <nav>
        <a href="#" onClick={() => SetActiveNav('#')} className={ActiveNav === '#' ? "active" : ""}><BiHomeAlt/></a>
        <a href="#about" onClick={() => SetActiveNav('#about')} className={ActiveNav === '#about' ? "active" : ""}><BiUser/></a>
        <a href="#experience" onClick={() => SetActiveNav('#experience')} className={ActiveNav === '#experience' ? "active" : "" }><BiBook/></a>
        <a href="#services" onClick={() => SetActiveNav('#services')} className={ActiveNav === '#services' ? "active" : ""}><RiServiceLine/></a>
        <a href="#contact" onClick={() => SetActiveNav('#contact')} className={ActiveNav === '#contact' ? "active" : ""}><BiMessageSquareDetail/></a>
      </nav>
    </div>
  )
}
