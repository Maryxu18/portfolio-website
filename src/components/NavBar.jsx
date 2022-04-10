import React,{useState} from "react";
import "../styles/NavBar.scss";
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';


export function NavBar() {
    const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo"> <a href={`#home`}>LOGO</a></div>
      <ul className="app__navbar-links">
        {["projects", "skills", "experience", "about", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}> 
            <a href={`#${item}`}>{item}</a>
            <div></div>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["projects", "skills", "experience", "about", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};