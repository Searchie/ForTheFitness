import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <React.Fragment>
      <div className="hero is-marginless is-fullheight" id="mainHero">
        <div className="container has-text-centered">
          <div className="hero-content has-text-white" id="mainHeroContent">
            <h1 className="title has-text-white is-bold" style={{fontSize: '48px'}}>
              A first of its kind training app
            </h1>
            <p className="subtitle has-text-white">
              Focused on friends, competition, and getting strong
            </p>
            <p>
              <i>
                Do it <span className="has-text-warning">For The Fitness</span>
              </i>
            </p>
            <FontAwesomeIcon 
              icon={faAngleDoubleDown}
              style={{ marginTop: "30px", fontSize: "60px" }}
              id="downArrowIcon"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
