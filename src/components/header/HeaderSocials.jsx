import React from "react";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

export default function HeaderSocials() {
  return (
    <div className="headersocials">
      <a
        href="https://www.linkedin.com/in/jay-prakash-sharma/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/thejaysharma"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://twitter.com/Jay_P_Sharma"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsTwitter />
      </a>
    </div>
  );
}
