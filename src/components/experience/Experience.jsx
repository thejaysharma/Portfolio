import React from 'react'
import "./experience.scss"
import { BsPatchCheckFill } from "react-icons/bs"
import Tilty from 'react-tilty'

export default function Experience() {
  return (
    <div className='experience'>
      <section id='experience'>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">
          <Tilty>
            <div className="experience__frontend">
              <h3>Frontend Development</h3>
              <div className="experience__content">
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icons' />
                  <div>
                    <h4>HTML</h4>
                    <small className="text-light">
                      Experienced
                    </small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icons' />
                  <div>
                    <h4>CSS</h4>
                    <small className="text-light">
                      Experienced
                    </small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icons' />
                  <div>
                    <h4>JavaScript</h4>
                    <small className="text-light">
                      Experienced
                    </small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icons' />
                  <div>
                    <h4>Bootstrap</h4>
                    <small className="text-light">
                      Experienced
                    </small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icons' />
                  <div>
                    <h4>ReactJS</h4>
                    <small className="text-light">
                      Experienced
                    </small>
                  </div>
                </article>
              </div>
            </div>
          </Tilty>

          <Tilty>
            <div className="experience__backend">
              <h3>Backend Development</h3>
              <div className="experience__content">
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icons' />
                  <div>
                    <h4>Node JS</h4>
                    <small className="text-light">
                      Beginner
                    </small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icons' />
                  <div>
                    <h4>MongoDB</h4>
                    <small className="text-light">
                      Beginner
                    </small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icons' />
                  <div>
                    <h4>PHP</h4>
                    <small className="text-light">
                      Beginner
                    </small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icons' />
                  <div>
                    <h4>MySQL</h4>
                    <small className="text-light">
                      Beginner
                    </small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icons' />
                  <div>
                    <h4>Python</h4>
                    <small className="text-light">
                      Beginner
                    </small>
                  </div>
                </article>
              </div>
            </div>
          </Tilty>
        </div>
      </section>
    </div>
  )
}
