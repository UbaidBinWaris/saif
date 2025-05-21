import "./card.css";
import { useEffect } from "react";
import salaam from "../../assets/salaam.svg";
import mouse from "../../assets/mouse.svg";
import checklist from "../../assets/checklist.svg";
import magic from "../../assets/magic.svg";
import jet from "../../assets/jet.svg";
import emoji from "../../assets/emoji.svg";
import Button from "../Other/button";
import { useScrollCardAnimation } from "./cardLogic";
import { Link } from "react-router-dom";

const Card = () => {
  
  useScrollCardAnimation();
  return (
    <div className="card-wrapper">
      <img className="salaamPng" src={salaam} alt="Welcome handshake illustration by GIXI AI Solutions" loading="lazy" />
      <h1 className="card-title ">
        <span className="processSpan">Process </span>is Everything
      </h1>
      <p className="card-description">
        Simples, Streamlined Process is what get's you the results
      </p>

      <div className="cards">
        <div className="card">
          <img className="cardIco" src={mouse} alt="Contact process icon - GIXI AI Solutions" loading="lazy" />
          <h2 className="tip">Let's Get In Touch</h2>
          <p className="second-text">
            Start by reaching out through our contact page. Fill out the form or
            book a call to discuss your project, goals, and ideas.
          </p>
          <hr className="hr" />
        </div>
        <div className="card">
          <img className="cardIco" src={checklist} alt="Design checklist icon - GIXI AI Solutions" loading="lazy" />
          <h2 className="tip">Grab Your Designs</h2>
          <p className="second-text">
            Tell me your unique vision, and I’ll create stunning, functional
            designs that perfectly align with your goals
          </p>
          <hr className="hr" />
        </div>
        <div className="card">
          <img className="cardIco" src={magic} alt="Development magic icon - GIXI AI Solutions" loading="lazy" />
          <h2 className="tip">Kickstart Development</h2>
          <p className="second-text">
            I expertly transform your designs into a powerful, scalable
            solution, fully ready to launch
          </p>
          <hr className="hr" />
        </div>
        <div className="card">
          <img className="cardIco" src={jet} alt="Project delivery jet icon - GIXI AI Solutions" loading="lazy" />
          <h2 className="tip">And Hand Over</h2>
          <p className="second-text">
            Receive a fully tested, polished, and high-quality product tailored
            to your needs with ongoing support.
          </p>
          <hr className="hr" />
        </div>
      </div>
      <div className="card1">
        <div>
          <div className="last-card"> 
            <img className="cardIco" src={emoji} alt="Support emoji icon - GIXI AI Solutions" loading="lazy" />
            <h2 className="tip">I am with you in every step</h2>
          </div>
          <p className="last-card-st">
            alongside you at each step for seamless experience
          </p>
        </div>
        <div className="last-card-but">
          <Link to="/contact">
            <Button className="card-3b">Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
