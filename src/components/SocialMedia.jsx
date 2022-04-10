import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/maryxxu/"><BsLinkedin/></a>
    </div>
    <div>
      <a href="https://github.com/Maryxu18"><BsGithub /></a>
    </div> 
  </div>
);

export default SocialMedia;