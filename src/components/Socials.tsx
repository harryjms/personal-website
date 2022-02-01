import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Socials = () => {
  return (
    <div className="flex gap-4 text-2xl">
      <a
        href="https://twitter.com/harryjms"
        target="_blank"
        className="hover:text-blue-400"
      >
        <FontAwesomeIcon icon={faTwitter} title="Twitter @harryjms" />
      </a>
      <a
        href="https://github.com/harryjms"
        target="_blank"
        className="hover:text-purple-400"
      >
        <FontAwesomeIcon icon={faGithub} title="Github harryjms" />
      </a>
      <a
        href="https://linkedin.com/in/harryjarman"
        target="_blank"
        className="hover:text-blue-600"
      >
        <FontAwesomeIcon icon={faLinkedin} title="LinkedIn" />
      </a>
    </div>
  );
};

export default Socials;
