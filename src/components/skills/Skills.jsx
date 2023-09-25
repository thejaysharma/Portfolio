import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import Tilty from "react-tilty";
import "./skills.scss";

export default function Skills() {
  return (
    <div className="skills">
      <section id="skills">
        <h5>What Skills I Have</h5>
        <h2>My skills</h2>

        <div className="container skills__container">
          <Tilty>
            <div className="skills__frontend">
              <h3>Frontend Development</h3>
              <div className="skills__content">
                <article className="skills__details">
                  <BsPatchCheckFill className="skills__details-icons" />
                  <div>
                    <h4>HTML</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="skills__details">
                  <BsPatchCheckFill className="skills__details-icons" />
                  <div>
                    <h4>CSS</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="skills__details">
                  <BsPatchCheckFill className="skills__details-icons" />
                  <div>
                    <h4>JavaScript</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="skills__details">
                  <BsPatchCheckFill className="skills__details-icons" />
                  <div>
                    <h4>NextJS</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="skills__details">
                  <BsPatchCheckFill className="skills__details-icons" />
                  <div>
                    <h4>ReactJS</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="skills__details">
                  <BsPatchCheckFill className="skills__details-icons" />
                  <div>
                    <h4>Tailwind Css</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
              </div>
            </div>
          </Tilty>

          <Tilty>
            <div className="skills__backend">
              <h3>Backend Development</h3>
              <div className="skills__content">
                <article className="skills__details">
                  <BsPatchCheckFill className="skills__details-icons" />
                  <div>
                    <h4>Node JS</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="skills__details">
                  <BsPatchCheckFill className="skills__details-icons" />
                  <div>
                    <h4>MongoDB</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="skills__details">
                  <BsPatchCheckFill className="skills__details-icons" />
                  <div>
                    <h4>Express</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="skills__details">
                  <BsPatchCheckFill className="skills__details-icons" />
                  <div>
                    <h4>MySQL</h4>
                    <small className="text-light">Beginner</small>
                  </div>
                </article>
                <article className="skills__details">
                  <BsPatchCheckFill className="skills__details-icons" />
                  <div>
                    <h4>Python</h4>
                    <small className="text-light">Beginner</small>
                  </div>
                </article>
              </div>
            </div>
          </Tilty>
        </div>
      </section>
    </div>
  );
}
