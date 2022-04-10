import React from "react";
import "../styles/Header.scss";
import { motion } from "framer-motion";
import AppWrap from "../components/AppWrap";
import ME from "../assets/me.png";
function Header() {
  return (
    <div id={"home"}className={`app__container header__container`}>
    <div className="app__wrapper app__flex">
      <div className="app__header">
        <div className="about__me">
          {" "}
          <img src={ME} alt="profile" className="about__me-image" />
        </div>

        <div className="about__content">
          {" "}
          <h2 className="head-text"> Hello I'm </h2>
          <h2 className="head-text2">
              Mary Xu
          </h2>
          <h2 className="head-text-small">
            4th Year Computer Science Student at the University of Toronto
          </h2>
          <div className="about__text">
          <p> I'm specializing in Software Engineering 👩‍💻 and majoring in Statistics📊. 
            I love building frontend solutions to solve real-life problems and you can check out some of them in my projects!
            I am also curious to explore opportunities in Machine Learning 🧠, which allows me to combine my knowledge in statistics and software development.
             </p></div>
          <div className="about__btn-container"> 
          <a href={require("../pdf/resume.pdf")} className="about__me-btn" download="Mary_Resume.pdf">
            Resume
          </a>
          <a href="#contact" className="about__me-btn">
            Get In Touch
          </a>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
}

export default Header;
