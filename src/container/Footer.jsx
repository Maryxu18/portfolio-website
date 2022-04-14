import React, { useRef , useState} from "react";
import "../styles/Footer.scss";
import AppWrap from "../components/AppWrap";
import MotionWrap from "../components/MotionWrap";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

function Footer() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8rzhutp', 'template_exb7ybl', form.current, 'wOxROw8xP57NEZfS4')
      .then((result) => {
          setIsFormSubmitted(true);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <>
      <h2 className="head-text">
        <span> CONTACT </span>
      </h2>
      <h2 class="head-text-small">Send Me A Message!</h2>
      {!isFormSubmitted ? (
      <form ref={form} onSubmit={sendEmail} className="footer__form-container">
          <div className="app__flex">
          <input className="p-text" type="text" name='name' placeholder="Your Full Name" required></input>
          </div>
          <div className="app__flex">
          <input  className="p-text" type="email" name="email" placeholder="Your Email" required></input>
          </div>
          <div>
          <textarea  className="p-text" name='message' rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="p-text about__me-btn"> Send Message</button>
      </form>):
      ( <div>
        <h3 className="head-text">
          Thank you for getting in touch!
        </h3>
      </div>)}
    </>
  );
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
