import React from "react";
import "./project.scss";
import Tilty from "react-tilty";
import IMG1 from "../../assets/project1.png";
import IMG2 from "../../assets/project2.png";
import IMG3 from "../../assets/project3.png";

export default function Projects() {
  return (
    <div className="project">
      <section id="project">
        <h5>My Recent Work</h5>
        <h2>Projects</h2>
        <div className="container project__container">
          <Tilty>
            <div className="project__item">
              <div className="project__item-image">
                <img src={IMG1} alt="" />
              </div>
              <h3>ChatApp</h3>
              <a
                href="https://github.com/thejaysharma/Chat-App"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
          </Tilty>
          <Tilty>
            <div className="project__item">
              <div className="project__item-image">
                <img src={IMG2} alt="" />
              </div>
              <h3>Doc-AI</h3>
              <a
                href="https://github.com/thejaysharma/Doc-AI"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
          </Tilty>
          <Tilty>
            <div className="project__item">
              <div className="project__item-image">
                <img src={IMG3} alt="" />
              </div>
              <h3>Interactive Pricing Component</h3>
              <a
                href="https://github.com/thejaysharma/Interactive-pricing-component"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
          </Tilty>
        </div>
      </section>
    </div>
  );
}
