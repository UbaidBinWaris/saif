'use client'
import "./card.css";
import Button from "../Other/button";
import { useScrollCardAnimation } from "./cardLogic";
import Link from "next/link";
import Image from "next/image";
import { PATHS } from "../../constants/assetPaths";

const Card = () => {
  
  useScrollCardAnimation();
  return (
    <div className="card-wrapper">
      <Image className="salaamPng" src={PATHS.ICONS.SALAAM} alt="Welcome handshake illustration by GIXI AI Solutions" width={200} height={280} />
      <h1 className="card-title ">
        <span className="processSpan">Process </span>is Everything
      </h1>
      <p className="card-description">
        Simples, Streamlined Process is what gets you the results
      </p>

      <div className="cards">
        <div className="card">
          <Image className="cardIco" src={PATHS.ICONS.MOUSE} alt="Contact process icon - GIXI AI Solutions" width={50} height={50} />
          <h2 className="tip">Let&apos;s Get In Touch</h2>
          <p className="second-text">
            Start by reaching out through our contact page. Fill out the form or
            book a call to discuss your project, goals, and ideas.
          </p>
          <hr className="hr" />
        </div>
        <div className="card">
          <Image className="cardIco" src={PATHS.ICONS.CHECKLIST} alt="Design checklist icon - GIXI AI Solutions" width={50} height={50} />
          <h2 className="tip">Present The Idea</h2>
          <p className="second-text">
            Tell us your unique vision, and we’ll create functional
            workflows that perfectly align with your goals
          </p>
          <hr className="hr" />
        </div>
        <div className="card">
          <Image className="cardIco" src={PATHS.ICONS.MAGIC} alt="Development magic icon - GIXI AI Solutions" width={50} height={50} />
          <h2 className="tip">Kickstart Development</h2>
          <p className="second-text">
            I expertly transform your workflows into a powerful, scalable
            solution, fully ready to launch.
          </p>
          <hr className="hr" />
        </div>
        <div className="card">
          <Image className="cardIco" src={PATHS.ICONS.JET} alt="Project delivery jet icon - GIXI AI Solutions" width={50} height={50} />
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
            <Image className="cardIco" src={PATHS.ICONS.EMOJI} alt="Support emoji icon - GIXI AI Solutions" width={50} height={50} />
            <h2 className="tip">I am with you in every step</h2>
          </div>
          <p className="last-card-st">
            alongside you at each step for seamless experience
          </p>
        </div>
        <div className="last-card-but">
          <Link href="/contact">
            <Button className="card-3b">Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
