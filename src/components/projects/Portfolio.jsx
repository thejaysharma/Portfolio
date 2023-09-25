import React from 'react'
import './portfolio.scss'
import Tilty from 'react-tilty'
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio3.jpg"
import IMG3 from "../../assets/portfolio6.jpg"


export default function Portfolio() {
  return (
    <div className='portfolio'>
      <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
          <Tilty>
            <div className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
              </div>
              <h3>This is Portfolio item title</h3>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Github</a>
            </div>
          </Tilty>
          <Tilty>
            <div className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
              </div>
              <h3>This is Portfolio item title</h3>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Github</a>
            </div>
          </Tilty>
          <Tilty>
            <div className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
              </div>
              <h3>This is Portfolio item title</h3>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Github</a>
            </div>
          </Tilty>
        </div>
      </section>
    </div>
  )
}
