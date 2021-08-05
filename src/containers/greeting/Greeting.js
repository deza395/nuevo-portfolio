import React from "react";
import "./Greeting.css";
import Button from "../../components/button/Button";
import Typewriter from "typewriter-effect";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import BannerImg from "./BannerImg";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>

              <h2
                className="greeting-nickname"
                style={{ color: theme.text }}
              ></h2>
              <h1 className="greeting-typewriter" style={{ color: theme.blue }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Web Developer")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Programadora Python")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Aprendiz UX/UI")
                      .pauseFor(200)
                      .deleteAll()
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>

              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ mi Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
              {/*  <div className="button-greeting-div">
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                /> 
                </div>*/}
            </div>
          </div>

          <div className="greeting-image-div">
            <BannerImg className="greeting-img-div-card" />
          </div>
        </div>
      </div>
    </Fade>
  );
}
