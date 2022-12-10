import React from 'react'
import "./about.scss"
import ABTME from "../../assets/me-about.jpg"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"
import Tilty from 'react-tilty'


export default function About() {
  return (
    <div className='about'>
      <section id='about'>
        <h5>
          Get To Know
        </h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ABTME} alt="About Me" />
            </div>
          </div>



          <div className="about__content">
            <div className="about__cards">
              <Tilty scale={1.1} perspective={900}>
                <div className='js-tilt about__card'>
                  <FaAward className='about__icon' />
                  <h5>Experience</h5>
                </div>
              </Tilty>

              <Tilty scale={1.1} perspective={900}>
                <div className='js-tilt about__card'>
                  <FiUsers className='about__icon' />
                  <h5>Skills</h5>
                </div>
              </Tilty>
              <Tilty scale={1.1} perspective={900}>
                <div className='js-tilt about__card'>
                  <VscFolderLibrary className='about__icon' />
                  <h5>Projects</h5>
                </div>
              </Tilty>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quod libero veniam laudantium, quasi adipisci nesciunt nulla unde magni, corrupti ullam at. Ratione at, reiciendis eum obcaecati accusamus sit eos!</p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </section >
    </div >
  )
}
