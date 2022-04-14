import React, { useState, useEffect } from "react";
import "../styles/Skills.scss";
import AppWrap from "../components/AppWrap";
import MotionWrap from "../components/MotionWrap";
import { motion } from "framer-motion";
import { basicsData, backendData, frontendData } from "../data/skillsData";

function Skills() {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  return (
    <>
      <h2 className="head-text">
        <span> SKILLS </span>
      </h2>
      <h2 class="head-text-small">I've used in projects and work</h2>
      <div className="skills__container">
        <div className="skills__category basic">
          <h4 className="bold-text">Basics</h4>
          <div className="skills__basics">
            {basicsData.map((skill, idx) => (
              <div className="skills__detail" key={idx}>
                <div className="app__flex" style={{justifyContent:"flex-start"}}>
                <img
                  src={require(`../assets/${skill.img}`)}
                  alt={skill.skill}
                />
                <h5 className="bold-text">{skill.skill}</h5></div>
                <p className="p-text">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="skills__category frontend">
          <h4 className="bold-text">Frontend Development</h4>
          <div className="skills__frontend">
          {frontendData.map((skill, idx) => (
            <div className="skills__detail" key={idx}>
              <div className="app__flex" style={{justifyContent:"flex-start"}}>
              <img src={require(`../assets/${skill.img}`)} alt={skill.skill} />
              <h5 className="bold-text">{skill.skill}</h5></div>
              <p className="p-text">{skill.level}</p>
            </div>
          ))}
          </div>
        </div>
        <div className="skills__category backend">
          <h4 className="bold-text">Backend Development</h4>
          <div className="skills__backend">
          {backendData.map((skill, idx) => (
            <div className="skills__detail" key={idx}>
              <div className="app__flex" style={{justifyContent:"flex-start"}}>
              <img src={require(`../assets/${skill.img}`)} alt={skill.skill} />
              <h5 className="bold-text">{skill.skill}</h5></div>
              <p className="p-text">{skill.level}</p>
            </div>
          ))}</div>
        </div>
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__primarybg',
);
