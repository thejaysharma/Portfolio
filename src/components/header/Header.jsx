import React from "react";
import "./header.scss";
import CV from "../../assets/cv.pdf";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import Typed from "react-typed";

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>
          {" "}
          <Typed
            strings={["Jay Prakash Sharma"]}
            typeSpeed={80}
            backSpeed={80}
            loop
          ></Typed>
        </h1>
        <h5 className="text-light">Front-End Developer</h5>
        <div className="cta">
          <a href={CV} download className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="my_photo" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
