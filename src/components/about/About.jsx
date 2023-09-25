import React from "react";
import "./about.scss";
// import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import Tilty from "react-tilty";

export default function About() {
  return (
    <div className="about">
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__content">
            <div className="about__cards">
              <a href="#skills">
                <Tilty scale={1.1} perspective={900}>
                  <div className="js-tilt about__card">
                    <FiUsers className="about__icon" />
                    <h5>Skills</h5>
                  </div>
                </Tilty>
              </a>

              <a href="#project">
                <Tilty scale={1.1} perspective={900}>
                  <div className="js-tilt about__card">
                    <VscFolderLibrary className="about__icon" />
                    <h5>Projects</h5>
                  </div>
                </Tilty>
              </a>
            </div>

            <div className="about_me">
              <p>
                I'm Jay Prakash Sharma, a pre-final year student at the Indian
                Institute of Information Technology in Jabalpur. Web development
                is my passion, and I have particular expertise in both front-end
                and back-end technologies.
                <br />
                <br />
                I'm skilled in a variety of front-end technologies, including
                HTML5, CSS3, SCSS, JavaScript, and I've done a lot of work with
                libraries and frameworks like React.js and Next.js. JQuery, ES5+
                JavaScript, and well-known design frameworks like Bootstrap and
                Tailwind CSS are all things I'm proficient in.
                <br />
                <br />I have extensive experience with Node.js, MongoDB, and
                Express.js in the field of back-end development, which enables
                me to construct reliable server-side solutions. I've also
                improved my state management abilities using tools like Context
                API.
              </p>
            </div>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
