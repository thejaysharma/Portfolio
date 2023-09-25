import "./nav.scss"
import { BiHomeAlt, BiUser, BiBook, BiMessageSquareDetail } from "react-icons/bi"
import React, { useState } from 'react'


export default function Nav() {

  const [ActiveNav, SetActiveNav] = useState("#")
  return (
    <div className='nav'>
      <nav>
        <a href="#" onClick={() => SetActiveNav('#')} className={ActiveNav === '#' ? "active" : ""}><BiHomeAlt/></a>
        <a href="#about" onClick={() => SetActiveNav('#about')} className={ActiveNav === '#about' ? "active" : ""}><BiUser/></a>
        <a href="#skills" onClick={() => SetActiveNav('#skills')} className={ActiveNav === '#skills' ? "active" : "" }><BiBook/></a>
        <a href="#contact" onClick={() => SetActiveNav('#contact')} className={ActiveNav === '#contact' ? "active" : ""}><BiMessageSquareDetail/></a>
      </nav>
    </div>
  )
}
