import React, { useState, useEffect } from "react";
import "../styles/Skills.scss";
import AppWrap from "../components/AppWrap";
import { motion } from "framer-motion";
import { basicsData, backendData, frontendData } from "../data/skillsData";

function Skills() {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  return (
    <>
      <h2 className="head-text">
        <span> SKILLS </span>
      </h2>
      <div className="skills__container">
        <div className="skills__basics skills__category">
          <h4 className="bold-text">Basics</h4>
          <div className="skills__content">
            {basicsData.map((skill, idx) => (
              <div className="skills__detail" key={idx}>
                <img
                  src={require(`../assets/${skill.img}`)}
                  alt={skill.skill}
                />
                <h5 className="bold-text">{skill.skill}</h5>
                <p className="p-text">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="skills__frontend skills__category">
          <h4 className="bold-text">Frontend Development</h4>
          {frontendData.map((skill, idx) => (
            <div className="skills__detail" key={idx}>
              <img src={require(`../assets/${skill.img}`)} alt={skill.skill} />
              <h5 className="bold-text">{skill.skill}</h5>
              <p className="p-text">{skill.level}</p>
            </div>
          ))}
        </div>
        <div className="skills__backend skills__category">
          <h4 className="bold-text">Backend Development</h4>
          {backendData.map((skill, idx) => (
            <div className="skills__detail" key={idx}>
              <img src={require(`../assets/${skill.img}`)} alt={skill.skill} />
              <h5 className="bold-text">{skill.skill}</h5>
              <p className="p-text">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AppWrap(Skills, "skills");
