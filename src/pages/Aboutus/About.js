import React from "react";
import Footer from "../../components/Footer/Footer";
import "./about.css";
import Pricing from "./Pricing/Pricing";
import Program from "./program/Program";
import MeetOurTeam from "./Trainer/MeetOurTeam";
// import Trainer from "./Trainer/Trainer";

function About() {
  return (
    <>
      <div id="about" className="about-section">
        <div className="container1">
          <div className="row">
            <iframe
              className="left"
              title="video1"
              id="yt1"
              allowFullScreen={true}
              src="https://www.youtube.com/embed/gey73xiS8F4"
            ></iframe>

            <div className="about-content">
              <h1>About Us</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                nihil itaque debitis quasi odio nam, quod iusto excepturi atque
                beatae, veritatis illo magni et porro, incidunt unde fugiat
                laborum ea. Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Ducimus repudiandae eaque hic autem ad molestiae
                temporibus quis iusto, illum exercitationem sequi? Repudiandae,
                nihil explicabo aliquid laborum necessitatibus similique ducimus
                rerum!
              </p>
              <button
                onClick={() => alert("You clicked it")}
                className="header-btn"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="row">
            <iframe
              className="right"
              title="video2"
              id="yt1"
              allowFullScreen={true}
              src="https://www.youtube.com/embed/gey73xiS8F4"
            ></iframe>
            <div className="whyChooseUs">
              <h1>Why Choose Us?</h1>

              <ul>
                <li>Consultaion With Expert</li>
                <dd>
                  GYM provides a 24*7 Fitness facility to residents of
                  Martinsville and Henry County, as well as surrounding areas to
                  help people reach and maintain their goals.
                </dd>
                <li>Best workout facility</li>
                <dd>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero nihil itaque debitis quasi odio nam, quod iusto
                  excepturi atque beatae, veritatis illo magni et porro,
                  incidunt unde fugiat laborum ea.
                </dd>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="program">
        <Program />
      </div>
      <div id="meetourteam">
        <MeetOurTeam />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <Footer />
    </>
  );
}

export default About;
