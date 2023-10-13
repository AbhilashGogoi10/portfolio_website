import React from "react";
import "./portfolio.css";
import yt from "../../assets/new/yt.jpg";
import movi from "../../assets/new/movi.jpg";
import todo from "../../assets/new/todo.jpg";
import ecom from "../../assets/new/ecom.jpg";
import sm from "../../assets/new/sm.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      {/* <h5>My Recent Work</h5> */}
      <h2>My Recent Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={movi} alt="" />
          </div>
          <h3>Moviflix</h3>
          <p>
            A movie info app where you can find trending and latest movies and
            tv shows.
          </p>
          <p className="skill_heading">Skills used:</p>
          <p className="skills">REACTJS, REDUX TOOLKIT, SCSS, TMDB API</p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/AbhilashGogoi10/Moviflix"
              className="btn btn-primary"
            >
              Github
            </a>
            <a
              href="https://adorable-palmier-cf5384.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Project
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={todo} alt="" />
          </div>
          <h3>Todoist</h3>
          <p>
            Todoist is a productivity app where we can set and complete tasks
            for the day.
          </p>
          <p className="skill_heading">Skills used:</p>
          <p className="skills">REACTJS,CSS,HOOKS</p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/AbhilashGogoi10/Todoist"
              className="btn btn-primary"
            >
              Github
            </a>
            <a
              href="https://dazzling-torte-83ffd2.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Project
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={yt} alt="" />
          </div>
          <h3>Youtube Lite</h3>
          <p>
            Youtube Lite is video streaming app where we can search and stream
            videos using RAPID API.
          </p>
          <p className="skill_heading">Skills used:</p>
          <p className="skills">
            REACTJS, CONTEXT API, TAILWIND CSS, RAPID API
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/AbhilashGogoi10/youtube_lite"
              className="btn btn-primary"
            >
              Github
            </a>
            <a
              href="https://melodious-figolla-1959c0.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Project
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={sm} alt="" />
          </div>
          <h3>UConnect</h3>
          <p>
            UConnect is a Full Stack social media app to upload and share
            pictures.We can register and login and can also add friends.
          </p>
          <p className="skill_heading">Skills used:</p>
          <p className="skills">
            REACTJS, MUI, NODEJS, REDUX TOOLKIT, EXPRESS, MONGODB
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/AbhilashGogoi10/socialMedia"
              className="btn btn-primary"
            >
              Github
            </a>
            <a
              href="https://erin-prawn-tam.cyclic.cloud/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Project
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ecom} alt="" />
          </div>
          <h3>E-SHOPPE</h3>
          <p>
            
            E-SHOPPE is a Full Stack ecommerce app where we can login as user or
            admin.We can buy products through a payment gateway and admin can
            create products and update order status.
          </p>
          <p className="skill_heading">Skills used:</p>
          <p className="skills">
            REACTJS, BOOTSTRAP, NODEJS, CONTEXT API, EXPRESS, MONGODB
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/AbhilashGogoi10/E-Shoppe-ecommerce_app"
              className="btn btn-primary"
            >
              Github
            </a>
            <a
              href="https://prickly-outerwear-bee.cyclic.cloud"
              className="btn btn-primary"
              target="_blank"
            >
              Live Project
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
