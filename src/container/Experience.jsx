import React, { useState, useEffect } from "react";
import "../styles/Experience.scss";
import AppWrap from "../components/AppWrap";
import MotionWrap from "../components/MotionWrap";
import { motion } from "framer-motion";
import { ReactComponent as CIBCIcon } from "../assets/cibc.svg";
import { experiences } from "../data/experienceData";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  const [active, setActive] = useState(experiences);
  const [currentIdx, setCurrentIdx] = useState(null);

  const handleClick = (idx) => {
    setCurrentIdx(idx);
    setActive(experiences.slice(0, idx + 1));
    console.log(experiences.slice(0, idx + 1));
  };
  return (
    <>
      <h2 className="head-text">
        <span> EXPERIENCES </span>
      </h2>
      <h2 class="head-text-small">I've learnt from </h2>
      <VerticalTimeline className="experience__container">
        {experiences.map((exp, idx) => (
          <VerticalTimelineElement
            key={idx}
            date={exp.date}
            dateClassName="experience__date"
            iconClassName="experience__icon"
          >
            <div className="experience__header">
              <img
                className="experience__img"
                src={require(`../assets/${exp.img}.png`)}
              ></img>
              <div className="experience__header-text">
                <h4 className="bold-text"> {exp.name}</h4>
                <h5 className="vertical-timeline-element-subtitle">
                  {" "}
                  {exp.company}
                </h5>{" "}
              </div>
            </div>
            <div className="experience__descriptions">
              {" "}
              {exp.desc.map((desc) => (
                <div className="p-text"> {desc}</div>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
}

export default AppWrap(
  MotionWrap(Experience, 'app__experience'),
  'experience',
  'app__primarybg',
);
