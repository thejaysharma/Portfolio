import React from 'react'
import { BiCheck } from 'react-icons/bi'
import "./services.scss"
export default function Services() {
  return (
    <div className='services_main'>
      <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>
        
        <div className="container services__container">
          <div className="service">
            <div className="services__head">
              <h3>UI/UX Design</h3>
            </div>

            <ul className="sevices__list">
              <li>
                <BiCheck className='sevices__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
                <BiCheck className='sevices__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
                <BiCheck className='sevices__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
                <BiCheck className='sevices__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
                <BiCheck className='sevices__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
            </ul>
          </div>


          <div className="service">
            <div className="services__head">
              <h3>Web Deveopment</h3>
            </div>

            <ul className="sevices__list">
              <li>
                <BiCheck className='sevices__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
                <BiCheck className='sevices__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
                <BiCheck className='sevices__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
                <BiCheck className='sevices__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
                <BiCheck className='sevices__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
            </ul>
          </div>
        </div>
      </section> 
    </div>
  )
}
