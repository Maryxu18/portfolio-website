import React, {useState, useEffect} from 'react';
import {motion} from "framer-motion";
import "../styles/Projects.scss";
import AppWrap from '../components/AppWrap';
import MotionWrap from "../components/MotionWrap";
import  {projectsData} from "../data/projectsData";
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
function Projects() {
  const [works, setWorks] = useState(projectsData);
  const [filterWork, setFilterWork] = useState(works);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    console.log(item)
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tag===item));
      }
    }, 300);
  };

  return (
    <>
      <h2 className="head-text"> <span> PROJECTS </span> </h2>
      <h2 class="head-text-small">I've been working on</h2>
      <div className="app__work-filter">
        {['Software Development', 'Data Science','All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={require(`../assets/${work.img}`)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub/>
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
              <div className='app__work-tech app__flex'>
              {work.tech?.map((tech, idx)=>
                <div key={idx} className="app__work-tags-text">{tech}</div>
              )}</div>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tag}</p>
              </div>
              
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Projects, 'app__projects'),
  'projects',
  'app__primarybg',
);