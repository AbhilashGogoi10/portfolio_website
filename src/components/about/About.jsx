import React from "react";
import "./about.css";

import ww from '../../assets/ww.JPG'
import img from '../../assets/img.jpg'

import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      {/* <h5>Get To Know</h5> */}
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              {/* <FaAward className="about__icon" /> */}
              <h5>High School</h5>
              <small>Carmel School (2002-2014)</small>
            </article>

            <article className="about__card">
              {/* <FiUser className="about__icon" /> */}
              <h5>Higher Secondary</h5>
              <small>Assam Rifles Public School (2014-2016)</small>
            </article>

            <article className="about__card">
              {/* <VscFolderLibrary className="about__icon" /> */}
              <h5>Bachelor of Engineering</h5>
              <small>Jorhat Institute of Science and Technology (2017-2021)</small>
            </article>
          </div>

          <p>
           Hi there, I'm Abhilash, an Electronics and Telecommunications Engineer currently pursuing my dream of becoming a Software Engineer. I'm a full stack developer skilled in MERN Stack with a passion for creating efficient, scalable and secure web applications.
          </p>

          
        </div>
      </div>
    </section>
  );
};

export default About;
